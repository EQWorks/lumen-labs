import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { Menu } from '@headlessui/react'
import DropdownSelect from './dropdown-select'
import Button from './button'
import { ArrowLeft, ArrowRight, ChevronDown } from '../icons'

import { makeStyles } from '../utils/make-styles'
import { ConditionalWrapper } from '../utils/conditional-wrapper'
import { useComponentIsActive } from '../hooks'
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
import { InputBase } from '../base-components'


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
            cursor: 'pointer',

            '& tr': {
              display: 'flex',
              marginBottom: '0.313rem',

              '& .calendar-day, td': {
                '& span': {
                  width: '1.563rem',
                  height: '1.563rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              },

              '& .today': {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '4px',
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
      borderWidth: 0
    }
  }
})

const inputClasses = Object.freeze({
  root: 'input-container w-267px h-7 py-1.5 px-2.5 text-xs text-secondary-800 tracking-md leading-1.33 border-secondary-400 rounded-sm',
  input: 'outline-none',
  startIcon: 'mt-0.5 mr-4 fill-current stroke-current',
  endIcon: 'mt-0.5 ml-4 fill-current stroke-current',
})

const inputRangeClasses = Object.freeze({
  container: 'input-range-container w-267px px-2 py-px flex border border-secondary-400 rounded-sm',
  root: 'input-range-root w-16 mx-1 text-xs text-secondary-800 tracking-md leading-1.33',
  input: 'outline-none',
  startIcon: 'mt-0.5 mr-4 fill-current stroke-current',
  endIcon: 'mt-0.5 ml-4 fill-current stroke-current',
})

const dropdownClasses = Object.freeze({
  button: 'dropdown-button-container bg-interactive-50',
  content: 'button-content-container font-pt font-bold',
  menu: 'dropdown-menu-container w-full h-185px z-50',
})

