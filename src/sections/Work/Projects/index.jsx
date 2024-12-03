'use client';
import { useState, useEffect, useRef } from 'react';
import Project from '@/components/Project';
import ProjectCard from '@/components/ProjectCard';
import { scaleAnimation } from './animation';
import { useScroll, useTransform, motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import styles from './styles.module.scss'
import { projects } from '@/constants';


export default function Index({ category, listStyle }) {

    const isBreakpoint = useMediaQuery(1024)

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

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])


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

    const [filteredProjects, setfilteredProjects] = useState([]);

    useEffect(() => {
        if(category !== "ALL")
            setfilteredProjects(projects.filter(p => p.category.toLowerCase().includes(category.toLowerCase())))
        else
            setfilteredProjects(projects)
    }, [category])
    

    return (
        <div ref={container} className={styles.projectsContainer}>

            <div onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
                <div className={styles.body}>
                    <div className={styles.container}>
                        {
                            isBreakpoint || listStyle=="GRID" ?
                                filteredProjects.map( (project, index) => {
                                    return <ProjectCard key={index} index={index} project={project} manageModal={manageModal}/>
                                })
                            :
                            <>
                                <div className={styles.title}>
                                    <h5>Project</h5>
                                    <h5>Location</h5>
                                    <h5>Services</h5>
                                    <h5>Year</h5>
                                </div>
                                {
                                    filteredProjects.map( (project, index) => {
                                        return <Project index={index} project={project} manageModal={manageModal} key={index} allColumns />
                                    })
                                }
                            </>
                        }
                    </div>
                </div>
                <>
                    { listStyle=="LIST"?
                        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
                            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
                            {
                                projects.map( (project, index) => {
                                const { coverImage, bgColor } = project
                                return <div className={styles.modal} style={{backgroundColor: bgColor}} key={`modal_${index}`}>
                                    <Image 
                                    src={coverImage}
                                    width={300}
                                    height={0}
                                    alt="image"
                                    />
                                </div>
                                })
                            }
                            </div>
                        </motion.div>
                        :null
                    }
                    <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                    <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                </>
            </div>

            <motion.div style={{height}} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>

        </div>

  )
}