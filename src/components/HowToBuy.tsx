import { motion } from "motion/react";
import { Wallet, CirclePlus, ArrowRightLeft, Sparkles, ExternalLink } from "lucide-react";

export default function HowToBuy() {
  const steps = [
    {
      num: "01",
      title: "CREATE A WALLET",
      desc: "Download MetaMask, Coinbase Wallet, or Rabby for free. Set up your wallet, write down your backup phrase securely, and connect to the Robinhood Chain network.",
      icon: <Wallet size={18} />,
    },
    {
      num: "02",
      title: "GET NETWORK TOKENS",
      desc: "Fund your wallet with native tokens for Robinhood Chain. You can acquire these through supported bridges or exchanges and transfer them safely to your Web3 wallet address.",
      icon: <CirclePlus size={18} />,
    },
    {
      num: "03",
      title: "CONNECT TO DEX",
      desc: "Navigate to DexScreener or the supported swap client on Robinhood Chain. Connect your active wallet securely and make sure you select the correct chain network.",
      icon: <ExternalLink size={18} />,
    },
    {
      num: "04",
      title: "SWAP FOR $COCORO",
      desc: "Paste the $COCORO contract address: 0x235F36205EB00eb0A3a978112b29F3bD09130AAa into the swap client. Since COCORO has 1% taxes, execute with standard low slippage (1% - 2%) and complete the swap!",
      icon: <ArrowRightLeft size={18} />,
    },
  ];

  return (
    <section id="how-to-buy" className="py-24 bg-[#0a0a0c] relative">
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#00c805]/[0.01] rounded-full blur-[130px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} />
            SAMURAI GUIDE
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How to Buy $COCORO
          </motion.h2>
          <p className="text-gray-500 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Secure your spot in the black Shiba pack on Robinhood Chain in four simple and secure steps.
          </p>
        </div>

        {/* Steps Bento/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              className="glass-panel rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-white/15 transition-all relative overflow-hidden group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Background gradient fade on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Step Icon */}
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                    {s.icon}
                  </div>
                  {/* Step Num */}
                  <span className="font-display font-black text-2xl text-white/10 group-hover:text-white/20 transition-colors">
                    {s.num}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-sm sm:text-base text-white tracking-wide mb-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section bottom */}
        <div className="mt-16 text-center">
          <motion.a
            href="https://dexscreener.com/robinhood/0x571228e0b4d359a83f7223e143ec36b2ccbde3d2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00c805] text-[#050505] font-display font-extrabold hover:bg-[#00e006] hover:shadow-[0_0_20px_rgba(0,200,5,0.4)] transition-all text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            TRADE ON DEXSCREENER
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
