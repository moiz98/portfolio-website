'use client';
import styles from '../../page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../../../sections/Common/Preloader';
import Header from "@/sections/WorkDetails/Header";
import ProjectDetail from "@/sections/WorkDetails/ProjectDetail";
import NextProject from "@/sections/WorkDetails/NextProject";
import { projects } from '@/constants';

export default function WorkDetails ({ params }) {

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState({})
  const [nextProject, setNextProject] = useState({title: '', id: '', coverImage: '/images/placeholder.png'})

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 500)
      }
    )()
    let workId = params.workId;
    let projectIndex = projects.findIndex(p => p.id === workId)
    setProject(projects[projectIndex])
    if(projectIndex === projects.length-1){
      setNextProject(projects[0])
    } else {
      setNextProject(projects[projectIndex+1])
    }
  }, [nextProject])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader word={[project.title]} />}
      </AnimatePresence>
      <Header projectDetails={project} />
      <ProjectDetail project={project} />
      <NextProject nextProjectTitle={nextProject.title} nextProjectLink={`/work/${nextProject.id}`} nextProjectCover={nextProject.coverImage} />
    </main>
  )
}
