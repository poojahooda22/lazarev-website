import Image from 'next/image'
import React from 'react'

function Marquee(item: any) {
  return (
    <div> 
      {item.map((url: string, index: number) => {
        return (
          <div key={index}>
            <Image src={url} alt='Marquee' width={100} height={100} />
          </div>
        )
      })}
    </div>
  )
}

export default Marquee
