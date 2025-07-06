import React from "react";

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Sayfa Başlığı */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">XombiX Whitepaper</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Welcome to the official XombiX whitepaper. Below you will find the detailed breakdown of our vision, tokenomics, and roadmap.
          </p>
          <a
            href="/xombix-whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Download PDF
          </a>
        </div>

        {/* Tokenomics Tablosu */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 shadow-md mb-16">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Token Distribution</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-zinc-700">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="px-4 py-2 border-b border-zinc-700">Category</th>
                  <th className="px-4 py-2 border-b border-zinc-700">Allocation</th>
                  <th className="px-4 py-2 border-b border-zinc-700">Vesting Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-zinc-700">Presale</td>
                  <td className="px-4 py-2 border-b border-zinc-700">25%</td>
                  <td className="px-4 py-2 border-b border-zinc-700">7 months locked</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-zinc-700">Team & Founders</td>
                  <td className="px-4 py-2 border-b border-zinc-700">20%</td>
                  <td className="px-4 py-2 border-b border-zinc-700">12 months vesting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-zinc-700">Liquidity</td>
                  <td className="px-4 py-2 border-b border-zinc-700">15%</td>
                  <td className="px-4 py-2 border-b border-zinc-700">Locked</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-zinc-700">Marketing</td>
                  <td className="px-4 py-2 border-b border-zinc-700">10%</td>
                  <td className="px-4 py-2 border-b border-zinc-700">As needed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-zinc-700">Community Rewards</td>
                  <td className="px-4 py-2 border-b border-zinc-700">20%</td>
                  <td className="px-4 py-2 border-b border-zinc-700">6 months vesting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Reserve</td>
                  <td className="px-4 py-2">10%</td>
                  <td className="px-4 py-2">12 months locked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-orange-400">Roadmap</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong className="text-white">Q3 2025:</strong> Presale launch, Website & Community building.
            </li>
            <li>
              <strong className="text-white">Q4 2025:</strong> Token listing, Initial marketing, NFT integration.
            </li>
            <li>
              <strong className="text-white">Q1 2026:</strong> Staking & Governance launch, First utility release.
            </li>
            <li>
              <strong className="text-white">Q2 2026:</strong> Ecosystem expansion, Strategic partnerships.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
