// import React from 'react'
// import Marquee from './Marquee'

// function Marquees() {

//   const data = [
//     'https://lazarev.kiev.ua/la24/rd.svg',
//     'https://lazarev.kiev.ua/la24/awww.svg',
//     'https://lazarev.kiev.ua/la24/webby.svg',
//     'https://lazarev.kiev.ua/la24/fwa.svg',
//     'https://lazarev.kiev.ua/la24/forbes.svg',
//     'https://lazarev.kiev.ua/la24/wf.svg',
//     'https://lazarev.kiev.ua/la24/pmi.svg',
//     'https://lazarev.kiev.ua/la24/adweek.svg',
    
//   ]

//   return (
//     <div className='w-full max-w-screen-xl mx-auto -mt-[2vw] flex items-center justify-center pb-[4vw]'>
//       <div className='w-1/2 flex items-center justify-center gap-[2vw]'>
//         {data.map((item, index) => {
//           return (
//             <Marquee key={index} item={item} />
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Marquees

import React from 'react'
import Marquee from './Marquee'

function Marquees() {

    const images = [
        [
          'https://lazarev.kiev.ua/la24/awww.svg',
          'https://lazarev.kiev.ua/la24/webby.svg',
          'https://lazarev.kiev.ua/la24/fwa.svg',
          'https://lazarev.kiev.ua/la24/forbes.svg',
          'https://lazarev.kiev.ua/la24/wf.svg',
          'https://lazarev.kiev.ua/la24/pmi.svg',
          'https://lazarev.kiev.ua/la24/adweek.svg',
          'https://lazarev.kiev.ua/la24/fwa.svg',
          'https://lazarev.kiev.ua/la24/forbes.svg',
          'https://lazarev.kiev.ua/la24/wf.svg',
          'https://lazarev.kiev.ua/la24/pmi.svg',
          'https://lazarev.kiev.ua/la24/adweek.svg',
        ],
        [    
        ]
    ]
    
  return (
    <div className='w-full max-w-screen-xl mx-auto -mt-[4vw] pb-[18vw] flex items-center justify-center'>
      <div className='w-2/3 relative'>
        <div className='w-[3vw] h-1/2 absolute top-0 left-0 z-[2] bg-gradient-to-r from-black to-transparent'></div>
        {images.map((item, index) => 
          <Marquee key={index} imagesurl={item} direction={index === 0 ? "left": "right"} />
        )}
        <div className='w-[3vw] h-1/2 absolute top-0 right-0 z-[2] bg-gradient-to-r from-transparent to-black'></div>
      </div>
  
    </div>
  )
}

export default Marquees
