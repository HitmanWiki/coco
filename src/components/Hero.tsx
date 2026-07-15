import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, Shield, Flame, Percent, Wallet, ArrowUpRight } from "lucide-react";
// @ts-ignore
import cocoroLogo from "../assets/images/cocoro_logo_rh_1784086237306.png";

interface HeroProps {
  onPlayBark: () => void;
}

export default function Hero({ onPlayBark }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x235F36205EB00eb0A3a978112b29F3bD09130AAa";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-[#050505] bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00c805]/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#00c805]/3 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            <motion.div
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-gray-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00c805] animate-pulse" />
                THE TRUE HEART OF ROBINHOOD
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00c805]/10 border border-[#00c805]/20 text-xs text-[#00c805] font-mono font-bold uppercase tracking-wider">
                OFFICIAL LAUNCH
              </div>
            </motion.div>

            <motion.h1
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-none mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              COCORO
            </motion.h1>

            <motion.p
              className="font-sans font-medium text-lg sm:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In Japanese, <span className="text-white font-semibold">COCORO (心)</span> means heart, mind, and soul. Meet the legendary black Shiba Inu—now fair-launched on <span className="text-[#00c805] font-bold">Robinhood Chain</span>, representing the ultimate community-driven spirit of decentralized finance.
            </motion.p>

            {/* Contract Box */}
            <motion.div
              className="w-full max-w-lg glass-panel rounded-2xl p-4 mb-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono font-medium">CONTRACT ADDRESS (ROBINHOOD)</span>
                  {copied && (
                    <span className="text-[10px] text-[#00c805] font-mono font-bold uppercase tracking-wider animate-bounce">
                      COPIED TO CLIPBOARD!
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 bg-black/45 rounded-xl px-4 py-3 border border-white/5">
                  <span className="font-mono text-xs sm:text-sm text-gray-300 select-all truncate flex-1 tracking-tight">
                    {contractAddress}
                  </span>
                  <motion.button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="Copy Contract Address"
                  >
                    {copied ? <Check size={16} className="text-[#00c805]" /> : <Copy size={16} />}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://dexscreener.com/robinhood/0x571228e0b4d359a83f7223e143ec36b2ccbde3d2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00c805] text-black font-display font-extrabold text-base hover:bg-[#00e006] hover:shadow-[0_0_20px_rgba(0,200,5,0.4)] transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                TRADE $COCORO
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                href="#chart"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-display font-bold text-base transition-all border border-white/10 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                VIEW LIVE CHART
              </motion.a>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 w-full pt-8 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                  <Shield size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-mono uppercase">SECURITY</span>
                  <span className="text-sm text-gray-200 font-display font-semibold">100% Locked</span>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                  <Percent size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-mono uppercase">TAXES</span>
                  <span className="text-sm text-gray-200 font-display font-semibold">1% Buy / Sell</span>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                  <Flame size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-mono uppercase">LIQUIDITY</span>
                  <span className="text-sm text-gray-200 font-display font-semibold">100% Burnt</span>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
                  <Wallet size={16} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-gray-500 font-mono uppercase">TICKER</span>
                  <span className="text-sm text-gray-200 font-display font-semibold">$COCORO</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Graphical/Image Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Spinning background neon ring */}
            <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] border border-dashed border-white/5 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-white/[0.01] rounded-full blur-md pointer-events-none" />

            <motion.div
              className="relative w-72 sm:w-85 h-72 sm:h-85 cursor-pointer select-none group"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
              onClick={onPlayBark}
            >
              {/* Outer glow aura */}
              <div className="absolute inset-0 bg-[#00c805]/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Actual image */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#00c805]/30 shadow-[0_20px_50px_rgba(0,c8,5,0.15)] relative">
                <img
                  src={cocoroLogo}
                  alt="COCORO Coin 3D Render"
                  className="w-full h-full object-cover relative z-10 select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Floating shine effect */}
                <div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-[#00c805]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
              </div>
              
              {/* BARK indicator trigger */}
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-[#00c805] text-black px-3 py-1.5 rounded-full text-xs font-mono font-bold border border-black shadow-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                🐾 Tap to Bark!
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
