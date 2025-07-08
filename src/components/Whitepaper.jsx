import React from "react";

export default function Whitepaper() {
  return (
    <main className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">XombiX Whitepaper – July 2025</h1>
import React from "react";

export default function Whitepaper() {
  return (
    <main className="bg-black text-white p-6 max-w-4xl mx-auto">

      {/* 1. Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">1. Introduction</h2>
        <p className="text-base text-gray-200">
          In a sea of forks, fake promises, and follower-bought charts, XombiX arrives as a conscious anomaly.
          We’re not here to impress — we’re here to expose. Not to build castles in the sky — but to meme the broken system into awareness.
        </p>
        <p className="text-base text-gray-200 mt-4">
          XombiX is not a parody. It’s a protocol dressed in irony.
        </p>
      </section>

      {/* 2. Vision & Mission */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">2. Vision & Mission</h2>
        <p className="text-base text-gray-200">
          We believe memes are the mythology of modern culture. XombiX unites self-aware investors into a decentralized movement powered by cultural intelligence and creative rebellion.
        </p>
        <p className="text-base text-gray-200 mt-4">
          We don’t promise revolution. We promise recognition — of the absurdity, and the tools to outgrow it.
        </p>
      </section>

      {/* 3. Tokenomics */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">3. Tokenomics</h2>
        <p className="text-base text-gray-200">
          Going to Mars takes more than dreams. Colonies need culture and funding. That’s why XombiX created the Mars Survival Support Fund. DAO-managed. Meme-powered.
        </p>
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full table-auto border border-gray-500 text-sm text-left text-gray-300">
            <thead className="bg-gray-800 text-orange-300">
              <tr>
                <th className="border border-gray-600 px-4 py-2">Allocation</th>
                <th className="border border-gray-600 px-4 py-2">%</th>
                <th className="border border-gray-600 px-4 py-2">Tokens</th>
                <th className="border border-gray-600 px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              <tr>
                <td className="border border-gray-700 px-4 py-2">Presale</td>
                <td className="border border-gray-700 px-4 py-2">5%</td>
                <td className="border border-gray-700 px-4 py-2">38,850,000</td>
                <td className="border border-gray-700 px-4 py-2">500 people x 77,700 — Presale Price: $0.00077</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Developer (Locked)</td>
                <td className="border border-gray-700 px-4 py-2">15%</td>
                <td className="border border-gray-700 px-4 py-2">116,550,000</td>
                <td className="border border-gray-700 px-4 py-2">Locked 7 months, then linear vesting</td>
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

{/* 4. Token Utility */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">4. Token Utility</h2>
        <p className="text-orange-200 italic mb-4">XombiX is not a coin you hold. It’s a tool you wield.</p>
        <p className="text-base text-gray-200">Here’s what XombiX unlocks:</p>
        <ul className="list-disc list-inside text-gray-100 mt-4 space-y-2">
          <li><strong>🗳 MemeDAO Voting:</strong> Cast your vote on proposals that shape the future — from treasury allocations to meme campaigns, shrine designs to burn events. One token, one voice.</li>
          <li><strong>🎨 Meme-to-Earn Participation:</strong> Earn XombiX by creating viral content. The more impact your meme has, the more you earn. Humor = capital.</li>
          <li><strong>🔓 Exclusive NFT Drops:</strong> Access NFT “Shrines” — cultural relics of the memeverse — available only to XombiX holders.</li>
          <li><strong>⚔️ Meme Battle Arenas:</strong> Enter creative combat. Token holders can compete in community meme tournaments judged by the DAO.</li>
          <li><strong>🛡 Cultural Identity:</strong> Holding XombiX is a signal — a membership card in a decentralized resistance. It’s your cultural proof-of-work.</li>
          <li><strong>📢 Special Events & Calls:</strong> Participate in token-gated events, community AMAs, and secret missions. Only for those who dare.</li>
        </ul>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">Protocol-Level Access</h3>
        <p className="text-base text-gray-200">XombiX will serve as the native utility token for future integrations, enabling access to staking systems, DAO proposals, and smart-contract interactions across the ecosystem.</p>
        <div className="mt-6 text-orange-200 italic">
          <p>Don’t just hold XombiX.</p>
          <p>Wield it.</p>
          <p>You’re not buying hype. You’re becoming signal.</p>
        </div>
      </section>

      {/* 5. Presale Vesting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">5. Presale Vesting</h2>
        <p className="text-base text-gray-200"><strong>Presale Size:</strong> 500 participants × 77,700 XOMBIX = 38,850,000 XOMBIX (5% of total supply)</p>
        <p className="text-base text-gray-200 mt-2"><strong>Presale Price:</strong> $0.00077 per token</p>
        <p className="text-base text-gray-200 mt-2"><strong>Launch Price Target:</strong> $0.0077 (10× return for early believers)</p>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">Vesting Schedule</h3>
        <ul className="list-disc list-inside text-gray-100 space-y-2">
          <li>Month 0: 100% locked</li>
          <li>Months 1–6: Linear unlock in 6 equal monthly parts (16.66% per month)</li>
          <li>Fully unlocked by Month 7</li>
        </ul>
        <p className="text-base text-gray-200 mt-4">All presale participants are subject to the same vesting timeline. The developer’s allocation will follow an identical lockup and release structure for full alignment.</p>
      </section>

      {/* 6. DAO & Treasury Governance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">6. DAO & Treasury Governance</h2>
        <p className="text-orange-200 italic mb-4">You don’t follow XombiX. You become it.</p>
        <p className="text-base text-gray-200">The XombiX DAO is not a figurehead. It is the living infrastructure of collective choice — powered by memes, driven by signal.</p>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">🗳 Proposal System</h3>
        <p className="text-base text-gray-200">Any holder with at least <strong>77,700 XOMBIX</strong> tokens will be eligible to submit proposals to the DAO. These may include:</p>
        <ul className="list-disc list-inside text-gray-100 mt-2 space-y-2">
          <li>Funding community meme campaigns</li>
          <li>Allocating treasury to NFT projects</li>
          <li>Launching staking or burn events</li>
          <li>Expanding the Mars Survival Support Fund</li>
        </ul>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">🧠 Voting Rights</h3>
        <p className="text-base text-gray-200">1 token = 1 vote. All proposals undergo a public voting period, ensuring transparent decision-making. Voting will be facilitated through a DAO frontend (to be announced) integrated with Snapshot or a similar protocol.</p>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">🏦 DAO Treasury</h3>
        <p className="text-base text-gray-200">The community treasury holds a reserved portion of the token supply and all revenues from fees, events, and ecosystem partnerships.</p>
        <ul className="list-disc list-inside text-gray-100 mt-2 space-y-2">
          <li>Managed via multi-signature wallets</li>
          <li>Funds released only through DAO-approved proposals</li>
          <li>Time-locked for security and accountability</li>
        </ul>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">🛡 Security Measures</h3>
        <ul className="list-disc list-inside text-gray-100 space-y-2">
          <li>Multi-sig: Prevents unilateral control</li>
          <li>Time-locks: Introduce delay before large fund moves</li>
          <li>Public audit logs via chain explorers</li>
        </ul>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">👽 Join the Process</h3>
        <p className="text-base text-gray-200">Holding XOMBIX makes you a voter, a proposer, a builder. The DAO isn't a platform. It's a playground.</p>
        <p className="text-orange-200 italic mt-4">No kings. No council. Just chaos, memes, and coordination.</p>
      </section>

{/* 7. Blockchain & Smart Contract */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">7. Blockchain & Smart Contract</h2>
        <p className="text-orange-200 italic mb-4">Yes, we exist. Not in imagination — but on-chain.</p>
        <p className="text-base text-gray-200">XombiX is currently deployed on the Sepolia testnet — our cosmic sandbox for iterating code, simulating chaos, and hardening trust.</p>
        <p className="text-base text-gray-200 mt-4">The mainnet launch is set for <strong>[Base / Ethereum / TBD]</strong>, using a battle-tested ERC-20 architecture (yes, we still believe in standards).</p>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">Current testnet contract:</h3>
        <p className="text-base text-gray-200">
          <code className="bg-gray-800 text-yellow-200 px-2 py-1 rounded">0x778FA34e8c26c4EB5BC849807432dD45D33f77ea</code><br />
          <a href="https://sepolia.etherscan.io/address/0x778FA34e8c26c4EB5BC849807432dD45D33f77ea" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">View on Sepolia Etherscan</a>
        </p>
        <p className="text-base text-gray-200 mt-4">As of now, the entire token supply is held by the deployer for simulation purposes. No distribution has occurred on the testnet, and no liquidity or transfers are enabled. This structure ensures secure testing and prevents misuse prior to mainnet launch.</p>
        <h3 className="text-lg text-yellow-300 font-semibold mt-6 mb-2">Upon mainnet deployment, all smart contracts will be:</h3>
        <ul className="list-disc list-inside text-gray-100 space-y-2">
          <li>✅ Audited (we don't trust anyone — not even ourselves)</li>
          <li>🔒 Non-upgradeable (because power should not mutate)</li>
          <li>🕒 Time-locked (to delay temptation)</li>
          <li>🔐 Multi-signature secured (because one key = no key)</li>
        </ul>
        <p className="text-base text-gray-200 mt-4">Source code will be fully open on Etherscan and GitHub — because transparency isn't a feature, it's a weapon.</p>
        <p className="text-orange-200 italic mt-6">Want to build with us? Or just watch from orbit? Either way, you're invited. This isn’t just a chain. It’s the signal.</p>
      </section>

      {/* 8. Risk & Disclaimer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-orange-300 mb-4">8. Risk & Disclaimer</h2>
        <p className="text-base text-gray-200">This is not financial advice. XombiX is not a get-rich-quick scheme. It’s not backed by venture capital, celebrity endorsements, or promises of eternal green candles.</p>
        <p className="text-base text-gray-200 mt-4">We are not your gurus. We are not your exit strategy. We are not promising the moon — because we understand how gravity works.</p>
        <p className="text-base text-gray-200 mt-4">Holding XOMBIX involves risk. The protocol is experimental. The community is unpredictable. The market is irrational. Smart contracts may contain bugs. MemeDAO decisions may fail — or succeed beyond reason. Liquidity can evaporate overnight. Your tokens could become worthless — or worth everything — depending on how the story unfolds.</p>
        <p className="text-base text-gray-200 mt-4">XombiX is a cultural artifact wrapped in code, not a guaranteed outcome. If you’re here, you’re part of a movement, not a transaction.</p>
        <p className="text-base text-gray-200 mt-4">Do your own research.<br />Take your own responsibility.<br />And above all — laugh wisely.</p>
        <div className="mt-6 text-orange-200 italic">
          <p>This is not just a token. It's a torch.</p>
          <p>We carry memes instead of weapons.</p>
          <p>We build laughter into the blockchain.</p>
          <p>And when they ask what we are</p>
          <p className="text-2xl font-bold text-orange-400 mt-2">We simply say: XombiX</p>
        </div>
      </section>
    </main>
  );
}