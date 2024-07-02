import React from 'react'

const Project = () => {
  return (
    <div className='flex items-start justify-between'>
        <div className='w-2/3'>
            <h1 className='text-md leading-[2vw]'>The Gestalt Principles of Design: 
                How Design Forms visual perception
            </h1>
        </div>
        <div className='flex items-center gap-[1.4vw]'>
            <p className='text-grey text-[.8vw]'>6 min read </p>
            <div className='w-[.9vw]'>
                <svg fill="none" viewBox="0 0 15 15">
                    <path fill="currentColor" fill-rule="evenodd" d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Project
