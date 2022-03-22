import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import DropdownSelect from "./dropdown-select";
import Button from "./button";
import { ArrowLeft, ArrowRight, ChevronDown } from "../icons";

import { makeStyles } from '../utils/make-styles';
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
  getDayFormat
} from "../utils/helpers/calendar";


const classes = makeStyles({
  datePickerRoot: {
    '& .date-picker-content-container': {
      '& .navbar-container': {
        display: 'flex',
        padding: '0 0.625rem',
        borderRadius: '0.25rem 0.25rem 0 0',

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
            }
          },

          '& .multi': {
            width: '100%',
            margin: '0 2.594rem',
            justifyContent: 'space-between'
          }
        },

        '& .month-dropdown, .year-dropdown': {
          margin: '0 .156rem',
          cursor: 'pointer',

          '& .dropdown-button-container': {
            fontStretch: 'normal',
            fontStyle: 'normal',
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '0.813rem',
            lineHeight: 1.23,
            border: 0,
            
            '& .button-content-container': {
              padding: '0.125rem 0.375rem',
              fontWeight: 'bold',

              '& .dropdown-content': {
                overflow: 'hidden',

                '& span': {
                  margin: 0
                }
              },

              '& .end-icon': {
                marginLeft: '0.313rem'
              }
            }
          },

          '& .dropdown-menu-container': {
            width: '100%',
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
            outline: 0
          }
        },
      },

      '& .calendar-container': {
        padding: '0.313rem 0.625rem',

        '& .calendar-table': {
          fontSize: '12px',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: '1.33',
          letterSpacing: '1px',

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
              }
            }
          },

          '& .calendar-table-body': {
            cursor: 'pointer',

            '& tr': {
              display: 'flex',
              marginBottom: '0.313rem',

              '& .calendar-day, td': {
                fontWeight: 'normal',

                '& span': {
                  width: '1.563rem',
                  height: '1.563rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }
              },

              '& .today': {
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: '4px',
              },
            }
          }
        }
      }
    },

    '& .button-container': {
      '& .day-counter': {
        "& span": {

        }
      },

      '& .action-buttons': {
        display: 'flex',
        justifyContent: 'space-between',

        '& .cancel-button': {
          paddingLeft: '1.875rem',
          paddingRight: '1.875rem'
        },
  
        '& .confirm-button': {
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem'
        }
      }
    }
  }
})

const dropdownClasses = Object.freeze({
  button: 'dropdown-button-container bg-interactive-50',
  content: 'button-content-container font-pt',
  menu: 'dropdown-menu-container z-50',
})

