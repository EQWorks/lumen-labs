import React, { useState } from "react";
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

import "./calendar.css";
import { makeStyles } from '../utils/make-styles';
import { ArrowLeft, ArrowRight, ArrowDown } from "../icons";
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
          margin: '0 .5rem',
          cursor: 'pointer',
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
  menu: 'z-50'
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

  const month = () => {
    return calendarState.dateObject.format("MMM")
  }

  const showMonth = (e, month) => {
    setCalendarState({
      ...calendarState,
      showMonthTable: !calendarState.showMonthTable,
      showYearNav: false,
      showCalendarTable: !calendarState.showCalendarTable
    })
  }

  const setMonth = month => {
    let monthNo = calendarState.allmonths.indexOf(month)
    let dateObject = Object.assign({}, calendarState.dateObject)
    dateObject = moment(dateObject).set("month", monthNo)
    setCalendarState({
      ...calendarState,
      dateObject: dateObject,
      showMonthTable: !calendarState.showMonthTable,
      showCalendarTable: true
    })
  }
  // console.log('dateObject: ', calendarState.dateObject)
  const MonthList = props => {
    let months = []
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            setMonth(data)
          }}
        >
          <span>{data}</span>
        </td>
      )
    })
    let rows = []
    let cells = []

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row)
      } else {
        rows.push(cells)
        cells = []
        cells.push(row)
      }
    })
    rows.push(cells)
    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>
    })

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    )
  }
  
  const showYearEditor = () => {
    setCalendarState({
      ...calendarState,
      showMonthTable: false,
      showYearNav: !calendarState.showYearNav,
      showCalendarTable: !calendarState.showCalendarTable
    })
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

  const setYear = year => {
    // alert(year)
    let dateObject = Object.assign({}, calendarState.dateObject)
    dateObject = moment(dateObject).set("year", year[Object.keys(year)[0]].title)
    setCalendarState({
      ...calendarState,
      dateObject: dateObject,
      showYearNav: !calendarState.showYearNav,
      showCalendarTable: true
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

  const YearTable = props => {
    let months = []
    const nextTen = moment()
      .set("year", props)
      .add(12, 'year')
      .format("Y")
    const prevTen = moment()
    .set("year", props)
    .subtract(10, 'year')
    .format("Y")

    const nextTenYear = getDates(props, nextTen).map(data => ({title: data}))
    console.log('nextTenYear: ', nextTenYear)
    const prevTenYear = getDates(prevTen, props).map(data => ({title: data}))
    prevTenYear.pop()
    console.log('prevTenYear: ', prevTenYear)
    const twentyYear = [{items: [...prevTenYear, ...nextTenYear]}]
    console.log('twentyYear: ', twentyYear)

    // nextTenYear.map(data => {
    //   months.push(
    //     <td
    //       key={data}
    //       className="calendar-month"
    //       onClick={e => {
    //         setYear(data)
    //       }}
    //     >
    //       <span>{data}</span>
    //     </td>
    //   )
    // })
    // let rows = []
    // let cells = []
  
    // months.forEach((row, i) => {
    //   if (i % 3 !== 0 || i == 0) {
    //     cells.push(row)
    //   } else {
    //     rows.push(cells)
    //     cells = []
    //     cells.push(row)
    //   }
    // })
    // rows.push(cells)
    // let yearlist = rows.map((d, i) => {
    //   return <tr>{d}</tr>
    // })
  
    // return (
    //   <table className="calendar-month">
    //     <thead>
    //       <tr>
    //         <th colSpan="4">Select a Year</th>
    //       </tr>
    //     </thead>
    //     <tbody>{yearlist}</tbody>
    //   </table>
    // )
    console.log('props: ', props.props)
    return (
      <DropdownSelect 
        classes={dropdownClasses}
        data={twentyYear}  
        defaultValue={{title: props.props}}
        onSelect={setYear}
        endIcon={<ArrowDown size='sm' />}
        placeholder={2022}
        multiSelect
      />
    )
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
  
    let blanks = []
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
  
    let _daysInMonth = []
    for (let d = 1; d <= daysInMonth(); d++) {
      let _currentDay = d == currentDay() ? "today border-secondary-400" : ""
      // let selectedClass = (d == calendarState.selectedDay ? " selected-day " : "")
      _daysInMonth.push(
        <td key={d} className={`calendar-day hover:text-error-500 ${_currentDay}`}>
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
  
    var totalSlots = [...blanks, ..._daysInMonth]
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
    // console.log('month: ', moment().month()+1)
    // console.log('year: ' , moment().year())
    // console.log('calendar: ', calendar(moment().month()+1, moment().year()))
    // console.log('state: ', calendarState.current)
    return (
      <div className={`tail-datetime-calendar ${classes.calendarRoot} bg-secondary-50 shadow-light-20`}>
        <div className="navbar-container bg-error-500">
          <button className="navbar-button prev-button" onClick={onPrev}>
            <ArrowLeft size='md' />
          </button>
          {console.log('calendarState: ', calendarState)}
          <div className="navbar-dropdown-container">
            <div className="month-dropdown" onClick={showMonth}>
              {month()}
            </div>
            <div className="year-dropdown" onClick={showYearEditor}>
              <YearTable props={year()}/>
            </div>
          </div>
          <button className="navbar-button next-button" onClick={onNext}>
            <ArrowRight size='md' />
          </button>
        </div>
        <div className="calendar-date calendar-container">
          { calendarState.showYearNav && <YearTable props={year()}/> }
          { calendarState.showMonthTable && <MonthList data={moment.months()}/> }
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
