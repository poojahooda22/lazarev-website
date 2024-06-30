import Image from 'next/image'
import React from 'react'

function Marquee(item: any) {
  return (
    <div> 
      <Image 
        src={item.item} 
        alt='Marquee' 
        width={32} height={32} 
        className='w-[4vw]'
      />
    </div>
  )
}

export default Marquee
