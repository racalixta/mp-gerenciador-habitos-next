'use client'

import React, { useEffect, useState } from 'react'
import ArrowIcon from './ArrowIcon'

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 1);
  const firstDayWeekDay = date.getDay();

  const numberOfEmptyDays = Array(firstDayWeekDay).fill(null);

  const days = [...numberOfEmptyDays];

  while(date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

const currentDate = new Date();
const currentDay =  currentDate.getDate();
const currentMonth =  currentDate.getMonth();
const currentYear =  currentDate.getFullYear();

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const Calendar = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(currentMonth, currentYear));

  useEffect(() => {
    setDaysInMonth(getDaysInMonth(month, year));
    setSelectedDate(new Date(year, month, 1));
  }, [month, year])

  function goToPreviousMonth() {
    if(month === 0) {
      setYear(year - 1);
      setMonth(11); 
    } else {
      setMonth(month - 1);
    }
  }

  function goToNextMonth() {
    if(month === 11) {
      setYear(year + 1);
      setMonth(0); 
    } else {
      setMonth(month + 1);
    }
  }

  function getFullDateString() {
    const monthName = selectedDate.toLocaleString("pt-Br", {month: "long"});
    const upperCaseMonthName = monthName[0].toUpperCase() + monthName.slice(1);
    return `${upperCaseMonthName} de ${selectedDate.getFullYear()}`;

  }


  return(
    <section className="2-full rounded-md bg-neutral-800">

        <div className="flex justify-between mx-2 my-4 font-sans text-neutral-300">
          <button onClick={() => goToPreviousMonth()}>
            <ArrowIcon className="stroke-neutral-300" />
          </button>

          <span>{getFullDateString()}</span>

          <button onClick={() => goToNextMonth()}>
            <ArrowIcon className="rotate-180 stroke-neutral-300" />
          </button>
        </div>

        <div className="grid grid-cols-7 w-full mt-2">
          {weekDays.map((day) => (
            <div key={day} className="flex flex-col items-center p-2">
              <span className="font-sans text-sm md:text-md font-light text-neutral-200">{day}</span>
            </div>
          ))}

          {daysInMonth.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <span className="font-sans text-sm md:text-md font-light text-neutral-200">
                {day?.getDate()}
              </span>
            </div>
          ))}
        </div>

      </section>
  )
}

export default Calendar