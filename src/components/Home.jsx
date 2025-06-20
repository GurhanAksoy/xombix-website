import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white text-center px-4 sm:px-6 py-10 font-sans overflow-hidden z-10 flex flex-col items-center justify-center">

      {/* LOGO */}
      <div className="mb-0 relative z-20"> {/* Daha da küçültüldü */}
        <img
          src="/xombix-logo.png"
          alt="XombiX Logo"
          className="w-64 h-64 sm:w-[20rem] sm:h-[20rem] mx-auto drop-shadow-2xl transition-all duration-300"
        />
      </div>

      {/* BAŞLIK */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mt-[-1.5rem] mb-3 relative z-20">
        First stop: MARS
      </h1>

      {/* ALT METİN */}
      <p className="text-base md:text-lg text-gray-200 mb-2 relative z-20">
        From ape to man. From coin to <span className="text-white font-bold">XombiX</span>
      </p>

      <p className="italic text-base text-gray-400 mb-8 relative z-20">
        This is not just a coin. This is <span className="text-orange-300 font-semibold">XombiX</span>
      </p>

      {/* JOIN THE PRESALE GÖRSELİ */}
      <div className="relative z-20">
        <Link to="/presale">
          <img
            src="/join-the-presale.png"
            alt="Join the Presale"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      </div>
    </main>
  );
}
