import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  const linkClass = (path, base = "font-semibold hover:text-orange-300 transition") =>
    `${isActive(path) ? "text-orange-400" : "text-white"} ${base}`;

  return (
    <nav className="bg-black/60 backdrop-blur-md shadow-md border-b border-orange-500/30 shadow-orange-500/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img
                src="/xombix-logo.webp"
                alt="XombiX Logo"
                className="h-10 w-auto drop-shadow-xl"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-6 items-center text-sm">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/whitepaper" className={linkClass("/whitepaper")}>Whitepaper</Link>
            
            <Link to="/presale" onClick={closeMenu}>
              <span className="bg-orange-500 text-black px-4 py-1 rounded-full hover:bg-orange-400 transition font-semibold text-sm shadow-md">
                Join Presale
              </span>
            </Link>

            <a href="https://t.me/XombiXNetwork" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-400 transition">
              Join Telegram
            </a>
            
            <Link to="/contact" className={linkClass("/contact", "font-semibold hover:text-green-300 transition")}>Contact</Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4 space-y-4 text-center">
          <Link to="/" onClick={closeMenu} className={linkClass("/")}>Home</Link>
          <Link to="/whitepaper" onClick={closeMenu} className={linkClass("/whitepaper")}>Whitepaper</Link>
          <Link to="/presale" onClick={closeMenu} className="block bg-orange-500 text-black px-4 py-1 rounded-full hover:bg-orange-400 transition font-semibold">
            Join Presale
          </Link>
          <a href="https://t.me/XombiXNetwork" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="block text-white font-semibold hover:text-blue-400">Join Telegram</a>
          <Link to="/contact" onClick={closeMenu} className={linkClass("/contact", "font-semibold hover:text-green-300")}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
