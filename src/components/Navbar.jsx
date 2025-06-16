import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // Zaten ana sayfadaysa yukarı scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Değilse anasayfaya yönlendir
      navigate("/");
    }
  };

  const handlePresaleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Başka sayfadaysa yönlendir ve hash ekle
      window.location.href = "/#presale";
    } else {
      // Aynı sayfadaysa scroll
      const target = document.getElementById("presale");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 text-white flex justify-center gap-10 py-4 shadow-lg">
      <a onClick={handleHomeClick} href="/" className="hover:text-orange-400 transition cursor-pointer">Home</a>
      <Link to="/whitepaper" className="hover:text-orange-400 transition">Whitepaper</Link>
      <a
        href="#presale"
        onClick={handlePresaleClick}
        className="hover:text-orange-400 transition cursor-pointer"
      >
        Join Presale
      </a>
    </nav>
  );
}
