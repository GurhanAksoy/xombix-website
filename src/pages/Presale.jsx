import React from "react";

export default function Presale() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-indigo-900 to-blue-900 text-white px-6 py-16 font-mono text-center">
      <h1 className="text-4xl font-bold text-orange-400 mb-8">Join the XombiX Presale</h1>

      <p className="mb-4 text-lg">
        <span className="font-bold text-green-400">Only 500 participants</span> will be accepted.
      </p>
      <p className="mb-4 text-lg">
        <span className="font-bold text-green-400">Fixed amount:</span> 77,700 XOMBIX per wallet.
      </p>
      <p className="mb-8 text-lg">
        <span className="font-bold text-green-400">Price:</span> $0.00077 per token.
      </p>

      <div className="mb-8 text-gray-300">
        <p>Total sold: <span className="font-bold text-white">0 / 500</span></p>
      </div>

      <button
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition duration-300"
        disabled
      >
        🔒 Presale Not Open Yet
      </button>
    </main>
  );
}
