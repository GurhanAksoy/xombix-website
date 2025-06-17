import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white text-center px-6 py-10 font-mono overflow-hidden z-10 flex flex-col items-center justify-center">
      
      {/* LOGO */}
      <div className="mb-2 relative z-20">
        <img
          src="/xombix-logo.png"
          alt="XombiX Logo"
          className="w-72 h-72 sm:w-[22rem] sm:h-[22rem] mx-auto drop-shadow-2xl transition-all duration-300"
        />
      </div>

      {/* BAŞLIK */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-2 relative z-20">
        First stop: MARS
      </h1>

      {/* ALT METİN */}
      <p className="text-lg md:text-xl text-gray-300 mb-1 relative z-20">
        From ape to man. From coin to <span className="text-white font-bold">XombiX</span>
      </p>

      <p className="italic text-sm text-gray-400 mb-6 relative z-20">
        This is not just a coin. This is <span className="text-orange-300 font-semibold">XombiX</span>
      </p>

      {/* JOIN THE PRESALE GÖRSELİ */}
      <div className="relative z-20">
        <Link to="/presale">
          <img
            src="/join-the-presale.png"
            alt="Join the Presale"
            className="w-28 h-28 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </main>
  );
}
