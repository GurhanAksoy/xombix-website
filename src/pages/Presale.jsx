import React from "react";

export default function Presale() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-mono flex items-center justify-center">
      <section className="bg-gradient-to-b from-indigo-900 to-black p-8 rounded-2xl shadow-lg max-w-xl text-center w-full">

        <h1 className="text-3xl font-bold text-orange-400 mb-6">XombiX Presale</h1>

        <p className="text-lg mb-4 text-gray-300">
          Welcome to the XombiX Presale Portal. Only <span className="text-orange-500 font-bold">500 spots</span> are available.
        </p>

        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-400">Fixed Allocation:</p>
          <p className="text-xl font-bold text-white mt-1">77,700 XOMBIX / person</p>
          <p className="text-sm mt-2 text-gray-400">Price per token: <span className="text-orange-400 font-semibold">$0.00077</span></p>
        </div>

        <p className="mb-6 text-sm text-gray-400 italic">
          You cannot buy more or less. The presale is strictly fixed per address.
        </p>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-lg disabled:opacity-50"
          disabled
        >
          🔒 Coming Soon
        </button>

        <p className="mt-6 text-xs text-gray-600">
          First come, first served. Stay alert — 500 spots disappear fast.
        </p>

      </section>
    </main>
  );
}
