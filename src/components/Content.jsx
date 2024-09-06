import React, { useEffect, useRef } from 'react'
import styles from './Scrolling.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Marquee from './Marquee';




export default function Content() {
  return (
    <div className='bg-[#ec7804] text-black pt-8 px-12 h-full w-full flex flex-col justify-end gap-40 sm:gap-0 sm:justify-between relative overflow-x-clip'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;
  
    useEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      })
      requestAnimationFrame(animate);
    }, [])
  
    const animate = () => {
      if(xPercent < -100){
        xPercent = 0;
      }
      else if(xPercent > 0){
        xPercent = -100;
      }
      gsap.set(firstText.current, {xPercent: xPercent})
      gsap.set(secondText.current, {xPercent: xPercent})
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    }

    return (
        // <div className='flex justify-between items-end font-sans'>
        //     <h1 className='text-[14vw] leading-[0.8] mt-10 font-custom font-bold'>$ORANG</h1>
        //     <p>©copyright</p>
        // </div>

        // <div className={styles.sliderContainer}>
        //     <div ref={slider} className={styles.slider}>
        //     {/* <p ref={firstText}>$ORANG$ORANG$ORANG  </p>
        //     <p ref={secondText}>$ORANG$ORANG$ORANG  </p> */}
        //     {/* <img ref={firstText} src='/medias/OrangScroll1.png' alt='orang'/> */}
        //     {/* <img ref={secondText} src='/medias/OrangScroll2.png' alt='orang'/> */}
        //     </div>
        // </div>

            <Marquee/>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
            <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <p>Whos ORANG</p>
                <p>Copy CA</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Links</h3>
                <p>Dextools</p>
                <p>Utility</p>
                <p>X</p>
            </div>
        </div>
    )
}