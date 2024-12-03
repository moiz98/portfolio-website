'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Index({index, project, manageModal}) {

   const isBreakpoint = useMediaQuery(900)

   return (
      <div onMouseEnter={(e) => {manageModal?manageModal(true, index, e.clientX, e.clientY):null}} onMouseLeave={(e) => {manageModal?manageModal(false, index, e.clientX, e.clientY):null}} className={styles.card}>
         <Link href={`/work/${project.id}`}>
            <div className={styles.imageContainer} style={{backgroundColor: project.bgColor}}>
               <Image 
                  src={project.coverImage}
                  width={isBreakpoint?250:300}
                  height={isBreakpoint?200:250}
                  alt="image"
               />
            </div>
            <div className={styles.cardTitle}>
               <h2>{project.title}</h2>
               <div className={styles.stripe}></div>
            </div>

            <div className={styles.cardContent}>
               <p>{project.category}</p>
               <p className={styles.year}>{project.year}</p>
            </div>
         </Link>
      </div>
    )
}
