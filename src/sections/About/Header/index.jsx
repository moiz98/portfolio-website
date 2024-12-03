'use client'

import styles from './styles.module.scss'
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import GlobeSpin from '../../../components/GlobeSpin';
import SphereSpin from '../../../components/SphereSpin';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Index() {
    
    const isBreakpoint = useMediaQuery(1024)

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.aboutHeader} data-scroll-section>
            
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.flexCol}>
                        <h1>
                            <span>Elevating brands through</span>
                            <span>digital innovation.</span>
                        </h1>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.flexCol}>
                        <div className={styles.stripe}></div>
                        { isBreakpoint?<SphereSpin />:<GlobeSpin /> }
                    </div>
                </div>

            </div>

        </motion.main>
    )
}