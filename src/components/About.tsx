import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Heart, Compass, ShieldCheck } from "lucide-react";

interface AboutProps {
  onPlayBark: () => void;
}

const WISDOM_QUOTES = [
  "Other dogs chase cars. COCORO charts Robinhood Chain blocks.",
  "The black Shiba thrives in the shadows. Dark mode active, diamond paws locked.",
  "Shiba Inu is the heart, Robinhood is the mind, COCORO is the soul.",
  "Born in the shadows of decentralization, destined to unite the community.",
  "Taxes are for the weak. 0% buy/sell is the true samurai way.",
  "A loyal companion on the blockchain, COCORO always stays with the pack.",
  "In a sea of green and red candles, COCORO is pure silver and dark-mode elegance.",
  "0x5712... the sacred digits of the black shiba, etched in immutable code.",
  "Loyalty isn't built on promise. It's built on a renounced contract.",
  "True strength doesn't bark loud. It remains silent until the breakout."
];

export default function About({ onPlayBark }: AboutProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleNextQuote = () => {
    if (animating) return;
    onPlayBark();
    setAnimating(true);
    setQuoteIndex((prev) => (prev + 1) % WISDOM_QUOTES.length);
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <section id="about" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 right-1/12 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={12} />
            LORE & SPIRIT
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Legend of COCORO
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Story Text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <motion.h3
              className="font-display font-bold text-2xl sm:text-3xl text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The First Ever Dark Shiba of the Doge Dynasty
            </motion.h3>
            
            <motion.p
              className="font-sans text-gray-400 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Following the legacy of <span className="text-white font-semibold">Kabosu</span> (the original Doge) and <span className="text-white font-semibold">Neiro</span>, their beloved owner <span className="text-white font-semibold">Kabosumama (Atsuko Sato)</span> adopted a beautiful black Shiba Inu named <span className="text-white font-semibold">Cocoro (心)</span>.
            </motion.p>

            <motion.p
              className="font-sans text-gray-400 leading-relaxed text-base sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              As the very first black Shiba Inu in the legendary Doge family, Cocoro completes the **Holy Trinity** of decentralized doge culture. In Japanese, Cocoro means <span className="text-white font-semibold font-mono">Heart, Mind, and Soul</span>. Where others see just a pet, our community sees the ultimate symbol of unyielding spirit and pure decentralized energy on <span className="text-[#00c805] font-semibold">Robinhood Chain</span>.
            </motion.p>

            <motion.p
              className="font-sans text-gray-400 leading-relaxed text-base sm:text-lg border-l-2 border-[#00c805]/30 pl-4 bg-[#00c805]/[0.01] py-2 rounded-r-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              🚀 <span className="text-white font-semibold">Official Robinhood Chain Launch:</span> Designed for absolute security and fairness, the $COCORO launch introduces the premier black Shiba Inu to the Robinhood Chain ecosystem. Today, $COCORO is guided by a decentralized, volunteer-led governing council of blockchain veterans, creative designers, and marketing experts. Zero team control, 0% trading taxes, and a multi-sig protected treasury guarantee a safe, decentralized future.
            </motion.p>

            {/* Core Values Bento Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <motion.div
                className="glass-panel rounded-xl p-5 border border-white/5 flex flex-col space-y-3"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-white bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Heart size={16} />
                </div>
                <h4 className="font-display font-bold text-sm text-white">THE HEART</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Pure 100% community ownership, driven by love for the meme.</p>
              </motion.div>

              <motion.div
                className="glass-panel rounded-xl p-5 border border-white/5 flex flex-col space-y-3"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-white bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Compass size={16} />
                </div>
                <h4 className="font-display font-bold text-sm text-white">THE MIND</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Zero slippage tax, smart architecture, unruggable design.</p>
              </motion.div>

              <motion.div
                className="glass-panel rounded-xl p-5 border border-white/5 flex flex-col space-y-3"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white bg-white/5 w-8 h-8 rounded-lg flex items-center justify-center">
                  <ShieldCheck size={16} />
                </div>
                <h4 className="font-display font-bold text-sm text-white">THE SOUL</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Renounced, unchangeable smart contract for absolute trust.</p>
              </motion.div>
            </div>
          </div>

          {/* X Feed Collage on RHS */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="glass-panel rounded-3xl p-6 border border-white/10 relative overflow-hidden flex flex-col space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/15">
                    <img 
                      src="/images/cocoro_logo_rh.jpg" 
                      alt="Kabosumama Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-xs sm:text-sm text-white">Atsuko Sato (佐藤敦子)</h4>
                    <span className="font-mono text-[10px] text-gray-500">@kabosumama ● Verified Creator</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-[#00c805] font-bold bg-[#00c805]/5 px-2.5 py-0.5 rounded-full border border-[#00c805]/10">
                  LIVE FEED
                </span>
              </div>

              {/* Photos Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  {
                    src: "/images/cocoro_feed_cute_new_1784088353161.jpg",
                    caption: "First day at the park! Cocoro's smile melted my heart. 🐾🍃",
                    likes: "254.2K",
                    date: "July 2024"
                  },
                  {
                    src: "/images/cocoro_feed_owner_new_1783398621883.jpg",
                    caption: "A sunny stroll with my beloved Cocoro under the neighborhood cherry blossoms. 🌸🐕",
                    likes: "189.5K",
                    date: "April 2025"
                  },
                  {
                    src: "/images/cocoro_feed_sleepy_1783398633334.jpg",
                    caption: "Sweet dreams, Cocoro. Our home is complete again. 😴💖",
                    likes: "312.8K",
                    date: "September 2024"
                  },
                  {
                    src: "/images/cocoro_feed_nature_new_1784088421717.jpg",
                    caption: "Standing proud like a samurai on the bench. True soul of Japan. 🇯🇵🐕‍🦺",
                    likes: "420.1K",
                    date: "May 2025"
                  }
                ].map((post, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-2xl overflow-hidden aspect-square border border-white/5 group cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <img
                      src={post.src}
                      alt="Cocoro life feed"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay with Caption & Stats */}
                    <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-between">
                      <p className="text-[10px] sm:text-xs text-gray-200 leading-relaxed font-sans line-clamp-3">
                        {post.caption}
                      </p>
                      <div className="flex justify-between items-center border-t border-white/10 pt-2 font-mono text-[9px] text-gray-400">
                        <span>❤️ {post.likes}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Wisdom Consulting below Grid */}
              <div className="pt-4 border-t border-white/5">
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 text-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={quoteIndex}
                      initial={{ opacity: 0, y: 3 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -3 }}
                      className="font-display font-medium text-xs sm:text-sm text-gray-300 leading-relaxed mb-3.5"
                    >
                      "{WISDOM_QUOTES[quoteIndex]}"
                    </motion.p>
                  </AnimatePresence>

                  <motion.button
                    onClick={handleNextQuote}
                    className="py-2 px-4 rounded-xl bg-[#00c805] text-black font-display font-black text-xs hover:bg-[#00e006] transition-all inline-flex items-center gap-1.5"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🐾 ASK COCORO'S SOUL
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
