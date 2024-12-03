'use client';
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Magnetic from '../../components/Magnetic';
import styles from './styles.module.scss';
import { navLinks } from '@/constants';

export default function Index() {

    const pathname = usePathname();
    
    const [timeSpan, setTimeSpan] = useState();

    function getTime() {
        let date = new Date();
        let options = {timeZone: 'Asia/Karachi'};
        let eastCoastTime = date.toLocaleString('en-US', options);
        eastCoastTime = eastCoastTime.split(' '); // 8/22/2024, 5:42:24 PM
        let t = eastCoastTime[1].split(':')
        setTimeSpan(t[0]+':'+t[1]+' '+eastCoastTime[2]+' GMT+5');
    }

    useEffect(() => {
        setInterval(getTime, 1000);
    })
    

    return (
        <div className={pathname == '/contact'?`${styles.info}`:`${styles.info} ${styles.mt100}`}>
            <div>
                <span>
                    <h3>Version</h3>
                    <p>2024 © Edition</p>
                </span>
                <span>
                    <h3>Local Time</h3>
                    <p>{timeSpan}</p>
                </span>
            </div>
            <div>
                <span>
                    <h3>socials</h3>
                    <Magnetic>
                        <a href={navLinks.Linkedin}>Linkedin</a>
                    </Magnetic>
                </span>
                <Magnetic>
                    <a href={navLinks.Github}>Github</a>
                </Magnetic>
                <Magnetic>
                    <a href={navLinks.Twitter}>Twitter</a>
                </Magnetic>
                <Magnetic>
                    <a href={navLinks.Threads}>Threads</a>
                </Magnetic>
                <div className={styles.stripe}></div>
            </div>
        </div>
    )
}
