import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const playAnthem = () => {
      const audio = new Audio("/xombix.mp3");
      audio.volume = 1;
      audio.play().catch((err) => {
        console.error("XombiX marş çalma hatası:", err);
      });

      window.removeEventListener("click", playAnthem);
    };

    window.addEventListener("click", playAnthem);

    return () => {
      window.removeEventListener("click", playAnthem);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 text-center font-mono">
      <h1 className="text-5xl font-extrabold text-orange-400 mb-8">
        👑 XombiX Coin
      </h1>

      <p className="text-xl text-gray-300 mb-4">
        Welcome to the ultimate meme token that makes the system question itself.
      </p>

      <p className="text-lg text-green-400 mb-8">
        Your entry point to chaos, comedy, and cosmic crypto energy.
      </p>

      <a
        href="/presale"
        className="inline-block mt-4 bg-green-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-400 transition"
      >
        🚀 Join the Presale
      </a>
    </main>
  );
}
