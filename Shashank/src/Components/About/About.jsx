import React from 'react'
import { Link } from 'react-router-dom'


function About() {
    return (
        <>
            <section id='About' className='about_wrapper'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0 d-flex justify-content-md-center">
                            <img src="/images/banner2.png" alt="about" className='img-fluid ' />
                        </div>
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <h3>Let's <br /> Introduce about<br />myself</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Link className='btn btn-primary mt-4' > Download Resume</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About