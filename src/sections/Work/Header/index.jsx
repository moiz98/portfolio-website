'use client'

import styles from './styles.module.scss'
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import Rounded from '@/components/RoundedButton';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Index({ category, listStyle, setCategory, setListStyle }) {

    const isBreakpoint = useMediaQuery(1024)

    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.workHeader} data-scroll-section>
            
            <div className={styles.body}>

                <div className={styles.row}>
                    <div className={styles.flexCol}>
                        <h1>
                            <span>Crafting experiences that</span>
                            <span>inspire innovation.</span>
                        </h1>
                    </div>
                </div>
                
                <div className={styles.row}>
                    
                    <div className={styles.toggleRow}>
                        <Rounded onClick={()=>setCategory('ALL')} className={category=='ALL'?`${styles.button} ${styles.selected}`:`${styles.button}`} backgroundColor={category=='ALL'?'#1C1D20':'#455CE9'}>
                            <p>All</p>
                        </Rounded>
                        <Rounded onClick={()=>setCategory('DESIGN')} className={category=='DESIGN'?`${styles.button} ${styles.selected}`:`${styles.button}`} backgroundColor={category=='DESIGN'?'#1C1D20':'#455CE9'}>
                            <p>Design</p>
                        </Rounded>
                        <Rounded onClick={()=>setCategory('DEVELOPMENT')} className={category=='DEVELOPMENT'?`${styles.button} ${styles.selected}`:`${styles.button}`} backgroundColor={category=='DEVELOPMENT'?'#1C1D20':'#455CE9'}>
                            <p>Development</p>
                        </Rounded>
                    </div>

                    {
                        isBreakpoint?
                        null:
                        <div className={styles.gridRow}>
                            <Rounded onClick={()=>setListStyle('LIST')} className={listStyle=='LIST'?`${styles.button} ${styles.selected}`:`${styles.button}`} backgroundColor={listStyle=='LIST'?'#1C1D20':'#455CE9'}>
                                <p><svg width="20" height="20" viewBox="0 0 20 19"><g fill="currentColor" fillRule="evenodd"><path d="M0 6h20v1H0zM0 0h20v1H0zM0 12h20v1H0zM0 18h20v1H0z"></path></g></svg></p>
                            </Rounded>
                            <Rounded onClick={()=>setListStyle('GRID')} className={listStyle=='GRID'?`${styles.button} ${styles.selected}`:`${styles.button}`} backgroundColor={listStyle=='GRID'?'#1C1D20':'#455CE9'}>
                                <p><svg width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor" fillRule="nonzero"><path d="M8 0H0v8h8V0zM7 1v6H1V1h6zM8 12H0v8h8v-8zm-1 1v6H1v-6h6zM20 0h-8v8h8V0zm-1 1v6h-6V1h6zM20 12h-8v8h8v-8zm-1 1v6h-6v-6h6z"></path></g></svg></p>
                            </Rounded>
                        </div>
                    }

                </div>

            </div>

        </motion.main>
    )
}