import React, { useState } from "react";
import { Menu, X, Ship } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/contact" },
    
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.includes("#")) {
      const element = document.getElementById(path.split("#")[1]);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#232D44] backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="p-2 bg-gradient-gold rounded-lg"
            >
              <Ship className="h-7 w-7 rounded   text-yellow-600 bg-white " />
            </motion.div>
            STBD
          </div>

          <div className="hidden md:flex items-center gap-8 text-xl text-white hover:">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`relative text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/80"
                } hover:scale-105 hover:text-yellow-400`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg">
            Get Quote
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-[#0B1630] p-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={() => setIsOpen(false)} className="text-white mb-8">
            <X size={28} />
          </button>

          <ul className="flex flex-col gap-6 text-white text-lg font-medium">
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>Products</li>
            <li onClick={() => setIsOpen(false)}>About</li>
            <li onClick={() => setIsOpen(false)}>Contact</li>
          </ul>

          <button className="mt-10 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg">
            Get Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
