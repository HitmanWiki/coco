import { motion } from "motion/react";
import { TrendingUp, ExternalLink, RefreshCw } from "lucide-react";
import { useState } from "react";

export default function Chart() {
  const [reloadKey, setReloadKey] = useState(0);

  const handleRefresh = () => {
    setReloadKey((prev) => prev + 1);
  };

  return (
    <section id="chart" className="py-24 bg-[#050505] bg-grid-pattern relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <motion.div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <TrendingUp size={12} />
              REAL-TIME MARKET ACTION
            </motion.div>
            <motion.h2
              className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Live Trading Chart
            </motion.h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Refresh Button */}
            <motion.button
              onClick={handleRefresh}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10 text-xs font-mono flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              title="Refresh Chart Feed"
            >
              <RefreshCw size={12} />
              REFRESH
            </motion.button>

            {/* External Link */}
            <motion.a
              href="https://dexscreener.com/ethereum/0x0d1cfdb753f03500f5ae1f565dc3823367630061"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white text-[#050505] hover:bg-[#e5e7eb] font-display font-bold text-xs flex items-center gap-2 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              DEXSCREENER
              <ExternalLink size={12} />
            </motion.a>
          </div>
        </div>

        {/* Live Chart IFrame container */}
        <motion.div
          className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* IFrame Overlay Loading indicator fallback */}
          <div className="absolute inset-0 bg-[#050505] z-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-white animate-spin" />
              <span className="font-mono text-xs text-gray-500">SYNCHRONIZING WITH DEXSCREENER ENGINE...</span>
            </div>
          </div>

          {/* Secure embedded chart */}
          <iframe
            key={reloadKey}
            src="https://dexscreener.com/ethereum/0x0d1cfdb753f03500f5ae1f565dc3823367630061?embed=1&theme=dark"
            className="w-full h-[550px] sm:h-[650px] relative z-10 border-0 bg-transparent"
            allow="fullscreen"
            title="COCORO Live Dexscreener Chart"
          />
        </motion.div>
        
        {/* Trading warning disclaimer */}
        <p className="text-center text-[10px] sm:text-xs text-gray-600 mt-6 font-mono leading-relaxed max-w-2xl mx-auto">
          ⚠️ MEME COINS ARE HIGH-VOLATILITY SPECULATIVE ASSETS. THE LIVE MARKET GRAPH ABOVE REPRESENTS DECENTRALIZED EXCHANGE LIQUIDITY RECORDS. INVEST ONLY WHAT YOU ARE COMFORTABLE WITH.
        </p>
      </div>
    </section>
  );
}
