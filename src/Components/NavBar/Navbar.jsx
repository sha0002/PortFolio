import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", to: "Home" },
    // { name: "About", to: "About" },
    { name: "Skills", to: "Skills" },
    { name: "Projects", to: "Project" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{ scale: scrolled ? 0.98 : 1 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300
      ${scrolled
              ? "bg-black/30 backdrop-blur-md border-white/20 shadow-xl"
              : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo */}
          <Link to="Home"  smooth={true} duration={500} className="cursor-pointer Home">
            <img src="/images/favicon1.png" alt="logo" className="w-12 h-12" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 mb-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`px-4! py-2! block cursor-pointer text-center hover:bg-black! text-decoration-none text-white font-bold text-lg rounded-xl! hover:border-2 hover:border-white 
                                hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] 
                                transition-all duration-200 
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                ${scrolled
                      ? "text-white hover:bg-white/30 hover:text-white"
                      : "text-white hover:bg-white/30 hover:text-white"
                    }
              `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden ${scrolled ? "text-white" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-3 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl`}
          >
            <ul className="flex flex-col p-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 cursor-pointer text-center transition text-lg text-white text-decoration-none
                    hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] 
                                transition-all duration-200 
                                hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
                                active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;