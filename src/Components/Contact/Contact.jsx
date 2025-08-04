import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import './Contact.css'

const Contact = () => {

    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })

    useEffect(() => {
        console.log(isInview)
    }, [isInview])

    return (
        <>
            <section className='section bg-dark Contact' id='Contact'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <motion.h2
                                    ref={ref}
                                    // initial={{ opacity: 0, x: -100 }}
                                    animate={isInview ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.2,
                                    }}
                                >Get In Touch</motion.h2>
                                <form action="#">
                                    <div className="row gy-4 gx-3 ">
                                        <motion.div
                                            ref={ref}
                                            // initial={{ opacity: 0, y: 100 }}
                                            animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 10,
                                                delay: 0.2,
                                            }}
                                            className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >Name</label>
                                                <input type="text" className='form-control shadow-none' name='name' />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            ref={ref}
                                            // initial={{ opacity: 0, y: 100 }}
                                            // animate={{ opacity: 1, y: 0 }}
                                            animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 10,
                                                delay: 0.4,
                                            }}
                                            className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >E-Mail</label>
                                                <input type="email" className='form-control shadow-none' name='email' />
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            ref={ref}
                                            // initial={{ opacity: 0, y: 100 }}
                                            // animate={{ opacity: 1, y: 0 }}
                                            animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 10,
                                                delay: 0.6,
                                            }}
                                            className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >Message</label>
                                                <textarea name="message" className='form-control shadow-none' rows={"3"}></textarea>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            ref={ref}
                                            // initial={{ opacity: 0, }}
                                            animate={isInview ? { opacity: 1, } : { opacity: 0, }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 10,
                                                delay: 0.8,
                                            }}
                                            className="col-12">
                                            <button type="button" className='btn btn-success'>Send Message</button>
                                        </motion.div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 ms-auto col-xl-4">
                            <motion.div
                                ref={ref}
                                // initial={{ opacity: 0, y: 100 }}
                                // animate={{ opacity: 1, y: 0 }}
                                animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.1,
                                }}
                                className="pb-3 d-none d-lg-block">
                                <img src="/images/cont.PNG" alt="contact-img" style={{ width: "450px" }} className='img-fluid rounded float-center' />
                                {/* <img src="/images/contact.png" alt="contact-img"  className='img-fluid ' /> */}
                            </motion.div>
                            <ul className='contact-info'>
                                <motion.li
                                    ref={ref}
                                    // initial={{ opacity: 0, y: 100 }}
                                    // animate={{ opacity: 1, y: 0 }}
                                    animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.2,
                                    }}
                                >
                                    <div className="icon bg-primary">
                                        < i className='bxr  bx-phone' style={{ Color: '#000000' }}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Phone</h5>
                                        <p>+91 8527015266</p>
                                    </div>
                                </motion.li>
                                <motion.li
                                ref={ref}
                                    // initial={{ opacity: 0, y: 100 }}
                                    // animate={{ opacity: 1, y: 0 }}
                                    animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.4,
                                    }}
                                >
                                    <div className="icon bg-success">
                                        < i className='bxr  bx-phone' style={{ Color: '#000000' }}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Mail</h5>
                                        <p>kshashank960@gmail.com</p>
                                    </div>
                                </motion.li>
                                <motion.li
                                ref={ref}
                                    // initial={{ opacity: 0, y: 100 }}
                                    // animate={{ opacity: 1, y: 0 }}
                                    animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10,
                                        delay: 0.6,
                                    }}
                                >
                                    <div className="icon bg-danger">
                                        < i className='bxr  bx-phone' style={{ Color: '#000000' }}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Phone</h5>
                                        <p>+91 8527015266</p>
                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact