'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scale } from './animation';
import gsap from 'gsap';
import Nav from './nav';
import Rounded from '../RoundedButton';
import Magnetic from '../Magnetic';
import Link from 'next/link';
import styles from './styles.module.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import { navLinks } from '@/constants';

export default function Index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    const button = useRef(null);
    const isBreakpoint = useMediaQuery(769)

    useEffect( () => {
        if(isActive) setIsActive(false)
        setSelectedIndicator(pathname);
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    const menuClicked = () => {
        setIsActive(!isActive)
        if(isActive){
            gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"})
        } else{
            gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})
        }
    }

    return (
        <>
        <div ref={header} className={[navLinks.Home,navLinks.Contact].includes(pathname)?`${styles.header}`:`${styles.header} ${styles.dark}`}>
            <div className={styles.logo}>
                <Link href={navLinks.Home}>عبدالمعز</Link>
            </div>
            {isBreakpoint?
                <div className={styles.nav}>
                    <Magnetic>
                        <div onClick={menuClicked} className={styles.el}>
                            Menu
                        </div>
                    </Magnetic>
                </div>
                :
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <Magnetic>
                        <div onMouseEnter={() => {setSelectedIndicator(navLinks.Work)}}  className={styles.el}>
                            <Link href={navLinks.Work}>Work</Link>
                            <motion.div 
                                variants={scale}
                                animate={selectedIndicator==navLinks.Work ? "open" : "closed"} 
                                className={styles.indicator}>
                            </motion.div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div onMouseEnter={() => {setSelectedIndicator(navLinks.About)}} className={styles.el}>
                            <Link href={navLinks.About}>About</Link>
                            <motion.div 
                                variants={scale}
                                animate={selectedIndicator==navLinks.About ? "open" : "closed"} 
                                className={styles.indicator}>
                            </motion.div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div onMouseEnter={() => {setSelectedIndicator(navLinks.Contact)}} className={styles.el}>
                            <Link href={navLinks.Contact}>Contact</Link>
                            <motion.div 
                                variants={scale}
                                animate={selectedIndicator==navLinks.Contact ? "open" : "closed"} 
                                className={styles.indicator}>
                            </motion.div>
                        </div>
                    </Magnetic>
                </div>
            }
        </div>
        <div ref={button} className={styles.headerButtonContainer}>
            <Rounded onClick={menuClicked} className={`${styles.button}`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </>
    )
}
