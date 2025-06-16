import React from "react";

export default function Whitepaper() {
  return (
    <main className="bg-black text-white px-6 py-12 max-w-5xl mx-auto font-mono leading-relaxed text-base">
      <h1 className="text-3xl font-bold text-red-400 text-center mb-10">XombiX Whitepaper</h1>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Introduction</h2>
        <p>
          In a sea of forks, fake promises, and follower-bought charts, <span className="text-orange-400 font-semibold">XombiX arrives as a conscious anomaly.</span><br/>
          We’re not here to impress — we’re here to expose.<br/>
          Not to build castles in the sky — but to meme the broken system into awareness.<br/>
          XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Vision & Mission</h2>
        <p>
          We believe memes are the mythology of modern culture.<br/>
          XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion.<br/>
          We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.
        </p>
      </section>

      {/* Tokenomics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Tokenomics</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-white text-sm">
            <thead>
              <tr className="bg-gray-800 text-orange-300">
                <th className="border border-white px-2 py-1">Allocation</th>
                <th className="border border-white px-2 py-1">%</th>
                <th className="border border-white px-2 py-1">Tokens</th>
                <th className="border border-white px-2 py-1">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Presale</td><td className="border px-2 py-1">5%</td><td className="border px-2 py-1">38,850,000</td><td className="border px-2 py-1">500 people x 77,700<br/>Presale Price: $0.00077</td></tr>
              <tr><td className="border px-2 py-1">Developer (Locked)</td><td className="border px-2 py-1">15%</td><td className="border px-2 py-1">116,550,000</td><td className="border px-2 py-1">Locked for 7 months,<br/>then linearly vested monthly</td></tr>
              <tr><td className="border px-2 py-1">Community Reserve</td><td className="border px-2 py-1">35%</td><td className="border px-2 py-1">271,950,000</td><td className="border px-2 py-1">DAO, staking, airdrops</td></tr>
              <tr><td className="border px-2 py-1">Marketing & Ops</td><td className="border px-2 py-1">15%</td><td className="border px-2 py-1">116,550,000</td><td className="border px-2 py-1">Growth, campaigns</td></tr>
              <tr><td className="border px-2 py-1">Partnerships</td><td className="border px-2 py-1">10%</td><td className="border px-2 py-1">77,700,000</td><td className="border px-2 py-1">Strategic tools & allies</td></tr>
              <tr><td className="border px-2 py-1">DEX Liquidity</td><td className="border px-2 py-1">10%</td><td className="border px-2 py-1">77,700,000</td><td className="border px-2 py-1">Locked LP pools</td></tr>
              <tr><td className="border px-2 py-1">Donations</td><td className="border px-2 py-1">10%</td><td className="border px-2 py-1">77,700,000</td><td className="border px-2 py-1">Mars Survival Support Fund</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic text-center text-gray-400 mt-4">
          * Going to Mars takes more than dreams. Colonies need culture and funding.<br/>
          That’s why XombiX created the Mars Survival Support Fund.<br/>
          DAO–managed. Meme–powered.
        </p>
      </section>

      {/* Vesting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Presale Vesting</h2>
        <p>
          Month 0: 100% locked<br/>
          Months 1–6: Linear unlock in 6 equal monthly parts (16.66% per month)<br/>
          Vesting total: Fully unlocked by Month 7
        </p>
      </section>

      {/* Utility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Utility</h2>
        <ul className="list-disc list-inside">
          <li>Voting in MemeDAO</li>
          <li>Access to NFT drops, meme battles</li>
          <li>Meme-to-earn programs</li>
          <li>Cultural identity via holding</li>
          <li>Access to XombiX-only voting events</li>
          <li>Entry to meme tournaments</li>
          <li>DAO proposals & treasury allocation rights</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Roadmap</h2>
        <p><strong>June 2025 – The Signal</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>Website launch</li>
          <li>Whitepaper release</li>
          <li>Presale opens</li>
        </ul>
        <p><strong>Q3 2025 – Formation</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>MemeDAO launch</li>
          <li>Staking + Meme-to-Earn</li>
          <li>Viral campaigns</li>
        </ul>
        <p><strong>Q4 2025 – Cultivation</strong></p>
        <ul className="list-disc list-inside mb-4">
          <li>DEX listings</li>
          <li>NFT shrines</li>
          <li>Strategic partnerships</li>
        </ul>
        <p><strong>2026 and Beyond – Written by the Community</strong></p>
        <p>
          XombiX doesn't follow a fixed path.<br/>
          Its future will be shaped by the collective — not dictated by a roadmap.<br/>
          Decisions belong to the DAO. Direction to the memes. And fire to us.
        </p>
      </section>

      {/* Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Team</h2>
        <p>
          No heroes. No faces. No LinkedIn.<br/>
          We believe in building systems, not personal brands.<br/>
          XombiX is anonymous by design — not to escape, but to stay culture–first.
        </p>
      </section>

      {/* Security */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Security</h2>
        <ul className="list-disc list-inside">
          <li>External audits</li>
          <li>Time-locked contracts</li>
          <li>No upgrade switches</li>
          <li>Multi-sig treasury</li>
          <li>Locked liquidity</li>
        </ul>
      </section>

      {/* Philosophy & Disclaimer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Philosophy</h2>
        <p>
          We don’t chase hype. We mock it.<br/>
          We don’t pitch vision. We deliver satire with structure.<br/>
          XombiX is a meme protocol, a mirror to the market, and a resistance movement disguised as a token.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-300 mb-3">Disclaimer</h2>
        <p>
          Not financial advice. DYOR.<br/>
          If a project screams “to the moon” without explaining how gravity works, run.
        </p>
        <p className="mt-6 italic text-orange-300 text-center">
          This is not just a token. It’s a torch.<br/>
          We carry memes instead of weapons.<br/>
          We build laughter into the blockchain.<br/>
          And when they ask what we are<br/>
        </p>
        <p className="text-center text-2xl mt-4 font-bold text-red-400">**XombiX**</p>
      </section>

      <p className="text-sm text-center mt-10 text-gray-500 italic">v1.0 – June 2025<br/>
        XombiX Project © 2025 | MemeDAO powered | www.xombix.com
      </p>
    </main>
  );
}

<div className="text-center mt-8">
  <a
    href="/xombix-whitepaper.pdf"
    download
    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl shadow-lg transition duration-300"
  >
    📥 Download PDF
  </a>
</div>
