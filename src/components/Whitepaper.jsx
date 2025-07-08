import React from "react";

export default function Whitepaper() {
  return (
    <main className="relative min-h-screen text-gray-100 px-4 sm:px-6 py-12 max-w-4xl mx-auto font-sans leading-relaxed z-10">

      {/* Sabit Download PDF Butonu */}
      <div className="fixed top-20 right-4 z-40">
        <a
          href="/xombix-whitepaper.pdf"
          download
          className="bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-2 px-5 rounded-full shadow-md transition duration-300"
        >
          📄 Download PDF
        </a>
      </div>

      <h1 className="text-4xl font-extrabold text-orange-400 mb-6 text-center mt-4">XombiX Whitepaper</h1>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">1. Introduction</h2>
        <p className="text-base text-gray-200">
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly. We’re not here to impress — we’re here to expose. Not to build castles in the sky — but to meme the broken system into awareness. XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">2. Vision & Mission</h2>
        <p className="text-base text-gray-200">
          We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion. We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.
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
              <tr><td className="py-2 px-4 border border-gray-700">Donations</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Mars Survival Support Fund </td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mt-4 italic text-center">
          * Going to Mars takes more than dreams. Colonies need culture and funding.<br />
          That’s why XombiX created the Mars Survival Support Fund.<br />
          DAO-managed. Meme-powered.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">4. Presale Vesting</h2>
        <p className="text-base text-gray-200">
          Month 0: 100% locked<br />
          Months 1–6: Linear unlock in 6 equal monthly parts (16.66% per month)<br />
          Fully unlocked by Month 7
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">5. Utility</h2>
        <ul className="list-disc pl-6 text-base text-gray-200">
          <li>Voting in MemeDAO</li>
          <li>Access to NFT drops, meme battles</li>
          <li>Meme-to-earn programs</li>
          <li>Holding = Cultural identity</li>
          <li>Exclusive XombiX voting events</li>
          <li>Entry to meme tournaments</li>
          <li>DAO proposals & treasury allocation rights</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">6. Roadmap</h2>
        <p className="text-base text-gray-200">
          <strong>June 2025 – The Signal</strong><br />
          Website launch, Whitepaper release, Presale opens
        </p>
        <p className="text-base text-gray-200">
          <strong>Q3 2025 – Formation</strong><br />
          MemeDAO launch, Staking + Meme-to-Earn, Viral campaigns
        </p>
        <p className="text-base text-gray-200">
          <strong>Q4 2025 – Cultivation</strong><br />
          DEX listings, NFT shrines, Strategic partnerships
        </p>
        <p className="text-base text-gray-200">
          <strong>2026 and Beyond</strong><br />
          Written by the community. No fixed path. DAO decides. Memes guide.<br />
          Its future will be shaped by the collective — not dictated by a roadmap.<br />
          The plan is no plan. The structure is emergent.<br />
          Like memes, XombiX evolves in real time.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">7. Team</h2>
        <p className="text-base text-gray-200">
          No heroes. No faces. No LinkedIn.<br />
          We believe in building systems, not personal brands.<br />
          XombiX is anonymous by design — not to escape, but to stay culture-first.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">8. Security</h2>
        <ul className="list-disc pl-6 text-base text-gray-200">
          <li>External audits</li>
          <li>Time-locked contracts</li>
          <li>No upgrade switches</li>
          <li>Multi-sig treasury</li>
          <li>Locked liquidity</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">9. Philosophy</h2>
        <p className="text-base text-gray-200">
          We don’t chase hype. We mock it.<br />
          We don’t pitch vision. We deliver satire with structure.<br />
          XombiX is a meme protocol, a mirror to the market, and a resistance movement disguised as a token.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">10. Disclaimer</h2>
        <p className="text-base text-gray-200">
          Not financial advice. DYOR.<br />
          If a project screams “to the moon” without explaining how gravity works — run.
        </p>
      </section>

      <footer className="mt-16 text-center text-gray-300 text-base leading-relaxed">
        <p className="font-semibold italic mb-2">
          This is not just a token. It's a torch.<br />
          We carry memes instead of weapons.<br />
          We build laughter into the blockchain.<br />

          We simply say: 
        </p>
        <p className="text-orange-300 font-extrabold text-xl mb-4">XombiX</p>
        <p className="text-sm text-gray-400">
          v1.0 – June 2025<br />
          XombiX Project © 2025 | MemeDAO powered | www.xombix.com
        </p>
      </footer>

    </main>
  );
}
