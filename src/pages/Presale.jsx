import React from "react";

export default function Presale() {
  return (
    <main className="relative min-h-[calc(100vh-64px)] text-white px-4 sm:px-6 py-12 font-sans overflow-hidden z-10">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-6">
          Join the XombiX Presale
        </h1>

        <p className="mb-4 text-base md:text-lg text-gray-200">
          Only <span className="font-semibold text-white">500 participants</span> will be accepted.
        </p>
        <p className="mb-4 text-base md:text-lg text-gray-200">
          Fixed amount: <span className="text-green-400 font-semibold">77,700 XOMBIX</span> per wallet.
        </p>
        <p className="mb-8 text-base md:text-lg text-gray-200">
          Price: <span className="text-green-400 font-semibold">$0.00077</span> per token.
        </p>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 text-lg cursor-not-allowed"
          disabled
        >
          🔒 Presale Not Open Yet
        </button>
      </section>
    </main>
  );
}
