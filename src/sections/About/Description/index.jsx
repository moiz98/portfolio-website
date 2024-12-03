'use client'
import { useRef } from 'react';
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { slideUp } from './animation';
import styles from './styles.module.scss'


export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const rotate = useTransform(scrollYProgress, [0, 1], [-120, 0])

    const description = useRef(null);
    const isInView = useInView(description)

    const aboutMeText = "Driven by a strong passion for technology, I am a seasoned software engineer with over 4 years of experience, specializing in web and blockchain development. I hold a Bachelor's degree in Computer Science from FAST-NUCES and have honed my skills in leading projects from concept to successful delivery. My career path has led me through diverse roles, primarily as a freelancer and the former CTO of a web3 startup, where I’ve driven innovation and delivered impactful solutions.";

    return (
        <div ref={container} className={styles.aboutDescription} data-scroll-section>
            <div className={styles.body}>
                    <div className={styles.row}>
                        <div className={styles.flexCol}>
                            
                            <div className={styles.row}>
                                <div className={`${styles.flexCol} ${styles.arrow}`}>
                                    <motion.svg style={{rotate, scale: 2}} width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="black"/>
                                    </motion.svg>
                                </div>
                                <div ref={description} className={`${styles.flexCol} ${styles.aboutText}`}>
                                    <p>
                                    {
                                        aboutMeText.split(" ").map( (word, index) => {
                                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                                        })
                                    }
                                    </p>
                                    <span className={styles.loading}>Always Learning ...</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.flexCol}>
                            <div className={styles.imageContainer}>
                                <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/profilePic_2.png`}
                                />
                            </div>
                        </div>
                    </div>               
            </div>
        </div>
    )
}