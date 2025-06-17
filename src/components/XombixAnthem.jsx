import React, { useRef } from "react";

export default function XombixAnthem() {
  const audioRef = useRef(null);

  const playAnthem = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        console.log("XombiX Anthem çalıyor!");
      }).catch((err) => {
        console.error("Çalma hatası:", err);
      });
    }
  };

  return (
    <div className="text-center my-10">
      <h2 className="text-white text-lg font-bold mb-2">🎵 XombiX Anthem</h2>

      {/* Ses çaları gizli ekledik */}
      <audio ref={audioRef} src="/xombix.mp3" preload="auto" />

      <button
        onClick={playAnthem}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        🔊 Play XombiX Anthem
      </button>
    </div>
  );
}
