import { motion } from "motion/react";
import { Send, FileText, ArrowUp, RefreshCw, Star } from "lucide-react";

export default function Footer() {
  const contractAddress = "0xa93d86Af16fe83F064E3C0e2F3d129F7B7b002b0";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.01] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
              COCORO
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-1">
              The Heart, Mind, and Soul of the Black Shiba.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://x.com/cocoroblackshib"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all font-mono font-bold text-sm"
              whileHover={{ y: -2 }}
            >
              X
            </motion.a>
            <motion.a
              href="https://t.me/Cocoro_ethereum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              whileHover={{ y: -2 }}
            >
              <Send size={16} />
            </motion.a>
            <motion.a
              href="https://dexscreener.com/ethereum/0x0d1cfdb753f03500f5ae1f565dc3823367630061"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              whileHover={{ y: -2 }}
              title="DexScreener Link"
            >
              <RefreshCw size={16} />
            </motion.a>
            <motion.a
              href={`https://etherscan.io/token/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              whileHover={{ y: -2 }}
              title="Etherscan Contract Link"
            >
              <FileText size={16} />
            </motion.a>
          </div>
        </div>

        {/* Disclaimer Area */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <p className="text-[10px] text-gray-600 font-sans leading-relaxed">
              DISCLAIMER: COCORO ($COCORO) is a community-first meme coin created strictly for digital culture, humor, and artistic representation on the Ethereum blockchain. It holds no guarantees of utility, financial returns, or inherent structural value. Cryptocurrencies represent high speculative volatility. Engage and trade at your own risk.
            </p>
            <p className="text-[10px] text-gray-600 font-mono mt-3">
              Contract: {contractAddress}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-gray-600 font-sans">
              © {new Date().getFullYear()} COCORO. All rights reserved.
            </span>
            
            <motion.button
              onClick={handleScrollTop}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              whileHover={{ y: -2 }}
              title="Scroll back to top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
