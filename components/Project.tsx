'use client'

import Image from 'next/image'
import React from 'react'

const Project = ({item}: any) => {


  return (
    <div 
        className='flex items-start justify-between 
        border-t-[.1px] relative
        -mt-[1.5vw] border-grey 
        pt-[1.5vw] pb-[6vw]'
    >
        <div className='w-2/3'>
            <h1 className='text-md leading-[2vw] capitalize'>
                {item.title}
            </h1>
        </div>
        <div className='flex items-center gap-[1.4vw]'>
            <p className='text-grey text-[.8vw]'>{item.time} </p>
            <div className='w-[.9vw]'>
                <svg fill="none" viewBox="0 0 15 15">
                    <path fill="currentColor" fill-rule="evenodd" d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <div 
            className='absolute w-[8vw] 
            h-[8vw]'
        >
            <Image 
                src={item.image} 
                alt='cover' 
                width={1000} 
                height={100} 
                className='w-full h-full 
                object-cover rounded-full'
            />
        </div>
    </div>
  )
}

export default Project
