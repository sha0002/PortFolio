import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

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
    setIsCollapsed(true);
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg header-wrapper fixed-top ${active ? 'header-scroll' : ''
          }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="Home" smooth={true} duration={500} offset={0}>
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
            className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'
              }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 ms-auto mb-lg-0 menu_navbar_nav">
              <li className="nav-item">
                <Link
                  className="nav-link px-md-4"
                  to="Home" smooth={true} duration={500} offset={0}
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-md-4"
                  to="About" smooth={true} duration={500} offset={0}
                  onClick={handleNavLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-md-4"
                  to="Skills" smooth={true} duration={500} offset={-70}
                  onClick={handleNavLinkClick}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-md-4"
                  to="Project" smooth={true} duration={500} offset={-70}
                  onClick={handleNavLinkClick}
                >
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link px-md-4"
                  to="Contact" smooth={true} duration={500} offset={0}
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;