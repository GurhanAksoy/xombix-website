import React from "react";

export default function Whitepaper() {
  return (
    <main className="min-h-screen text-gray-100 px-4 sm:px-6 py-12 max-w-4xl mx-auto font-sans leading-relaxed">

      <div className="flex justify-end mb-6">
        <a
          href="/xombix-whitepaper.pdf"
          download
          className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
        >
          📄 Download PDF
        </a>
      </div>

      <h1 className="text-4xl font-extrabold text-orange-400 mb-6 text-center">XombiX Whitepaper</h1>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">1. Introduction</h2>
        <p className="text-base text-gray-200">
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.
          We’re not here to impress — we’re here to expose.
          Not to build castles in the sky — but to meme the broken system into awareness.
          XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">2. Vision & Mission</h2>
        <p className="text-base text-gray-200">
          We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion.
          We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.
        </p>
      </section>

      <!-- (diğer içerikler aynı şekilde devam eder...) -->

    </main>
  );
}
