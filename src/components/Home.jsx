import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white text-center px-6 py-12 font-mono overflow-hidden">
      {/* LOGO */}
      <div className="flex justify-center mb-6 z-10 relative">
        <img
          src="/xombix-logo.png"
          alt="XombiX Logo"
          className="w-64 h-64 sm:w-72 sm:h-72 mx-auto drop-shadow-xl transition-all duration-300"
        />
      </div>

      {/* BAŞLIK */}
      <h1 className="text-4xl font-extrabold text-orange-400 mb-4 relative z-10">
        First stop: MARS
      </h1>

      {/* ALT METİN */}
      <p className="text-lg text-gray-300 mb-6 relative z-10">
        From ape to man. From coin to <span className="text-white font-bold">XombiX</span>
      </p>

      <p className="italic text-sm text-gray-400 mb-10 relative z-10">
        This is not just a coin. This is <span className="text-orange-300">XombiX</span>
      </p>

      {/* JOIN THE PRESALE GÖRSELİ */}
      <div className="flex justify-center relative z-20">
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
