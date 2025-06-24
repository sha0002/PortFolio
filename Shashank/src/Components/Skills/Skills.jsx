import React from 'react'
import "./Skills.css"

const Skills = () => {
    return (
        <>
            <div className='skills-section'>



                {/* Progress_Bar */}
                {/* <div className='text-start sub-title m-0 ' id='Skills'>
                    My <span>Skills</span>
                </div> */}

                <section className='skills d-flex flex-wrap pt-0 '>
                    <div className='container container1 ps-5'>
                        <div className='text-start sub-title m-0 ' id='Skills'>
                            My <span>Skills</span>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">


                                <div className="technical_bar">
                                    <div className="bar my-2">
                                        <i className="fab fa-html5" style={{ color: "#c95d2e" }}></i>
                                        <div className="info">
                                            <span>HTML</span>
                                        </div>
                                        <div className="progress-line html">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar my-2">
                                        <i className="fab fa-css3-alt" style={{ color: "#147bbc" }}></i>
                                        <div className="info">
                                            <span>CSS</span>

                                        </div>
                                        <div className="progress-line css">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar my-2">
                                        <i className="fab fa-js-square" style={{ color: "#b0bc1e" }}></i>
                                        <div className="info">
                                            <span>JS</span>

                                        </div>
                                        <div className="progress-line js">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar my-2">
                                        <i className="fab fa-bootstrap" style={{ color: "#c32ec9" }}></i>
                                        <div className="info">
                                            <span>BOOTSTRAP</span>

                                        </div>
                                        <div className="progress-line bootstap">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="bar my-2">
                                        <i className="fab fa-react" style={{ color: "#69BCBC" }}></i>
                                        <div className="info">
                                            <span>REACT</span>

                                        </div>
                                        <div className="progress-line react">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div className="bar my-2">
                                        < i className='bxl  bx-redux' style={{ color: "#155bdf" }}></i>
                                        <div className="info">
                                            <span>REDUX</span>

                                        </div>
                                        <div className="progress-line redux">
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Font Word */}



                            <div className="col-lg-6 ps-lg-5">
                                <div className="feature-box feature-box-small ">
                                    <div className="icon ">
                                        <i className="fab fa-html5" ></i>
                                    </div>
                                    <h6>HTML</h6>
                                </div>
                                <div className="feature-box  feature-box-small " style={{ background: "#147bbc" }}>
                                    <div className="icon ">
                                        <i className="fab fa-css3-alt" ></i>
                                    </div>
                                    <h6>CSS</h6>
                                </div>
                                <div className="feature-box feature-box-small " style={{ background: "#b0bc1e" }}>
                                    <div className="icon ">
                                        <i className="fab fa-js-square" ></i>
                                    </div>
                                    <h6>JAVASCRIPT</h6>
                                </div>
                                <div className="feature-box  feature-box-small " style={{ background: "#c32ec9" }}>
                                    <div className="icon ">
                                        <i className="fab fa-bootstrap" ></i>
                                    </div>
                                    <h6>BOOTSTRAP</h6>
                                </div>
                                <div className="feature-box  feature-box-small " style={{ background: "#69BCBC" }}>
                                    <div className="icon ">
                                        <i className="fab fa-react" ></i>
                                    </div>
                                    <h6>REACT</h6>
                                </div>
                                <div className="feature-box feature-box-small" style={{ background: "#155bdf" }}>
                                    <div className="icon ">
                                        < i className='bxl  bx-redux'></i>
                                    </div>
                                    <h6>REDUX</h6>
                                </div>
                            </div>


                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Skills

