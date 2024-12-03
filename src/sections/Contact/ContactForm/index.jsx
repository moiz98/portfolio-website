'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import { useRef, useState } from 'react';
import { slideUp } from './animation';
import { useScroll, motion, useTransform } from 'framer-motion';
import Magnetic from '../../../components/Magnetic';
import Rounded from '../../../components/RoundedButton';
import Footer from '../../../components/Footer';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 150]);
    
    const ErrorMsg = "Some Error Occurred ... Send Your Message At connect@itsmemoiz.me";
    const [formData, setFormData] = useState({ name: "", email: "", organization: "", services: "", message: "" });
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState(ErrorMsg);

    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const submitForm = (e) => {
        e.preventDefault()

        const form = document.getElementById("contact-form");

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
        }).then(async (response) => {
            if (response.status == 200) {
                setFormData({ name: "", email: "", organization: "", services: "", message: "" })
                setFormSuccess(true)
                setFormSuccessMessage("Form Submitted Successfully !")
            } else {
                console.log(response);
                setFormSuccess(true)
                setFormSuccessMessage(ErrorMsg)
            }
        })
        .catch((error) => {
            console.log(error);
            setFormSuccess(true)
            setFormSuccessMessage(ErrorMsg)
        })
    }
    
    return (
        <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.contactForm} data-scroll-section>

            <div className={styles.body}>
                
                <div className={styles.title}>
                    <div className={styles.column}>
                        <h1>
                            <span>Let&apos;s start a </span>
                            <span>project together</span>
                        </h1>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.imageContainer}>
                            <Image 
                                fill={true}
                                alt={"image"}
                                src={`/images/profilePic_2.png`}
                            />
                        </div>
                        <motion.svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                        </motion.svg>
                    </div>
                </div>

                <div className={styles.formDetails}>
                    
                    <div className={styles.column}>
                        <form className={styles.form} id="contact-form" method="POST" action="https://api.web3forms.com/submit" onSubmit={submitForm}>
                            {/* Replace with your Access Key */}
                            <input type="hidden" name="access_key" value="2c9d42e6-49f6-4eb4-aca5-8beb30d5e9bf" />

                            <div className={`${styles.formCol} ${styles.borderTop}`}>
                                <h5>01</h5>
                                <label className={styles.formLabel}>What&apos;s your name?</label>
                                <input className={styles.formField} type='text' name="name" onChange={handleChange('name')} value={formData.name} required placeholder="John Doe *" />
                            </div>
                            
                            <div className={styles.formCol}>
                                <h5>02</h5>
                                <label className={styles.formLabel}>What&apos;s your email?</label>
                                <input className={styles.formField} type="email" name="email" onChange={handleChange('email')} value={formData.email} required placeholder="john@doe.com *" />
                            </div>
                            
                            <div className={styles.formCol}>
                                <h5>03</h5>
                                <label className={styles.formLabel}>What&apos;s the name of your organization?</label>
                                <input className={styles.formField} type="text" name="organization" onChange={handleChange('organization')} value={formData.organization} placeholder="John &amp; Doe ®" />
                            </div>
                    
                            <div className={styles.formCol}>
                                <h5>04</h5>
                                <label className={styles.formLabel}>What services are you looking for?</label>
                                <input className={styles.formField} type="text" name="services" onChange={handleChange('services')} value={formData.services} required placeholder="Web Design, Web Development, Blockchain, ... *" />
                            </div>
                    
                            <div className={styles.formCol}>
                                <h5>05</h5>
                                <label className={styles.formLabel}>Your message</label>
                                <textarea className={styles.formField} type="text" name="message" onChange={handleChange('message')} value={formData.message} required rows="8" placeholder="Hello Moiz, can you help me with ... *"></textarea>
                            </div>

                            {/* <!-- Honeypot Spam Protection --> */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                            
                            <motion.div onclick={submitForm} style={{x}} className={styles.buttonContainer}>
                                <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                    <input type="submit" name="submit" value="Send it!" className={styles.buttonText} />
                                </Rounded>
                            </motion.div>
                        </form>
                    </div>

                    <div className={styles.column}>
                        <h5>Contact Details</h5>
                        <Magnetic>
                            <a href="mailto:connect@itsmemoiz.me">connect@itsmemoiz.me</a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://wa.me/923046059732">+92 304 6059732</a>
                        </Magnetic>
                    </div>
                </div>

                <div className={styles.SubmitMessage}>
                {
                    formSuccess?<Magnetic><p>{formSuccessMessage}</p></Magnetic>:null
                }
                </div>

                <Footer />
            </div>

            
        </motion.main>
    )
}