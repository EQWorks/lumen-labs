import React, { useState, useEffect, useRef , useCallback } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Menu } from '@headlessui/react'
import DropdownSelect from './dropdown-select'
import Button from './button'
import Tooltip from './tooltip'
import { InputBase } from '../base-components'
import { ArrowLeft, ArrowRight, ChevronDown, Delete, Calendar, Info } from '../icons'

import { useComponentIsActive } from '../hooks'

import { makeStyles } from '../utils/make-styles'
import { ConditionalWrapper } from '../utils/conditional-wrapper'
import { customScroll } from '../utils/custom-scroll'
import {
  getWeekdayShort,
  getDaysInMonth,
  getYear,
  getMonth,
  getCurrentDay,
  getFirstDayOfMonth,
  getEndDayOfMonth,
  getPrevDaysInMonth,
  getDates,
  getISODateFormat,
  getDayFormat,
} from '../utils/helpers/calendar'


const customClasses = makeStyles({
  datePickerRoot: {
    '& .date-picker-content-container': {
      '& .navbar-container': {
        '& .navbar-content-container': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',

          '& .navbar-content': {
            display: 'flex',
            justifyContent: 'center',
            letterSpacing: '1px',
            fontSize: '0.875rem',
            lineHeight: 1.14,

            '& span': {
              display: 'flex',
              alignItems: 'center',
            },
          },

          '& .multi': {
            width: '100%',
            margin: '0 2.594rem',
            justifyContent: 'space-between',
          },
        },

        '& .month-dropdown, .year-dropdown': {
          margin: '0 .156rem',
          cursor: 'pointer',

          '& .dropdown-button-container': {
            letterSpacing: '1px',
            fontSize: '0.813rem',
            lineHeight: 1.23,
            border: 0,

            '& .button-content-container': {
              padding: '0.125rem 0.375rem',

              '& .dropdown-content': {
                overflow: 'hidden',

                '& span': {
                  margin: 0,
                },
              },

              '& .end-icon': {
                marginLeft: '0.313rem',
              },
            },
          },
        },

        '& .first-calendar-dropdown, .end-calendar-dropdown': {
          display: 'flex',
        },

        '& .navbar-button': {
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',

          '&:focus': {
            outline: 0,
          },
        },
      },

      '& .calendar-container': {
        '& .calendar-table': {
          '& .calendar-table-head': {
            '& tr': {
              display: 'flex',
              marginBottom: '0.313rem',

              '& th': {
                width: '1.563rem',
                height: '1.563rem',
                margin: '0 0.313rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
              },
            },
          },

          '& .calendar-table-body': {
            '& tr': {
              display: 'flex',
              marginBottom: '0.313rem',

              '& .calendar-day, td': {
                '& button': {
                  width: '1.563rem',
                  height: '1.563rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  outline: 0,

                  '&:active': {
                    fontWeight: 'bold',
                  },
                },
              },
            },
          },
        },
      },
    },

    '& .button-container': {
      '& .action-buttons': {
        display: 'flex',
        justifyContent: 'space-between',

        '& .cancel-button': {
          paddingLeft: '1.875rem',
          paddingRight: '1.875rem',
        },

        '& .confirm-button': {
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
        },
      },
    },
  },

  inputRangeContainer: {
    '& .input-range-root': {
      borderWidth: 0,
    },
  },
})

const inputClasses = Object.freeze({
  root: 'input-container w-267px h-7 py-1.5 px-2.5 text-xs text-secondary-800 tracking-md leading-1.33 border-secondary-400 rounded-sm',
  input: 'focus:outline-none',
  startIcon: 'mt-px mr-2 fill-current stroke-current',
  endIcon: 'mt-px ml-4 fill-current stroke-current',
})

const inputRangeClasses = Object.freeze({
  container: 'input-range-container w-267px px-2.5 py-px flex justify-between border border-secondary-400 rounded-sm',
  root: 'input-range-root w-16 mx-1 text-xs text-secondary-800 tracking-md leading-1.33',
  input: 'focus:outline-none focus:underline',
  startIcon: 'mr-1 fill-current stroke-current flex items-center',
  endIcon: 'ml-4 fill-current stroke-current flex items-center',
})

const dropdownClasses = Object.freeze({
  button: 'dropdown-button-container bg-interactive-50',
  content: 'button-content-container font-pt font-bold',
  menu: `dropdown-menu-container w-full h-auto max-h-185px z-50 ${customScroll()}`,
})

