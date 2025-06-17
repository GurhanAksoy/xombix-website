import React, { useEffect, useRef } from "react";

export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMarsh = () => {
      if (audioRef.current) {
        audioRef.current.volume = 1;
        audioRef.current.play().catch((err) => {
          console.error("Marş çalamadı:", err);
        });
        window.removeEventListener("click", playMarsh);
      }
    };

    window.addEventListener("click", playMarsh);

    return () => {
      window.removeEventListener("click", playMarsh);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white text-center px-6 py-12 font-mono">
      {/* MARŞ AUDIO */}
      <audio ref={audioRef} src="/xombix.mp3" preload="auto" />

      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <img
          src="/xombix-logo.png"
          alt="XombiX Logo"
          className="w-64 h-64 sm:w-72 sm:h-72 mx-auto drop-shadow-xl transition-all duration-300"
        />
      </div>

      {/* BAŞLIK */}
      <h1 className="text-4xl font-extrabold text-orange-400 mb-4">
        First stop: MARS
      </h1>

      {/* ALT METİN */}
      <p className="text-lg text-gray-300 mb-6">
        From ape to man. From coin to <span className="text-white font-bold">XombiX</span>
      </p>

      <p className="italic text-sm text-gray-400 mb-10">
        This is not just a coin. This is <span className="text-orange-300">XombiX</span>
      </p>

      {/* JOIN THE PRESALE GÖRSELİ */}
      <div className="flex justify-center">
        <a href="/presale">
          <img
            src="/join-the-presale.png"
            alt="Join the Presale"
            className="w-32 h-32 hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </main>
  );
}
