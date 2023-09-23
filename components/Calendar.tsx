import React from 'react'
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
  const daysInMonth = getDaysInMonth(currentMonth, currentYear); 
  
  return(
    <section className="2-full rounded-md bg-neutral-800">

        <div className="flex justify-between mx-2 my-4 font-sans text-neutral-300">
          <button>
            <ArrowIcon className="stroke-neutral-300" />
          </button>

          <span>Setembro de 2023</span>

          <button >
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