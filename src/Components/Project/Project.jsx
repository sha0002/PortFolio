import React from 'react'
import './Project.css'


const Project = () => {
    return (
        <>

            <section className="portfolio_wrapper Project" id='Project'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-start mb-lg-5 mb-2">
                            <h2>QUALITY WORK <br /> RECENTLY DONE PROJECT </h2>
                        </div>
                    </div>

                    <div className="row">
                        {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">WORK</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                            </li>
                        </ul> */}
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="portfolio-img">
                                            <img src="/project/airish-tech.png" alt="image1" className='img-fluid w-100' />
                                            <div className="overlay">< i className='bx  bx-plus' style={{ Color: '#155bdf' }}></i> </div>
                                        </div>
                                        <h5 className='mb-0 mt-4'>AIRISH TECH</h5>
                                        <div className='res-btn'>
                                            <a href="https://airishtech.com" target='_blank' className=''><button type="button" className='me-3'>Live Preview</button></a>

                                        </div>
                                        {/* <p>Coming Soom</p> */}
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="portfolio-img">
                                            <img src="/portfolio/portfolio3.webp" alt="image1" className='img-fluid w-100' />
                                            <div className="overlay">< i className='bx  bx-plus' style={{ Color: '#155bdf' }}></i> </div>
                                        </div>
                                        <h5 className='mb-0 mt-4' >MINIMAL DESIGN</h5>
                                        <p>Coming Soom</p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="portfolio-img">
                                            <img src="/portfolio/portfolio6.webp" alt="image1" className='img-fluid w-100' />
                                            <div className="overlay">< i className='bx  bx-plus' style={{ Color: '#155bdf' }}></i> </div>
                                        </div>
                                        <h5 className='mb-0 mt-4' >MINIMAL DESIGN</h5>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
};

export default Project;