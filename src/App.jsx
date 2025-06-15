import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white px-6 py-10 font-mono">
      <section className="text-center max-w-3xl mx-auto">

        {/* Logo */}
        <img
          src="/xombix-logo.jpg"
          alt="XombiX Logo"
          className="mx-auto mb-6 w-64 rounded-2xl shadow-lg"
        />

        {/* Başlık */}
        <span className="text-2xl text-orange-400 font-bold tracking-wide">
  First stop: MARS

</span>

        {/* Açıklama */}
        <p className="text-xl mt-4 mb-6">
          From ape to man. From coin to XombiX
        </p>

        <p className="text-lg mb-8 italic text-gray-400">
          This is not just a coin. This is XombiX
        </p>

        {/* Buton */}
        <a href="#presale" className="block mx-auto w-48 hover:scale-105 transition-transform duration-300">
  <img
    src="/join-the-presale.png"
    alt="Join the Presale"
    className="w-full"
  />
</a>

      </section>
    </main>
  );
}
