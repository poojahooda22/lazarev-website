import React from 'react'
import Project from './Project'

const Projects = () => {

  const data = [
    {
      title: 'The Gestalt Principles of Design: How Design Forms visual perception',
      time: '6 min read',
      image: '../public/images/cover1.webp'
    },
    {
      title: 'Effective Design ',
      time: '3 min read',
      image: '../public/images/cover1.webp'
    }
  ]

  return (
    <div className='w-full h-[30vw] pb-[4vw]'>
      <div className='w-full h-full max-w-screen-xl mx-auto border-t-[.1px] border-grey pt-[1.5vw] flex'>
        <div className='w-1/2 h-full flex flex-col items-start justify-between'>
          <div className='w-1/2 pt-[1vw]'>
            <p className='w-1/2'>Exclusive insights into UI/UX and product design</p>
          </div>
          <div className='w-2/4'>
            <p className='text-sm leading-[1.3vw]'>
              Being a design studio at the forefront of digital transformation
              and product design, we take it upon ourselves to drop some knowledge,
              let out insider tips, and put our work on full display
            </p>
          </div>
        </div>
        <div className='w-1/2'>
          <Project />
        </div>
      </div>
    </div>
  )
}

export default Projects
