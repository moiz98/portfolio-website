'use client';
import React from 'react'
import Rounded from '../../components/RoundedButton';
import styles from './styles.module.scss';


export default function Index() {

    return (
        <Rounded className={styles.digitalBall}>
            <div className={styles.sphere}></div>
        </Rounded>
    )
}
