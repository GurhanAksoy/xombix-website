// src/components/XombixAnthem.jsx
import React from "react";

function XombixAnthem() {
  const playAnthem = () => {
    const audio = new Audio("/xombix.mp3");
    audio.play().catch((error) => {
      console.error("Ses çalarken hata:", error);
    });
  };

  return (
    <div className="text-center my-10">
      <h3 className="text-xl font-semibold mb-2 text-white">🎵 XombiX Anthem</h3>
      <button
        onClick={playAnthem}
        className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
      >
        🔊 Play the Anthem
      </button>
    </div>
  );
}

export default XombixAnthem;
