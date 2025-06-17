import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleInteraction = () => {
      const audio = new Audio("/xombix.mp3");
      audio.volume = 1;
      audio.play().catch((err) => {
        console.error("Marş çalma hatası:", err);
      });

      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white text-center p-20">
      <h1 className="text-5xl font-extrabold text-orange-400 mb-6">
        Welcome to the XombiX Realm 🧠
      </h1>
      <p className="text-lg text-gray-300 mb-4">
        The ultimate meme coin that laughs at the system while eating it alive.
      </p>
      <p className="text-md text-green-400">
        Scroll down. Or don't. Either way, you're already infected.
      </p>
    </main>
  );
}
