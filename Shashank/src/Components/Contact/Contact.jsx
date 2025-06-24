import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className='section bg-dark Contact' id='Contact'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <h2>Get In Touch</h2>
                                <form action="#">
                                    <div className="row gy-4 gx-3 ">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >Name</label>
                                                <input type="text" className='form-control shadow-none' name='name' />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >E-Mail</label>
                                                <input type="email" className='form-control shadow-none' name='email' />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="" className='form-label' >Message</label>
                                                <textarea name="message" className='form-control shadow-none' rows={"3"}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className='btn btn-success'>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 ms-auto col-xl-4">
                            <div className="pb-5 d-none d-lg-block">
                                <img src="/images/banner.png" alt="contact-img" style={{width:"250px"}} className='img-fluid ' />
                            </div>
                            <ul className='contact-info'>
                                <li>
                                    <div className="icon bg-primary">
                                        < i class='bxr  bx-phone' style={{Color:'#000000'}}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Phone</h5>
                                        <p>+91 8527015266</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon bg-success">
                                        < i class='bxr  bx-phone' style={{Color:'#000000'}}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Mail</h5>
                                        <p>kshashank960@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon bg-danger">
                                        < i class='bxr  bx-phone' style={{Color:'#000000'}}></i>
                                    </div>
                                    <div className="col ps-3">
                                        <h5>Phone</h5>
                                        <p>+91 8527015266</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact