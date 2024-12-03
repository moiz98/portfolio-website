'use client';
import React from 'react';
import styles from './styles.module.scss';

export default function Index(item) {

    return (
        <div className={styles.imageSingle} style={{backgroundColor:item.item.bgColor}} data-scroll-section>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.flexCol}>
                        <div className={styles.imageLaptop}>
                            {
                                item.item.srcType==='video'?
                                <video preload="true" loop autoPlay playsInline muted>
                                    <source src={item.item.srcLink} type="video/mp4" />
                                </video>
                                : <img className={styles.Image} src={item.item.srcLink} alt="" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
