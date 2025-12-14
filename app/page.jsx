"use client";

import { motion } from "framer-motion";

const ranks = [
  {
    name: "VIP",
    price: "₹199 / Month",
    image: "/ranks/vip.png",
    features: [
      "/back /craft /glow /ender",
      "VIP Kit",
      "5 Homes • 3 Warps",
      "2 Vaults",
      "2,000 ClaimBlocks",
      "20,000 Money"
    ]
  },
  {
    name: "MVP",
    price: "₹299 / Month",
    image: "/ranks/mvp.png",
    features: [
      "/nick /anvil /afk /craft /ender",
      "MVP Kit",
      "7 Homes • 5 Warps",
      "3 Vaults",
      "4,000 ClaimBlocks",
      "80,000 Money"
    ]
  },
  {
    name: "GOD",
    price: "₹399 / Month",
    image: "/ranks/god.png",
    features: [
      "/fly /sit /ender /anvil /glow /afk /feed",
      "GOD Prefix & Kit",
      "9 Homes",
      "4 Vaults",
      "10,000 ClaimBlocks",
      "500,000 Money"
    ]
  },
  {
    name: "GALAXY",
    price: "₹499 / Month",
    image: "/ranks/galaxy.png",
    features: [
      "/fly /heal /repair /hat /craft",
      "GALAXY Prefix & Kit",
      "20 Homes",
      "5 Vaults",
      "25,000 ClaimBlocks",
      "1,000,000 Money"
    ]
  }
];

export default function Page() {
  return (
    <main className="min-h-screen px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        SpaceMC Rank Store
      </h1>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ranks.map((rank, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative bg-card p-6 rounded-xl border-l-4 border-accent shadow-lg"
          >
            <img
              src={rank.image}
              alt={rank.name}
              className="w-20 mx-auto mb-4"
            />

            <h2 className="text-2xl font-bold text-center">
              {rank.name}
            </h2>

            <p className="text-yellow-400 text-center mb-4">
              {rank.price}
            </p>

            <ul className="text-sm space-y-2">
              {rank.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>

            <a
              href="https://discord.gg/dU4ZPhpAMh"
              target="_blank"
              className="block mt-6 text-center bg-yellow-400 text-black py-2 rounded-lg font-bold"
            >
              Buy Now
            </a>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-400 text-sm">
        Java IP: play.spacemcpe.fun <br />
        Bedrock IP: play.spacemcpe.fun:19132
        <br /><br />
        © 2025 Reserved By SpaceMC
      </div>
    </main>
  );
}
