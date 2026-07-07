import { motion } from "motion/react";
import { Image, Layers, Sparkles } from "lucide-react";

export default function MemeSection() {
  const row1 = [
    { src: "../assets/images/cocoro_meme_astronaut_1783398504204.jpg", tag: "TO THE MOON 🚀" },
    { src: "../assets/images/cocoro_meme_king_1783398518285.jpg", tag: "SHIBA KING 👑" },
    { src: "../assets/images/cocoro_meme_diamond_paws_1783398559175.jpg", tag: "DIAMOND PAWS 💎" },
    { src: "../assets/images/cocoro_meme_zen_1783398571659.jpg", tag: "ZEN MASTER 🌸" },
  ];

  const row2 = [
    { src: "../assets/images/cocoro_feed_nature_1783398644064.jpg", tag: "CHERRY BLOSSOM 💮" },
    { src: "../assets/images/cocoro_feed_cute_1783398610614.jpg", tag: "HAPPY SMILE 😊" },
    { src: "../assets/images/cocoro_feed_owner_1783398621883.jpg", tag: "LOVING FAMILY 💖" },
    { src: "../assets/images/cocoro_feed_sleepy_1783398633334.jpg", tag: "COZY NAP 💤" },
  ];

  // Triple each row to ensure plenty of overflow for infinite scrolling
  const list1 = [...row1, ...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="memes" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Layers size={12} />
            SHIBA MEME PORTAL
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Meme & Art Gallery
          </motion.h2>
          <p className="text-gray-500 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Explore the creative creations of the COCORO pack. Two infinite ticker rows scrolling around the clock.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-8 relative max-w-full overflow-hidden select-none">
        {/* Row 1: Right to Left */}
        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {list1.map((item, index) => (
              <div
                key={`r1-${index}`}
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden flex-shrink-0 group border border-white/5 shadow-2xl bg-white/5"
              >
                <img
                  src={item.src}
                  alt={item.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Sparkles size={10} />
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="relative flex w-full overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: [-1000, 0] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {list2.map((item, index) => (
              <div
                key={`r2-${index}`}
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden flex-shrink-0 group border border-white/5 shadow-2xl bg-white/5"
              >
                <img
                  src={item.src}
                  alt={item.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                    <Sparkles size={10} />
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
