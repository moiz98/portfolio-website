'use client';
import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Index(images) {

    return (
        <div className={styles.imageTriplets} data-scroll-section>
        
            <div className={styles.container} >

                <div className={styles.row}>

                        <div className={styles.flexCol}>
                            <div data-scroll data-scroll-speed={-0.1} className={styles.device}>
                            
                                <div className={styles.singleImage}>
                                    <Image 
                                        src={images.images[0]}
                                        fill={true}
                                        alt="image"
                                    />
                                </div>  
                            </div>
                        </div>
                        
                        <div className={styles.flexCol}>
                            <div data-scroll data-scroll-speed={-0.2} className={styles.device}>
                            
                                <div className={styles.singleImage}>
                                    <Image 
                                        src={images.images[1]}
                                        fill={true}
                                        alt="image"
                                    />
                                </div>  
                            </div>
                        </div>
                       
                        <div className={styles.flexCol}>
                            <div data-scroll data-scroll-speed={-0.3} className={styles.device}>
                            
                                <div className={styles.singleImage}>
                                    <Image 
                                        src={images.images[2]}
                                        fill={true}
                                        alt="image"
                                    />
                                </div>  
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
    )
}
