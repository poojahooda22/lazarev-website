import React from 'react'
import Marquee from './Marquee'

function Marquees() {

  const data = [
    'https://lazarev.kiev.ua/la24/rd.svg',
    'https://lazarev.kiev.ua/la24/awww.svg',
    'https://lazarev.kiev.ua/la24/webby.svg',
    'https://lazarev.kiev.ua/la24/fwa.svg',
    'https://lazarev.kiev.ua/la24/forbes.svg',
    'https://lazarev.kiev.ua/la24/wf.svg',
    'https://lazarev.kiev.ua/la24/pmi.svg',
    'https://lazarev.kiev.ua/la24/adweek.svg'
  ]

  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      <div className='flex items-center justify-center gap-4'>
        {data.map((item, index) => 
          <Marquee key={index} item={item} 
          />)}
      </div>
    </div>
  )
}

export default Marquees
