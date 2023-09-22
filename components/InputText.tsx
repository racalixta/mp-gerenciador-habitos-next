import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <label className="text-lg font-sans font-light">{label}: </label>
      <input 
        type="text"
        className='p-2 font-sans text-xl rounded-md bg-neutral-800' 
        {...props} 
      />
    </div>
  )
}