import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#ef9975",
        src: "cobe_2.png"
    },
    {
        color: "#333841",
        src: "cobe_1.png"
    },
    {
        color: "#5a458dc7",
        src: "decentrai_1.png"
    },
    {
        color: "#21242b",
        src: "emplifai_1.png"
    }
]

const slider2 = [
    {
        color: "#333841",
        src: "emplifai_2.png"
    },
    {
        color: "#3d5061",
        src: "ethicalnode_1.png"
    },
    {
        color: "#d7d4cf",
        src: "niprm_1.png"
    },
    {
        color: "#626D6E",
        src: "throughput_1.png"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
            </motion.div>
            <motion.div style={{x: x2}} className={styles.slider}>
                {
                    slider2.map( (project, index) => {
                        return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                            <div key={index} className={styles.imageContainer}>
                                <Image 
                                fill={true}
                                alt={"image"}
                                src={`/images/${project.src}`}/>
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    )
}
