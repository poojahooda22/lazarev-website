'use client'

import Cursor from '@/components/cursor/Index';
import Hero from '@/components/Hero';
import { useRef,  useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className="">
      <Cursor />
      <Hero />
    </main>
  );
}
