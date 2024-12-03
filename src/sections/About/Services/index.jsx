'use client'
import { useRef } from 'react';
import styles from './styles.module.scss'
import { motion, useInView } from 'framer-motion';
import { services } from "../../../constants";
import Tilt from 'react-parallax-tilt';
import { fadeIn } from './animation';

export default function Index() {

    const aboutServices = useRef(null);
    const isInView = useInView(aboutServices)
    
    return (
        <div ref={aboutServices} className={styles.aboutServices} data-scroll-section>

            <div className={styles.body} data-scroll-section>
                <div className={styles.row}>
                    <h2 className={styles.loading}>I can help you with ...</h2>
                </div>

                <div className={styles.cardContainer}>
                    {services.map((service,index) => (
                        <Tilt key={service.index} className={styles.card}>
                            <motion.div
                                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                                initial="hidden"
                                animate={isInView?"show":"hidden"}
                                className={styles.cardBorder}
                            >
                            <div
                                options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                                }}
                                className={styles.cardBody}
                            >
                                <h5>{service.index}</h5>
                                <div className={styles.stripe}></div>
                                <h4>{service.title}</h4>
                                <p>{service.description}</p>
                            </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>

        </div>
    )
}