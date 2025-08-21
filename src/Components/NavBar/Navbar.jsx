import React, { useState, useEffect } from 'react';
import { delay, motion } from 'motion/react'


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
      <motion.nav

        className={`navbar navbar-expand-lg header-wrapper fixed-top ${active ? 'header-scroll' : ''
          }`}
      >
        <div className="container">
          <Link className="navbar-brand" to="Home" smooth={true} duration={500} offset={0}>
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              src="/images/favicon.png"
              className="img-fluid float-end pointer"
              alt="portfolio.png"
            />
          </Link>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="navbar-toggler shadow-none border-0"
            type="button"
            onClick={toggleNavbar}
          >
            <i className="fas fa-stream"></i>
          </motion.button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'
              }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav navbar_link mb-2 ms-auto mb-lg-0 menu_navbar_nav">
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.2,
                }}
                className="nav-item">
                <Link
                  className="nav-link px-md-4 nav_col"
                  to="Home" smooth={true} duration={500} offset={0}
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className="nav-item">
                <Link
                  className="nav-link px-md-4 nav_col"
                  to="About" smooth={true} duration={500} offset={0}
                  onClick={handleNavLinkClick}
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.6,
                }}
                className="nav-item">
                <Link
                  className="nav-link px-md-4 nav_col"
                  to="skills" smooth={true} duration={500} offset={-70}
                  onClick={handleNavLinkClick}
                >
                  Skills
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="nav-item">
                <Link
                  className="nav-link px-md-4 nav_col"
                  to="Project" smooth={true} duration={500} offset={-70}
                  onClick={handleNavLinkClick}
                >
                  Project
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="nav-item">
                <Link
                  className="nav-link px-md-4 nav_col"
                  to="Contact" smooth={true} duration={500} offset={0}
                  onClick={handleNavLinkClick}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;