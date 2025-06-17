import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleInteraction = () => {
      const audio = new Audio("/xombix.mp3");
      audio.volume = 1;
      audio.play().catch((err) => {
        console.error("Marş çalma hatası:", err);
      });

      // İlk etkileşimden sonra listener'ı kaldır
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white text-center p-20">
      <h1 className="text-4xl font-bold text-orange-400 mb-6">
        Welcome to XombiX
      </h1>
      <p className="text-xl">Bir tıkla evreni sarsarsın.</p>
    </main>
  );
}
