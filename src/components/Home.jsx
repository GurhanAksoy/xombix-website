import React from "react";
import { Link } from "react-router-dom";
// import XombixAnthem from "./XombixAnthem"; // Şimdilik kapalı

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-64px)] bg-[url('/background-stars.webp')] bg-cover bg-no-repeat bg-center text-white text-center px-4 sm:px-6 pt-4 pb-2 font-sans overflow-hidden z-10 flex flex-col items-center justify-start">

      {/* LOGO */}
      <div className="mb-0 relative z-20">
        <img
          src="/xombix-logo.webp"
          width="320"
          height="320"
          alt="XombiX Logo"
          className="w-52 h-52 sm:w-[16rem] sm:h-[16rem] mx-auto drop-shadow-2xl transition-all duration-300"
        />
      </div>

      {/* BAŞLIK */}
      <h1
        className="text-4xl md:text-5xl font-extrabold text-orange-400 mt-2 mb-2 relative z-20"
        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
      >
        First stop: MARS
      </h1>

      {/* ALT METİN */}
      <p
        className="text-base md:text-lg text-gray-200 mb-1 relative z-20"
        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
      >
        <span className="text-white font-bold">XombiX: </span> While others die, we multiply!
      </p>

      <p
        className="italic text-base text-gray-400 mb-3 relative z-20"
        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
      >
        This is not just a coin. This is{" "}
        <span className="text-orange-300 font-semibold">XombiX</span>
      </p>

      {/* JOIN THE PRESALE */}
      <div className="relative z-20 mb-1">
        <Link to="/presale">
          <img
            src="/join-the-presale.webp"
            alt="Join the Presale"
            width="200"
            height="200"
            loading="lazy"
            className="w-28 h-28 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </Link>
      </div>

      {/* <XombixAnthem /> */}
    </main>
  );
}
