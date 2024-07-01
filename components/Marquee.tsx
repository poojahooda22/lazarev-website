import Image from 'next/image'
import React from 'react';
import {motion} from 'framer-motion';

function Marquee(item: any) {
  return (
    <div
      className='w-[2vw] '
    > 
      <Image 
        src={item.item} 
        alt='Marquee' 
        width={32} height={32} 
        className='w-[4.5vw] h-[2.5vw]'
      />
    </div>
  )
}

export default Marquee
