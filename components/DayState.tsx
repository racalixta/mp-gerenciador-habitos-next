import Image from 'next/image';
import React from 'react'

interface Props {
  day: boolean | undefined;
}

const DayState = ({ day }: Props) => {
  let image: [string, string, number?] = ["", "", 0];

  switch (day) {
    case true:
      image = ["/images/check.svg", "Check mark", 24];
      break;
    case false:
      image = ["/images/x.svg", "X mark", 24];
      break;
    default:
      image = ["/images/dot.svg", "dot mark", 12];
      break;
  }

  const [src, alt, size] = image;
  return (
    <div className='flex items-center justify-center h-9'>
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  )
}

export default DayState