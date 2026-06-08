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
    { name: "About", to: "About" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "Project" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">

        <motion.div
          animate={{
            scale: scrolled ? 0.98 : 1,
          }}
          transition={{ duration: 0.3 }}
          className={`flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300
          ${scrolled
              ? "bg-black/30 backdrop-blur-xs border-white/20 shadow-xl"
              : "bg-transparent border-transparent "
            }`}
        >
          {/* Logo */}
          <Link
            to="Home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img
              src="/images/favicon1.png"
              alt="logo"
              className="w-12 h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-white mb-0">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className={`cursor-pointer py-2 px-3  rounded-4xl transition text-lg text-decoration-none
                    ${scrolled
                      ? "text-white hover:bg-white/30 backdrop-blur-xs hover:text-slate-800!"
                      : "text-black hover:bg-black/30 backdrop-blur-xs hover:text-slate-600!"
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
            className={`md:hidden ${scrolled
              ? "text-white"
              : "text-black "
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-3 rounded-2xl border border-white/20
            ${scrolled
                ? "bg-black/30 backdrop-blur-2xl"
                : "bg-black/30 backdrop-blur-xl"
              }`}
          >
            <ul className="flex flex-col p-4 text-white">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    // className="block py-3 cursor-pointer"
                    className={`block py-3 cursor-pointer text-center transition text-lg text-decoration-none
                    ${scrolled
                        ? "text-white"
                        : "text-black"
                      }
                    `}
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