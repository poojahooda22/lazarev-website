
import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    const images = [
      [
        'https://lazarev.kiev.ua/la24/awww.svg',
        'https://lazarev.kiev.ua/la24/webby.svg',
        'https://lazarev.kiev.ua/la24/fwa.svg',
        'https://lazarev.kiev.ua/la24/forbes.svg',
        'https://lazarev.kiev.ua/la24/wf.svg',
        'https://lazarev.kiev.ua/la24/pmi.svg',
        'https://lazarev.kiev.ua/la24/adweek.svg',
        'https://lazarev.kiev.ua/la24/fwa.svg',
        'https://lazarev.kiev.ua/la24/forbes.svg',
        'https://lazarev.kiev.ua/la24/wf.svg',
        'https://lazarev.kiev.ua/la24/pmi.svg',
        'https://lazarev.kiev.ua/la24/adweek.svg',
      ],
      [ ]
    ]
    
  return (
    <div 
      className='w-full max-w-screen-xl mx-auto 
      -mt-[16vw] sm:-mt-[4vw] 
      sm:pb-[4vw] px-[5vw] sm:px-0
      flex items-center justify-center'
    >
      <div className='w-full sm:w-2/3 relative'>
        <div 
          className='w-[4vw] h-1/2 sm:w-[3vw] sm:h-1/2 
          absolute top-0 left-0 z-[2] 
          bg-gradient-to-r from-black to-transparent'
        ></div>
        {images.map((item, index) => 
          <Marquee key={index} imagesurl={item} direction={index === 0 ? "left": "right"} />
        )}
        <div className='w-[4vw] h-1/2 sm:w-[3vw] sm:h-2/3 absolute top-0 right-0 z-[2] bg-gradient-to-r from-transparent to-black'></div>
      </div>

    </div>
  )
}

export default Marquees
