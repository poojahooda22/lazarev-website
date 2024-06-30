import Image from 'next/image'
import React from 'react'

function Marquee(item: any) {
  return (
    <div> 
      <Image 
        src={item.item} 
        alt='Marquee' 
        width={8} height={32} 
        className='w-[3.5vw] h-[2.5vw]'
      />
    </div>
  )
}

export default Marquee
