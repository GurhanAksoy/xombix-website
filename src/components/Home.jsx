import React, { useEffect } from "react";

export default function Home() {
  // Sayfa yüklendiğinde URL'de #presale varsa otomatik scroll
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#presale") {
      const target = document.getElementById("presale");
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  // Görsel butona tıklanınca scroll
  const handlePresaleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("presale");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white px-6 py-10 font-mono">
      <section className="text-center max-w-3xl mx-auto">
        <img
          src="/xombix-logo.jpg"
          alt="XombiX Logo"
          className="mx-auto mb-6 w-64 rounded-2xl shadow-lg"
        />

        <span className="text-2xl text-orange-400 font-bold tracking-wide">
          First stop: MARS
        </span>

        <p className="text-xl mt-4 mb-6">From ape to man. From coin to XombiX</p>

        <p className="text-lg mb-8 italic text-gray-400">
          This is not just a coin. This is XombiX
        </p>

        {/* 🎯 Görsel Presale Butonu */}
        <div className="mt-8">
          <a
            href="#presale"
            onClick={handlePresaleClick}
            className="block mx-auto w-48 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/join-the-presale.png"
              alt="Join the Presale"
              className="w-full"
            />
          </a>
        </div>
      </section>
{/* 🎧 XombiX Anthem */}
<div className="mt-12 text-center">
  <p className="mb-2 text-orange-400 font-semibold">🎵 XombiX Anthem</p>
  <audio controls className="mx-auto w-full max-w-md">
    <source src="/XombiX.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</div>

      {/* 🪙 Presale Bilgi Bölümü */}
      <section id="presale" className="mt-32 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">Join the XombiX Presale</h2>
        <p className="mb-4 text-gray-300">
          Only <span className="font-semibold text-white">500 participants</span> will be accepted.<br />
          Fixed amount: <span className="text-green-400 font-semibold">77,700 XOMBIX</span> per wallet.<br />
          Price: <span className="text-green-400 font-semibold">$0.00077</span> per token.
        </p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300"
          disabled
        >
          🔒 Presale Not Open Yet
        </button>
      </section>
    </main>
  );
}
