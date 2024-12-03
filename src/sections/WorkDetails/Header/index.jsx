'use client'
import Link from 'next/link';
import styles from './styles.module.scss'
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import Rounded from '@/components/RoundedButton';

export default function Index(projectDetails) {

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.workHeader} data-scroll-section>
            
            <div className={styles.body}>

                <div className={styles.row}>
                    <div className={styles.flexCol}>
                        <h1>
                            <span>{projectDetails.projectDetails.title}</span>
                        </h1>
                    </div>
                </div>
                
                <div className={styles.row}>
                
                    <div className={styles.flexCol}>
                        <h5>Role / Services</h5>
                        <div className={styles.stripe}></div>
                        <p>{projectDetails.projectDetails.category}</p>
                    </div>

                    <div className={styles.flexCol}>
                        <h5>Client / Company</h5>
                        <div className={styles.stripe}></div>
                        <p>{projectDetails.projectDetails.client}</p>
                    </div>

                    <div className={styles.flexCol}>
                        <h5>Project Duration</h5>
                        <div className={styles.stripe}></div>
                        <p>{projectDetails.projectDetails.duration}</p>
                    </div>
                
                </div>
                
                <div className={styles.row}>
                
                    <div className={styles.flexCol}>
                        <h5>Tools</h5>
                        <div className={styles.stripe}></div>
                        <p>{projectDetails.projectDetails.techStack}</p>
                    </div>

                </div>
                {
                    projectDetails.projectDetails.liveSite?
                        <div data-scroll data-scroll-speed={0.1}>
                            <Rounded className={styles.button} backgroundColor='#334BD3'>
                                
                                <Link href={projectDetails.projectDetails.liveSite}>
                                    <p>
                                        Live Site
                                        <span>
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up-right" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></g></svg>
                                        </span>
                                    </p>
                                </Link>
                            </Rounded>
                        </div>
                    :null
                }


            </div>

        </motion.main>
    )
}