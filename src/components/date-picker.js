import React, { useState } from "react";
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
                margin: 0
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
})

const dropdownClasses = Object.freeze({
  button: 'dropdown-button-container bg-interactive-50',
  content: 'button-content-container font-pt',
  menu: 'dropdown-menu-container z-50',
})

const DatePicker = ({navbarType, variant, onSelectDay, onConfirm, onCancel, dateFormat}) => {
  const datePickerClasses = Object.freeze({
    root: 'date-picker-root relative flex flex-col pt-15px bg-secondary-50 shadow-light-20 border border-neutral-100 rounded-sm',
    datePickerContainer: `date-picker-content-container border-b border-neutral-100`,
    calendarMainContainer: `calendar-main-container ${variant === 'multi' && 'flex'}`,
    navbarContainer: `navbar-container px-15px ${navbarType === 'both' && 'justify-between'}`,
    buttonContainer: 'button-container px-15px py-2.5 flex justify-between',
    disabledDays: 'calendar-day-disabled text-secondary-400 px-5px py-0 cursor-not-allowed',
  })

  const [calendarState, setCalendarState] = useState(
    {
      dateObject: moment(),
      dateObjectMulti: moment().add(1, 'month'),
      selectedFirstDay: null,
      selectedEndDay: null,
      current: ''
    }
  )

  const onSelectMonthDropdown = (e, val, multi) => {
    e.stopPropagation()
    const monthNo = moment().month(val.title).format('M')

    if (multi) {
      const _dateObjectMulti = moment(calendarState.dateObjectMulti).set("month", monthNo - 1)
      setCalendarState({
        ...calendarState,
        dateObjectMulti: _dateObjectMulti
      })
    } else {
      const _dateObject = moment(calendarState.dateObject).set("month", monthNo - 1)
      setCalendarState({
        ...calendarState,
        dateObject: _dateObject
      })
    }
  }

  const renderMonthDropdown = (multi) => {
    const months = [{ items: moment.monthsShort().map(data => ({title: data})) }]

    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={months}  
        value={{title: getMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}}
        onSelect={(e, val) => { onSelectMonthDropdown(e, val, multi) }}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={getMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}
        allowClear={false}
      />
    )
  }

  const setYear = (e, val, multi) => {
    e.stopPropagation()

    if (multi) {
      const _dateObjectMulti = moment(calendarState.dateObjectMulti).set("year", val.title || getYear(calendarState.dateObjectMulti))
      setCalendarState({
        ...calendarState,
        dateObjectMulti: _dateObjectMulti
      })
    } else {
      const _dateObject = moment(calendarState.dateObject).set("year", val.title || getYear(calendarState.dateObject))
      setCalendarState({
        ...calendarState,
        dateObject: _dateObject
      })
    }
  }

  const renderYearDropdown = (multi) => {
    const nextTen = moment()
      .set("year", getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
      .add(12, 'year')
      .format("Y")
    const prevTen = moment()
    .set("year", getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject))
    .subtract(10, 'year')
    .format("Y")

    const nextTenYear = getDates(getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject), nextTen).map(data => ({title: data}))

    const prevTenYear = getDates(prevTen, getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject)).map(data => ({title: data}))
    prevTenYear.pop()

    const twentyYear = [{items: [...prevTenYear, ...nextTenYear]}]

    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={twentyYear}  
        value={{title: getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}}
        onSelect={(e, val) => { setYear(e, val, multi) }}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={getYear(multi ? calendarState.dateObjectMulti : calendarState.dateObject)}
        allowClear={false}
      />
    )
  }
  

  const onPrev = () => {
    let curr = ""
    if (calendarState.showMonthTable == true) {
      curr = "year"
    } else {
      curr = "month"
    }
    setCalendarState({
      ...calendarState,
      dateObject: calendarState.dateObject.subtract(1, curr),
      selectedFirstDay: null,
      selectedEndDay:  null
    })
  }

  const onNext = () => {
    let curr = ""
    if (calendarState.showMonthTable == true) {
      curr = "year"
    } else {
      curr = "month"
    }
    setCalendarState({
      ...calendarState,
      dateObject: calendarState.dateObject.add(1, curr),
      selectedFirstDay: null,
      selectedEndDay:  null
    })
  }


  const onDayClickRange = (e, d) => {
    e.stopPropagation()
    const parseDay = getISODateFormat(calendarState.dateObject, d)

    if (calendarState.selectedFirstDay > d) {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: d,
        selectedEndDay: calendarState.selectedFirstDay
      })
    } 
    else if (calendarState.selectedFirstDay === d || calendarState.selectedEndDay === d) {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: null,
        selectedEndDay:  null
      })
    }
    else if (calendarState.selectedFirstDay) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: d
      })
    } 
    else {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: d
      })
    }
  }

  const onDayClickSingle = (e, d, multi) => {
    e.stopPropagation()  

    if (multi) {
      setCalendarState({
        ...calendarState,
        selectedEndDay: d
      })
  
      if (calendarState.selectedEndDay === d) {
        setCalendarState({
          ...calendarState,
          selectedEndDay: null
        })
      }
    } else {
      setCalendarState({
        ...calendarState,
        selectedFirstDay: d
      })
  
      if (calendarState.selectedFirstDay === d) {
        setCalendarState({
          ...calendarState,
          selectedFirstDay: null
        })
      }
    }
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
    let weekdayshortname = getWeekdayShort().map(day => {
      return <th key={day}>{day}</th>
    })

    if (multi) {
      console.log('multi: ', getISODateFormat(calendarState.dateObjectMulti, d))
    } else {
      console.log('no multi: ', getISODateFormat(calendarState.dateObject, d))
    }
  
    let firstBlanks = []
    let firstDays = getPrevDaysInMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject) - (getFirstDayOfMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject) - 1)
    for (let i = 0; i < getFirstDayOfMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject); i++) {
      firstBlanks.push(
        <td key={`${firstDays}-firstDays`} className={datePickerClasses.disabledDays}>
          <span>
            {firstDays}
          </span>
        </td>
      );
      firstDays++
    }

    let endBlanks = []
    let endDays = 1
    for (let i = getEndDayOfMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject); i < 6; i++) {
      endBlanks.push(
        <td key={`${endDays}-endDays`} className={datePickerClasses.disabledDays}>
          <span>
            {endDays}
          </span>
        </td>
      );
      endDays++
    }

    let _daysInMonth = []
    for (let d = 1; d <= getDaysInMonth(multi ? calendarState.dateObjectMulti : calendarState.dateObject); d++) {
      let selectedClass = ''
      if (d == calendarState.selectedFirstDay && !multi) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == calendarState.selectedEndDay && multi) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == getCurrentDay(multi ? calendarState.dateObjectMulti : calendarState.dateObject)) {
        if (moment().format('YYYY-MM') === moment(multi ? calendarState.dateObjectMulti : calendarState.dateObject).format('YYYY-MM')) {
          selectedClass = 'today border-secondary-400'
        }
      }

      _daysInMonth.push(
        <td 
          key={d} 
          className={`calendar-day px-5px py-0
            ${variant === 'range' && (d >= calendarState.selectedFirstDay && d <= calendarState.selectedEndDay) && 'bg-primary-50 text-interactive-500'}
            ${(d >= calendarState.selectedFirstDay && d <= calendarState.selectedEndDay) && d == calendarState.selectedFirstDay && 'pl-0 ml-5px rounded-l-sm'}
            ${(d >= calendarState.selectedFirstDay && d <= calendarState.selectedEndDay) && d == calendarState.selectedEndDay && 'pr-0 mr-5px rounded-r-sm'}
          `}>
          <span
            className={`${selectedClass}`}
            onClick={e => {
              variant === 'range' && onDayClickRange(e, d)
              variant === 'single' || 'multi' && onDayClickSingle(e, d, multi)
            }}
          >
            {d}
          </span>
        </td>
      )
    }
  
    var totalSlots = [...firstBlanks, ..._daysInMonth, ...endBlanks]
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

    let daysInMonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>
    })

    return (
      <div className="calendar-container">
        <table className="calendar-day calendar-table">
          <thead className="calendar-table-head text-secondary-600">
            <tr>{weekdayshortname}</tr>
          </thead>
          <tbody className="calendar-table-body text-secondary-900">
            {daysInMonth}
          </tbody>
        </table>
      </div>
    )
  }

  const getFormatDay = (day) => {
    return day ? moment(day).format(`${dateFormat}`) : undefined
  }

  const handleOnConfirm = (e) => {
    e.stopPropagation()
    let firstDay = ''
    let endDay = ''

    if (calendarState.selectedEndDay) {
      endDay = getISODateFormat(calendarState.dateObject, calendarState.selectedEndDay)
    } 

    if (calendarState.selectedFirstDay) {
      firstDay = getISODateFormat(calendarState.dateObject, calendarState.selectedFirstDay)
    }

    console.log('first: ', getFormatDay(firstDay))
    console.log('end: ', getFormatDay(endDay))
    onConfirm(variant === 'single' ? getFormatDay(firstDay) : 
      {firstDay: getFormatDay(firstDay), endDay: getFormatDay(endDay)}
    )
  }

  const handleOnCancel = (e) => {
    e.stopPropagation()
    setCalendarState({
      ...calendarState,
      selectedFirstDay: null,
      selectedEndDay:  null
    })
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
      <div className={datePickerClasses.buttonContainer}>
        <Button classes={{button: 'cancel-button'}} size='md' variant='outlined' onClick={handleOnCancel}>Cancel</Button>
        <Button classes={{button: 'confirm-button'}} size='md' variant='filled' onClick={handleOnConfirm}>Confirm</Button>
      </div>
    </div>
  )
}

DatePicker.propTypes = {
  dateFormat: PropTypes.string,
  navbarType: PropTypes.oneOf(['both', 'year', 'none']),
  variant: PropTypes.oneOf(['single', 'range', 'multi']),
  onConfirm: PropTypes.func,
}

DatePicker.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  navbarType: 'both',
  variant: 'range',
  onConfirm: () => {}
}

export default DatePicker