const DatePicker = ({ classes, navbarType, variant, onSelectDay, onConfirm, onCancel, defaultDate, customTrigger, dateFormat, actionButtons, hideInput }) => {
  const datePickerClasses = Object.freeze({
    root: `date-picker-root relative inline-flex ${classes.root ? classes.root : ''}`,
    rootContainer: `date-picker-root-container relative mt-5px pt-15px bg-secondary-50 shadow-light-20 border border-neutral-100 rounded-sm font-pt
      ${classes.rootContainer ? classes.rootContainer : ''}`,
    datePickerContainer: `date-picker-content-container flex flex-col border-b border-neutral-100 ${classes.datePickerContainer ? classes.datePickerContainer : ''}`,
    navbarContainer: `navbar-container px-15px flex ${navbarType === 'both' ? 'justify-between' : ''} ${classes.navbarContainer ? classes.navbarContainer : ''}`,
    calendarMainContainer: `calendar-main-container ${variant === 'multi' ? 'flex' : ''} ${classes.datePickerContainer ? classes.datePickerContainer : ''}`,
    calendarContainer: `calendar-container py-5px px-2.5 ${classes.calendarContainer ? classes.calendarContainer : ''}`,
    calendarTable: `calendar-table text-xs leading-1.33 tracking-lg ${classes.calendarTable ? classes.calendarTable : ''}`,
    calendarDay: `calendar-day px-5px py-0 ${classes.calendarDay ? classes.calendarDay : ''}`,
    disabledDay: `calendar-day-disabled text-secondary-400 px-5px py-0 cursor-not-allowed ${classes.disabledDay ? classes.disabledDay : ''}`,
    buttonContainer: `button-container px-15px py-2.5 flex justify-between text-xs leading-1.33 tracking-lg 
      ${classes.buttonContainer ? classes.buttonContainer : ''}`,
  })

  const [calendarState, setCalendarState] = useState(
    {
      dateObject: moment(defaultDate),
      dateObjectMulti: variant === 'multi' ? moment(defaultDate).add(1, 'month') : null,
      selectedStartDay: null,
      selectedEndDay: null,
    },
  )
  const [dayCounter, setDayCounter] = useState(0)
  const [inputVal, setInputVal] = useState('')
  const [rangeVal, setRangeVal] = useState({start: '', end: ''})
  const [open, setOpen] = useState(false)
  const [focus, setFocus] = useState(false)
  const { ref, componentIsActive, setComponentIsActive } = useComponentIsActive()

  const formatStartDay = calendarState.selectedStartDay && moment(calendarState.selectedStartDay).format('DD')
  const formatEndDay = calendarState.selectedEndDay && moment(calendarState.selectedEndDay).format('DD')

  useEffect(() => {
    if (calendarState.selectedStartDay && calendarState.selectedEndDay) {
      setDayCounter(Math.abs(moment(calendarState.selectedStartDay, 'YYYY-MM-DD')
        .diff(moment(calendarState.selectedEndDay, 'YYYY-MM-DD'), 'days')-1))
    } else {
      setDayCounter(0)
    }
  }, [calendarState.selectedStartDay, calendarState.selectedEndDay])

  const enforceValue = () => {
    if (formatStartDay) {
      if (variant === 'single') {
        setInputVal(moment(calendarState.selectedStartDay).format('MM/DD/YYYY'))
      } else {
        setRangeVal({ 
          start: moment(calendarState.selectedStartDay).format('MM/DD/YYYY'),
          end: formatEndDay ? moment(calendarState.selectedEndDay).format('MM/DD/YYYY') : null
        })
      }
    }
  }

  if (!componentIsActive && open) { 
    enforceValue()
    setOpen(!open)
  }

  const onSelectMonthDropdown = (e, val, multi) => {
    e.stopPropagation()
    const monthNo = moment().month(val).format('M')

    if (multi) {
      const _dateObjectMulti = moment(calendarState.dateObjectMulti).set('month', monthNo - 1)
      setCalendarState({
        ...calendarState,
        dateObjectMulti: _dateObjectMulti,
        selectedEndDay: null,
      })
    } else {
      const _dateObject = moment(calendarState.dateObject).set('month', monthNo - 1)
      setCalendarState({
        ...calendarState,
        dateObject: _dateObject,
        selectedStartDay: null,
        selectedEndDay: variant === 'range' ? null : calendarState.selectedEndDay,
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
    const { dateObject, dateObjectMulti } = calendarState
    const _dateObjectMulti = moment(dateObjectMulti).set('year', val || getYear(dateObjectMulti))
    const _dateObject = moment(dateObject).set('year', val || getYear(dateObject))

    if (multi) {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: dateObjectMulti.format('MM') < dateObject.format('MM') ? _dateObject.add(1, 'month') : _dateObjectMulti,
        selectedEndDay: null,
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: variant === 'multi' && (dateObject.format('MM') > dateObjectMulti.format('MM')) ? _dateObjectMulti.subtract(1, 'month') : _dateObject,
        selectedStartDay: null,
        selectedEndDay: variant === 'range' ? null : calendarState.selectedEndDay,
      })
    }
  }

  const renderYearDropdown = (multi) => {
    const nextTen = moment()
      .set('year', getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
      .add(10, 'year')
      .format('Y')
    const prevTen = moment()
      .set('year', getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
      .subtract(10, 'year')
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
    if (variant === 'multi') {
      setCalendarState({
        ...calendarState,
        dateObject: calendarState.dateObject.subtract(1, 'month'),
        selectedStartDay: null,
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: calendarState.dateObject.subtract(1, 'month'),
        selectedStartDay: null,
        selectedEndDay:  null,
      })
    }
  }

  const onNext = () => {
    if (variant === 'multi') {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: calendarState.dateObjectMulti.add(1, 'month'),
        selectedEndDay:  null,
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: calendarState.dateObject.add(1, 'month'),
        selectedStartDay: null,
        selectedEndDay:  null,
      })
    }
  }

  const onDayClickRange = (e, d) => {
    e.stopPropagation()
    const { selectedStartDay } = calendarState
    const parseDay = getISODateFormat(calendarState.dateObject, d)

    if (formatStartDay > d) {
      setCalendarState({
        ...calendarState,
        selectedStartDay: parseDay,
        selectedEndDay: selectedStartDay,
      })

      if (variant === 'single') {
        setInputVal(moment(parseDay).format('MM/DD/YYYY'))
      } else {
        setRangeVal({ 
          start: moment(parseDay).format('MM/DD/YYYY'),
          end: moment(selectedStartDay).format('MM/DD/YYYY')
        })
      }
    } 
    else if (formatStartDay == d || formatEndDay == d) {
      setCalendarState({
        ...calendarState,
        selectedStartDay: null,
        selectedEndDay:  null,
      })

      if (variant === 'single') {
        setInputVal('')
      } else {
        setRangeVal({ 
          start: '',
          end: ''
        })
      }
    }
    else if (selectedStartDay) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: parseDay,
      })

      if (variant === 'single') {
        setInputVal(moment(parseDay).format('MM/DD/YYYY'))
      } else {
        setRangeVal({ 
          ...rangeVal,
          end: moment(parseDay).format('MM/DD/YYYY'),
        })
      }
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
    }

    onSelectDay(e, getDayFormat(parseDay, dateFormat))
  }

  const onDayClickSingle = (e, d, multi) => {
    e.stopPropagation()
    const parseDay = getISODateFormat(multi ? calendarState.dateObjectMulti : calendarState.dateObject, d)

    if (multi) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: parseDay,
      })
  
      if (formatEndDay == d) {
        setCalendarState({
          ...calendarState,
          selectedEndDay: null,
        })
      }
    } else {
      setCalendarState({
        ...calendarState,
        selectedStartDay: parseDay,
      })
      setInputVal(moment(parseDay).format('MM/DD/YYYY'))

      if (formatStartDay == d) {
        setCalendarState({
          ...calendarState,
          selectedStartDay: null,
        })

        setInputVal('')
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
    const { dateObject, dateObjectMulti } = calendarState

    let prevMonthDays = []
    let startDays = getPrevDaysInMonth(multi ? dateObjectMulti : dateObject) - (getFirstDayOfMonth(multi ? dateObjectMulti : dateObject) - 1)
    for (let i = 0; i < getFirstDayOfMonth(multi ? dateObjectMulti : dateObject); i++) {
      prevMonthDays.push(
        <td key={`${startDays}-startDays`} className={datePickerClasses.disabledDay}>
          <span>
            {startDays}
          </span>
        </td>,
      )
      startDays++
    }

    let nextMonthDays = []
    let endDays = 1
    for (let i = getEndDayOfMonth(multi ? dateObjectMulti : dateObject); i < 6; i++) {
      nextMonthDays.push(
        <td key={`${endDays}-endDays`} className={datePickerClasses.disabledDay}>
          <span>
            {endDays}
          </span>
        </td>,
      )
      endDays++
    }

    let currMonthDays = []
    for (let d = 1; d <= getDaysInMonth(multi ? dateObjectMulti : dateObject); d++) {
      const parseDay = moment(multi ? getISODateFormat(dateObjectMulti, d) : getISODateFormat(dateObject, d)).format('YYYY-MM-DD')
      let selectedClass = ''
      let selectedRangeClass = ''

      if (formatStartDay == d && !multi) {
        selectedClass = 'bg-interactive-500 text-interactive-50 rounded-sm'
      } 
      else if (formatEndDay == d && (multi || variant === 'range')) {
        selectedClass = 'bg-interactive-500 text-interactive-50 rounded-sm'
      } 
      else if (d == getCurrentDay(multi ? dateObjectMulti : dateObject)) {
        if (moment().format('YYYY-MM') === moment(multi ? dateObjectMulti : dateObject).format('YYYY-MM')) {
          selectedClass = 'today border-secondary-400'
        }
      }


      if (formatStartDay && formatEndDay) {
        const parseStartDay = moment(calendarState.selectedStartDay).format('YYYY-MM-DD')
        const parseEndDay = moment(calendarState.selectedEndDay).format('YYYY-MM-DD')

        if (moment(parseDay).diff(parseEndDay) <= 0 && moment(parseDay).diff(parseStartDay) >= 0) {
          selectedRangeClass = `bg-primary-50 text-interactive-500 
            ${parseStartDay === parseDay ? 'pl-0 ml-5px rounded-l-sm' : ''}
            ${parseEndDay === parseDay ? 'pr-0 mr-5px rounded-r-sm': ''}
          `
        }
      }

      currMonthDays.push(
        <td 
          key={d} 
          className={`${selectedRangeClass && selectedRangeClass} ${datePickerClasses.calendarDay}`}>
          <span
            className={`${selectedClass}`}
            onClick={e => {
              variant === 'range' ? onDayClickRange(e, d) : onDayClickSingle(e, d, multi)
            }}
          >
            {d}
          </span>
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

  const onClickSelect = () => {
    setComponentIsActive(focus)
    setOpen(focus)
  }

  const inputOnChange = (val, range = false) => {
    const date = moment(val, 'MM/DD/YYYY', true)

    if (variant === 'single') {
      if (date.isValid()) {
        setCalendarState({
          ...calendarState,
          dateObject: moment(date),
          selectedStartDay: getISODateFormat(moment(date), moment(date).format('DD'))
        })
      }
  
      setInputVal(val)
    } else {
      if (!range) {
        if (date.isValid()) {
          setCalendarState({
            ...calendarState,
            dateObject: moment(date),
            selectedStartDay: getISODateFormat(moment(date), moment(date).format('DD')),
            selectedEndDay: moment(rangeVal.end, 'MM/DD/YYYY').format('YYYY-MM') === date.format('YYYY-MM') && 
              moment(rangeVal.end, 'MM/DD/YYYY').format('DD') > date.format('DD') ? 
              getISODateFormat(moment(date), moment(rangeVal.end, 'MM/DD/YYYY').format('DD')) : null
          })
        }

        setRangeVal({...rangeVal, start: val})
      } else {
        if (date.isValid() && date.format('YYYY-MM') === calendarState.dateObject.format('YYYY-MM')) {
          console.log('valid: ', date.format('YYYY-MM'))
          if (formatStartDay && date.format('DD') > formatStartDay) {
            setCalendarState({
              ...calendarState,
              dateObject: moment(date),
              selectedEndDay: getISODateFormat(moment(date), moment(date).format('DD'))
            })
          }
        }

        setRangeVal({...rangeVal, end: val})
      }
    }
  }

  const inputOnDelete = (e) => {
    e.stopPropagation()
    setCalendarState({
      ...calendarState,
      selectedStartDay: null,
      selectedEndDay:  null,
    })
    setInputVal('')
    onCancel(e)
  }
  console.log('render: ')

  const renderInput = () => (
    variant === 'single' ?
      <InputBase 
        classes={inputClasses}
        value={inputVal}
        onChange={inputOnChange}
        onClick={onClickSelect}
        onDelete={inputOnDelete}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder='MM/DD/YYYY'
        maxLength='10'
      />
    :
      <div className={`${customClasses.inputRangeContainer} ${inputRangeClasses.container}`} onClick={onClickSelect}>
        <InputBase 
          classes={inputRangeClasses}
          placeholder='Start date'
          onChange={inputOnChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={rangeVal.start}
          maxLength='10'
          deleteButton={false}
        />
        <span className='text-secondary-400'>——</span>
        <InputBase 
          classes={inputRangeClasses}
          placeholder='End date'
          onChange={(val) => inputOnChange(val, true)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={rangeVal.end}
          maxLength='10'
          deleteButton={false}
          disabled={formatStartDay ? false : true}
        />
      </div>
  )

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

  const handleOnConfirm = (e) => {
    e.stopPropagation()
    enforceValue()
    onClickSelect()

    onConfirm(e, variant === 'single' ? getDayFormat(calendarState.selectedStartDay, dateFormat) : 
      { firstDay: getDayFormat(calendarState.selectedStartDay, dateFormat), endDay: getDayFormat(calendarState.selectedEndDay, dateFormat) },
    )
  }

  const handleOnCancel = (e) => {
    e.stopPropagation()
    setCalendarState({
      ...calendarState,
      selectedStartDay: null,
      selectedEndDay:  null,
    })
    setInputVal('')
    setRangeVal({start: null, end: null})
    onCancel(e)
  }

  return (
    <div ref={ref} className={`${customClasses.datePickerRoot} ${datePickerClasses.root}`}>
      <ConditionalWrapper
        condition={!hideInput}
        wrapper={wrappedChildren => (
          <Menu as='div' className='date-picker-menu'>
            {customTrigger ? 
              <Menu.Button as='div' className='date-picker-button'>
                <div className="button-content-container" onClick={onClickSelect}>
                  {customTrigger}
                </div>
              </Menu.Button>
              :
              renderInput()
            }
            {open && (
              <Menu.Items static className='absolute'>
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
  navbarType: PropTypes.oneOf(['both', 'year', 'none']),
  variant: PropTypes.oneOf(['single', 'range', 'multi']),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onSelectDay: PropTypes.func,
  defaultDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.instanceOf(moment),
  ]),
  customTrigger: PropTypes.node,
  dateFormat: PropTypes.string,
  actionButtons: PropTypes.bool,
  displayInput: PropTypes.bool,
}

DatePicker.defaultProps = {
  classes: {},
  navbarType: 'both',
  variant: 'range',
  onConfirm: () => {},
  onCancel: () => {},
  onSelectDay: () => {},
  defaultDate: new Date(),
  customTrigger: null,
  dateFormat: 'MM/DD/YYYY',
  actionButtons: true,
  hideInput: false,
}

export default DatePicker
