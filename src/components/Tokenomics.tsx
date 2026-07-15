import { motion } from "motion/react";
import { Coins, Flame, ShieldAlert, Star } from "lucide-react";

export default function Tokenomics() {
  const metrics = [
    {
      title: "TOTAL SUPPLY",
      value: "420,690,000,000",
      sub: "1 Billion Fixed Supply",
      desc: "No mint function. No inflation. Fully locked supply allocation on the Robinhood Chain network.",
      icon: <Coins size={20} className="text-[#00c805]" />,
    },
    {
      title: "BUY / SELL TAX",
      value: "1% / 1%",
      sub: "Zero Slippage Burden",
      desc: "No fees taken on trading. Pure community buying and selling. Maximum trade efficiency on DEXs.",
      icon: <Star size={20} className="text-[#00c805]" />,
    },
    {
      title: "LIQUIDITY POOL",
      value: "100% BURNT",
      sub: "Unruggable Security",
      desc: "LP tokens burnt permanently to the null address on launch. Trading liquidity is guaranteed forever.",
      icon: <Flame size={20} className="text-[#00c805]" />,
    },
    {
      title: "CONTRACT OWNER",
      value: "RENOUNCED",
      sub: "Immutable Standard",
      desc: "Ownership renounced entirely. The contract belongs to the code itself and cannot be modified by anyone.",
      icon: <ShieldAlert size={20} className="text-[#00c805]" />,
    },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-[#050505] bg-grid-pattern relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00c805]/[0.02] rounded-full blur-[110px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Coins size={12} />
            COCORONOMICS
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tokenomics & Metrics
          </motion.h2>
          <p className="text-gray-500 font-sans text-sm sm:text-base max-w-xl mx-auto">
            A fully transparent, fair-launched, and secure utility standard on Robinhood Chain designed for complete decentralization.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.title}
              className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {m.icon}
                </div>
                <span className="text-[10px] text-gray-500 font-mono tracking-wider block mb-1">
                  {m.title}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  {m.value}
                </h3>
                <p className="text-xs text-gray-300 font-mono font-medium mb-3">
                  {m.sub}
                </p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed pt-3 border-t border-white/5">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

