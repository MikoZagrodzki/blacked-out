"use client"
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lenis from 'lenis';

const Intro = dynamic(() => import('@/components/Intro'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer1'), {
  ssr: false,
});

export default function Home() {
  const [introLoaded, setIntroLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // To simulate that Intro component is loaded, use an effect inside Intro component to set this
  }, []);

  // Set introLoaded to true when the Intro component has mounted
  const handleIntroLoaded = () => {
    setIntroLoaded(true);
  };

  return (
    <main>
      <Intro onLoad={handleIntroLoaded} />
      {introLoaded && <Footer />}
    </main>
  );
}
