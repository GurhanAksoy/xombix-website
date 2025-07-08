// XombiX Whitepaper – July 2025 (React JSX Full Component)
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

      {/* 1. Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">1. Introduction</h2>
        <p className="text-base text-gray-200">In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly. We’re not here to impress — we’re here to expose. Not to build castles in the sky — but to meme the broken system into awareness. XombiX is not a parody. It’s a protocol dressed in irony.</p>
      </section>

      {/* 2. Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">2. Vision & Mission</h2>
        <p className="text-base text-gray-200">We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion. We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.</p>
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
        <p className="text-sm text-gray-400 mt-4 italic text-center">* Going to Mars takes more than dreams. Colonies need culture and funding.<br />That’s why XombiX created the Mars Survival Support Fund.<br />DAO-managed. Meme-powered.</p>
      </section>

      {/* 4. Presale Structure & Vesting */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">4. Presale Structure & Vesting</h2>
        <p className="text-base text-gray-200">A total of 500 participants will be eligible to purchase 77,700 XOMBIX each — no more, no less. The initial presale price is fixed at $0.00077 per token.</p>
        <p className="text-base text-gray-200 mt-2">Once listed, tokens will be subject to a lock-up schedule:</p>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li>Month 0: 100% locked</li>
          <li>Months 1–6: Linear unlock in 6 equal parts (16.66% per month)</li>
          <li>Fully unlocked by Month 7</li>
        </ul>
        <p className="text-sm text-gray-400 italic mt-2">The deployer's holdings are also subject to the same 7-month lock-in, ensuring fairness and alignment with the community.</p>
      </section>

      {/* 5. DAO & Treasury Governance */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">5. DAO & Treasury Governance</h2>
        <p className="text-base text-gray-200">The XombiX DAO is not a figurehead. It is the living infrastructure of collective choice — powered by memes, driven by signal.</p>
        <h3 className="text-lg text-yellow-300 font-semibold mt-4 mb-2">Proposal System</h3>
        <p className="text-base text-gray-200">Any holder with at least 77,700 XOMBIX tokens can submit proposals. These may include:</p>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li>Funding community meme campaigns</li>
          <li>Allocating treasury to NFT projects</li>
          <li>Launching staking or burn events</li>
          <li>Expanding the Mars Survival Support Fund</li>
        </ul>

        <h3 className="text-lg text-yellow-300 font-semibold mt-4 mb-2">Voting Rights</h3>
        <p className="text-base text-gray-200">1 token = 1 vote. All proposals go through a public voting period using a DAO frontend (TBA) integrated with Snapshot or similar protocol.</p>

        <h3 className="text-lg text-yellow-300 font-semibold mt-4 mb-2">DAO Treasury</h3>
        <p className="text-base text-gray-200">The treasury holds part of the token supply and revenue from fees, events, and partnerships. Treasury is:</p>
        <ul className="list-disc list-inside text-gray-200 mt-2">
          <li>Secured via multi-signature wallets</li>
          <li>Funds released only through DAO-approved proposals</li>
          <li>Time-locked for security and transparency</li>
        </ul>

        <h3 className="text-lg text-yellow-300 font-semibold mt-4 mb-2">Security Measures</h3>
        <ul className="list-disc list-inside text-gray-200">
          <li>Multi-sig prevents unilateral control</li>
          <li>Time-locks delay large transactions</li>
          <li>Activity is public via blockchain explorers</li>
        </ul>

        <p className="text-base text-gray-200 mt-4">Holding XOMBIX makes you a voter, a proposer, a builder. The DAO isn't a platform. It's a playground.</p>
        <p className="text-base text-orange-400 italic mt-2">No kings. No council. Just chaos, memes, and coordination.</p>
      </section>

      {/* 6. Blockchain & Smart Contract */}
      <section className="mb-12">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">6. Blockchain & Smart Contract</h2>
        <p className="text-base text-gray-200">Yes, we exist. Not in imagination — but on-chain.</p>
        <p className="text-base text-gray-200 mt-2">XombiX is currently deployed on the Sepolia testnet — our cosmic sandbox for iterating code, simulating chaos, and hardening trust.</p>
        <p className="text-base text-gray-200 mt-2">The mainnet launch is set for <span className="italic">[Base / Ethereum / TBD]</span>, using a battle-tested ERC-20 architecture (yes, we still believe in standards).</p>

        <h3 className="text-lg text-yellow-300 font-semibold mt-4 mb-2">Current Testnet Contract</h3>
        <p className="text-base text-gray-200">0x778FA34e8c26c4EB5BC849807432dD45D33f77ea</p>
        <a
          href="https://sepolia.etherscan.io/address/0x778FA34e8c26c4EB5BC849807432dD45D33f77ea"
          className="text-yellow-400 underline text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Sepolia Etherscan
        </a>

        <p className="text-base text-gray-200 mt-4">As of now, the entire token supply is held by the deployer for simulation purposes. No distribution has occurred on the testnet, and no liquidity or transfers are enabled. This structure ensures secure testing and prevents misuse prior to mainnet launch.</p>

        <h3 className="text-lg text-yellow-300 font-semibold mt-4 mb-2">Upon Mainnet Launch</h3>
        <ul className="list-disc list-inside text-gray-200">
          <li>✅ Audited (we don't trust anyone — not even ourselves)</li>
          <li>🔒 Non-upgradeable (because power should not mutate)</li>
          <li>🕒 Time-locked (to delay temptation)</li>
          <li>🔐 Multi-signature secured (because one key = no key)</li>
        </ul>

        <p className="text-base text-gray-200 mt-4">Source code will be fully open on Etherscan and GitHub — because transparency isn't a feature, it's a weapon.</p>
        <p className="text-base text-orange-400 italic mt-2">Want to build with us? Or just watch from orbit? Either way, you're invited. This isn’t just a chain. It’s the signal.</p>
      </section>

          {/* 7. Risk & Disclaimer */}
      <section className="mb-20">
        <h2 className="text-2xl text-orange-300 font-bold mb-4">7. Risk & Disclaimer</h2>
        <p className="text-base text-gray-200">This is not financial advice. XombiX is not a get-rich-quick scheme. It’s not backed by venture capital, celebrity endorsements, or promises of eternal green candles.</p>
        <p className="text-base text-gray-200 mt-2">We are not your gurus. We are not your exit strategy. We are not promising the moon — because we understand how gravity works.</p>
        <p className="text-base text-gray-200 mt-2">Holding XOMBIX involves risk. The protocol is experimental. The community is unpredictable. The market is irrational.</p>
        <p className="text-base text-gray-200 mt-2">Smart contracts may contain bugs. MemeDAO decisions may fail — or succeed beyond reason. Liquidity can evaporate overnight. Your tokens could become worthless — or worth everything — depending on how the story unfolds.</p>
        <p className="text-base text-gray-200 mt-2">XombiX is a cultural artifact wrapped in code, not a guaranteed outcome. If you’re here, you’re part of a movement, not a transaction.</p>
        <p className="text-base text-gray-200 mt-2">Do your own research. Take your own responsibility. And above all — laugh wisely.</p>
        <p className="text-base text-orange-300 font-semibold mt-6">This is not just a token. It's a torch.</p>
        <p className="text-base text-gray-200">We carry memes instead of weapons. We build laughter into the blockchain.</p>
        <p className="text-base text-gray-200 italic mt-2">And when they ask what we are — we simply say:</p>
        <h3 className="text-3xl font-extrabold text-yellow-400 mt-4 text-center">XombiX</h3>
      </section>

    </main>
  );
}
