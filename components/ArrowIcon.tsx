import React from 'react'

const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path 
        d="M10.1439 7.67356C10.383 7.90793 10.383 8.29699 10.1486 8.53606L7.30332 11.3907H18.1455C18.4783 11.3907 18.7502 11.6626 18.7502 12.0001C18.7502 12.3376 18.4783 12.6095 18.1455 12.6095H7.30332L10.1533 15.4642C10.3877 15.7032 10.383 16.0876 10.1486 16.3267C9.90957 16.5611 9.52988 16.5611 9.29082 16.322L5.42832 12.4314C5.37676 12.3751 5.33457 12.3142 5.30176 12.2392C5.26895 12.1642 5.25488 12.0845 5.25488 12.0048C5.25488 11.8454 5.31582 11.6954 5.42832 11.5782L9.29082 7.68762C9.52051 7.44387 9.90488 7.43918 10.1439 7.67356Z" 
        fill="white"
      />
    </svg>
  )
}

export default ArrowIcon