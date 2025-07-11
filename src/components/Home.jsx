import React from "react";
import { Link } from "react-router-dom";
// import XombixAnthem from "./XombixAnthem"; // Şimdilik kapalı

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-64px)] bg-[url('/background-stars.webp')] bg-cover bg-no-repeat bg-center text-white text-center px-4 sm:px-6 pt-2 sm:pt-4 pb-4 sm:pb-6 font-sans overflow-hidden z-10 flex flex-col items-center justify-start">

      {/* LOGO */}
      <div className="mt-2 sm:mt-4 mb-0 relative z-20 animate-fade-in">
        <img
          src="/xombix-logo.webp"
          width="320"
          height="320"
          alt="XombiX Logo"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto drop-shadow-2xl transition-all duration-300"
        />
      </div>

      {/* BAŞLIK */}
      <h1
        className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 mt-3 mb-2 relative z-20 animate-fade-in"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
      >
        First stop: <span className="text-orange-500">MARS</span>
      </h1>

      {/* ALT METİN */}
      <p
        className="font-orbitron text-sm sm:text-base md:text-lg text-gray-200 mb-1 relative z-20 animate-fade-in"
        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
      >
        <span className="text-white font-bold">XombiX:</span> While others die, we multiply!
      </p>

      <p
        className="italic text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mb-3 relative z-20 animate-fade-in"
        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
      >
        This is not just a coin. This is{" "}
        <span className="text-orange-300 font-semibold">XombiX</span>
      </p>

      {/* JOIN THE PRESALE */}
      <div className="relative z-20 mb-1 animate-fade-in">
        <Link to="/presale">
          <img
            src="/join-the-presale.webp"
            alt="Join the Presale"
            width="180"
            height="180"
            loading="lazy"
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 cursor-pointer glow-pulse"
          />
        </Link>
      </div>

      {/* <XombixAnthem /> */}
    </main>
  );
}
