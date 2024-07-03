import React from 'react'
import Project from './Project'

const Projects = () => {

  const data = [
    {
      title: 'The Gestalt Principles of Design: How Design Forms visual perception',
      time: '6 min read',
      image: '/images/cover1.webp'
    },
    {
      title: 'Effective Design Principles For Crypto Web Design',
      time: '3 min read',
      image: '/images/Cover Img.webp'
    },
    {
      title: 'How to design an interface users will trust in 2024?',
      time: '5 min read',
      image: '/images/_cover.webp'
    },
    {
      title: 'how AI influences design and the reciprocal impact of UX on AI-Driven Products',
      time: '5 min read',
      image: '/images/Cover3.webp'
    },

  ]

  return (
    <div className='w-full pb-[4vw]'>
      <div className='w-full  max-w-screen-xl mx-auto border-t-[.1px] border-grey pt-[1.5vw] flex'>
        <div className='w-1/2 h-[34vw] flex flex-col items-start justify-between'>
          <div className='w-1/2 pt-[1vw]'>
            <p className='w-1/2 text-[.8vw] leading-[1vw]'>Exclusive insights into<br/> UI/UX and product design</p>
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
          {data.map((item, index) => {
            return (
              <Project key={index} item={item} />
            )
          })}  
        </div>
      </div>
    </div>
  )
}

export default Projects
