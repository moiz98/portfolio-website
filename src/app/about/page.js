'use client';
import styles from '../page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../sections/Common/Preloader';
import Header from '../../sections/About/Header';
import Description from '../../sections/About/Description';
import Services from '../../sections/About/Services';
import Experience from '../../sections/About/Experience';
import Contact from '../../sections/Common/Contact';

export default function Experiences() {

  const [isLoading, setIsLoading] = useState(true);
  
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
        {isLoading && <Preloader word={['About Me']} />}
      </AnimatePresence>
      <Header />
      <Description />
      <Services />
      <Experience />
      <Contact />
    </main>
  )
}
