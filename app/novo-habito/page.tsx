import { kv } from "@vercel/kv";
import Button from '@/components/DeleteButton'
import { InputText } from '@/components/InputText'
import Link from 'next/link';
import React from 'react'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const NewHabit = () => {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");
    await kv.hset("habits", {[habit as string]: {}})
    
    revalidatePath("/");
    redirect("/");
  }

  return (
    <main className="container relative flex flex-col items-center gap-8 px-12 pt-16 text-white">

      <h1 className="text-4xl font-light  font-display">
        Novo Hábito
      </h1>

      <form action={newHabit} className="flex flex-col gap-4 mt-4 w-full md:w-1/3">
        <InputText label="Hábito" id="habit" name="habit"  />

        <div className="fixed flex flex-col gap-4 items-center bottom-10 left-1/2 -translate-x-1/2 w-full">
          <Button>Cadastrar</Button>

          <Link 
            href="/" 
            className='flex justify-center text-center bottom-10 w-2/3 md:w-1/3 font-display font-semibold text-2xl p-2 rounded-md text-red-400 bg-neutral-800 border-2 border-red-400 hover:bg-red-400 hover:text-white'
          >
            Cancelar
          </Link>
        </div>

      </form>


    </main>
  )
}

export default NewHabit