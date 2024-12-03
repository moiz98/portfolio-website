'use client'
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { scaleAnimation } from './animation';
import { useScroll, motion, useTransform } from 'framer-motion';
import Rounded from '@/components/RoundedButton';
import Footer from '@/components/Footer';
import styles from './styles.module.scss';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Index({nextProjectTitle, nextProjectLink, nextProjectCover}) {

    const isBreakpoint = useMediaQuery(1024)

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const yReverse = useTransform(scrollYProgress, [0, 1], [0, -100]);
    
    const [modal, setModal] = useState({active: false, index: 0})
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    let xMoveContainer = useRef(null);
    let yMoveContainer = useRef(null);
    let xMoveCursor = useRef(null);
    let yMoveCursor = useRef(null);
    let xMoveCursorLabel = useRef(null);
    let yMoveCursorLabel = useRef(null);

    useEffect( () => {
        //Move Container
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
        //Move cursor
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
        //Move cursor label
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
    }, [])

    const moveItems = (x, y) => {
        xMoveContainer.current(x)
        yMoveContainer.current(y)
        xMoveCursor.current(x)
        yMoveCursor.current(y)
        xMoveCursorLabel.current(x)
        yMoveCursorLabel.current(y)
    }

    const manageModal = (active, index, x, y) => {
        moveItems(x, y)
        setModal({active, index})
    }

    return (
        <motion.div style={{y}} ref={container} className={styles.nextProject}>
            <div className={styles.body}>
                
                <div className={styles.container}>
                    {
                        isBreakpoint ?
                        <Link href={nextProjectLink} className={styles.row}>
                            <div className={styles.flexCol}>
                                <p>Next Case</p>
                                <h2>{nextProjectTitle}</h2>
                            </div>
                            <motion.div style={{y:yReverse}} className={styles.overlayImage}>
                                <Image 
                                    src={nextProjectCover}
                                    fill={true}
                                    alt="image"
                                    priority={true}
                                />
                            </motion.div>
                        </Link>
                        :
                        <Link href={nextProjectLink} className={styles.row} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}}>
                            <div className={styles.flexCol}>
                                <p>Next Case</p>
                                <h2>{nextProjectTitle}</h2>
                            </div>
                            <div className={styles.overlayImage}>
                                <Image 
                                    src={nextProjectCover}
                                    fill={true}
                                    alt="image"
                                    priority={true}
                                />
                            </div>
                            <>
                                <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                                <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                            </>
                        </Link>
                    }
                    <div className={styles.row}>
                        <div className={styles.flexCol}>
                        <div className={styles.stripe}></div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.flexCol}>
                            <Rounded className={styles.button}>
                                <Link href='/work'>All Work</Link>
                            </Rounded>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </motion.div>
    )
}