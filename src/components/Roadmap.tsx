import { motion } from "motion/react";
import { Sparkles, Trophy, Shield, Rocket, CheckCircle } from "lucide-react";

export default function Roadmap() {
  const phases = [
    {
      num: "PHASE 01",
      title: "Shadows Awakening",
      subtitle: "The Genesis & Fair Launch",
      completed: true,
      items: [
        "Fair launch of the $COCORO token on Robinhood Chain.",
        "Atsuko Sato (Kabosumama) introduces Cocoro, the black Shiba Inu.",
        "Smart contract deployment and liquidity pool locking.",
        "Launch of the official Web3 portal and verified socials.",
      ],
      icon: <Sparkles size={18} className="text-[#00c805]" />,
    },
    {
      num: "PHASE 02",
      title: "Ecosystem Expansion",
      subtitle: "The Rise of the Council",
      completed: true,
      items: [
        "Official governance formation and decentralized marketing council established.",
        "Established a multi-signature Community Marketing Vault.",
        "Updated DexScreener, DEXTools, and verified coin profiles.",
        "Rallied 3,000+ organic holders on Robinhood Chain and achieved record volume.",
      ],
      icon: <Shield size={18} className="text-[#00c805]" />,
    },
    {
      num: "PHASE 03",
      title: "Strategic Ascension",
      subtitle: "Global Outbreak",
      completed: false,
      items: [
        "Comprehensive listings on CoinMarketCap and CoinGecko.",
        "Collaborative campaigns with crypto advocates and partners.",
        "Integration of utility portals (interactive Wisdom Reel and Memes).",
        "Negotiations with tier-2 CEXs for community-backed listings.",
      ],
      icon: <Trophy size={18} className="text-white/40 animate-pulse" />,
    },
    {
      num: "PHASE 04",
      title: "The Holy Trinity",
      subtitle: "Full Sovereign Integration",
      completed: false,
      items: [
        "Tier-1 exchange partnerships powered by the decentralized council.",
        "Global black-shiba adoption awareness campaigns.",
        "Ecosystem alignment: Kabosu (original), Neiro (sister), COCORO (soul).",
        "The absolute gold standard for pure, unruggable meme culture.",
      ],
      icon: <Rocket size={18} className="text-white/20" />,
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#00c805]/[0.01] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Rocket size={12} className="animate-bounce" />
            THE CHRONICLES
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            COCORO Roadmap
          </motion.h2>
          <motion.p 
            className="text-gray-500 font-sans text-sm sm:text-base max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From the shadows of the decentralized arena to the summit of the Doge Dynasty—here is our plan of action.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Vertical central line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />
          <motion.div 
            className="absolute left-1/2 top-0 w-[1px] bg-gradient-to-b from-[#00c805] via-white/40 to-transparent -translate-x-1/2 hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {phases.map((p, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={p.num}
                  className={`flex flex-col md:flex-row items-stretch gap-8 relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Desktop timeline node */}
                  <div className="absolute left-1/2 top-6 w-9 h-9 rounded-full bg-[#0a0a0c] border border-white/15 flex items-center justify-center -translate-x-1/2 z-20 hidden md:flex">
                    {p.completed ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, delay: idx * 0.15 }}
                      >
                        <CheckCircle size={14} className="text-[#00c805] fill-[#00c805]/10" />
                      </motion.div>
                    ) : (
                      <motion.div 
                        className="w-2.5 h-2.5 rounded-full bg-[#00c805]/30 animate-pulse"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Empty space filler for desktop alignment */}
                  <div className="flex-1 hidden md:block" />

                  {/* Milestone Card */}
                  <motion.div
                    className={`flex-1 rounded-2xl p-6 sm:p-8 border transition-all relative overflow-hidden group bg-gradient-to-b ${
                      p.completed 
                        ? "border-[#00c805]/10 bg-[#00c805]/[0.01] hover:border-[#00c805]/30" 
                        : "border-white/5 bg-white/[0.01] hover:border-white/15"
                    }`}
                    initial={{ opacity: 0, x: isEven ? -45 : 45 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Glowing highlight for active phase */}
                    {!p.completed && idx === 2 && (
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00c805]/[0.02] rounded-full blur-xl group-hover:bg-[#00c805]/[0.04] transition-all" />
                    )}

                    {/* Progress indicator ribbon */}
                    <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-white/5 border-l border-b border-white/10 font-mono text-[9px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      {p.completed ? (
                        <span className="text-[#00c805] font-bold flex items-center gap-1">
                          ● COMPLETED
                        </span>
                      ) : (
                        <span className="text-gray-500 font-bold animate-pulse">
                          ○ IN PROGRESS
                        </span>
                      )}
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Phase Icon */}
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                        {p.icon}
                      </div>

                      <div>
                        <span className="font-mono text-xs font-bold text-gray-500 block mb-1">
                          {p.num} — {p.subtitle}
                        </span>
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide mb-4">
                          {p.title}
                        </h3>

                        {/* List items */}
                        <ul className="space-y-2.5">
                          {p.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                              <span className="text-white/30 font-mono mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
