import Image from 'next/image'
import React from 'react';
import {motion} from 'framer-motion';

function Marquee(item: any) {
  return (
    <div
      className='w-full flex items-center justify-center gap-[2vw]'
    > 
      <Image 
        src={item.item} 
        alt='Marquee' 
        width={32} height={32} 
        className='w-[5.5vw] h-[3vw]'
      />
    </div>
  )
}

export default Marquee
