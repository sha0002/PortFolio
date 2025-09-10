import React, { useRef, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import './Footer.css'

const Footer = () => {

    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })

    useEffect(() => {
        console.log(isInview)
    }, [isInview])

    return (
        <>
            <motion.footer
                ref={ref}
                animate={isInview ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                    duration:2
                }}
                className='footer bg-dark'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="nav col-md-6 py-2 justify-content-center justify-content-center-md-start">
                            <div className="nav  justify-content-center justify-content-center-md-start">
                                <a href="https://www.facebook.com/share/1FvxoCqUJj/" target='_blank' className='ms-2'> < i className='bxl  bx-facebook' style={{ Color: '#000000' }}></i></a>
                                <a href="https://www.instagram.com/kshashank7038?utm_source=qr&igsh=MXBtcjJ4bGQ5MnVqbw==" target='_blank' className='ms-2'>< i className='bxl  bx-instagram' style={{ Color: '#000000' }}></i></a>
                                <a href="https://x.com/iamshashank0002?s=08" target='_blank' className='ms-2'>< i className='bxl  bx-twitter' style={{ Color: '#000000' }}></i></a>
                                <a href="https://www.linkedin.com/in/shashank-kumar-687376303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='ms-2'>< i className='bxl  bx-linkedin' style={{ Color: '#000000' }}></i></a>
                                <a href="https://github.com/sha0002" target='_blank' className='ms-2'>< i className='bxl  bx-github' style={{ Color: '#000000' }}></i></a>

                            </div>
                        </div>
                        <div className="col-md-6 text-center footer-2 fs-5 text-md-end">
                            <p className='m-0'>&copy; 2025 CopyRight all Right reserved | Developed By Shashank </p>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </>
    )
}

export default Footer