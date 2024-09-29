"use client"
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import Lenis from 'lenis';
import Head from "next/head";
import { useTransform, motion, useScroll } from "framer-motion";
import scrollBar from '../styles/hideScrollingBar.module.css'



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

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start end', 'end start']
  })

  return (
    <main ref={container} className={` ${scrollBar.hideScrollbar} overflow-x-clip `}>
      <Head>
        <meta property='og:title' content='STEALTH LAUNCH' />
        <title>STEALTH LAUNCH</title>
        <meta property='og:image' content='/images/orang.png' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Intro onLoad={handleIntroLoaded} />
      {introLoaded && <Footer ref={container}/>}
    </main>
  );
}
