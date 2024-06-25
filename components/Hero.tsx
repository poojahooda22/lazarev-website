import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='w-full h-[100vh]'>
        <div   
            className='w-full h-full flex flex-col items-start px-[5vw] sm:px-0
            sm:items-center sm:justify-center mt-[10vw] sm:mt-0'
        >
            {/* // Tag line with H1 */}
            <div 
                className='uppercase tracking-tighter font-bold
                text-lg
                sm:text-xl  sm:leading-[8vw] sm:text-center'
            >
                <div className=''>
                    <h1 className='sm:inline-flex items-center'>AI & ML Pr<span className='sm:hidden'>o</span><span className='hidden sm:inline-block pl-2'>
                        <svg fill="none" viewBox="0 0 131 136" className="c-bttn__morph w-[6.5vw] h-[6.5vw] bg-green rounded-full"><path data-morph="end" fill="#fff" d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z" className="g-path"></path><path data-morph="start" fill="#fff" d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z" className="g-path" data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"></path></svg></span>duct</h1>
                </div>
                <div>
                    <h1 className=''>Design Agency</h1>
                </div>
            </div>


            {/* // p tag */}
            <div className='flex flex-col items-center justify-center text-center mt-[3vw]'>
                <p className='w-2/3 text-sm tracking-tighter leading-[1.3vw]'>
                    We partner AI & ML businesses, guiding them from series A to series D and beyond with our expertise in
                </p>
                <div className='w-full mt-[.5vw] flex items-center justify-center gap-2'>
                    <span className='text-sm border-[1px] border-white px-4 py-2 rounded-full'>brand design</span>
                    <span className='text-sm border-[1px] border-white px-4 py-2 rounded-full'>user experience</span>
                    <span>and</span>
                    <span className='text-sm border-[1px] border-white px-4 py-2 rounded-full'>digital product design</span>
                    <span>.</span>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Hero
