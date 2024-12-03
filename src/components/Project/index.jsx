'use client';
import React from 'react'
import Link from 'next/link';
import styles from './styles.module.scss';

export default function Index({index, project, manageModal, allColumns=false }) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <Link href={`/work/${project.id}`}>
            { 
                allColumns? 
                <>
                    <h2>{project.title}</h2>
                    <p>{project.location}</p>
                    <p>{project.category}</p>
                    <p>{project.year}</p>
                </>
                :
                <>
                    <h2>{project.title}</h2>
                    <p style={{width: "30%"}}>{project.category}</p>
                </>
            }
            </Link>
        </div>

    )
}
