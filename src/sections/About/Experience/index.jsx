'use client'
import { useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion, useInView } from "framer-motion";
import { textVariant } from "./animation";
import { experiences, technologies } from '@/constants';
import BallCanvas from '../../../components/BallCanvas';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './styles.module.scss';
import "react-vertical-timeline-component/style.min.css";
  
export default function Index() {

    const aboutExperiences = useRef(null);
    const isInView = useInView(aboutExperiences)
    const isBreakpoint = useMediaQuery(1024)

    return (
        <div className={styles.aboutExperience} data-scroll-section>

            <div className={styles.body}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>
                        What I have done so far
                    </p>
                    <h2 className={styles.sectionHeadText}>
                        Work Experience.
                    </h2>
                </motion.div>

                <div ref={aboutExperiences} className={styles.timelineContainer}>
                    <VerticalTimeline lineColor="rgb(240, 240, 241)" animate={true}>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={index}
                                contentStyle={{
                                    background: "rgb(240, 240, 241)",
                                    color: "#000",
                                }}
                                contentArrowStyle={{ borderRight: "7px solid  rgb(240, 240, 241)" }}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg }}
                                icon={
                                <div className={styles.experienceIcon}>
                                    <img
                                    src={experience.icon}
                                    alt={experience.company_name}
                                    className={styles.image}
                                    />
                                </div>
                                }
                                visible={isInView?true:false}
                                className={styles.experienceCard}
                            >
                                <div>
                                    <h3>{experience.title}</h3>
                                    <p>{experience.company_name}</p>
                                </div>
                        
                                <ul>
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`}>{point}</li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                {
                    isBreakpoint?null:
                    <>
                    <motion.div style={{paddingTop:'50px'}} variants={textVariant()}>
                        <p className={styles.sectionSubText}>
                            Technologies I have recently worked with
                        </p>
                        <h2 className={styles.sectionHeadText}>
                            Tech Stack.
                        </h2>
                    </motion.div>
                    <div className={styles.techContainer}>
                        {technologies.map((technology) => (
                            <div className={styles.techBall} key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                            </div>
                        ))}
                    </div>
                    </>
                }
            </div>
               
        </div>
    )
}