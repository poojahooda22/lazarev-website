'use client'

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
      Hello
    </main>
  );
}
