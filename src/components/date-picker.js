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
  getDates
} from "../utils/helpers/calendar";


const classes = makeStyles({
  calendarRoot: {
    '& .calendar-container': {
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
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontSize: '0.875rem',
            lineHeight: 1.14,

            '& span': {
              display: 'flex',
              alignItems: 'center',
            }
          },
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
            
            '& .button-container-content': {
              padding: '.125rem .375rem',

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

        '& .navbar-button': {
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.15)'
          },
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
  content: 'button-container-content font-pt',
  menu: 'dropdown-menu-container z-50',
})

const DatePicker = ({navbarType, variant, onSelectDay, onConfirm, onCancel, dateFormat}) => {
  const datePickerClasses = Object.freeze({
    root: 'relative flex flex-col pt-15px bg-secondary-50 shadow-light-20 border border-neutral-100 rounded-sm',
    navbarContainer: `navbar-container px-15px ${navbarType === 'both' && 'justify-between'}`,
    calendarContainer: 'calendar-container border-b border-neutral-100',
    buttonContainer: 'button-container px-15px py-2.5 flex justify-between',
    disabledDays: 'calendar-day-disabled text-secondary-400 px-5px py-0 cursor-not-allowed',
  })

  const [calendarState, setCalendarState] = useState(
    {
      showCalendarTable: true,
      showMonthTable: false,
      dateObject: moment(),
      showYearNav: false,
      selectedFirstDay: null,
      selectedEndDay: null,
      current: ''
    }
  )

  const onSelectMonthDropdown = (e, val) => {
    e.stopPropagation()

    const monthNo = moment().month(val.title).format('M')
    const _dateObject = moment(calendarState.dateObject).set("month", monthNo - 1)

    setCalendarState({
      ...calendarState,
      dateObject: _dateObject,
    })
  }

  const renderMonthDropdown = () => {
    const months = [{ items: moment.monthsShort().map(data => ({title: data})) }]

    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={months}  
        value={{title: getMonth(calendarState.dateObject)}}
        onSelect={onSelectMonthDropdown}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={getMonth(calendarState.dateObject)}
        allowClear={false}
      />
    )
  }

  const setYear = (e, val) => {
    e.stopPropagation()
    const _dateObject = moment(calendarState.dateObject).set("year", val.title || getYear(calendarState.dateObject))

    setCalendarState({
      ...calendarState,
      dateObject: _dateObject,
    })
  }

  const renderYearDropdown = () => {
    const nextTen = moment()
      .set("year", getYear(calendarState.dateObject))
      .add(12, 'year')
      .format("Y")
    const prevTen = moment()
    .set("year", getYear(calendarState.dateObject))
    .subtract(10, 'year')
    .format("Y")

    const nextTenYear = getDates(getYear(calendarState.dateObject), nextTen).map(data => ({title: data}))

    const prevTenYear = getDates(prevTen, getYear(calendarState.dateObject)).map(data => ({title: data}))
    prevTenYear.pop()

    const twentyYear = [{items: [...prevTenYear, ...nextTenYear]}]

    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={twentyYear}  
        value={{title: getYear(calendarState.dateObject)}}
        onSelect={setYear}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={getYear(calendarState.dateObject)}
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


  const onDayClick = (e, d) => {
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

  const renderNavbar = () => {
    let renderType = ''

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

    return (
      <div className={datePickerClasses.navbarContainer}>
        <div className={`navbar-content-container ${navbarType === 'year' && 'pr-15px'}`}>
          <button className="navbar-button prev-button" onClick={onPrev}>
            <ArrowLeft size='md' />
          </button>
          <div className="navbar-content">
            {renderType}
          </div>
          <button className="navbar-button next-button" onClick={onNext}>
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

  const renderCalendar = () => {
    let weekdayshortname = getWeekdayShort().map(day => {
      return <th key={day}>{day}</th>
    })
  
    let firstBlanks = []
    let firstDays = getPrevDaysInMonth(calendarState.dateObject) - (getFirstDayOfMonth(calendarState.dateObject) - 1)
    for (let i = 0; i < getFirstDayOfMonth(calendarState.dateObject); i++) {
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
    for (let i = getEndDayOfMonth(calendarState.dateObject); i < 6; i++) {
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
    for (let d = 1; d <= getDaysInMonth(calendarState.dateObject); d++) {
      let selectedClass = ''
      if (d == calendarState.selectedFirstDay) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == calendarState.selectedEndDay) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == getCurrentDay(calendarState.dateObject)) {
        if (moment().format('YYYY-MM') === moment(calendarState.dateObject).format('YYYY-MM')) {
          selectedClass = 'today border-secondary-400'
        }
      }

      _daysInMonth.push(
        <td 
          key={d} 
          className={`
            ${(d >= calendarState.selectedFirstDay && d <= calendarState.selectedEndDay) && 'bg-primary-50 text-interactive-500'}
            ${(d >= calendarState.selectedFirstDay && d <= calendarState.selectedEndDay) && d == calendarState.selectedFirstDay && 'pl-0 ml-5px rounded-l-sm'}
            ${(d >= calendarState.selectedFirstDay && d <= calendarState.selectedEndDay) && d == calendarState.selectedEndDay && 'pr-0 mr-5px rounded-r-sm'}
            calendar-day px-5px py-0
          `}>
          <span
            className={`${selectedClass}`}
            onClick={e => {
              onDayClick(e, d)
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

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>
    })

    return (
      <div className={datePickerClasses.calendarContainer}>
        {renderNavbar()}
        <div className="calendar-date calendar-container">
          { calendarState.showCalendarTable && (
            <table className="calendar-day calendar-table">
              <thead className="calendar-table-head text-secondary-600">
                <tr>{weekdayshortname}</tr>
              </thead>
              <tbody className="calendar-table-body text-secondary-900">
                {daysinmonth}
              </tbody>
            </table>
          )}
        </div>
      </div>
    )
  }

  const getFormatDay = (day) => {
    return moment(day).format(`${dateFormat}`)
  }

  const handleOnConfirm = (e) => {
    e.stopPropagation()
    const firstDay = `${getMonth(calendarState.dateObject)} ${calendarState.selectedFirstDay} ${getYear(calendarState.dateObject)} ${moment().format('LTS')}`
    const endDay = `${getMonth(calendarState.dateObject)} ${calendarState.selectedEndDay} ${getYear(calendarState.dateObject)} ${moment().format('LTS')}`

    console.log('first: ', getFormatDay(firstDay))
    console.log('end: ', getFormatDay(endDay))
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
    <div className={`${classes.calendarRoot} ${datePickerClasses.root} font-pt`}>
      {renderCalendar()}
      <div className={datePickerClasses.buttonContainer}>
        <Button classes={{button: 'cancel-button'}} size='md' variant='outlined' onClick={handleOnCancel}>Cancel</Button>
        <Button classes={{button: 'confirm-button'}} size='md' variant='filled' onClick={handleOnConfirm}>Confirm</Button>
      </div>
    </div>
  )
}

DatePicker.propTypes = {
  dateFormat: PropTypes.string,
  navbarType: PropTypes.oneOf['both', 'year', 'none'],
  variant: PropTypes.oneOf['single', 'range', 'multi'],
}

DatePicker.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
  navbarType: 'none',
  variant: 'single',
}

export default DatePicker
