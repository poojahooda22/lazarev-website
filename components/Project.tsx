'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { gsap, Power4 } from 'gsap';


const Project = ({item}: any) => {

    useEffect(() => {
        let rotate: number = 0;
        let diffrot: number = 0;
        const list: NodeListOf<Element> = document.querySelectorAll('.right-elem');
    
        list.forEach((el: Element) => {
            el.addEventListener('mousemove', function(this: Element, event: Event) {
                const dets = event as MouseEvent;
                const diff: number = dets.clientY - (el.getBoundingClientRect().top);
                diffrot = dets.clientX - rotate;
                rotate = dets.clientX;
                gsap.to((this as HTMLElement).querySelector(".picture"), {
                    opacity: 1,
                    ease: Power4.easeOut,
                    top: diff,
                    left: dets.clientX,
                    rotate: gsap.utils.clamp(-20, 20, diffrot * 0.2),
                });
            });
            el.addEventListener('mouseleave', function(this: Element) {
                gsap.to((this as HTMLElement).querySelector(".picture"), { opacity: 0, ease: 'power4.out', duration: 0.5 });
            });
        });
    }, []);
   

  return (
    <div
        className='right-elem flex items-start 
        justify-between overflow-hidden
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
            <p className='text-grey text-[.8vw]'>
                {item.time} 
            </p>
            <div className='w-[.9vw]'>
                <svg fill="none" viewBox="0 0 15 15">
                    <path fill="currentColor" fill-rule="evenodd" d="M10.125 3.153H1.961V1H13.8v11.839h-2.152V4.675L2.722 13.6 1.2 12.078l8.925-8.925Z" clip-rule="evenodd"></path>
                </svg>
            </div>
        </div>
        <div 
            className='picture absolute w-[8vw] 
            h-[8vw]'
        >
            <Image 
                src={item.image} 
                alt='cover' 
                width={1000} 
                height={100} 
                className=' w-full h-full
                object-cover rounded-full'
            />
        </div>
    </div>
  )
}

export default Project
