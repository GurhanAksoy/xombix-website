import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 text-white flex justify-center gap-10 py-4 shadow-lg">
      <Link to="/" className="hover:text-orange-400 transition">Home</Link>
      <Link to="/whitepaper" className="hover:text-orange-400 transition">Whitepaper</Link>
      <a href="#presale" className="hover:text-orange-400 transition">Join Presale</a>
    </nav>
  );
}
