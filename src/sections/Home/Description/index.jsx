import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { slideUp } from './animation';
import Rounded from '../../../components/RoundedButton';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import styles from './styles.module.scss';

export default function Index() {

    const phrase = "Crafting solutions that help brands lead in the digital age. Bold, innovative, and always ahead of the curve.";
    const phrase2 = "My blend of technical skills, creative design, and a diverse range of projects sets me apart in the digital space";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description} data-scroll-section>
            <div className={styles.body}>
                <div className={styles.row}>
                    <p>
                    {
                        phrase.split(" ").map( (word, index) => {
                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                    </p>
                    <motion.p variants={slideUp} animate={isInView ? "open" : "closed"}>{phrase2}</motion.p>
                </div>
                <div className={styles.row}>
                    <div className={styles.typewriterContainer}>
                        <p >I can help you with </p>
                        <Typewriter
                            skipAddStyles
                            options={{
                                strings: ['Development', 'Design', "System Architecture", "Database Design", "Smart Contracts", "Project Management"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div data-scroll data-scroll-speed={0.1}>
                        <Rounded className={styles.button}>
                            <Link href='/about'>About me</Link>
                        </Rounded>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
