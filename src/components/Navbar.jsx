import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
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
          <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
            <Link to="/" className="text-orange-400 font-semibold hover:text-orange-300">Home</Link>
            <Link to="/whitepaper" className="text-white font-semibold hover:text-orange-300">Whitepaper</Link>
            <Link to="/presale" className="text-white font-semibold hover:text-orange-300">Join Presale</Link>
            <a href="https://t.me/XombiXNetwork" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-blue-400">Join Telegram</a>
            <Link to="/contact" className="text-white font-semibold hover:text-green-300">Contact</Link>
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
          <Link to="/" onClick={closeMenu} className="block text-orange-400 font-semibold hover:text-orange-300">Home</Link>
          <Link to="/whitepaper" onClick={closeMenu} className="block text-white font-semibold hover:text-orange-300">Whitepaper</Link>
          <Link to="/presale" onClick={closeMenu} className="block text-white font-semibold hover:text-orange-300">Join Presale</Link>
          <a href="https://t.me/XombiXNetwork" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="block text-white font-semibold hover:text-blue-400">Join Telegram</a>
          <Link to="/contact" onClick={closeMenu} className="block text-white font-semibold hover:text-green-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}
