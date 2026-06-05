
import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'
import './Contact.css'

const Contact = () => {

    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })

    // motion animated start
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const isInView = useInView(titleRef, { once: true, margin: "-100px" });
    // motion animated end

    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        setIsSubmitting(true)
        const formData = new FormData(event.target);

        formData.append("access_key", "257e2db0-60d7-4eff-9165-d0b95708b6f9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                setTimeout(() => {
                    setResult("");
                }, 3000);
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", data);
            setResult(data.message);
        } finally {
            setIsSubmitting(false)
        }
    };


    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    const inputVariants = {
        focus: {
            borderColor: "#0d6efd",
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.08,
            y: -5,
            boxShadow: "0 20px 40px rgba(13, 110, 253, 0.3)"
        },
        tap: {
            scale: 0.95
        }
    };

    // Split "Contact me" into letters for animation
    const titleText = "Contact me";
    const letters = titleText.split("");



    return (
        <>
            {/* <section className='section bg-dark Contact' id='Contact'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                < h2>Get In Touch</ h2>
                                <form onSubmit={onSubmit}>
                                    <div className="row gy-4 gx-3 ">
                                        < div

                                            className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >Name</label>
                                                <input type="text" className='form-control shadow-none' name='name' required />
                                            </div>
                                        </ div>
                                        < div
                                            className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >E-Mail</label>
                                                <input type="email" className='form-control shadow-none' name='email' required />
                                            </div>
                                        </ div>
                                        < div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >Message</label>
                                                <textarea name="message" className='form-control shadow-none' rows={"3"} required></textarea>
                                            </div>
                                        </ div>
                                        < div className="col-12 res-btn">
                                            <button type="submit" > {isSubmitting ? "Sending..." : "Send Message"} </button>
                                        </ div>
                                    </div>
                                </form>
                                <span>{result}</span>
                            </div>
                        </div>
                        <div className="col-lg-5 ms-auto col-xl-4">
                            < div className="pb-3 d-none d-lg-block">
                                <img src="/images/cont.PNG" alt="contact-img" style={{ width: "450px" }} className='img-fluid rounded float-center' />
                            </ div>
                            <ul className='contact-info'>
                                < li
                                >
                                    <div className="icon bg-primary">
                                        < i className='bxr  bx-phone' style={{ Color: '#000000' }}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Phone</h5>
                                        <a href="tel:+918527015266" target='_black' className='text-light fs-6 text-decoration-none'>+91 8527015266</a>
                                    </div>
                                </ li>
                                < li
                                >
                                    <div className="icon bg-success">
                                        <i className='bxr  bx-envelope' style={{ Color: '#000000' }}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Mail</h5>
                                        <a href="mailto:kshashank960@gmail.com" target='_black' className='text-light fs-6 text-decoration-none'>kshashank960@gmail.com</a>

                                    </div>
                                </ li>
                                < li >
                                    <div className="icon bg-danger">
                                        <i className='bxl  bx-whatsapp' style={{ Color: '#000000' }}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Whatsapp</h5>
                                        <a href="https://wa.me/+918527015266" target='_black' className='text-light fs-6 text-decoration-none'>Click Here</a>
                                    </div>
                                </ li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>  */}



            <section className="section Contact py-3 py-lg-5" id="Contact" ref={sectionRef}>
                <div className="container">
                    {/* Very Large Contact Me Text - Matching Image Size */}
                    <motion.h1
                        ref={titleRef}
                        className="text-white fw-bold mb-3 mb-lg-5 "
                        style={{
                            fontSize: 'clamp(4.5rem, 12vw, 8.5rem)',
                            lineHeight: '1.0',
                            letterSpacing: '-0.04em'
                        }}
                        variants={titleVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <div className="row gy-5 align-items-start">
                        {/* LEFT: Contact Info */}
                        <motion.div
                            className="col-lg-5 col-xl-4"
                            variants={itemVariants}
                        >
                            <div className="contact-info text-light">
                                <motion.div className="mb-2 mb-md-4" whileHover={{ x: 10 }}>
                                    <a href="mailto:kshashank960@gmail.com" className="text-light text-decoration-none fs-4">
                                        kshashank960@gmail.com
                                    </a>
                                </motion.div>
                                <motion.div className="mb-2 mb-md-4" whileHover={{ x: 10 }}>
                                    <a href="tel:+918527015266" className="text-light text-decoration-none fs-4">
                                        +91 8527015266
                                    </a>
                                </motion.div>
                                <div className="fs-5 text-light-50 mb-3">
                                    123 Demo Street<br />
                                    New York, NY 12345
                                </div>

                                <div>
                                    <p className="text-light-50 mb-3">CONNECT WITH ME</p>
                                    <div className="d-flex gap-4 social-icons">
                                        {[
                                            { icon: 'bxl-facebook', link: 'https://facebook.com' },
                                            { icon: 'bxl-instagram', link: 'https://instagram.com' },
                                            { icon: 'bxl-twitter', link: 'https://twitter.com' },
                                            { icon: 'bxl-linkedin', link: 'https://linkedin.com' },
                                            { icon: 'bxl-github', link: 'https://github.com' }
                                        ].map((social, i) => (
                                            <motion.a
                                                key={i}
                                                href={social.link}
                                                target="_blank"
                                                className="text-light fs-2 social-icon"
                                                whileHover={{ scale: 1.3, rotate: 8, color: "#0d6efd" }}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <i className={`bx ${social.icon}`}></i>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: Form */}
                        <motion.div
                            className="col-lg-7"
                            variants={itemVariants}
                        >
                            <form onSubmit={onSubmit}>
                                <div className="row g-4">
                                    {/* Name Field */}
                                    <div className="col-12">
                                        {/* <label className="form-label text-light mb-2 fs-5">Name (required)</label> */}
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent border-0 border-bottom border-light rounded-0 text-light shadow-none px-0 py-3 fs-5"
                                                    placeholder="First Name"
                                                    name="firstName"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent border-0 border-bottom border-light rounded-0 text-light shadow-none px-0 py-3 fs-5"
                                                    placeholder="Last Name"
                                                    name="lastName"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-12">
                                        {/* <label className="form-label text-light mb-2 fs-5">Email (required)</label> */}
                                        <input
                                            type="email"
                                            className="form-control bg-transparent border-0 border-bottom border-light rounded-0 text-light shadow-none px-0 py-3 fs-5"
                                            placeholder='Email'
                                            name="email"
                                            required
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="col-12">
                                        {/* <label className="form-label text-light mb-2 fs-5">Message (required)</label> */}
                                        <textarea
                                            name="message"
                                            className="form-control bg-transparent border-0 border-bottom border-light rounded-0 text-light shadow-none px-0 py-3 fs-5"
                                            placeholder='Message'
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-12 pt-4">
                                        <button
                                            type="submit"
                                            className="btn btn-light px-5 py-3 fw-medium fs-5"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "SUBMIT"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {result && <div className="mt-4 text-light">{result}</div>}
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact