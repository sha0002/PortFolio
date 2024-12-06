// import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'


// function Navbar() {

//     const [active, setActive] = useState(false)

//     window.addEventListener("scroll", function () {
//         if (this.window.scrollY > 20) {
//             setActive(true)
//         } else {
//             setActive(false)
//         }
//     })

//     const navBar = document.querySelectorAll(".nav-link")
//     const navCollapse = document.querySelector(".navbar-collapse.collapse")
//     navBar.forEach(function (a) {
//         a.addEventListener("click", function () {
//             navCollapse.classList.remove("show")
//         })
//     })

//     return (
//         <>
//             <nav className={`navbar navbar-expand-lg header-wrapper fixed-top ${active ? "header-scroll" : ""} `}>
//                 <div className="container ">
//                     <Link className="navbar-brand" to="/">
//                         <img src="/images/favicon.png" className='img-fluid float-end' alt="portfolio.png" />

//                     </Link>
//                     <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         <i className="fas fa-stream"></i>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mb-2 ms-auto mb-lg-0 menu_navbar_nav ">
//                             <li className="nav-item ">
//                                 <NavLink className={`nav-link  px-md-4 `} to="/">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link  px-md-4 " to="/about">About</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link  px-md-4" to="/skills">Skills</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link px-md-4" to="/project">Project</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link px-md-4" to="/contact">Contact</NavLink>
//                             </li>

//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//         </>

//     )
// }

// export default Navbar











import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg header-wrapper fixed-top ${
          active ? 'header-scroll' : ''
        }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/favicon.png"
              className="img-fluid float-end"
              alt="portfolio.png"
            />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            onClick={toggleNavbar}
          >
            <i className="fas fa-stream"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isCollapsed ? '' : 'show'
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 ms-auto mb-lg-0 menu_navbar_nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-4"
                  to="/"
                  onClick={handleNavLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-4"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-4"
                  to="/skills"
                  onClick={handleNavLinkClick}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-4"
                  to="/project"
                  onClick={handleNavLinkClick}
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link px-md-4"
                  to="/contact"
                  onClick={handleNavLinkClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;