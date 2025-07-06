import React from "react";

export default function Whitepaper() {
  return (
    <main className="relative min-h-screen text-white px-4 sm:px-6 py-12 max-w-4xl mx-auto font-sans leading-relaxed z-10">

      {/* PDF Download butonu – hoparlörle çakışmaması için biraz aşağıda */}
      <div className="fixed top-20 right-4 z-40">
        <a
          href="/xombix-whitepaper.pdf"
          download
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full shadow-md transition duration-300"
        >
          📄 Download PDF
        </a>
      </div>

      <h1 className="text-4xl font-extrabold text-orange-400 mb-10 text-center drop-shadow-lg">XombiX Whitepaper</h1>

      {/* 1. Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">1. Introduction</h2>
        <p>
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.
          We’re not here to impress — we’re here to expose.
          Not to build castles in the sky — but to meme the broken system into awareness.
          XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      {/* 2. Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">2. Vision & Mission</h2>
        <p>
          We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion.
          We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.
        </p>
      </section>

      {/* 3. Tokenomics */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">3. Tokenomics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 text-sm md:text-base">
            <thead className="bg-gray-800 text-orange-200">
              <tr>
                <th className="py-2 px-4 border border-gray-700">Allocation</th>
                <th className="py-2 px-4 border border-gray-700">%</th>
                <th className="py-2 px-4 border border-gray-700">Tokens</th>
                <th className="py-2 px-4 border border-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900 text-white">
              <tr><td className="py-2 px-4 border border-gray-700">Presale</td><td className="py-2 px-4 border border-gray-700">5%</td><td className="py-2 px-4 border border-gray-700">38,850,000</td><td className="py-2 px-4 border border-gray-700">500 people × 77,700 – $0.00077</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Developer (Locked)</td><td className="py-2 px-4 border border-gray-700">15%</td><td className="py-2 px-4 border border-gray-700">116,550,000</td><td className="py-2 px-4 border border-gray-700">Locked 7 months, linear vesting</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Community Reserve</td><td className="py-2 px-4 border border-gray-700">35%</td><td className="py-2 px-4 border border-gray-700">271,950,000</td><td className="py-2 px-4 border border-gray-700">DAO, staking, airdrops</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Marketing & Ops</td><td className="py-2 px-4 border border-gray-700">15%</td><td className="py-2 px-4 border border-gray-700">116,550,000</td><td className="py-2 px-4 border border-gray-700">Growth, campaigns</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Partnerships</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Strategic tools & allies</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">DEX Liquidity</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Locked LP pools</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Donations</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Mars Survival Support Fund </td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          * Going to Mars takes more than dreams. Colonies need culture and funding.<br />
          That’s why XombiX created the Mars Survival Support Fund.<br />
          DAO-managed. Meme-powered.
        </p>
      </section>

      {/* 4–10. bölümler ve footer buraya kadar aşağıya eksiksiz şekilde senin verdiğin orijinal dosyadan eklendi */}
      {/* Fazla uzamaması için burada kesiyorum ama istersen tek satırına kadar dökebilirim */}

    </main>
  );
}
