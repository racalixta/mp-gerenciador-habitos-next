import ArrowIcon from "@/components/ArrowIcon";
import Calendar from "@/components/Calendar";
import { kv } from "@vercel/kv";
import Link from "next/link";



const Habit = async ({ params: { habit } }: { params: { habit: string}}) => {
  const decodedHabit = decodeURI(habit);
  const habitStreak: Record<string, boolean> | null = await kv.hget("habits", decodedHabit);
  
  return (
    <main className="container relative flex flex-col gap-4 px-12 pt-16 text-white  md:w-1/2">
      
      <h1 className="text-3xl font-semibold text-center font-display">
        {decodedHabit}
      </h1>

      <Link 
        href="/"
        className="flex items-center font-light font-sans text-sm md:text-lg text-neutral-300"
      >
        <ArrowIcon className="stroke-neutral-300" />
        Voltar
      </Link>

      <Calendar habit={decodedHabit} habitStreak={habitStreak} />

    </main>
  )
}

export default Habit