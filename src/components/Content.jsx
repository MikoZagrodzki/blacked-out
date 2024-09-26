import React, { useEffect, useRef } from 'react'
import styles from './Scrolling.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Marquee from './Marquee';
import Link from 'next/link';
import useScreenSize from '@/hooks/useScreenSize';
import Image from 'next/image';
import { useTransform, motion, useScroll, scrollYProgress } from 'framer-motion'



const LINKS = [
  { title: 'Dextools', href: 'https://www.dextools.io/', icon:'/icons/dextools.png' },
  { title: 'dexscreener', href: 'https://dexscreener.com/ethereum/', icon:'/icons/dexscreener.png' },
  { title: 'WeChat', href: 'https://www.wechat.com/', icon:'/icons/wechat.png' },
  { title: 'TG', href: 'https://t.me/orangcoineth', icon:'/icons/telegram.png' },
  { title: 'X', href: 'https://x.com/', icon:'/icons/x.png' },
];
const CONTRACT = ''


export default function Content({ref}) {
  const forwardedRef = useRef(ref)
  const { isSmallScreen, windowSize } = useScreenSize(600);
  const { scrollYProgress } = useScroll({
      target: forwardedRef,
      offset: ['start end', 'end start']
  })
  const opacity = isSmallScreen?useTransform(scrollYProgress, [0.44,  0.55], ['0%', '100%']):useTransform(scrollYProgress, [0.5,  0.6], ['0%', '100%']);

  return (
    <div className='bg-[#ec7804] text-black  h-full w-full flex flex-col justify-end gap-0 sm:justify-between relative overflow-x-clip'>
        <Section1 forwardedRef={ref}/>
        <motion.h1 style={{opacity:opacity}} className='text-center text-xs uppercase font-custom font-bold px-2 md:text-xl xl:text-2xl sm:pb-4'>An orange-like character in surreal memes, rival to Meme Man. Known for deception and <s>untrustworthiness</s>, he seeks power and once stole the Octahedron of Transcendence.<br></br>Orang can transform into a car and rotate numbers. His unclear motives and shape-shifting abilities make him a complex antagonist in the bizarre world of surreal memes.</motion.h1>
        <Section2 />
    </div>
  )
}

const Section1 = ({ ref }) => {
  const forwardedRef = useRef(ref)
  return (
    <div className='pt-20 mt-20 h-2/3 justify-center flex items-end sm:items-start px-12'>
      {/* <Nav ref={forwardedRed}/> */}
      <Nav ref={forwardedRef}/>
    </div>
  );
};

const Section2 = () => {



    return (

        <Marquee/>

    )
}

const Nav = ({ref}) => {
  const forwardedRef = useRef(ref)

  const { isSmallScreen, windowSize } = useScreenSize(600);


  const { scrollYProgress } = useScroll({
      target: forwardedRef,
      offset: ['start end', 'end start']
  })


  const sectionEaseInAnimation = {
      hidden: { scale: 1.3, opacity: 0, },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: 'easeInOut',
        },
      },
      
    };

  //   const faqOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0, 1]);

  const X_OFFSET_COLUMN_1 = useTransform(scrollYProgress, [0.2,  0.6], ['-150%', '0%']);
  const X_OFFSET_COLUMN_2 = useTransform(scrollYProgress, [0.2,  0.6], ['150%', '0%']);
  const opacity = useTransform(scrollYProgress, [0.55,  0.6], ['0%', '100%']);
  const scale = useTransform(scrollYProgress, [0.5, 0.55], [' 0% ', ' 100% ']);

  const copyToClipboard = async (textToCopy) => {
      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };

//fav
  return (
    <div className='flex shrink-0 gap-20 sm:gap-40 mb-10 sm:mb-0 lg:mt-10 w-full uppercase'>
      {/* <motion.div className='flex flex-col gap-2' variants={sectionEaseInAnimation} initial='hidden' animate='visible' whileInView='visible' viewport={{ margin: '2250px' }} > */}
      <motion.div className='flex flex-col gap-2 w-1/2 sm:w-auto ' style={{x:X_OFFSET_COLUMN_1, opacity:opacity, scale: scale}} >
      <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
        <Link className='animate-bounce font-bold ' href='https://www.youtube.com/playlist?list=PLmZab0RJaLQz21vpeltsc8Q23bSCZuK8K' target='_blank' alt='Whos ORANG'>Whos ORANG</Link>
        <button className='text-left font-bold uppercase ' onClick={()=>copyToClipboard(CONTRACT)}>
          Copy CA
        </button>
      </motion.div>
      <motion.div className='flex flex-col gap-2 w-1/2 sm:w-auto  ' style={{x:X_OFFSET_COLUMN_2, opacity:opacity, scale: scale}}>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>Links</h3>
        {/* {LINKS.map((item, index)=>{return <Link key={index} href={item.href} target='_blank' alt={item.title}>{item.title}</Link>})} */}
        <div className='flex flex-row flex-wrap sm:flex-row gap-2 sm:gap-10'>
          {LINKS.map((item, index)=>{return <Link key={index} href={item.href} target='_blank' alt={item.title} className='hover:scale-105 hover:brightness-125 '>{!item.icon?item.title:<Image src={item.icon} height={isSmallScreen?25:40} width={isSmallScreen?25:40} alt={item.title}/>}</Link>})}
        </div>
      </motion.div>
    </div>
  );
}