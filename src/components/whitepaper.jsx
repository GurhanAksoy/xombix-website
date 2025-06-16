import React from "react";

export default function Whitepaper() {
  return (
    <div className="bg-black text-white px-6 py-12 max-w-4xl mx-auto font-mono leading-relaxed">
      <h1 className="text-3xl font-bold text-orange-400 mb-6 text-center">XombiX Whitepaper v1.0</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Introduction</h2>
        <p>
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.
          We’re not here to impress — we’re here to expose. Not to build castles in the sky — but to meme
          the broken system into awareness. XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Vision & Mission</h2>
        <p>
          We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a
          decentralized movement powered by cultural intelligence and creative rebellion.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Tokenomics</h2>
        <ul className="list-disc list-inside">
          <li><strong>Presale:</strong> 5% (38,850,000)</li>
          <li><strong>Developer (Locked):</strong> 15% (116,550,000)</li>
          <li><strong>Community Reserve:</strong> 35% (271,950,000)</li>
          <li><strong>Marketing & Ops:</strong> 15% (116,550,000)</li>
          <li><strong>Partnerships:</strong> 10% (77,700,000)</li>
          <li><strong>DEX Liquidity:</strong> 10% (77,700,000)</li>
          <li><strong>Donations (Mars Fund):</strong> 10% (77,700,000)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Presale Vesting</h2>
        <p>
          Month 0: 100% locked<br/>
          Months 1–6: Linear unlock in 6 equal parts (16.66% per month)<br/>
          Fully unlocked by Month 7
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Utility</h2>
        <ul className="list-disc list-inside">
          <li>Voting in MemeDAO</li>
          <li>Access to NFT drops and meme battles</li>
          <li>Meme-to-earn programs</li>
          <li>DAO proposals & treasury access</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Roadmap</h2>
        <p><strong>June 2025 – The Signal:</strong> Website & Whitepaper launch, Presale opens</p>
        <p><strong>Q3 2025 – Formation:</strong> MemeDAO, staking, viral campaigns</p>
        <p><strong>Q4 2025 – Cultivation:</strong> DEX listings, NFT shrines, partnerships</p>
        <p><strong>2026 & Beyond:</strong> Directed by the community</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Team</h2>
        <p>
          No heroes. No faces. No LinkedIn. We believe in building systems, not personal brands.
          XombiX is anonymous by design — not to escape, but to stay culture-first.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Security</h2>
        <ul className="list-disc list-inside">
          <li>External audits</li>
          <li>Time-locked contracts</li>
          <li>No upgrade switches</li>
          <li>Multi-sig treasury</li>
          <li>Locked liquidity</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Philosophy & Disclaimer</h2>
        <p>
          We don’t chase hype. We mock it. We don’t pitch vision. We deliver satire with structure.
          XombiX is a meme protocol, a mirror to the market, and a resistance movement disguised as a token.
        </p>
        <p className="mt-4 italic text-orange-300">
          This is not just a token. It’s a torch.
        </p>
        <p className="mt-2">We carry memes instead of weapons.</p>
      </section>
    </div>
  );
}
