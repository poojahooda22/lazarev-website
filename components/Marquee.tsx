import Image from 'next/image'
import React from 'react'

function Marquee(item: any) {
  return (
    <div> 
      <Image 
        src={item.item} 
        alt='Marquee' 
        width={8} height={32} 
        className='w-[2vw] h-[2vw]'
      />
    </div>
  )
}

export default Marquee
