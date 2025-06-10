import React from 'react'


function Banner_Wrapper() {
    return (
        <>
            <section name="Home" id='Home' className='banner_wrapper Home'>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-7 order-lg-1 order-2 banner_content">
                            <h2 className='text-uppercase text- position-relative'>Hello</h2>
                            <h1 className="text-uppercase text-">I am Shashank</h1>
                            <h5 className="text-uppercase text-">I am Front-end Developer</h5>
                            <div className="mt-5">
                                <button type="button" className='btn btn-primary shadow-none'>Resume</button>
                                <button type="button" className='btn btn-primary shadow-none ms-4' >Hire Me</button>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-2 float-end order-1">
                            <div className="top-right-img ">
                                <img src="/images/banner.png" className='img-fluid float-end rounded' alt="portfolio.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner_Wrapper