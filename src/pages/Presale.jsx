import React from "react";

export default function Presale() {
  return (
    <main className="flex-1 pt-36 text-white px-4 sm:px-6 pb-12 font-sans overflow-hidden z-10">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-8 drop-shadow-2xl">
          Join the XombiX Presale
        </h1>

        <p className="mb-4 text-base md:text-lg text-orange-200 font-semibold drop-shadow-md">
          Only <span className="text-white font-bold">500 participants</span> will be accepted.
        </p>
        <p className="mb-4 text-base md:text-lg text-gray-100 drop-shadow-md">
          Fixed amount: <span className="text-green-400 font-semibold">77,700 XOMBIX</span> per wallet.
        </p>
        <p className="mb-8 text-base md:text-lg text-gray-100 drop-shadow-md">
          Price: <span className="text-green-400 font-semibold">$0.00077</span> per token.
        </p>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl shadow-md transition duration-300 text-lg opacity-90 cursor-not-allowed drop-shadow-xl"
          disabled
        >
          🔒 Presale Not Open Yet
        </button>
      </section>
    </main>
  );
}
