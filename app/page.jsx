"use client"; import { motion } from "framer-motion"; import { Crown, Server, Swords, Gamepad2, MessageCircle } from "lucide-react";

export default function SpaceMCStore() { const ranks = [ { name: "VIP", price: "₹49 / Month • ₹299 / Season", color: "from-yellow-400 to-yellow-600", perks: [ "Access to /back, /craft, /glow, /ender", "VIP Kit & Prefix", "5x Homes, 3x Warps", "2x Player Vault", "2,000 ClaimBlocks", "20,000 Ingame Money", ], }, { name: "MVP", price: "₹99 / Month • ₹549 / Season", color: "from-blue-400 to-blue-600", perks: [ "All VIP perks", "Access to /nick, /anvil, /afk", "MVP Kit & Prefix", "7x Homes", "3x Vaults, 5x Warps", "4,000 ClaimBlocks", "80,000 Ingame Money", ], }, { name: "GOD", price: "₹399 / Month", color: "from-red-400 to-red-600", perks: [ "All previous rank perks", "Access to /fly, /feed, /sit, /heal", "God Kit & Prefix", "9x Homes", "4x Vaults & Warps", "10,000 ClaimBlocks", "500,000 Ingame Money", ], }, { name: "GALAXY", price: "₹499 / Month", color: "from-purple-400 to-purple-600", perks: [ "All GOD perks", "Access to /repair, /hat, /stonecutter", "Galaxy Kit & Prefix", "20x Homes", "5x Vaults & Warps", "25,000 ClaimBlocks", "1,000,000 Ingame Money", ], }, ];

return ( <div className="min-h-screen bg-[#0e0f14] text-white"> {/* HERO */} <section className="text-center py-20"> <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-extrabold mb-4" > SpaceMC Store </motion.h1> <p className="text-gray-400 max-w-xl mx-auto"> Purchase premium ranks to unlock exclusive commands, kits and perks. </p> <div className="mt-6 flex justify-center gap-4 flex-wrap"> <span className="px-4 py-2 rounded-xl bg-black/40 border border-white/10">Java: play.spacemcpe.fun</span> <span className="px-4 py-2 rounded-xl bg-black/40 border border-white/10">Bedrock: play.spacemcpe.fun:19301</span> </div> </section>

{/* MODES */}
  <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
    {[{ icon: Server, name: "Survival" }, { icon: Gamepad2, name: "Minigames" }, { icon: Swords, name: "Duel Games" }].map((m) => (
      <div key={m.name} className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center">
        <m.icon className="mx-auto mb-3" />
        <h3 className="font-semibold text-lg">{m.name}</h3>
      </div>
    ))}
  </section>

  {/* RANK STORE */}
  <section className="max-w-7xl mx-auto px-4 pb-24">
    <h2 className="text-3xl font-bold text-center mb-12">Ranks Store</h2>
    <div className="grid md:grid-cols-4 gap-6">
      {ranks.map((rank) => (
        <motion.div
          key={rank.name}
          whileHover={{ scale: 1.05 }}
          className="relative bg-black/50 rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Glow line */}
          <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${rank.color}`} />

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-1">{rank.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{rank.price}</p>
            <ul className="text-sm space-y-2 text-gray-300">
              {rank.perks.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 rounded-xl bg-white text-black font-semibold">
              Buy Now
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </section>

  {/* DISCORD */}
  <section className="text-center py-16 bg-black/40">
    <MessageCircle className="mx-auto mb-3" />
    <h2 className="text-2xl font-bold">Join our Discord</h2>
    <p className="text-gray-400 mb-4">Get support, updates and giveaways</p>
    <a href="https://discord.gg/dU4ZPhpAMh" target="_blank">
      <button className="px-6 py-2 rounded-xl bg-indigo-500">Join Discord</button>
    </a>
  </section>

  {/* FOOTER */}
  <footer className="text-center py-8 text-gray-500 border-t border-white/10">
    © 2025 Reserved By SpaceMC
  </footer>
</div>

); }
