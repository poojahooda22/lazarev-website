import Image from 'next/image'
import React from 'react';
import {motion} from 'framer-motion';

function Marquee(item: any) {
  return (
    <motion.div
      initial={{ x: "0"}}
      animate={{ x: '-100%'}}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 2, repeat: Infinity}} 
    > 
      <Image 
        src={item.item} 
        alt='Marquee' 
        width={8} height={32} 
        className='w-[3.5vw] h-[2.5vw]'
      />
    </motion.div>
  )
}

export default Marquee
