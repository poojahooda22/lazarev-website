import React, { useEffect } from 'react'
import style from './Style.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Button() {
  
  const handleMove = () => {
    gsap.to('.btnDiv', {
      left: '68%',
      borderRadius: '80px',
    })
  }

  const handleLeave = () => {
    gsap.to('.btnDiv', {
      left: '0%',
      borderRadius: '80px',
    })
  }

  useGSAP(() => {
  })

  return (
    <div className='cursor-pointer'>
      <div onMouseEnter={handleMove} onMouseLeave={handleLeave} 
        className={`button ${style.button} relative flex items-center uppercase pl-5`}>
        <div className={`btnDiv ${style.btnDiv}  absolute top-0 left-0 bg-green w-full h-full z-1`}></div>
        <span className='mr-2 text-xs font-semibold z-[2] whitespace-nowrap'>Let&apos;s Talk</span>
        <span className='z-[2]'><svg fill="none" viewBox="0 0 131 136" className="c-bttn__morph h-[2.6vw]  "><path data-morph="end" fill="#fff" d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z" className="g-path"></path><path data-morph="start" fill="#fff" d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z" className="g-path" data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"></path></svg></span>
      </div>
    </div>
  )
}

export default Button
