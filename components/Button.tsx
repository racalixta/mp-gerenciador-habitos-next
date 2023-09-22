import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className='fixed text-center bottom-10 w-2/3 md:w-1/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-semibold text-wxl p-2 rounded-md hover:bg-green-500 hover:text-white'>
      {children}
    </button>
  )
}

export default Button