const DatePicker = ({
  classes = {},
  tooltip = {
    classes: {},
    title: '',
    description: '',
  },
  navbarType = 'both',
  variant = 'range',
  onSelectDay = () => {},
  onConfirm = () => {},
  onCancel = () => {},
  onDeleteInput = () => {},
  defaultDate = [new Date()],
  minDate = null,
  maxDate = null,
  label = {
    title: '',
    classes: {
      container: '',
      title: '',
      icon: '',
    },
    icon: null,
  },
  customTrigger = null,
  dateFormat = 'MM/DD/YYYY',
  rangeOfYears = 10,
  actionButtons = false,
  hideInput = false,
  defaultSelected = false,
  deleteInputButton = true,
  required = false,
}) => {
  const datePickerClasses = Object.freeze({
    root: `date-picker-root relative inline-flex ${classes.root ? classes.root : ''}`,
    rootContainer: `date-picker-root-container relative pt-15px bg-secondary-50 shadow-light-20 border border-neutral-100 rounded-sm font-pt z-10
      ${classes.rootContainer ? classes.rootContainer : ''} ${hideInput ? '' : 'mt-5px'}`,
    rootButtonContainer: `root-button-container ${classes.rootButtonContainer ? classes.rootButtonContainer : ''}`,
    datePickerMenu: 'date-picker-menu absolute',
    datePickerContainer: `date-picker-content-container flex flex-col border-b border-neutral-100 ${classes.datePickerContainer ? classes.datePickerContainer : ''}`,
    navbarContainer: `navbar-container px-15px flex ${navbarType === 'both' ? 'justify-between' : ''} ${classes.navbarContainer ? classes.navbarContainer : ''}`,
    calendarMainContainer: `calendar-main-container ${variant === 'multi' ? 'flex' : ''} ${classes.calendarMainContainer ? classes.calendarMainContainer : ''}`,
    calendarContainer: `calendar-container py-5px px-2.5 ${classes.calendarContainer ? classes.calendarContainer : ''}`,
    calendarTable: `calendar-table text-xs leading-1.33 tracking-lg ${classes.calendarTable ? classes.calendarTable : ''}`,
    calendarDayContainer: `calendar-day-container px-5px py-0 ${classes.calendarDayContainer ? classes.calendarDayContainer : ''}`,
    calendarDay: `calendar-day rounded-sm ${classes.calendarDay ? classes.calendarDay : ''}`,
    disabledDay: `calendar-day-disabled text-secondary-400 px-5px py-0 cursor-not-allowed ${classes.disabledDay ? classes.disabledDay : ''}`,
    buttonContainer: `button-container px-15px py-2.5 flex justify-between text-xs leading-1.33 tracking-lg
      ${classes.buttonContainer ? classes.buttonContainer : ''}`,
  })

  const labelClasses = Object.freeze({
    container: `label-container mb-1.5 flex flex-row items-center ${label.classes && label.classes.container ? label.classes.container : ''}`,
    title: `label-title mr-1 font-pt text-xs text-secondary-600 tracking-md leading-1.33 ${label.classes && label.classes.title ? label.classes.title : ''}`,
    icon: `label-icon text-secondary-600 cursor-pointer ${label.classes && label.classes.icon ? label.classes.icon : ''}`,
  })

  const [calendarState, setCalendarState] = useState(
    {
      dateObject: moment(defaultDate[0]),
      dateObjectMulti: defaultDate[1] ? moment(defaultDate[1]) : moment(defaultDate[0]).add(1, 'month'),
      selectedStartDay: defaultSelected ? getISODateFormat(moment(defaultDate[0]), moment(defaultDate[0]).format('DD')) : null,
      selectedEndDay: defaultSelected && defaultDate[1] ? getISODateFormat(moment(defaultDate[1]), moment(defaultDate[1]).format('DD')) : null,
    },
  )
  const [dayCounter, setDayCounter] = useState(0)

  const [inputVal, setInputVal] = useState(defaultSelected ? moment(defaultDate[0]).format('MM/DD/YYYY') : '')
  const [rangeVal, setRangeVal] = useState({
    start: defaultSelected ? moment(defaultDate[0]).format('MM/DD/YYYY') : '',
    end: defaultSelected && defaultDate[1] ? moment(defaultDate[1]).format('MM/DD/YYYY') : '',
    selected: '',
  })
  const [focus, setFocus] = useState(false)

  const [open, setOpen] = useState(false)
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()

  const inputSingleRef = useRef(null)
  const inputStartRef = useRef(null)
  const inputEndRef = useRef(null)

  const formatStartDay = calendarState.selectedStartDay && moment(calendarState.selectedStartDay).format('DD')
  const formatEndDay = calendarState.selectedEndDay && moment(calendarState.selectedEndDay).format('DD')

  const formatMinDate = minDate && moment(minDate).format('YYYY-MM-DD')
  const formatMaxDate = maxDate && moment(maxDate).format('YYYY-MM-DD')

  useEffect(() => {
    if (calendarState.selectedStartDay && calendarState.selectedEndDay) {
      setDayCounter(Math.abs(moment(calendarState.selectedStartDay, 'YYYY-MM-DD')
        .diff(moment(calendarState.selectedEndDay, 'YYYY-MM-DD'), 'days')-1))
    } else {
      setDayCounter(0)
    }
  }, [calendarState.selectedStartDay, calendarState.selectedEndDay])

  useEffect(() => {
    if (!customTrigger) {
      onClickDatePicker()
    }
  }, [focus, customTrigger, onClickDatePicker])

  const enforceValue = () => {
    if (variant === 'single') {
      setInputVal(formatStartDay ? moment(calendarState.selectedStartDay).format('MM/DD/YYYY') : '')
    } else {
      setRangeVal({
        start: formatStartDay ? moment(calendarState.selectedStartDay).format('MM/DD/YYYY') : '',
        end: formatEndDay ? moment(calendarState.selectedEndDay).format('MM/DD/YYYY') : '',
        selected: '',
      })
    }
  }

  const cleanInput = () => {
    if (variant === 'single') {
      setInputVal('')
    } else {
      setRangeVal({
        start: '',
        end: '',
        selected: '',
      })
    }
  }

  const resetFocus = () => {
    if (variant === 'single') {
      inputSingleRef.current.childNodes[2].focus()
    } else {
      if (rangeVal.selected === 'end') {
        inputEndRef.current.childNodes[1].focus()
      } else {
        inputStartRef.current.childNodes[1].focus()
      }
    }
  }

  if (!componentIsActive && open) {
    enforceValue()
    setOpen(!open)
    setFocus(false)
  }

  const onClickDatePicker = useCallback(() => {
    if (!customTrigger) {
      setComponentIsActive(focus)
      setOpen(focus)
    } else {
      setComponentIsActive((state) => !state)
      setOpen(!open)
    }
  }, [customTrigger, open, focus, setComponentIsActive])

  const onSelectMonthDropdown = (e, val, multi) => {
    e.stopPropagation()
    resetFocus()
    const monthNo = moment().month(val).format('M')

    if (multi) {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: moment(calendarState.dateObjectMulti).set('month', monthNo - 1),
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: moment(calendarState.dateObject).set('month', monthNo - 1),
      })
    }
  }

  const renderMonthDropdown = (multi) => {
    const months = []

    moment.monthsShort().forEach((data, index) => {
      const currDay = multi ? getDayFormat(calendarState.dateObject, 'YYYY-MM') : getDayFormat(calendarState.dateObjectMulti, 'YYYY-MM')
      if (variant === 'multi') {
        if (multi) {
          if (moment(`${getYear(calendarState.dateObjectMulti)}-${moment(index + 1, 'MM').format('MM')}`).diff(currDay) > 0) {
            months.push(data)
          }
        } else {
          if (moment(`${getYear(calendarState.dateObject)}-${moment(index + 1, 'MM').format('MM')}`).diff(currDay) < 0) {
            months.push(data)
          }
        }
      } else {
        months.push(data)
      }
    })

    return (
      <DropdownSelect
        classes={dropdownClasses}
        data={months}
        value={getMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}
        onSelect={(e, val) => { onSelectMonthDropdown(e, val, multi) }}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={getMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}
        allowClear={false}
        simple
      />
    )
  }

  const onSelectYear = (e, val, multi) => {
    e.stopPropagation()
    resetFocus()

    const { dateObject, dateObjectMulti } = calendarState
    const _dateObjectMulti = moment(dateObjectMulti).set('year', val || getYear(dateObjectMulti))
    const _dateObject = moment(dateObject).set('year', val || getYear(dateObject))

    if (multi) {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: dateObjectMulti.format('MM') < dateObject.format('MM') ? _dateObject.add(1, 'month') : _dateObjectMulti,
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: variant === 'multi' && (dateObject.format('MM') > dateObjectMulti.format('MM')) ? _dateObjectMulti.subtract(1, 'month') : _dateObject,
      })
    }
  }

  const renderYearDropdown = (multi) => {
    const nextTen = moment()
      .set('year', getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
      .add(rangeOfYears, 'year')
      .format('Y')
    const prevTen = moment()
      .set('year', getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
      .subtract(rangeOfYears, 'year')
      .format('Y')

    const nextTenYear = getDates(getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject), nextTen).map(data => (data))
    const prevTenYear = getDates(prevTen, getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject)).map(data => (data))
    prevTenYear.pop()
    let selectableYears = []

    if (variant === 'multi') {
      if (multi) {
        prevTenYear.forEach(data => {
          if (Number(data) >= Number(getYear(calendarState.dateObject))) {
            selectableYears.push(data)
          }
        })
        selectableYears = [...selectableYears, ...nextTenYear]
      } else {
        nextTenYear.pop()
        nextTenYear.forEach(data => {
          if (Number(data) <= Number(getYear(calendarState.dateObjectMulti))) {
            selectableYears.push(data)
          }
        })
        selectableYears = [...selectableYears.reverse(), ...prevTenYear.reverse()]
      }
    } else {
      selectableYears = [...prevTenYear, ...nextTenYear]
    }

    return (
      <DropdownSelect
        classes={dropdownClasses}
        data={selectableYears}
        value={getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}
        onSelect={(e, val) => { onSelectYear(e, val, multi) }}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}
        allowClear={false}
        simple
      />
    )
  }

  const onPrev = () => {
    resetFocus()

    setCalendarState({
      ...calendarState,
      dateObject: calendarState.dateObject.subtract(1, 'month'),
    })
  }

  const onNext = () => {
    resetFocus()

    if (variant === 'multi') {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: calendarState.dateObjectMulti.add(1, 'month'),
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: calendarState.dateObject.add(1, 'month'),
      })
    }
  }

  const onDayClickRange = (e, d, multi) => {
    e.stopPropagation()

    const { selectedStartDay } = calendarState
    const parseDay = getISODateFormat(multi ? calendarState.dateObjectMulti : calendarState.dateObject, d)
    let _start = getISODateFormat(multi ? calendarState.dateObjectMulti : calendarState.dateObject, moment(rangeVal.start, 'MM/DD/YYYY').format('DD'))
    let _end = getISODateFormat(multi ? calendarState.dateObjectMulti : calendarState.dateObject, moment(rangeVal.end, 'MM/DD/YYYY').format('DD'))

    if (!customTrigger && !hideInput) {
      if (rangeVal.selected === 'start') {
        setCalendarState({
          ...calendarState,
          selectedStartDay: parseDay,
        })

        if (!formatEndDay) {
          inputEndRef.current.childNodes[1].focus()
        } else {
          inputStartRef.current.childNodes[1].focus()
        }

        setRangeVal({
          ...rangeVal,
          start: moment(parseDay).format('MM/DD/YYYY'),
          selected: formatEndDay ? rangeVal.selected : 'end',
        })

        _start = parseDay
      } else if (rangeVal.selected === 'end') {
        setCalendarState({
          ...calendarState,
          selectedEndDay: parseDay,
        })

        if (!formatStartDay) {
          inputStartRef.current.childNodes[1].focus()
        } else {
          inputEndRef.current.childNodes[1].focus()
        }

        setRangeVal({
          ...rangeVal,
          end: moment(parseDay).format('MM/DD/YYYY'),
          selected: formatStartDay ? rangeVal.selected : 'start',
        })

        _end = parseDay
      }
    } else {
      if (formatStartDay > d) {
        setCalendarState({
          ...calendarState,
          selectedStartDay: parseDay,
          selectedEndDay: selectedStartDay,
        })

        setRangeVal({
          start: moment(parseDay).format('MM/DD/YYYY'),
          end: moment(selectedStartDay).format('MM/DD/YYYY'),
        })

        _start = parseDay
        _end = moment(selectedStartDay).format('MM/DD/YYYY')
      }
      else if (formatStartDay == d || formatEndDay == d) {
        setCalendarState({
          ...calendarState,
          selectedStartDay: null,
          selectedEndDay:  null,
        })

        setRangeVal({
          start: '',
          end: '',
        })

        _start = '',
        _end = ''
      }
      else if (selectedStartDay) {
        setCalendarState({
          ...calendarState,
          selectedEndDay: parseDay,
        })

        setRangeVal({
          ...rangeVal,
          end: moment(parseDay).format('MM/DD/YYYY'),
        })

        _end = parseDay
      }
      else {
        setCalendarState({
          ...calendarState,
          selectedStartDay: parseDay,
        })

        setRangeVal({
          ...rangeVal,
          start: moment(parseDay).format('MM/DD/YYYY'),
        })

        _start = parseDay
      }
    }

    onSelectDay(e, {
      start: getDayFormat(_start, dateFormat),
      end: getDayFormat(_end, dateFormat),
      selected: getDayFormat(parseDay, dateFormat),
    })
  }

  const onDayClickSingle = (e, d, multi) => {
    e.stopPropagation()
    !hideInput && !customTrigger && resetFocus()
    const parseDay = getISODateFormat(multi ? calendarState.dateObjectMulti : calendarState.dateObject, d)

    if (multi) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: parseDay,
      })

      setRangeVal({
        ...rangeVal,
        end: moment(parseDay).format('MM/DD/YYYY'),
      })

      if (formatEndDay == d) {
        setCalendarState({
          ...calendarState,
          selectedEndDay: null,
        })

        setRangeVal({
          ...rangeVal,
          end: '',
        })
      }
    } else {
      setCalendarState({
        ...calendarState,
        selectedStartDay: parseDay,
      })

      if (variant === 'single') {
        setInputVal(moment(parseDay).format('MM/DD/YYYY'))
      } else {
        setRangeVal({
          ...rangeVal,
          start: moment(parseDay).format('MM/DD/YYYY'),
        })
      }

      if (formatStartDay == d) {
        setCalendarState({
          ...calendarState,
          selectedStartDay: null,
        })

        if (variant === 'single') {
          setInputVal('')
        } else {
          setRangeVal({
            ...rangeVal,
            start: '',
          })
        }
      }
    }

    onSelectDay(e, getDayFormat(parseDay, dateFormat))
  }

  const renderNavbar = () => {
    let renderType = ''
    if (variant !== 'multi') {
      switch(navbarType) {
      case 'both':
        renderType = (
          <>
            <div className="month-dropdown">
              {renderMonthDropdown()}
            </div>
            <div className="year-dropdown">
              {renderYearDropdown()}
            </div>
          </>
        )
        break
      case 'year':
        renderType = (
          <>
            <span>
              {getMonth(calendarState.dateObject)}
            </span>
          </>
        )
        break
      case 'none':
        renderType = (
          <>
            <span>
              {`${moment(calendarState.dateObject).format('MMMM')}, ${getYear(calendarState.dateObject)}`}
            </span>
          </>
        )
        break
      default:
        break
      }
    } else {
      renderType = (
        <>
          <div className="first-calendar-dropdown">
            <div className="month-dropdown">
              {renderMonthDropdown()}
            </div>
            <div className="year-dropdown">
              {renderYearDropdown()}
            </div>
          </div>
          <div className="end-calendar-dropdown">
            <div className="month-dropdown">
              {renderMonthDropdown(true)}
            </div>
            <div className="year-dropdown">
              {renderYearDropdown(true)}
            </div>
          </div>
        </>
      )
    }

    return (
      <div className={datePickerClasses.navbarContainer}>
        <div className={`navbar-content-container ${navbarType === 'year' && 'pr-15px'}`}>
          <button className="navbar-button prev-button bg-secondary-100 rounded-sm shadow-light-10" onClick={onPrev}>
            <ArrowLeft size='md' />
          </button>
          <div className={`navbar-content ${variant === 'multi' && variant}`}>
            {renderType}
          </div>
          <button className="navbar-button next-button bg-secondary-100 rounded-sm shadow-light-10" onClick={onNext}>
            <ArrowRight size='md' />
          </button>
        </div>
        {navbarType === 'year' && (
          <div className="year-dropdown">
            {renderYearDropdown()}
          </div>
        )}
      </div>
    )
  }

  const renderCalendar = (multi) => {
    const { dateObject, dateObjectMulti, selectedStartDay, selectedEndDay } = calendarState

    let prevMonthDays = []
    let startDays = getPrevDaysInMonth(multi ? dateObjectMulti : dateObject) - (getFirstDayOfMonth(multi ? dateObjectMulti : dateObject) - 1)
    for (let i = 0; i < getFirstDayOfMonth(multi ? dateObjectMulti : dateObject); i++) {
      prevMonthDays.push(
        <td key={`${startDays}-startDays`} className={datePickerClasses.disabledDay}>
          <button disabled>
            {startDays}
          </button>
        </td>,
      )
      startDays++
    }

    let nextMonthDays = []
    let endDays = 1
    for (let i = getEndDayOfMonth(multi ? dateObjectMulti : dateObject); i < 6; i++) {
      nextMonthDays.push(
        <td key={`${endDays}-endDays`} className={datePickerClasses.disabledDay}>
          <button disabled>
            {endDays}
          </button>
        </td>,
      )
      endDays++
    }

    let currMonthDays = []
    for (let d = 1; d <= getDaysInMonth(multi ? dateObjectMulti : dateObject); d++) {
      const parseDay = moment(multi ? getISODateFormat(dateObjectMulti, d) : getISODateFormat(dateObject, d)).format('YYYY-MM-DD')
      let selectedClass = 'hover:text-interactive-600 hover:border hover:border-interactive-500'
      let selectedRangeClass = 'cursor-pointer'
      let disableDay = false

      if (moment(selectedStartDay).format('YYYY-MM-DD') === parseDay ||
        moment(selectedEndDay).format('YYYY-MM-DD') === parseDay
      ) {
        selectedClass = 'bg-interactive-500 text-interactive-50 rounded-sm font-bold'
      }
      else if (d == getCurrentDay(multi ? dateObjectMulti : dateObject)) {
        if (moment().format('YYYY-MM') === moment(multi ? dateObjectMulti : dateObject).format('YYYY-MM')) {
          selectedClass = 'border border-secondary-400'
        }
      }

      if (formatStartDay && formatEndDay) {
        const parseStartDay = moment(calendarState.selectedStartDay).format('YYYY-MM-DD')
        const parseEndDay = moment(calendarState.selectedEndDay).format('YYYY-MM-DD')

        if (moment(parseDay).diff(parseEndDay) <= 0 && moment(parseDay).diff(parseStartDay) >= 0) {
          selectedRangeClass = `bg-primary-50 text-interactive-500 cursor-pointer
            ${parseStartDay === parseDay ? 'pl-0 ml-5px rounded-l-sm' : ''}
            ${parseEndDay === parseDay ? 'pr-0 mr-5px rounded-r-sm': ''}
          `
        }
      }

      if (formatMinDate && moment(parseDay).diff(formatMinDate) < 0) {
        selectedClass = 'cursor-not-allowed'
        selectedRangeClass = 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
        disableDay = true
      }

      if (formatMaxDate && moment(parseDay).diff(formatMaxDate) > 0) {
        selectedClass = 'cursor-not-allowed'
        selectedRangeClass = 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
        disableDay = true
      }

      if (formatStartDay && rangeVal.selected === 'end') {
        const parseStartDay = moment(calendarState.selectedStartDay).format('YYYY-MM-DD')

        if (moment(parseDay).diff(parseStartDay) < 0) {
          selectedClass = 'cursor-not-allowed'
          selectedRangeClass = 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
          disableDay = true
        }
      }

      if (formatEndDay && rangeVal.selected === 'start') {
        const parseEndDay = moment(calendarState.selectedEndDay).format('YYYY-MM-DD')

        if (moment(parseDay).diff(parseEndDay) > 0) {
          selectedClass = 'cursor-not-allowed'
          selectedRangeClass = 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
          disableDay = true
        }
      }


      currMonthDays.push(
        <td
          key={d}
          className={`${selectedRangeClass && selectedRangeClass} ${datePickerClasses.calendarDayContainer}`}>
          <button
            className={`${selectedClass} ${datePickerClasses.calendarDay}`}
            onClick={e => {
              variant === 'single' ? onDayClickSingle(e, d) : onDayClickRange(e, d, multi)
            }}
            disabled={disableDay}
          >
            {d}
          </button>
        </td>,
      )
    }

    var totalSlots = [...prevMonthDays, ...currMonthDays, ...nextMonthDays]
    let rows = []
    let cells = []

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row)
      } else {
        if (cells.length) {
          rows.push(cells)
        }
        cells = []
        cells.push(row)
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells)
      }
    })

    const weekdayShortName = getWeekdayShort().map(day => {
      return <th key={day}>{day}</th>
    })

    const daysInMonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>
    })

    return (
      <div className={`${datePickerClasses.calendarContainer} ${variant === 'multi' && multi ? 'end-day-calendar' : 'first-day-calendar'}`}>
        <table className={datePickerClasses.calendarTable}>
          <thead className="calendar-table-head text-secondary-600">
            <tr>{weekdayShortName}</tr>
          </thead>
          <tbody className="calendar-table-body text-secondary-900">
            {daysInMonth}
          </tbody>
        </table>
      </div>
    )
  }

  const isDateOnRange = (date) => {
    if (date.isValid()) {
      if (formatMinDate && formatMaxDate) {
        return (moment(formatMinDate, 'YYYY-MM-DD').diff(date) <= 0 && moment(formatMaxDate, 'YYYY-MM-DD').diff(date) >= 0)
      } else if (formatMinDate && !formatMaxDate) {
        return moment(formatMinDate, 'YYYY-MM-DD').diff(date) <= 0
      } else if (formatMaxDate && !formatMinDate) {
        return moment(formatMaxDate, 'YYYY-MM-DD').diff(date) >= 0
      }
    }

    return true
  }

  const inputOnChangeSingle = (e) => {
    const val = e.target.value
    const date = moment(val, 'MM/DD/YYYY', true)
    let isOnRange = isDateOnRange(date)

    if (variant === 'single') {
      if (date.isValid() && isOnRange) {
        setCalendarState({
          ...calendarState,
          dateObject: moment(date),
          selectedStartDay: getISODateFormat(moment(date), moment(date).format('DD')),
        })
      }

      setInputVal(val)
    }
  }

  const inputOnChangeRange = (e, range = false) => {
    const val = e.target.value
    const date = moment(val, 'MM/DD/YYYY', true)
    let isOnRange = isDateOnRange(date)

    if (!range) {
      if (date.isValid() && isOnRange) {
        if (formatEndDay) {
          if (moment(date, 'MM/DD/YYYY').diff(calendarState.selectedEndDay) <= 0) {
            if (variant === 'multi' &&
              moment(date, 'MM/DD/YYYY').format('YYYY-MM') !== calendarState.dateObjectMulti.format('YYYY-MM')
            ) {
              setCalendarState({
                ...calendarState,
                dateObject: moment(date),
                selectedStartDay: getISODateFormat(moment(date), moment(date).format('DD')),
              })
            } else {
              setCalendarState({
                ...calendarState,
                dateObject: variant === 'multi' ? calendarState.dateObject : moment(date),
                selectedStartDay: getISODateFormat(moment(date), moment(date).format('DD')),
              })
            }
          }
        } else {
          setCalendarState({
            ...calendarState,
            dateObject: moment(date),
            dateObjectMulti: variant === 'multi' ? moment(date).add(1, 'month') : null,
            selectedStartDay: getISODateFormat(moment(date), moment(date).format('DD')),
          })
        }
      }

      setRangeVal({ ...rangeVal, start: val })
    } else {
      if (date.isValid() && isOnRange) {
        if (formatStartDay) {
          if (moment(date, 'MM/DD/YYYY').diff(calendarState.selectedStartDay) >= 0) {
            if (variant === 'multi' &&
              moment(date, 'MM/DD/YYYY').format('YYYY-MM') !== calendarState.dateObject.format('YYYY-MM')
            ) {
              setCalendarState({
                ...calendarState,
                dateObjectMulti: moment(date),
                selectedEndDay: getISODateFormat(moment(date), moment(date).format('DD')),
              })
            } else {
              setCalendarState({
                ...calendarState,
                dateObject: variant === 'multi' ? calendarState.dateObject : moment(date),
                selectedEndDay: getISODateFormat(moment(date), moment(date).format('DD')),
              })
            }
          }
        } else {
          setCalendarState({
            ...calendarState,
            dateObject: variant === 'multi' ? calendarState.dateObject : moment(date),
            dateObjectMulti: variant === 'multi' ? moment(date) : null,
            selectedEndDay: getISODateFormat(moment(date), moment(date).format('DD')),
          })
        }
      }
      setRangeVal({ ...rangeVal, end: val })
    }
  }

  const inputOnDelete = (e) => {
    e.stopPropagation()
    cleanInput()

    setCalendarState({
      ...calendarState,
      selectedStartDay: null,
      selectedEndDay:  null,
    })

    if (variant === 'single') {
      inputSingleRef.current.childNodes[2].blur()
    }

    setFocus(false)

    onDeleteInput(e)
  }

  const renderInput = () => (
    variant === 'single' ?
      <InputBase
        ref={inputSingleRef}
        classes={inputClasses}
        value={inputVal}
        onChange={inputOnChangeSingle}
        onDelete={inputOnDelete}
        onFocus={(e) => {
          e.stopPropagation()
          setFocus(true)
        }}
        startIcon={
          <Calendar
            className='text-secondary-600'
            size='md'
            onClick={(e) => {
              e.stopPropagation()
              setFocus(true)
            }}
          />
        }
        placeholder='MM/DD/YYYY'
        maxLength='10'
        deleteButton={deleteInputButton}
      />
      :
      <div
        className={`${customClasses.inputRangeContainer} ${inputRangeClasses.container}`}
        onClick={(e) => {
          e.stopPropagation()
          setFocus(true)
          inputStartRef.current.childNodes[1].focus()
          setRangeVal({ ...rangeVal, selected: 'start' })
        }}
      >
        <div className="input-range-content flex">
          <div className={inputRangeClasses.startIcon}>
            <Calendar className='text-secondary-600' size='md'/>
          </div>
          <InputBase
            ref={inputStartRef}
            classes={inputRangeClasses}
            onChange={inputOnChangeRange}
            onFocus={(e) => {
              e.stopPropagation()
              setFocus(true)
              setRangeVal({ ...rangeVal, selected: 'start' })
            }}
            onClick={(e) => {
              e.stopPropagation()
              setRangeVal({ ...rangeVal, selected: 'start' })
            }}
            value={rangeVal.start}
            maxLength='10'
            placeholder='Start date'
            deleteButton={false}
          />
          <span className='text-secondary-400 mr-5px'>——</span>
          <InputBase
            ref={inputEndRef}
            classes={inputRangeClasses}
            onChange={(val) => inputOnChangeRange(val, true)}
            onFocus={(e) => {
              e.stopPropagation()
              setFocus(true)
              setRangeVal({ ...rangeVal, selected: 'end' })
            }}
            onClick={(e) => {
              e.stopPropagation()
              setRangeVal({ ...rangeVal, selected: 'end' })
            }}
            value={rangeVal.end}
            maxLength='10'
            placeholder='End date'
            deleteButton={false}
          />
        </div>
        {deleteInputButton && (rangeVal.start || rangeVal.end) &&
          <div
            className={inputRangeClasses.endIcon}
            onClick={inputOnDelete}
          >
            <Delete className='fill-current text-secondary-600 cursor-pointer' size='md'/>
          </div>
        }
      </div>
  )

  const handleOnConfirm = (e) => {
    e.stopPropagation()
    enforceValue()
    onClickDatePicker()

    onConfirm(e, variant === 'single' ? getDayFormat(calendarState.selectedStartDay, dateFormat) :
      { startDay: getDayFormat(calendarState.selectedStartDay, dateFormat), endDay: getDayFormat(calendarState.selectedEndDay, dateFormat) },
    )
  }

  const handleOnCancel = (e) => {
    e.stopPropagation()
    onClickDatePicker()
    onCancel(e)
  }

  const renderPicker = () => (
    <div className={datePickerClasses.rootContainer}>
      <div className={datePickerClasses.datePickerContainer}>
        {renderNavbar()}
        <div className={datePickerClasses.calendarMainContainer}>
          {renderCalendar()}
          {variant === 'multi' && (renderCalendar(true))}
        </div>
      </div>
      {actionButtons && (
        <div className={datePickerClasses.buttonContainer}>
          {variant === 'multi' && (
            <div className="day-counter flex items-center text-secondary-500">
              Selected:<span className="ml-5px text-secondary-600 font-bold">{dayCounter} days</span>
            </div>
          )}
          <div className={`action-buttons ${variant !== 'multi' ? 'w-full' : ''}`}>
            <Button classes={{ button: `cancel-button ${variant === 'multi' && 'mr-15px'}` }} size='md' variant='outlined' onClick={handleOnCancel}>Cancel</Button>
            <Button classes={{ button: 'confirm-button' }} size='md' variant='filled' onClick={handleOnConfirm}>Confirm</Button>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div ref={ref} className={`${customClasses.datePickerRoot} ${datePickerClasses.root}`}>
      <ConditionalWrapper
        condition={!hideInput}
        wrapper={wrappedChildren => (
          <Menu as='div' className={datePickerClasses.rootButtonContainer}>
            {customTrigger ?
              <Menu.Button as='div' className='date-picker-button'>
                <div className="button-content" onClick={onClickDatePicker}>
                  {customTrigger}
                </div>
              </Menu.Button>
              :
              <>
                { (label.title || typeof label === 'string') && <div className={labelClasses.container}>
                  <p className={labelClasses.title}>
                    {label?.title || label}
                  </p>
                  {required && <span className='flex flex-row ml-5px text-error-500'>*</span>}
                  {(tooltip.title || tooltip.description) ? (
                    <Tooltip
                      position='right'
                      {...tooltip}
                    >
                      {label?.icon || <Info className={labelClasses.icon} size='sm'/>}
                    </Tooltip>
                  )
                    :
                    <>
                      {label?.icon}
                    </>
                  }
                </div>}
                {renderInput()}
              </>
            }
            {open && (
              <Menu.Items static className={datePickerClasses.datePickerMenu}>
                <Menu.Item>
                  {wrappedChildren}
                </Menu.Item>
              </Menu.Items>
            )}
          </Menu>
        )}
      >
        {renderPicker()}
      </ConditionalWrapper>
    </div>
  )
}

DatePicker.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  tooltip: PropTypes.object,
  navbarType: PropTypes.oneOf(['both', 'year', 'none']),
  variant: PropTypes.oneOf(['single', 'range', 'multi']),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onSelectDay: PropTypes.func,
  onDeleteInput: PropTypes.func,
  defaultDate: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.instanceOf(moment),
    ]),
  ),
  minDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(null),
  ]),
  maxDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment),
    PropTypes.instanceOf(null),
  ]),
  rangeOfYears: PropTypes.number,
  customTrigger: PropTypes.node,
  dateFormat: PropTypes.string,
  actionButtons: PropTypes.bool,
  hideInput: PropTypes.bool,
  displayInput: PropTypes.bool,
  defaultSelected: PropTypes.bool,
  deleteInputButton: PropTypes.bool,
  required: PropTypes.bool,
}

export default DatePicker
