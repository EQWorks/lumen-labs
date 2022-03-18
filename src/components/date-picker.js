import React, { useState } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {} from "../utils/helpers/calendar";

import { makeStyles } from '../utils/make-styles';
import { ArrowLeft, ArrowRight, ChevronDown } from "../icons";
import { DropdownSelect } from "../";
import Button from "./button";

const classes = makeStyles({
  calendarRoot: {
    '& .calendar-container': {
      '& .navbar-container': {
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

                  '& span': {
                    margin: 0
                  }
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
  endIcon: 'm-0'
})

const DatePicker = ({dateFormat}) => {
  const datePickerClasses = Object.freeze({
    root: 'relative flex flex-col pt-15px bg-secondary-50 shadow-light-20 border border-neutral-100 rounded-sm',
    calendarContainer: 'calendar-container border-b border-neutral-100',
    buttonContainer: 'button-container px-15px py-2.5 flex justify-between',
    disabledDays: 'calendar-day-disabled text-secondary-400 px-5px py-0 cursor-not-allowed',
  })

  const [calendarState, setCalendarState] = useState(
    {
      showCalendarTable: true,
      showMonthTable: false,
      dateObject: moment(),
      allmonths: moment.months(),
      showYearNav: false,
      selectedFirstDay: null,
      selectedEndDay: null,
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
      .format("d")
    return firstDay
  }

  const endDayOfMonth = () => {
    let dateObject = calendarState.dateObject
    let endDay = moment(dateObject)
      .endOf("month")
      .format("d")
    return endDay
  }

  const month = () => {
    return calendarState.dateObject.format("MMM")
  }

  const getPrevDaysInMonth = () => {
    const prevMonth = Number(moment().month(month()).format('MM')) - 1
    return moment(`${year()}-${prevMonth < 1 ? 12 : prevMonth}`, 'YYYY-MM').daysInMonth()
  }


  const getNextDaysInMonth = () => {
    const nextMonth = Number(moment().month(month()).format('MM')) + 1
    return moment(`${year()}-${nextMonth > 12 ? 1 : nextMonth}`, 'YYYY-MM').daysInMonth()
  }

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

  const renderCalendar = () => {
    let weekdayshortname = weekdayshort.map(day => {
      return <th key={day}>{day}</th>
    })
  
    let firstBlanks = []
    let firstDays = getPrevDaysInMonth() - (firstDayOfMonth() - 1)
    for (let i = 0; i < firstDayOfMonth(); i++) {
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
    for (let i = endDayOfMonth(); i < 6; i++) {
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
    for (let d = 1; d <= daysInMonth(); d++) {
      let selectedClass = ''
      if (d == calendarState.selectedFirstDay) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == calendarState.selectedEndDay) {
        selectedClass = "bg-interactive-500 text-interactive-50 rounded-sm"
      } 
      else if (d == currentDay()) {
        selectedClass = 'today border-secondary-400'
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

  const getFormatDay = (day) => {
    return moment(day).format(`${dateFormat}`)
  }

  const handleOnConfirm = (e) => {
    e.stopPropagation()
    const firstDay = `${month()} ${calendarState.selectedFirstDay} ${year()} ${moment().format('LTS')}`
    const endDay = `${month()} ${calendarState.selectedEndDay} ${year()} ${moment().format('LTS')}`

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
  dateFormat: PropTypes.string
}

DatePicker.defaultProps = {
  dateFormat: 'MM/DD/YYYY'
}

export default DatePicker
