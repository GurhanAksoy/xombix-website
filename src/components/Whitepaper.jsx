import React from "react";

export default function Whitepaper() {
  return (
    <main className="min-h-screen text-gray-100 px-6 py-12 max-w-4xl mx-auto font-mono leading-relaxed">

      <h1 className="text-4xl font-extrabold text-orange-400 mb-6 text-center">XombiX Whitepaper</h1>

      <div className="text-center mb-8">
        <a
          href="/xombix-whitepaper.pdf"
          download
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition-transform transform hover:scale-105"
        >
          📄 Download PDF
        </a>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">1. Introduction</h2>
        <p>
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.
          We’re not here to impress — we’re here to expose.
          Not to build castles in the sky — but to meme the broken system into awareness.
          XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">2. Vision & Mission</h2>
        <p>
          We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion.
          We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">3. Tokenomics</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 text-sm">
            <thead className="bg-gray-800 text-orange-200">
              <tr>
                <th className="py-2 px-4 border border-gray-700">Allocation</th>
                <th className="py-2 px-4 border border-gray-700">%</th>
                <th className="py-2 px-4 border border-gray-700">Tokens</th>
                <th className="py-2 px-4 border border-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              <tr><td className="py-2 px-4 border border-gray-700">Presale</td><td className="py-2 px-4 border border-gray-700">5%</td><td className="py-2 px-4 border border-gray-700">38,850,000</td><td className="py-2 px-4 border border-gray-700">500 people × 77,700 – $0.00077</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Developer (Locked)</td><td className="py-2 px-4 border border-gray-700">15%</td><td className="py-2 px-4 border border-gray-700">116,550,000</td><td className="py-2 px-4 border border-gray-700">Locked 7 months, linear vesting</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Community Reserve</td><td className="py-2 px-4 border border-gray-700">35%</td><td className="py-2 px-4 border border-gray-700">271,950,000</td><td className="py-2 px-4 border border-gray-700">DAO, staking, airdrops</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Marketing & Ops</td><td className="py-2 px-4 border border-gray-700">15%</td><td className="py-2 px-4 border border-gray-700">116,550,000</td><td className="py-2 px-4 border border-gray-700">Growth, campaigns</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Partnerships</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Strategic tools & allies</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">DEX Liquidity</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Locked LP pools</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Donations</td><td className="py-2 px-4 border border-gray-700">10%</td><td className="py-2 px-4 border border-gray-700">77,700,000</td><td className="py-2 px-4 border border-gray-700">Mars Survival Support Fund 🌌</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          * Going to Mars takes more than dreams. Colonies need culture and funding.<br />
          That’s why XombiX created the Mars Survival Support Fund.<br />
          DAO-managed. Meme-powered.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">4. Presale Vesting</h2>
        <p>Month 0: 100% locked<br />
        Months 1–6: Linear unlock in 6 equal monthly parts (16.66% per month)<br />
        Fully unlocked by Month 7</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">5. Utility</h2>
        <ul className="list-disc pl-6">
          <li>Voting in MemeDAO</li>
          <li>Access to NFT drops, meme battles</li>
          <li>Meme-to-earn programs</li>
          <li>Holding = Cultural identity</li>
          <li>Exclusive XombiX voting events</li>
          <li>Entry to meme tournaments</li>
          <li>DAO proposals & treasury allocation rights</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">6. Roadmap</h2>
        <p><strong>June 2025 – The Signal</strong><br />Website launch, Whitepaper release, Presale opens</p>
        <p><strong>Q3 2025 – Formation</strong><br />MemeDAO launch, Staking + Meme-to-Earn, Viral campaigns</p>
        <p><strong>Q4 2025 – Cultivation</strong><br />DEX listings, NFT shrines, Strategic partnerships</p>
        <p><strong>2026 and Beyond</strong><br />Written by the community. No fixed path. DAO decides. Memes guide.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">7. Team</h2>
        <p>No heroes. No faces. No LinkedIn.<br />We believe in building systems, not personal brands.<br />XombiX is anonymous by design — not to escape, but to stay culture-first.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">8. Security</h2>
        <ul className="list-disc pl-6">
          <li>External audits</li>
          <li>Time-locked contracts</li>
          <li>No upgrade switches</li>
          <li>Multi-sig treasury</li>
          <li>Locked liquidity</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">9. Philosophy</h2>
        <p>We don’t chase hype. We mock it.<br />We don’t pitch vision. We deliver satire with structure.<br />XombiX is a meme protocol, a mirror to the market, and a resistance movement disguised as a token.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl text-orange-300 font-bold mb-2">10. Disclaimer</h2>
        <p>Not financial advice. DYOR.<br />If a project screams “to the moon” without explaining how gravity works — run.</p>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        This is not just a token. It's a torch. We carry memes instead of weapons.<br />
        We build laughter into the blockchain. And when they ask what we are, we simply say:<br />
        <span className="text-orange-300 font-bold text-xl mt-2 inline-block">XombiX</span><br />
        <p className="mt-4">v1.0 – June 2025<br />XombiX Project © 2025 | MemeDAO powered | www.xombix.com</p>
      </footer>
    </main>
  );
}