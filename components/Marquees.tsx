import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    const data = [
      'https://lazarev.kiev.ua/la24/rd.svg',
      'https://lazarev.kiev.ua/la24/awww.svg',
      'https://lazarev.kiev.ua/la24/webby.svg',
      'https://lazarev.kiev.ua/la24/fwa.svg',
      'https://lazarev.kiev.ua/la24/forbes.svg'
    ]
  return (
    <div className=''>
      <div>
        <Marquee />
      </div>
    </div>
  )
}

export default Marquees
