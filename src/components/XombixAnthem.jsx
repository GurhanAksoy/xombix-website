import React, { useRef } from "react";

export default function XombixAnthem() {
  const audioRef = useRef(null);

  const playAnthem = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 1;
      audio.play().then(() => {
        console.log("Çalıyor");
      }).catch((err) => {
        console.error("Ses çalma hatası:", err);
      });
    }
  };

  return (
    <div className="text-center my-10">
      <h2 className="text-white text-lg font-bold mb-2">🎵 XombiX Anthem</h2>

      {/* GÖRÜNÜR PLAYER */}
      <audio
        ref={audioRef}
        src="/xombix.mp3"
        controls
        preload="auto"
        style={{ margin: "auto", marginBottom: "1rem" }}
      />

      <button
        onClick={playAnthem}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full shadow-lg transition-all duration-300"
      >
        🔊 Play XombiX Anthem
      </button>
    </div>
  );
}
