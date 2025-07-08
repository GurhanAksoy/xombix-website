// XombiX Whitepaper – July 2025 (React JSX Full Component)
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

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Introduction</h2>
        <p>In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.</p>
        <p>We’re not here to impress — we’re here to expose.</p>
        <p>Not to build castles in the sky — but to meme the broken system into awareness.</p>
        <p>XombiX is not a parody. It’s a protocol dressed in irony.</p>
      </section>

      {/* Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Vision & Mission</h2>
        <p>We believe memes are the mythology of modern culture.</p>
        <p>XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion.</p>
        <p>We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.</p>
      </section>

      {/* Tokenomics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Tokenomics</h2>
        <p><em>Going to Mars takes more than dreams. Colonies need culture and funding.</em></p>
        <p>That’s why XombiX created the Mars Survival Support Fund.</p>
        <p><strong>DAO-managed. Meme-powered.</strong></p>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm text-left border border-gray-700">
            <thead className="bg-gray-800 text-gray-100">
              <tr>
                <th className="border border-gray-700 px-4 py-2">Allocation</th>
                <th className="border border-gray-700 px-4 py-2">%</th>
                <th className="border border-gray-700 px-4 py-2">Tokens</th>
                <th className="border border-gray-700 px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr>
                <td className="border border-gray-700 px-4 py-2">Presale</td>
                <td className="border border-gray-700 px-4 py-2">5%</td>
                <td className="border border-gray-700 px-4 py-2">38,850,000</td>
                <td className="border border-gray-700 px-4 py-2">500 people × 77,700<br />Presale Price: $0.00077</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Developer (Locked)</td>
                <td className="border border-gray-700 px-4 py-2">15%</td>
                <td className="border border-gray-700 px-4 py-2">116,550,000</td>
                <td className="border border-gray-700 px-4 py-2">Locked for 7 months, then linearly vested monthly</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Community Reserve</td>
                <td className="border border-gray-700 px-4 py-2">35%</td>
                <td className="border border-gray-700 px-4 py-2">271,950,000</td>
                <td className="border border-gray-700 px-4 py-2">DAO, staking, airdrops</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Marketing & Ops</td>
                <td className="border border-gray-700 px-4 py-2">15%</td>
                <td className="border border-gray-700 px-4 py-2">116,550,000</td>
                <td className="border border-gray-700 px-4 py-2">Growth, campaigns</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Partnerships</td>
                <td className="border border-gray-700 px-4 py-2">10%</td>
                <td className="border border-gray-700 px-4 py-2">77,700,000</td>
                <td className="border border-gray-700 px-4 py-2">Strategic tools & allies</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">DEX Liquidity</td>
                <td className="border border-gray-700 px-4 py-2">10%</td>
                <td className="border border-gray-700 px-4 py-2">77,700,000</td>
                <td className="border border-gray-700 px-4 py-2">Locked LP pools</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Donations</td>
                <td className="border border-gray-700 px-4 py-2">10%</td>
                <td className="border border-gray-700 px-4 py-2">77,700,000</td>
                <td className="border border-gray-700 px-4 py-2">Mars Survival Support Fund</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DEVAM EDECEK: Utility, Roadmap, DAO, Smart Contract, Risk, Footer... */}
    </main>
  );
}
      {/* Token Utility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Token Utility</h2>
        <p>XombiX is not a coin you hold. It’s a tool you wield.</p>
        <p className="mt-2">Here’s what XombiX unlocks:</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>MemeDAO Voting:</strong> Cast your vote on proposals that shape the future — from treasury allocations to meme campaigns, shrine designs to burn events. One token, one voice.</li>
          <li><strong>Meme-to-Earn Participation:</strong> Earn XombiX by creating viral content. The more impact your meme has, the more you earn. Humor = capital.</li>
          <li><strong>Exclusive NFT Drops:</strong> Access NFT “Shrines” — cultural relics of the memeverse — available only to XombiX holders.</li>
          <li><strong>Meme Battle Arenas:</strong> Enter creative combat. Token holders can compete in community meme tournaments judged by the DAO.</li>
          <li><strong>Cultural Identity:</strong> Holding XombiX is a signal — a membership card in a decentralized resistance. It’s your cultural proof-of-work.</li>
          <li><strong>Special Events & Calls:</strong> Participate in token-gated events, community AMAs, and secret missions. Only for those who dare.</li>
        </ul>
      </section>

      {/* Roadmap */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Roadmap</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>June 2025 – The Signal:</strong> Website launch, Whitepaper release, Presale opens</li>
          <li><strong>Q3 2025 – Formation:</strong> MemeDAO launch, Staking + Meme-to-Earn, Viral campaigns</li>
          <li><strong>Q4 2025 – Cultivation:</strong> DEX listings, NFT shrines, Strategic partnerships</li>
          <li><strong>2026 and Beyond – Written by the Community:</strong> XombiX doesn't follow a fixed path. Its future will be shaped by the collective — not dictated by a roadmap.</li>
        </ul>
      </section>

      {/* DAO & Treasury Governance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">DAO & Treasury Governance</h2>
        <p className="mb-2 italic">You don’t follow XombiX. You become it.</p>
        <p>The XombiX DAO is not a figurehead. It is the living infrastructure of collective choice — powered by memes, driven by signal.</p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Proposal System:</strong> Any holder with at least 77,700 XOMBIX tokens can submit proposals for funding meme campaigns, NFT projects, staking, burns, or supporting the Mars Survival Support Fund.</li>
          <li><strong>Voting Rights:</strong> 1 token = 1 vote. Voting takes place via a DAO frontend integrated with Snapshot (TBA).</li>
          <li><strong>DAO Treasury:</strong> Managed via multi-signature wallets, time-locked for security. Funds are only released through DAO-approved proposals and publicly auditable on-chain.</li>
        </ul>
      </section>

      {/* Blockchain & Smart Contract */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Blockchain & Smart Contract</h2>
        <p><em>Yes, we exist. Not in imagination — but on-chain.</em></p>
        <p className="mt-2">XombiX is currently deployed on the Sepolia testnet — our cosmic sandbox for iterating code, simulating chaos, and hardening trust.</p>
        <p className="mt-2">Mainnet launch is set for [Base / Ethereum / TBD], using a battle-tested ERC-20 architecture (yes, we still believe in standards).</p>
        <p className="mt-2"><strong>Current testnet contract:</strong> <a href="https://sepolia.etherscan.io/address/0x778FA34e8c26c4EB5BC849807432dD45D33f77ea" className="underline text-yellow-400">0x778FA34e8c26c4EB5BC849807432dD45D33f77ea</a></p>
        <p className="mt-2">Upon mainnet deployment, all smart contracts will be:</p>
        <ul className="list-disc list-inside space-y-1">
          <li> Audited (we don't trust anyone — not even ourselves)</li>
          <li> Non-upgradeable (because power should not mutate)</li>
          <li> Time-locked (to delay temptation)</li>
          <li> Multi-signature secured (because one key = no key)</li>
        </ul>
        <p className="mt-2">Source code will be fully open via Etherscan and GitHub — because transparency isn’t a feature, it's a weapon.</p>
      </section>

      {/* Risk & Disclaimer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">Risk & Disclaimer</h2>
        <p>This is not financial advice.</p>
        <p>XombiX is not a get-rich-quick scheme. It’s not backed by venture capital, celebrity endorsements, or promises of eternal green candles.</p>
        <p>We are not your gurus. We are not your exit strategy. We are not promising the moon — because we understand how gravity works.</p>
        <p>Holding XOMBIX involves risk. The protocol is experimental. The community is unpredictable. The market is irrational. Smart contracts may contain bugs. MemeDAO decisions may fail. Liquidity may vanish.</p>
        <p>Your tokens could become worthless — or priceless — depending on how the story unfolds.</p>
        <p>XombiX is a cultural artifact wrapped in code, not a guaranteed outcome.</p>
        <p>If you’re here, you’re part of a movement, not a transaction.</p>
        <p>Do your own research. Take your own responsibility. And above all — laugh wisely.</p>
        <p className="mt-6 font-semibold text-yellow-300">
          This is not just a token. It's a torch.<br />
          We carry memes instead of weapons.<br />
          We build laughter into the blockchain.<br />
          And when they ask what we are<br /><br />
          <span className="text-3xl font-bold text-orange-400">XombiX</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>XombiX Project © 2025 | MemeDAO powered | <a href="https://www.xombix.com" className="underline text-yellow-400">www.xombix.com</a></p>
        <p>v1.0 – July 2025</p>
      </footer>

    </main>
  );
}
