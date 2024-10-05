
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Marquee({imagesurl, direction}: {imagesurl: any, direction: any}) {
    return (
        <div className=' flex items-center justify-center gap-[10vw] sm:gap-[3vw] py-[1.5vw] sm:py-[1.5vw] overflow-hidden'>
            <motion.div 
              initial={{ x: direction === 'left' ? '0' : '-100%'}}
              animate={{ x: direction === 'left' ? '-100%' : '0'}}
              transition={{ease: 'linear', duration: 30, repeat: Infinity}}
              className='flex flex-shrink-0 gap-[10vw] sm:gap-[3vw]'>
              {imagesurl.map((url: string, index: number) => <Image key={index} 
              width={1000} height={100}  src={url} className='w-[18vw] sm:w-[3vw] flex-shrink-0' alt=""/>)}  
            </motion.div>

            <motion.div 
              initial={{ x: direction === 'left' ? '0' : '-100%'}}
              animate={{ x: direction === 'left' ? '-100%' : '0'}}
              transition={{ease: 'linear', duration: 30, repeat: Infinity}}
              className='flex flex-shrink-0 gap-[10vw] sm:gap-[3vw]'>
              {imagesurl.map((url: string, index: number) => 
              <Image width={1000} height={100} key={index} src={url} className='w-[18vw] sm:w-[3vw] flex-shrink-0' alt=""/>)}            
            </motion.div>  
        </div>
    )
}

export default Marquee
