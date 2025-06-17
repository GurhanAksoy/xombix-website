import React from "react";

export default function XombixAnthem() {
  const playAnthem = () => {
    const audio = new Audio("/xombix.mp3");
    audio.play().then(() => {
      console.log("XombiX Anthem çalıyor!");
    }).catch((err) => {
      console.error("Çalma hatası:", err);
    });
  };

  return (
    <div className="text-center my-10">
      <h2 className="text-white text-lg font-bold mb-2">🎵 XombiX Anthem</h2>
      <button
        onClick={playAnthem}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        🔊 Play XombiX Anthem
      </button>
    </div>
  );
}
