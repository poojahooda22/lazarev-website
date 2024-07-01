// import Image from 'next/image'
// import React from 'react';
// import {motion} from 'framer-motion';

// function Marquee(item: any) {
//   return (
//     <div
//       className='w-full flex items-center justify-center gap-[2vw]'
//     > 
//       <Image 
//         src={item.item} 
//         alt='Marquee' 
//         width={32} height={32} 
//         className='w-[5.5vw] h-[3vw]'
//       />
      
//     </div>
//   )
// }

// export default Marquee

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Marquee({imagesurl, direction}: {imagesurl: any, direction: any}) {
    return (
        <div className=' flex items-center justify-center gap-[10vw] sm:gap-[6vw] py-[2.5vw] sm:py-[1.5vw] overflow-hidden'>
            <motion.div 
                initial={{ x: direction === 'left' ? '0' : '-100%'}}
                animate={{ x: direction === 'left' ? '-100%' : '0'}}
                transition={{ease: 'linear', duration: 30, repeat: Infinity}}
                className='flex flex-shrink-0 gap-[10vw] sm:gap-[3vw]'>
                {imagesurl.map((url: string, index: number) => <Image key={index} 
                width={1000} height={100}  src={url} className='w-[20vw] sm:w-[4vw] flex-shrink-0' alt=""/>)}
                
            </motion.div>

            <motion.div 
                initial={{ x: direction === 'left' ? '0' : '-100%'}}
                animate={{ x: direction === 'left' ? '-100%' : '0'}}
                transition={{ease: 'linear', duration: 30, repeat: Infinity}}
                className='flex flex-shrink-0 gap-[10vw] sm:gap-[3vw]'>
                {imagesurl.map((url: string, index: number) =>
                 
                <Image width={1000} height={100} key={index} src={url} className='w-[20vw] sm:w-[4vw] flex-shrink-0' alt=""/>)}
                
            </motion.div>  
        </div>
    )
}

export default Marquee
