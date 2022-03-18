import moment from "moment";

export const getWeekdayShort = () => (moment.weekdaysMin())

export const getAllMonths = () => (moment.months())

export const getDaysInMonth = (dateObject) => {
  return dateObject.daysInMonth()
}

export const getMonth = (dateObject) => {
  return dateObject.format("MMM")
}

export const getYear = (dateObject) => {
  return dateObject.format("Y")
}

export const getCurrentDay = (dateObject) => {
  return dateObject.format("D")
}

export const getFirstDayOfMonth = (dateObject) => {
  const firstDay = moment(dateObject)
    .startOf("month")
    .format("d")
  return firstDay
}

export const getEndDayOfMonth = (dateObject) => {
  const endDay = moment(dateObject)
    .endOf("month")
    .format("d")
  return endDay
}

export const getPrevDaysInMonth = (dateObject) => {
  const prevMonth = Number(moment().month(getMonth(dateObject)).format('MM')) - 1
  return moment(`${getYear(dateObject)}-${prevMonth < 1 ? 12 : prevMonth}`, 'YYYY-MM').daysInMonth()
}


export const getNextDaysInMonth = (dateObject) => {
  const nextMonth = Number(moment().month(getMonth(dateObject)).format('MM')) + 1
  return moment(`${getYear(dateObject)}-${nextMonth > 12 ? 1 : nextMonth}`, 'YYYY-MM').daysInMonth()
}

export const getDates = (startDate, stopDate) => {
  const _stopDate = moment(stopDate)
  let currentDate = moment(startDate)
  let dateArray = []

  while (currentDate <= _stopDate) {
    dateArray.push(moment(currentDate).format("YYYY"))
    currentDate = moment(currentDate).add(1, "year")
  }

  return dateArray
}

// export const setMonth
