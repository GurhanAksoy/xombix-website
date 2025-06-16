import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const handlePresaleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Eğer ana sayfada değilsek, yönlendir ve hash ile scroll yap
      window.location.href = "/#presale";
    } else {
      // Aynı sayfadaysak sadece scroll yap
      const target = document.getElementById("presale");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 text-white flex justify-center gap-10 py-4 shadow-lg">
      <Link to="/" className="hover:text-orange-400 transition">Home</Link>
      <Link to="/whitepaper" className="hover:text-orange-400 transition">Whitepaper</Link>
      <a
        href="#presale"
        onClick={handlePresaleClick}
        className="hover:text-orange-400 transition"
      >
        Join Presale
      </a>
    </nav>
  );
}
