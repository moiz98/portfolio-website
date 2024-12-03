'use client';
import styles from '../page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../sections/Common/Preloader';
import Header from "@/sections/Work/Header";
import Projects from "@/sections/Work/Projects";
import Contact from "@/sections/Common/Contact";

export default function Work() {

  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState('ALL');
  const [listStyle, setListStyle] = useState("LIST");
  
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 500)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader word={['Work']} />}
      </AnimatePresence>
      <Header category={category} setCategory={setCategory} listStyle={listStyle} setListStyle={setListStyle}  />
      <Projects category={category} listStyle={listStyle} />
      <Contact />
    </main>
  )
}
