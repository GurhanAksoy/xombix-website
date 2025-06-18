import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItemClass = (path) =>
    `transition cursor-pointer px-3 py-1 rounded-md text-sm md:text-base font-semibold ${
      location.pathname === path
        ? "text-orange-400"
        : "text-white hover:text-orange-300"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex justify-center gap-6 sm:gap-10 py-4 shadow-lg">
      <Link to="/" className={navItemClass("/")}>
        Home
      </Link>
      <Link to="/whitepaper" className={navItemClass("/whitepaper")}>
        Whitepaper
      </Link>
      <Link to="/presale" className={navItemClass("/presale")}>
        Join Presale
      </Link>
      <a
        href="https://t.me/XombiXNetwork"
        target="_blank"
        rel="noopener noreferrer"
        className="transition cursor-pointer px-3 py-1 rounded-md text-sm md:text-base font-semibold text-white hover:text-blue-400"
      >
        Join Telegram
      </a>
    </nav>
  );
}
