import DayState from "../components/DayState";
import Image from "next/image";

export default function Home() {
  const habits = {
    'Beber Água': {
      '2023-09-19': true,
      '2023-09-20': false,
      '2023-09-21': true,
    },
    'Estudar': {
      '2023-09-19': false,
      '2023-09-20': true,
      '2023-09-21': true,
    },
  };

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16 text-white text-center">
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
              {weekDays.map((day) => (
                
                <div key={day}  className="flex flex-col">
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

    </main>
  )
}
