import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from "../utils/helpers/calendar";

import { makeStyles } from '../utils/make-styles';
import { ArrowLeft, ArrowRight, ChevronDown } from "../icons";
import { DropdownSelect } from "../";

const classes = makeStyles({
  calendarRoot: {
    position: 'absolute',
    display: 'block',
    borderCollapse: 'separate',
    borderRadius: '0.25',

    '& .navbar-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '0.25rem 0.25rem 0 0',

      '& .navbar-dropdown-container': {
        display: 'flex',
        justifyContent: 'center',

        '& .month-dropdown, .year-dropdown': {
          margin: '0 .156rem',
          cursor: 'pointer',

          '& .dropdown-button-container': {
            width: '3.625rem',
            fontStretch: 'normal',
            fontStyle: 'normal',
            letterSpacing: '1px',
            border: 0,
            
            '& .button-container-content': {
              padding: '.125rem .375rem',
              fontSize: '0.813rem',
              fontWeight: 'bold',
              lineHeight: 1.23,

              '& .dropdown-content': {
                overflow: 'hidden',
              }
            }
          },

          '& .dropdown-menu-container': {
            width: '3.625rem',
          },
        }
      },

      '& .navbar-button': {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',

        '&:first-child, &:last-child': {
          width: '35px',
          fontSize: '22px',
        },

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

            '& td': {
              width: '1.563rem',
              height: '1.563rem',
              margin: '0 0.313rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'normal',
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
  }
})

const dropdownClasses = Object.freeze({
  button: 'dropdown-button-container bg-interactive-50',
  content: 'button-container-content',
  menu: 'dropdown-menu-container z-50'
})

const DatePicker = () => {
  const [calendarState, setCalendarState] = useState(
    {
      showCalendarTable: true,
      showMonthTable: false,
      dateObject: moment(),
      allmonths: moment.months(),
      showYearNav: false,
      selectedDay: null,
      current: ''
    }
  )

  const weekdayshort = moment.weekdaysMin()

  const daysInMonth = () => {
    return calendarState.dateObject.daysInMonth()
  }

  const year = () => {
    return calendarState.dateObject.format("Y")
  }

  const currentDay = () => {
    return calendarState.dateObject.format("D")
  }

  const firstDayOfMonth = () => {
    let dateObject = calendarState.dateObject
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d") // Day of week 0...1..5...6
    return firstDay
  }
  console.log('firstDayOfMonth: ', firstDayOfMonth())

  const endDayOfMonth = () => {
    let dateObject = calendarState.dateObject
    let endDay = moment(dateObject)
      .endOf("month")
      .format("d") // Day of week 0...1..5...6
    return endDay
  }
  console.log('endDayOfMonth: ', endDayOfMonth())
  const month = () => {
    return calendarState.dateObject.format("MMM")
  }

  const getPrevDaysInMonth = () => {
    const prevMonth = Number(moment().month(month()).format('MM')) - 1
    return moment(`${year()}-${prevMonth < 1 ? 12 : prevMonth}`, 'YYYY-MM').daysInMonth()
  }
  console.log('getPrevDaysInMonth: ', getPrevDaysInMonth())

  const getNextDaysInMonth = () => {
    const nextMonth = Number(moment().month(month()).format('MM')) + 1
    return moment(`${year()}-${nextMonth > 12 ? 1 : nextMonth}`, 'YYYY-MM').daysInMonth()
  }
  console.log('getNextDaysInMonth: ', getNextDaysInMonth())

  const setMonth = (e, val) => {
    e.stopPropagation()
    const monthFullName = moment().month(val.title).format('MMMM')
    let monthNo = calendarState.allmonths.indexOf(monthFullName)
    let dateObject = Object.assign({}, calendarState.dateObject)
    dateObject = moment(dateObject).set("month", monthNo)

    setCalendarState({
      ...calendarState,
      dateObject: dateObject,
    })
  }

  const renderMonthDropdown = () => {
    const months = [{ items: moment.monthsShort().map(data => ({title: data})) }]

    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={months}  
        value={{title: month()}}
        onSelect={setMonth}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={month()}
        allowClear={false}
      />
    )
  }

  const setYear = (e, val) => {
    e.stopPropagation()
    let dateObject = Object.assign({}, calendarState.dateObject)
    dateObject = moment(dateObject).set("year", val.title || year())

    setCalendarState({
      ...calendarState,
      dateObject: dateObject,
    })
  }

  const getDates = (startDate, stopDate) => {
    var dateArray = []
    var currentDate = moment(startDate)

    var stopDate = moment(stopDate)
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"))
      currentDate = moment(currentDate).add(1, "year")
    }
    return dateArray
  }

  const renderYearDropdown = () => {
    const nextTen = moment()
      .set("year", year())
      .add(12, 'year')
      .format("Y")
    const prevTen = moment()
    .set("year", year())
    .subtract(10, 'year')
    .format("Y")

    const nextTenYear = getDates(year(), nextTen).map(data => ({title: data}))

    const prevTenYear = getDates(prevTen, year()).map(data => ({title: data}))
    prevTenYear.pop()

    const twentyYear = [{items: [...prevTenYear, ...nextTenYear]}]

    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={twentyYear}  
        value={{title: year()}}
        onSelect={setYear}
        endIcon={<ChevronDown className='stroke-current text-secondary-800' size='sm' />}
        placeholder={year()}
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
    })
  }


  const onDayClick = (e, d) => {
    setCalendarState({
      ...calendarState,
      selectedDay: d
    })
  }

  const renderCalendar = () => {
    let weekdayshortname = weekdayshort.map(day => {
      return <th key={day}>{day}</th>
    })
  
    let firstBlanks = []
    let firstDays = getPrevDaysInMonth() - (firstDayOfMonth() - 1)
    for (let i = 0; i < firstDayOfMonth(); i++) {
      firstBlanks.push(
        <td key={`${firstDays}-firstDays`} className={`calendar-day text-secondary-400`}>
          <span>
            {firstDays}
          </span>
        </td>
      );
      firstDays++
    }

    let endBlanks = []
    let endDays = 1
    for (let i = endDayOfMonth(); i < 6; i++) {
      endBlanks.push(
        <td key={`${endDays}-endDays`} className={`calendar-day text-secondary-400`}>
          <span>
            {endDays}
          </span>
        </td>
      );
      endDays++
    }

    let _daysInMonth = []
    for (let d = 1; d <= daysInMonth(); d++) {
      let _currentDay = d == currentDay() ? "today border-secondary-400" : ""
      // let selectedClass = (d == calendarState.selectedDay ? " selected-day " : "")
      _daysInMonth.push(
        <td key={d} className={`calendar-day ${_currentDay}`}>
          <span
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
        // let insertRow = cells.slice()
        rows.push(cells)
      }
    })

    let daysinmonth = rows.map((d, i) => {
      return <tr key={i}>{d}</tr>
    })

    // console.log('state: ', calendarState.current)

    return (
      <div className={`tail-datetime-calendar ${classes.calendarRoot} bg-secondary-50 shadow-light-20`}>
        <div className="navbar-container">
          <button className="navbar-button prev-button" onClick={onPrev}>
            <ArrowLeft size='md' />
          </button>
          <div className="navbar-dropdown-container">
            <div className="month-dropdown">
              {renderMonthDropdown()}
            </div>
            <div className="year-dropdown">
              {renderYearDropdown()}
            </div>
          </div>
          <button className="navbar-button next-button" onClick={onNext}>
            <ArrowRight size='md' />
          </button>
        </div>
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

  return (
    <div>
      {renderCalendar()}
    </div>
  )
}

DatePicker.propTypes = {

}

DatePicker.defaultProps = {
}

export default DatePicker
