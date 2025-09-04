
import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'
import './Contact.css'

const Contact = () => {

    const ref = useRef(null)
    const isInview = useInView(ref, { once: true })

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




    return (
        <>
            <section className='section bg-dark Contact' id='Contact'>
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
                                {/* <img src="/images/contact.png" alt="contact-img"  className='img-fluid ' /> */}
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
            </section>
        </>
    )
}

export default Contact