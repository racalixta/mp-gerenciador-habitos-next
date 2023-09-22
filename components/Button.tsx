import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'danger';
}

const Button = ({ children, variant, ...props }: Props) => {

  let variantStyle = '';
  switch (variant) {
    case 'danger':
      variantStyle = 'text-red-400 bg-neutral-800 border-2 border-red-400 hover:bg-red-400 hover:text-white';
      break;
  
    default:
      variantStyle = 'text-neutral-900 bg-[#45EDAD] hover:bg-green-500 hover:text-white'
      break;
  }

  return (
    <button {...props} className={`flex justify-center text-center bottom-10 w-2/3 md:w-1/3 font-display font-semibold text-2xl p-2 rounded-md ${variantStyle}`}>
      {children}
    </button>
  )
}

export default Button