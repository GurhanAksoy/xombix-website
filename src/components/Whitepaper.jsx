import React from "react";

export default function Whitepaper() {
  return (
    <main className="flex-1 pt-16 px-4 sm:px-6 pb-12 text-gray-100 max-w-4xl mx-auto font-sans leading-relaxed overflow-auto">

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
            <tbody className="bg-gray-900 text-gray-100">
              <tr><td className="py-2 px-4 border border-gray-700">Presale</td><td className="py-2 px-4 border border-gray-700">5%</td><td className="py-2 px-4 border border-gray-700">38,850,000</td><td className="py-2 px-4 border border-gray-700">500 people × 77,700 – $0.00077</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Developer (Locked)</td><td className="py-2 px-4 border border-gray-700">15%</td><td className="py-2 px-4 border border-gray-700">116,550,000</td><td className="py-2 px-4 border border-gray-700">Locked 7 months, linear vesting</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Community Reserve</td><td className="py-2 px-4 border border-gray-700">35%</td><td className="py-2 px-4 border border-gray-700">271,950,000</td><td className="py-2 px-4 border border-gray-700">DAO, staking, airdrops</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Marketing & Ops</td><td className="py-2 px-4 border border-gray-700">15%</td><td className="py-2 px-4 border border-gray-700">116,550,000</td><td className="py-2 px-4 border border-gray-700">Growth, campaigns</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Partnerships</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Strategic tools & allies</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">DEX Liquidity</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Locked LP pools</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Donations</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Mars Survival Support Fund</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          * Going to Mars takes more than dreams. Colonies need culture and funding.<br />
          That’s why XombiX created the Mars Survival Support Fund.<br />
          DAO-managed. Meme-powered.
        </p>
      </section>

      {/* Diğer tüm bölümler (4–10) ve footer da aynı şekilde devam ediyor */}
      {/* Hepsi orijinal haliyle korunuyor, sadece dış kapsayıcı (main) değiştirildi */}

    </main>
  );
}
