'use client'

import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import ImageTriplets from '@/components/ImageTriplets';
import ImageLaptop from '@/components/ImageLaptop';
import ImageSingle from '@/components/ImageSingle';

export default function Index(project) {

    const lastItem = project.project?.description?.slice(-1)[0]
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.workDetailsContainer}>
            
            <div className={styles.workDetails} data-scroll-section>
                <div className={styles.body}>
                
                    {
                        project.project?.description?.map((item, index)=>{
                            if (item.type === "img") {
                                return (
                                    <motion.div key={index} data-scroll-section className={styles.imgWrap}>
                                        <div data-scroll data-scroll-speed={0.1} className={styles.imgContainer}>
                                            <Image 
                                            src={item.imageSrc}
                                            fill={true}
                                            alt="background"
                                            />
                                        </div>
                                    </motion.div>
                                )
                            } else if(item.type=="p") {
                                return <p key={index}>{item.text}</p>
                            } else if(item.type=="h4") {
                                return <h4 key={index}>{item.text}</h4>
                            } else if(item.type=="li") {
                                return <ul key={index}>
                                    { 
                                        item.list.map((listItem, listIndex)=>{
                                            return <li key={listIndex}><span>{listItem[0]}: </span>{listItem[1]}</li>
                                        })
                                    }
                                </ul> 
                            } else if(item.type=="imageLaptop") {
                                return <ImageLaptop key={index} item={item} />
                            } else if(item.type=="imageSingle") {
                                return <ImageSingle key={index} item={item} />
                            } else if(item.type=="imageTriplets") {
                                return <ImageTriplets key={index} images={item.images} />
                            }
                            else {
                                return <div key={index}><p>{item.type}</p></div>
                            }
                        })
                    }    
                </div>
            </div>
            {
                lastItem?.bgColor?
                    <motion.div style={{height, backgroundColor:lastItem.bgColor}} className={styles.circleContainer}>
                        <div className={styles.circle} style={{backgroundColor:lastItem.bgColor}}></div>
                    </motion.div>
                :
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
            }

        </div>
    )
}