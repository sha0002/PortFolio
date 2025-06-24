import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className='footer bg-dark'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="nav col-md-6 py-2 justify-content-center justify-content-center-md-start">
                            <div className="nav  justify-content-center justify-content-center-md-start">
                                < i className='bxl  bx-facebook' style={{ Color: '#000000' }}></i>
                                < i className='bxl  bx-instagram' style={{ Color: '#000000' }}></i>
                                < i className='bxl  bx-twitter' style={{ Color: '#000000' }}></i>
                                < i className='bxl  bx-linkedin' style={{ Color: '#000000' }}></i>
                            </div>
                        </div>
                        <div className="col-md-6 text-center footer-2 fs-5 text-md-end">
                            <p className='m-0'>&copy; 2025 CopyRight all Right reserved | Developed By Shashank </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer