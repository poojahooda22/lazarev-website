import React, { useEffect, useState } from 'react'
import Button from '../Button/Index'
import style from './Style.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    const [isActive, setIsActive] = useState(false);

    const data = [
        'Case studies', 
        'Areas of Expertise', 
        'UI UX Design', 
        'Product Design',
        'Design Process', 
        'About Agency'
    ]

    let tl = gsap.timeline()

    const handleMove = () => {
        tl.to('.navBottom', {
            bottom: '-170%',
            height: '170%'
        })
        tl.to('.navElem h5', {
           display: 'block',
        })
        tl.fromTo('.navElem h5 span', {
            y: 20,
            stagger: {
                amount: 0.1
            }},{
                y: 0,
                stagger: {
                    amount: 0.1
                }
            }
        )
    }

    const handleLeave =  () => {
        tl.to('.navElem h5 span', {
            y: 20,
            stagger: {
                amount: -0.1
            }
        })
        tl.to('.navElem h5', {
            display: 'none',
         })
        tl.to('.navBottom', {
            bottom: '0%',
            height: '0%',
            ease: 'expo',
            duration: .1
        }, '-=.4')
    }

  return (
    <div 
        className='w-full fixed top-0 
        sm:left-0 z-[9] 
        bg-black h-[2vw] lg:h-[11vh] 
        py-[5vw] px-[5vw] 
        sm:px-0 sm:py-[1.5vw]'
    >
        <div 
            className='max-w-screen-xl mx-auto
            lg:flex lg:items-center 
            justify-center gap-[6vw]'
        >
            {/* //logo */}
            <div className='w-[28vw] sm:w-[8vw] '>
                <svg fill="none" viewBox="0 0 168 22">
                    <path fill="currentColor" d="M0 0v21.72h16.453v-5.468H6.421V0H0ZM43.437 17.276v4.445h20.878v-5.469H52.586L63.851 4.444V0H43.715v5.468h10.986L43.437 17.276Z"></path><path fill="currentColor" fill-rule="evenodd" d="M91.025 21.72 82.063 0h-7.815l-8.993 21.72h6.669l1.688-4.22h9.18l1.688 4.22h6.545ZM78.202 6.026l-2.54 6.349h5.08l-2.54-6.349ZM33.675 0l8.962 21.72h-6.545l-1.688-4.22h-9.18l-1.688 4.22h-6.669L25.86 0h7.815Zm-6.4 12.374 2.539-6.349 2.54 6.349h-5.08ZM93.023 21.72V0h10.789c4.926 0 10.084 1.79 10.084 8.335 0 3.308-1.328 5.37-3.273 6.6l4.132 6.786h-7.151l-3.137-5.185c-.219.007-.437.01-.655.01h-4.368v5.175h-6.421Zm9.823-10.518h-3.402V5.437h3.402l.482-.003c1.949-.022 4.24-.047 4.24 2.901 0 2.928-2.28 2.897-4.204 2.871-.177-.002-.35-.004-.518-.004Z" clip-rule="evenodd"></path><path fill="currentColor" d="M124.321 13.3v3.076h12.509v5.345h-18.868V0h18.466v5.344h-12.107V8.41h10.918v4.89h-10.918ZM146.838 21.72 138.78 0h6.618l5.269 15.003L156.085 0h6.359l-8.089 21.72h-7.517ZM161.719 21.007c.68.662 1.516.993 2.505.993.99 0 1.825-.331 2.505-.993.681-.662 1.021-1.5 1.021-2.513 0-1.055-.34-1.893-1.021-2.514-.68-.641-1.515-.962-2.505-.962-.989 0-1.825.321-2.505.962-.68.62-1.021 1.459-1.021 2.514 0 1.013.341 1.851 1.021 2.513Z"></path>
                </svg>
            </div>
                {/* center */}
                <div 
                    onMouseEnter={handleMove}
                    onMouseLeave={handleLeave} 
                    className='h-6 cursor-pointer'
                >            
                    <div 
                        className={`listNav ${style.listNav} hidden 
                        sm:flex 
                        items-start whitespace-nowrap
                        gap-[2vw] text-xs relative z-[2]
                        font-semibold tracking-tighter leading-none`}
                    >
                        <div className={`navElem ${style.navElem}`}>
                            <h3>Case Studies</h3>
                        </div>
                        <div className={`navElem ${style.navElem}`}>
                            <h3>Areas of expertise</h3>
                            <h5><span>🔥 AI & ML</span></h5>
                            <h5><span>Fin Tech</span></h5>
                            <h5><span>Real Estate</span></h5>
                            <h5><span>E-commerce</span></h5>
                            <h5><span>Web3</span></h5>
                        </div>
                        <div className={`navElem ${style.navElem}`}>
                            <h3>UI UX design</h3>
                            <h5><span>UX audit</span></h5>
                            <h5><span>UI design</span></h5>
                            <h5><span>UX design</span></h5>
                            <h5><span>UX research</span></h5>
                        </div>
                        <div className={`navElem ${style.navElem}`}>
                            <h3>Product design</h3>
                            <h5><span>SaaS</span></h5>
                            <h5><span>Web App</span></h5>
                            <h5><span>mobile app</span></h5>
                            <h5><span>website</span></h5>                   
                        </div>
                        <div className={`navElem ${style.navElem}`}>
                            <h3>Design process</h3>
                            <h5><span>MVP</span></h5>
                            <h5><span>Relaunch</span></h5>                
                        </div>
                        <div className={`navElem ${style.navElem}`}>
                            <h3>About agency</h3>
                            <h5><span>Our Story</span></h5>
                            <h5><span>Client&apos;s Feedback</span></h5>
                            <h5><span>Careers</span></h5>       
                            <h5><span></span></h5>       
                            <h5><span>News</span></h5>                       
                        </div>
                    </div>
                </div>
                <div 
                    className={`hidden sm:inline-block absolute 
                    navBottom ${style.navBottom} 
                    w-[72.8%] h-[0%] text-[.7vw] bg-black z-[1]`}
                >  
                </div>
                <div className='hidden sm:inline-block'>
                    {/* button */}
                    <Button />
                </div> 
            </div>
            
         
    </div>
  )
}

export default Header
