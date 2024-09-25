import React, { useEffect, useRef } from "react";
import MarqueeItem from "./MarqueeItem";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import styles from './Scrolling.module.css'



const Marquee = () => {
  const upperMarquee = [
    "/marquee/marque1.png",
    "/marquee/marque2.png",
    "/marquee/marque3.png",
    "/marquee/marque4.png",
    "/marquee/marque5.png",
    "/marquee/marque6.png",
    "/marquee/marque7.png",
    "/marquee/marque8.png",
    "/marquee/marque9.png",
    "/marquee/marque10.png",
    "/marquee/marque11.png",
    "/marquee/marque12.png",
    "/marquee/marque13.png",
    "/marquee/marque14.png",
    "/marquee/marque15.png",
    "/marquee/marque16.png",
  ];

  const lowerMarquee = [
    "/marquee/marque1.png",
    "/marquee/marque2.png",
    "/marquee/marque3.png",
    "/marquee/marque4.png",
    "/marquee/marque5.png",
    "/marquee/marque6.png",
    "/marquee/marque7.png",
    "/marquee/marque8.png",
    "/marquee/marque9.png",
    "/marquee/marque10.png",
    "/marquee/marque11.png",
    "/marquee/marque12.png",
    "/marquee/marque13.png",
    "/marquee/marque14.png",
    "/marquee/marque15.png",
    "/marquee/marque16.png",


  ];

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
    <div className="w-full mx-0 flex flex-col h-1/4 justify-start sm:h-1/2 pb-10 sm:pb-0 ">
      <MarqueeItem images={upperMarquee} from={'-5%'} to={"-120%"} />
      <MarqueeItem images={upperMarquee} from={"-100%"} to={"100%"} />
      {/* <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} /> */}
    </div>
  );
};

export default Marquee;