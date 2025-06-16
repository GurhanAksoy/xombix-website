import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // 🏠 Home butonu davranışı
  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.replace("/");
  };

  // 💰 Presale butonu davranışı
  const handlePresaleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      window.location.href = "/#presale";
    } else {
      const target = document.getElementById("presale");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 text-white flex justify-center gap-10 py-4 shadow-lg">
      <a
        onClick={handleHomeClick}
        href="/"
        className="hover:text-orange-400 transition cursor-pointer"
      >
        Home
      </a>

      <Link
        to="/whitepaper"
        className="hover:text-orange-400 transition"
      >
        Whitepaper
      </Link>

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
