'use client'

import Cursor from '@/components/cursor/Index';
import Hero from '@/components/Hero';
import Marquees from '@/components/Marquees';
import Header from '@/components/Navbar/Index';
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
    <main className="bg-black text-white">
      <Cursor />
      <Header />
      <Hero />
      <Marquees />
    </main>
  );
}
