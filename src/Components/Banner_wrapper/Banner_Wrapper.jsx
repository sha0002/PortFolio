import React from 'react';
import { motion } from 'framer-motion'; // Ensure it's the correct import for framer-motion

function Banner_Wrapper({ ref, isInview }) {
    return (
        <>
            <section name="Home" id="Home" className="banner_wrapper Home">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-7 order-lg-1 order-2 banner_content">
                            {/* Add will-change for performance */}
                            <motion.h2
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2,
                                }}
                                className="text-uppercase text- position-relative"
                                style={{ willChange: "transform, opacity" }}
                            >
                                Hello
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4,
                                }}
                                className="text-uppercase text-"
                                style={{ willChange: "transform, opacity" }}
                            >
                                I am Shashank
                            </motion.h1>
                            <motion.h5
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.6,
                                }}
                                className="text-uppercase text-"
                                style={{ willChange: "transform, opacity" }}
                            >
                                I am Front-end Developer
                            </motion.h5>

                            {/* Social icons container */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.2,
                                }}
                                className="col-md-6 display-6 justify-content-end justify-content-center-md-start"
                                style={{ willChange: "transform, opacity" }}
                            >
                                <div className="justify-content-center justify-content-center-md-start">
                                    <i className="ps-2 bxl bx-facebook text-success"></i>
                                    <i className="px-2 bxl bx-instagram text-success"></i>
                                    <i className="px-2 bxl bx-twitter text-success"></i>
                                    <i className="px-2 bxl bx-linkedin text-success"></i>
                                    <i className="px-2 bxl bx-whatsapp text-success"></i>
                                </div>
                            </motion.div>
                        </div>

                        {/* Image section with motion */}
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            className="col-lg-5 order-lg-2 float-end order-1"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <div className="top-right-img">
                                <img
                                    src="/images/banner.png"
                                    className="img-fluid float-end rounded"
                                    alt="portfolio.png"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner_Wrapper;

























// import React from 'react'
// import { motion } from 'motion/react'


// function Banner_Wrapper({ ref, isInview }) {
//     return (
//         <>
//             <section
//                 name="Home" id='Home' className='banner_wrapper Home'>
//                 <div className="container mt-5">
//                     <div className="row">
//                         <div className="col-lg-7 order-lg-1 order-2 banner_content">
//                             <motion.h2
//                                 initial={{ opacity: 0, x: -100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.2,
//                                 }}
//                                 className='text-uppercase text- position-relative'>Hello</motion.h2>
//                             <motion.h1
//                                 initial={{ opacity: 0, x: -100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.4,
//                                 }}
//                                 className="text-uppercase text-">I am Shashank</motion.h1>
//                             <motion.h5
//                                 initial={{ opacity: 0, x: -100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.6,
//                                 }}
//                                 className="text-uppercase text-">I am Front-end Developer</motion.h5>

//                             <motion.div
//                                 initial={{ opacity: 0, y: 100 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.2,
//                                 }}
//                                 className="col-md-6 display-6 justify-content-end justify-content-center-md-start">
//                                 <div className="justify-content-center justify-content-center-md-start">
//                                     < i className=' ps-2 bxl  bx-facebook text-success'></i>
//                                     < i className=' px-2 bxl  bx-instagram text-success' ></i>
//                                     < i className=' px-2 bxl  bx-twitter text-success' ></i>
//                                     < i className=' px-2 bxl  bx-linkedin text-success'></i>
//                                     < i className=' px-2 bxl  bx-whatsapp text-success'></i>
//                                 </div>
//                             </motion.div>

//                         </div>
//                         <motion.div
//                             initial={{ opacity: 0, x: 200 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 1.5 }}
//                             className="col-lg-5 order-lg-2 float-end order-1">
//                             <div className="top-right-img ">
//                                 <img src="/images/banner.png" className='img-fluid float-end rounded' alt="portfolio.png" />
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Banner_Wrapper