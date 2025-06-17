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
    <main className="min-h-screen bg-black text-white px-6 py-20 text-center font-mono">
      {/* GİZLİ AUDIO */}
      <audio ref={audioRef} src="/xombix.mp3" preload="auto" />

      <h1 className="text-5xl font-extrabold text-orange-400 mb-6">
        🧠 XombiX
      </h1>

      <p className="text-lg text-gray-300 mb-4">
        The meme coin that infects your soul and your browser.
      </p>

      <p className="text-md text-green-400 mb-8">
        Welcome to chaos. One click, and you're in.
      </p>

      <a
        href="/presale"
        className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-full shadow-lg transition"
      >
        🚀 Join Presale
      </a>
    </main>
  );
}
