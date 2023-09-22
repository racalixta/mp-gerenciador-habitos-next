import { kv } from "@vercel/kv";
import DayState from "../components/DayState";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {


  // const habits = {
  //   'Beber Água': {
  //     '2023-09-19': true,
  //     '2023-09-20': false,
  //     '2023-09-21': true,
  //   },
  //   'Estudar': {
  //     '2023-09-19': false,
  //     '2023-09-20': true,
  //     '2023-09-21': true,
  //   },
  // };

  const habits = await kv.hgetall("habits");

  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1));

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16 text-white text-center md:w-1/2">
      {habits === null || Object.keys(habits).length === 0 && 
      (
        <h1 className="mt-20 text-4xl font-lightfont-display">
          Você ainda não possui hábitos cadastrados
        </h1>
      ) }
      
      
    {
      habits != null && Object.entries(habits).map(([habit, habitStreak]) => (
        <div key={habit} className="flex flex-col gap-2">
          <section className="flex justify-between items-center">

            <span className="text-xl font-light font-sans">{habit}</span>

            <button>
              <Image 
                src="/images/trash.svg" 
                width={20} 
                height={20} 
                alt="Item de Lixeira" 
              />
            </button>

          </section>

          <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
            {sortedWeekDays.map((day) => (
              
              <div key={day}  className="flex flex-col last:font-bold last:text-emerald-400">
                <span className="font-sans text-xs text-cneter">
                  {day}
                </span>
                
                {/* day state */}
                <DayState day={undefined}  />
              </div>

            ))}
          </section>
          
          
          
        </div>
      ))
    }
      

      <div className="fixed flex justify-center bottom-10 left-1/2 -translate-x-1/2 w-full">

        <Link 
          href="/novo-habito"
          className="flex justify-center text-center bottom-10 w-2/3 md:w-1/3 font-display font-semibold text-2xl p-2 rounded-md text-neutral-900 bg-[#45EDAD] hover:bg-green-500 hover:text-white"
        >
          Novo Hábito
        </Link>

      </div>

    </main>
  )
}
