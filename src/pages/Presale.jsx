import React from "react";
import { Link } from "react-router-dom";

export default function Presale() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] mb-6">
          XombiX Presale Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] mb-4">
          The meme-fueled movement is almost here. Get ready to secure your XombiX tokens before the world catches on.
        </p>
        <p className="text-base sm:text-lg text-gray-100 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] mb-8">
          500 spots only. $60 max per wallet. Early believers get 10x benefit. Vesting applies.
        </p>

        {/* Countdown placeholder */}
        <div className="text-white text-2xl font-bold mb-8 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
          <p>Presale opens in: 00d 00h 00m 00s</p>
        </div>

        {/* Button */}
        <Link
          to="/whitepaper"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
        >
          View Whitepaper
        </Link>
      </div>
    </div>
  );
}