const DatePicker = ({navbarType, variant, onSelectDay, onConfirm, onCancel, defaultDate, dateFormat, actionButtons}) => {
  const datePickerClasses = Object.freeze({
    root: 'date-picker-root relative flex flex-col pt-15px bg-secondary-50 shadow-light-20 border border-neutral-100 rounded-sm',
    datePickerContainer: `date-picker-content-container border-b border-neutral-100`,
    calendarMainContainer: `calendar-main-container ${variant === 'multi' && 'flex'}`,
    navbarContainer: `navbar-container px-15px ${navbarType === 'both' && 'justify-between'}`,
    buttonContainer: `button-container px-15px py-2.5 flex justify-between`,
    disabledDays: `calendar-day-disabled text-secondary-400 px-5px py-0 cursor-not-allowed`,
  })

  const [calendarState, setCalendarState] = useState(
    {
      dateObject: moment(defaultDate),
      dateObjectMulti: variant === 'multi' ? moment(defaultDate).add(1, 'month') : null,
      selectedFirstDay: null,
      selectedEndDay: null,
    }
  )
  const [dayCounter, setDayCounter] = useState(0)

  const formatFirstDay = calendarState.selectedFirstDay && moment(calendarState.selectedFirstDay).format('DD')
  const formatEndDay = calendarState.selectedEndDay && moment(calendarState.selectedEndDay).format('DD')

  useEffect(() => {
    if (calendarState.selectedFirstDay && calendarState.selectedEndDay) {
      setDayCounter(Math.abs(moment(calendarState.selectedFirstDay, 'YYYY-MM-DD')
        .diff(moment(calendarState.selectedEndDay, 'YYYY-MM-DD'), 'days')-1))
    }
  }, [calendarState.selectedFirstDay, calendarState.selectedEndDay])

  const onSelectMonthDropdown = (e, val, multi) => {
    e.stopPropagation()
    const monthNo = moment().month(val).format('M')

    if (multi) {
      const _dateObjectMulti = moment(calendarState.dateObjectMulti).set("month", monthNo - 1)
      setCalendarState({
        ...calendarState,
        dateObjectMulti: _dateObjectMulti,
        selectedEndDay: null
      })
    } else {
      const _dateObject = moment(calendarState.dateObject).set("month", monthNo - 1)
      setCalendarState({
        ...calendarState,
        dateObject: _dateObject,
        selectedFirstDay: null,
        selectedEndDay: variant === 'range' ? null : calendarState.selectedEndDay
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
    const {dateObject, dateObjectMulti} = calendarState
    const _dateObjectMulti = moment(dateObjectMulti).set("year", val || getYear(dateObjectMulti))
    const _dateObject = moment(dateObject).set("year", val || getYear(dateObject))

    if (multi) {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: dateObjectMulti.format('MM') < dateObject.format('MM') ? _dateObject.add(1, 'month') : _dateObjectMulti,
        selectedEndDay: null
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: variant === 'multi' && (dateObject.format('MM') > dateObjectMulti.format('MM')) ? _dateObjectMulti.subtract(1, 'month') : _dateObject,
        selectedFirstDay: null,
        selectedEndDay: variant === 'range' ? null : calendarState.selectedEndDay
      })
    }
  }

  const renderYearDropdown = (multi) => {
    const nextTen = moment()
      .set("year", getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
      .add(10, 'year')
      .format("Y")
    const prevTen = moment()
    .set("year", getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
    .subtract(10, 'year')
    .format("Y")

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
        selectedFirstDay: null
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: calendarState.dateObject.subtract(1, 'month'),
        selectedFirstDay: null,
        selectedEndDay:  null
      })
    }
  }

  const onNext = () => {
    if (variant === 'multi') {
      setCalendarState({
        ...calendarState,
        dateObjectMulti: calendarState.dateObjectMulti.add(1, 'month'),
        selectedEndDay:  null
      })
    } else {
      setCalendarState({
        ...calendarState,
        dateObject: calendarState.dateObject.add(1, 'month'),
        selectedFirstDay: null,
        selectedEndDay:  null
      })
    }
  }


  const onDayClickRange = (e, d) => {
    e.stopPropagation()
    const {selectedFirstDay} = calendarState
    const parseDay = getISODateFormat(calendarState.dateObject, d)

    if (formatFirstDay > d) {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: parseDay,
        selectedEndDay: selectedFirstDay
      })
    } 
    else if (formatFirstDay == d || formatEndDay == d) {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: null,
        selectedEndDay:  null
      })
    }
    else if (selectedFirstDay) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: parseDay
      })
    } 
    else {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: parseDay
      })
    }

    onSelectDay(e, parseDay)
  }

  const onDayClickSingle = (e, d, multi) => {
    e.stopPropagation()
    const parseDay = getISODateFormat(multi ? calendarState.dateObjectMulti : calendarState.dateObject, d)

    if (multi) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: parseDay
      })
  
      if (formatEndDay == d) {
        setCalendarState({
          ...calendarState,
          selectedEndDay: null
        })
      }
    } else {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: parseDay
      })
  
      if (formatFirstDay == d) {
        setCalendarState({
          ...calendarState,
          selectedFirstDay: null
        })
      }
    }

    onSelectDay(e, parseDay)
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
    const {dateObject, dateObjectMulti} = calendarState

    let prevMonthDays = []
    let firstDays = getPrevDaysInMonth(multi ? dateObjectMulti : dateObject) - (getFirstDayOfMonth(multi ? dateObjectMulti : dateObject) - 1)
    for (let i = 0; i < getFirstDayOfMonth(multi ? dateObjectMulti : dateObject); i++) {
      prevMonthDays.push(
        <td key={`${firstDays}-firstDays`} className={datePickerClasses.disabledDays}>
          <span>
            {firstDays}
          </span>
        </td>
      );
      firstDays++
    }

    let nextMonthDays = []
    let endDays = 1
    for (let i = getEndDayOfMonth(multi ? dateObjectMulti : dateObject); i < 6; i++) {
      nextMonthDays.push(
        <td key={`${endDays}-endDays`} className={datePickerClasses.disabledDays}>
          <span>
            {endDays}
          </span>
        </td>
      );
      endDays++
    }

    let currMonthDays = []
    for (let d = 1; d <= getDaysInMonth(multi ? dateObjectMulti : dateObject); d++) {
      const parseDay = moment(multi ? getISODateFormat(dateObjectMulti, d) : getISODateFormat(dateObject, d)).format('YYYY-MM-DD')
      let selectedClass = ''
      let selectedRangeClass = ''

      if (formatFirstDay == d && !multi) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (formatEndDay == d && (multi || variant === 'range')) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == getCurrentDay(multi ? dateObjectMulti : dateObject)) {
        if (moment().format('YYYY-MM') === moment(multi ? dateObjectMulti : dateObject).format('YYYY-MM')) {
          selectedClass = 'today border-secondary-400'
        }
      }


      if (formatFirstDay && formatEndDay) {
        const parseFirstDay = moment(calendarState.selectedFirstDay).format('YYYY-MM-DD')
        const parseEndDay = moment(calendarState.selectedEndDay).format('YYYY-MM-DD')

        if (moment(parseDay).diff(parseEndDay) <= 0 && moment(parseDay).diff(parseFirstDay) >= 0) {
          selectedRangeClass = `bg-primary-50 text-interactive-500 
            ${parseFirstDay === parseDay ? 'pl-0 ml-5px rounded-l-sm' : ''}
            ${parseEndDay === parseDay ? 'pr-0 mr-5px rounded-r-sm': ''}
          `
        }
      }

      currMonthDays.push(
        <td 
          key={d} 
          className={`calendar-day px-5px py-0 ${selectedRangeClass && selectedRangeClass}`}>
          <span
            className={`${selectedClass}`}
            onClick={e => {
              variant === 'range' ? onDayClickRange(e, d) : onDayClickSingle(e, d, multi)
            }}
          >
            {d}
          </span>
        </td>
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
      <div className="calendar-container">
        <table className="calendar-day calendar-table">
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

  const handleOnConfirm = (e) => {
    e.stopPropagation()

    onConfirm(e, variant === 'single' ? getDayFormat(calendarState.selectedFirstDay, dateFormat) : 
      {firstDay: getDayFormat(calendarState.selectedFirstDay), endDay: getDayFormat(calendarState.selectedEndDay, dateFormat)}
    )
  }

  const handleOnCancel = (e) => {
    e.stopPropagation()
    setCalendarState({
      ...calendarState,
      selectedFirstDay: null,
      selectedEndDay:  null
    })
    
    onCancel(e)
  }

  return (
    <div className={`${classes.datePickerRoot} ${datePickerClasses.root} font-pt`}>
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
            <div className="day-counter">
              Selected: <span>{dayCounter} days</span>
            </div>
          )}
          <div className={`action-buttons ${variant !== 'multi' ? 'w-full' : ''}`}>
            <Button classes={{button: `cancel-button ${variant === 'multi' && 'mr-15px'}`}} size='md' variant='outlined' onClick={handleOnCancel}>Cancel</Button>
            <Button classes={{button: 'confirm-button'}} size='md' variant='filled' onClick={handleOnConfirm}>Confirm</Button>
          </div>
        </div>
      )}
    </div>
  )
}

DatePicker.propTypes = {
  dateFormat: PropTypes.string,
  navbarType: PropTypes.oneOf(['both', 'year', 'none']),
  variant: PropTypes.oneOf(['single', 'range', 'multi']),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onSelectDay: PropTypes.func,
  defaultDate: PropTypes.instanceOf(Date),
  actionButtons: PropTypes.bool,
}

DatePicker.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  navbarType: 'both',
  variant: 'single',
  onConfirm: () => {},
  onCancel: () => {},
  onSelectDay: () => {},
  defaultDate: new Date(),
  actionButtons: true,
}

export default DatePicker
