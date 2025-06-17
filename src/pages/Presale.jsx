import React from "react";

export default function Presale() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-mono">
      <section className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-orange-400 mb-6">
          Join the XombiX Presale
        </h1>

        <p className="mb-4 text-gray-300">
          Only <span className="font-semibold text-white">500 participants</span> will be accepted.
        </p>
        <p className="mb-4 text-gray-300">
          Fixed amount: <span className="text-green-400 font-semibold">77,700 XOMBIX</span> per wallet.
        </p>
        <p className="mb-6 text-gray-300">
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
