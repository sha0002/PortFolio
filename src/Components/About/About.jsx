import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

function About() {
    const [isInview, setIsInview] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    // Use useEffect to control scroll behavior and prevent unnecessary re-renders
    useEffect(() => {
        if (inView) {
            setIsInview(true);
        }
    }, [inView]);

    return (
        <section id="About" className="about_wrapper About position-relative">
            <div className="overlay-main"></div>
            <div className="container  background">
                <div className="row align-items-center head-over">
                    <motion.div
                        animate={isInview ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 10,
                            delay: 0.2,
                        }}
                        ref={ref}
                        className="col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center"
                    >
                        <img src="/BackgroundImage/about-image.png" alt="about" className="w-75 img-fluid" />
                    </motion.div>

                    <div className="col-lg-6 mb-4 mb-lg-0 text-light">
                        <motion.h3
                            className="text-light"
                            animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 0.2,
                            }}
                        >
                            Let's <br /> Introduce about <br /> myself
                        </motion.h3>

                        <motion.p
                            animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4,
                            }}
                            className="text-capitalize"
                        >
                            Hello! I'm Shashank, 24 years old, a Frontend Developer based in India. I'm very passionate about the work that I do.
                        </motion.p>

                        <motion.p
                            animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 10,
                                delay: 0.6,
                            }}
                            className="text-capitalize"
                        >
                            I'm very much interested in coding and Front-end Development, and I love to learn new programming skills and technology. My dream is to become a successful Web Developer.
                        </motion.p>

                        <motion.div
                            animate={isInview ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5, duration: 2.5 }}
                            className="about-btn">
                            <a href="/pdf/SHA1.pdf" target='_black'><button type="button" className=''>View Resume</button></a>
                        </motion.div>

                        {/* <motion.button
                            animate={isInview ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5, duration: 2.5 }}
                            className="btn btn-success mt-4"
                        >
                            Download Resume
                        </motion.button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;























// import React, { useRef, useEffect } from 'react'
// import { motion, useInView } from 'motion/react'


// function About() {

//     const ref = useRef(null)
//     const isInview = useInView(ref, { once: true })

//     useEffect(() => {
//         console.log(isInview)
//     }, [isInview])


//     return (
//         <>
//             <section id='About' className='about_wrapper About'>
//                 <div className="container background">
//                     <div className="row align-items-center">
//                         <motion.div
//                             // initial={{ opacity: 0, x: -100 }}
//                             animate={isInview ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
//                             // whileInView={{ opacity: 1, x: 0 }}
//                             transition={{
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 10,
//                                 delay: 0.2,
//                             }}
//                             ref={ref}
//                             className="col-lg-7 mb-4 mb-lg-0 d-flex justify-content-md-center">
//                             <img src="/images/about2.png" alt="about" className='img-fluid ' />
//                         </motion.div>
//                         <div className="col-lg-5 mb-4 mb-lg-0 text-light">
//                             <motion.h3
//                             className='text-light'
//                                 ref={ref}
//                                 // initial={{ opacity: 0, y: 100 }}
//                                 animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.2,
//                                 }}
//                             >Let's <br /> Introduce about<br />myself</motion.h3>
//                             <motion.p
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.4,
//                                 }}
//                                 ref={ref}
//                                 className='text-capitalize '>Hello! I'm Shashank 24 Years Old, a Frontend Developer based in India. I'm very passionate about the work that i do.</motion.p>
//                             <motion.p
//                                 // initial={{ opacity: 0, y: 100 }}
//                                 animate={isInview ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.6,
//                                 }}
//                                 ref={ref}
//                                 className='text-capitalize'>i'm very much intrested in coding and Front-end Development, also love to learn new programming skills and Technology, My Dream is to become a successful Web Developer.</motion.p>
//                             <motion.button
//                                 ref={ref}
//                                 // initial={{ opacity: 0, }}
//                                 animate={isInview ? { opacity: 1, } : { opacity: 0 }}
//                                 transition={{ delay: 1.5, duration: 2.5 }}
//                                 className='btn btn-success mt-4' > Download Resume
//                             </motion.button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About