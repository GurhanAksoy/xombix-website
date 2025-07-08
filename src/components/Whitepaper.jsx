// Full React JSX component for XombiX Whitepaper July 2025
import React from "react";

export default function Whitepaper() {
  return (
    <main className="relative min-h-screen text-gray-100 px-4 sm:px-6 py-12 max-w-4xl mx-auto font-sans leading-relaxed z-10">

      {/* PDF Download Button */}
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
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.
          We’re not here to impress — we’re here to expose. Not to build castles in the sky — but to meme the broken system into awareness.
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
              <tr><td className="py-2 px-4 border border-gray-700">Presale</td><td>5%</td><td>38,850,000</td><td>500 × 77,700 – $0.00077</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Developer (Locked)</td><td>15%</td><td>116,550,000</td><td>Locked 7 months, then linear vesting</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Community Reserve</td><td>35%</td><td>271,950,000</td><td>DAO, staking, airdrops</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Marketing & Ops</td><td>15%</td><td>116,550,000</td><td>Growth, campaigns</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Partnerships</td><td>10%</td><td>77,700,000</td><td>Strategic tools & allies</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">DEX Liquidity</td><td>10%</td><td>77,700,000</td><td>Locked LP pools</td></tr>
              <tr><td className="py-2 px-4 border border-gray-700">Donations</td><td>10%</td><td>77,700,000</td><td>Mars Survival Support Fund</td></tr>
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
        <h2 className="text-2xl text-orange-300 font-bold mb-4">4. Token Utility</h2>
        <ul className="list-disc list-inside text-base text-gray-200 space-y-2">
          <li><strong>MemeDAO Voting:</strong> Vote on proposals — treasury, campaigns, shrine designs.</li>
          <li><strong>Meme-to-Earn Participation:</strong> Earn XOMBIX by creating viral memes.</li>
          <li><strong>Exclusive NFT Drops:</strong> Access NFT “Shrines” only for holders.</li>
          <li><strong>Meme Battle Arenas:</strong> Compete in community meme tournaments.</li>
          <li><strong>Cultural Identity:</strong> XOMBIX is your cultural proof-of-work.</li>
          <li><strong>Special Events & Calls:</strong> Join token-gated AMAs and missions.</li>
        </ul>
        <p className="text-base text-gray-300 italic mt-4">
          Don’t just hold XombiX. Wield it. You’re not buying hype. You’re becoming signal.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">5. Presale Vesting</h2>
        <p className="text-base text-gray-200">
          Each presale participant receives 77,700 XOMBIX at $0.00077. Vesting plan:
        </p>
        <ul className="list-disc list-inside text-base text-gray-200 space-y-2 mt-2">
          <li>Month 0: 100% locked</li>
          <li>Months 1–6: 16.66% unlocked monthly</li>
          <li>Month 7: Fully unlocked</li>
        </ul>
        <p className="text-sm text-gray-300 italic mt-2">Same lock applies to developer-held tokens.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">6. Roadmap</h2>
        <ul className="list-disc list-inside text-base text-gray-200 space-y-3">
          <li><strong>June 2025 – The Signal:</strong> Website, whitepaper, presale</li>
          <li><strong>Q3 2025 – Formation:</strong> MemeDAO, staking, viral campaigns</li>
          <li><strong>Q4 2025 – Cultivation:</strong> DEX listings, NFT shrines, partnerships</li>
          <li><strong>2026+ – Decentralized Future:</strong> DAO-driven evolution</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">7. DAO & Treasury Governance</h2>
        <ul className="list-disc list-inside text-base text-gray-200 space-y-2">
          <li><strong>Proposal System:</strong> Any holder with 77,700 XOMBIX may propose.</li>
          <li><strong>Voting Rights:</strong> 1 token = 1 vote. Voting via Snapshot.</li>
          <li><strong>Treasury:</strong> DAO-controlled, multi-sig + time-locked.</li>
          <li><strong>Security:</strong> Public audit logs, transparent access.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">8. Blockchain & Smart Contract</h2>
        <p className="text-base text-gray-200">
          Deployed on Sepolia Testnet:{" "}
          <a href="https://sepolia.etherscan.io/address/0x778FA34e8c26c4EB5BC849807432dD45D33f77ea" className="text-yellow-300 underline">
            0x778FA34e...
          </a>
          <br />
          Mainnet will use standard ERC-20 and be:
        </p>
        <ul className="list-disc list-inside text-base text-gray-200 space-y-2 mt-2">
          <li>✅ Audited</li>
          <li>🔒 Non-upgradeable</li>
          <li>🕒 Time-locked</li>
          <li>🔐 Multi-sig treasury</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">9. Team / Security / Philosophy</h2>
        <p className="text-base text-gray-200 mb-2"><strong>Team:</strong> Anonymous. Culture-first, not ego-first.</p>
        <p className="text-base text-gray-200 mb-2"><strong>Security:</strong> Multi-sig, locked liquidity, audit plans.</p>
        <p className="text-base text-gray-200"><strong>Philosophy:</strong> Satire with structure. XombiX is resistance wrapped in code.</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">10. Risk & Disclaimer</h2>
        <p className="text-base text-gray-200 mb-4">
          XombiX is experimental. Market is irrational. Community is wild. Contracts may bug. DAO may misfire.
          Tokens may be worthless — or worth everything.
        </p>
        <p className="text-base text-gray-200 mb-4">
          Do your own research. Carry your own weight. Laugh wisely.
        </p>
        <p className="text-lg font-semibold text-orange-200 mt-6">
          This is not just a token. It's a torch.<br />
          We carry memes instead of weapons.<br />
          We build laughter into the blockchain.<br />
          <br />
          <span className="text-3xl text-yellow-400 font-bold">XombiX</span>
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>XombiX Project © 2025 | MemeDAO powered | <a href="https://www.xombix.com" className="underline text-yellow-400">www.xombix.com</a></p>
        <p>v1.0 – July 2025</p>
      </footer>

    </main>
  );
}
