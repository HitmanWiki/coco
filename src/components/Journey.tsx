import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, Film, Heart, Sparkles, Calendar, ChevronRight, Video, Tv, ExternalLink } from "lucide-react";

export default function Journey() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerMode, setPlayerMode] = useState<"interactive" | "youtube">("interactive");
  const [progress, setProgress] = useState(15);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const chapters = [
    {
      title: "Adoption & New Dawn",
      date: "July 2024",
      desc: "Following the passing of Kabosu (the original Doge), Atsuko Sato's home welcomed a cute black Shiba Inu puppy named Cocoro. This marked the continuation of the Doge family legacy.",
      thumbnail: "/images/cocoro_feed_cute_1783398610614.jpg",
      subtitles: [
        "Atsuko Sato welcomes the playful black puppy Cocoro to her home...",
        "Cocoro meets his big sister Neiro, instantly bonding with her.",
        "The beginning of a legendary new chapter in the Doge family chronicle.",
      ],
      videoUrl: "https://www.youtube.com/embed/jZ_vB6uO3Fw", // A symbolic Doge/Kabosu family or Cocoro tribute video
      youtubeWatchUrl: "https://www.youtube.com/watch?v=jZ_vB6uO3Fw"
    },
    {
      title: "Playtime with Neiro",
      date: "Late 2024",
      desc: "Cocoro and Neiro playing together in Atsuko Sato's beautiful garden, completing the Holy Trinity of dog culture alongside Kabosu.",
      thumbnail: "/images/cocoro_feed_owner_1783398621883.jpg",
      subtitles: [
        "Cocoro rolls on the grass, teasing his sister Neiro with a squeaky toy.",
        "Sato-san watches happily, sharing this beautiful memory on her blog.",
        "Millions of fans worldwide fall in love with Cocoro's dark-mode elegance.",
      ],
      videoUrl: "https://www.youtube.com/embed/6i-2_1f9D4c",
      youtubeWatchUrl: "https://www.youtube.com/watch?v=6i-2_1f9D4c"
    },
    {
      title: "Ascension to Robinhood Chain",
      date: "2025 - 2026",
      desc: "Cocoro's spirit transitions to the decentralized world of Web3, sparking an organic, fair-launched token deployment on Robinhood Chain that renounced contract ownership and locked liquidity forever.",
      thumbnail: "/images/cocoro_rh_rocket.jpg",
      subtitles: [
        "The $COCORO token is fair launched on Robinhood Chain...",
        "With complete decentralization, a passionate global community unites to support $COCORO.",
        "The Doge Dynasty is fully complete: Kabosu, Neiro, and COCORO!",
      ],
      videoUrl: "https://www.youtube.com/embed/p917mC8e5S8",
      youtubeWatchUrl: "https://www.youtube.com/watch?v=p917mC8e5S8"
    }
  ];

  // Tick the simulated progress bar and rotate subtitles when in Interactive mode
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && playerMode === "interactive") {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          if (next >= 100) {
            // Auto-advance to next chapter or loop
            setSubtitleIndex(0);
            setActiveVideo((prevVid) => (prevVid + 1) % chapters.length);
            return 0;
          }
          // Segment subtitle changes based on progress
          if (next > 66) setSubtitleIndex(2);
          else if (next > 33) setSubtitleIndex(1);
          else setSubtitleIndex(0);

          return next;
        });
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playerMode, activeVideo]);

  // Reset progress and subtitle when active chapter changes
  useEffect(() => {
    setProgress(0);
    setSubtitleIndex(0);
  }, [activeVideo]);

  return (
    <section id="journey" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Film size={12} />
            COCORO'S CHRONICLES
          </motion.div>
          <motion.h2
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Sacred Journey & Videos
          </motion.h2>
          <p className="text-gray-500 font-sans text-sm sm:text-base max-w-xl mx-auto">
            From Sato Atsuko's home in Sakura City to the summit of decentralized dog culture, follow the footsteps of Cocoro.
          </p>
        </div>

        {/* Player Mode Selector Toggles */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 p-1 bg-white/[0.02] border border-white/5 rounded-xl">
            <button
              onClick={() => {
                setPlayerMode("interactive");
                setIsPlaying(true);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-display font-bold text-xs transition-all cursor-pointer ${
                playerMode === "interactive"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Video size={13} />
              INTERACTIVE STORY REEL
            </button>
            <button
              onClick={() => {
                setPlayerMode("youtube");
                setIsPlaying(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-display font-bold text-xs transition-all cursor-pointer ${
                playerMode === "youtube"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Tv size={13} />
              YOUTUBE PLAYER
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Cinematic Video Theater */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-white/10 relative overflow-hidden bg-black/80 shadow-2xl flex flex-col space-y-4">
              
              {/* Theater Canvas */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#08080a] group shadow-inner flex items-center justify-center">
                {playerMode === "youtube" ? (
                  <>
                    <iframe
                      className="w-full h-full"
                      src={`${chapters[activeVideo].videoUrl}?autoplay=0`}
                      title={chapters[activeVideo].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    
                    {/* Sandbox Notice Banner */}
                    <div className="absolute top-3 inset-x-3 bg-black/90 border border-white/10 rounded-xl p-3 text-center pointer-events-none group-hover:opacity-100 opacity-80 transition-opacity duration-300">
                      <p className="text-[10px] text-gray-400 font-sans leading-normal">
                        ⚠️ <span className="text-white font-semibold">Note:</span> Browser secure sandboxes can occasionally block YouTube embedded widgets inside standard preview environments.
                      </p>
                    </div>
                  </>
                ) : (
                  /* GORGEOUS INTERACTIVE FALLBACK STORY PLAYER */
                  <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center bg-black">
                    <motion.img
                      key={activeVideo}
                      src={chapters[activeVideo].thumbnail}
                      alt={chapters[activeVideo].title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05, opacity: 0.85 }}
                      animate={{ 
                        scale: isPlaying ? 1.12 : 1.05,
                        opacity: 1
                      }}
                      transition={{ 
                        duration: 15,
                        ease: "easeOut"
                      }}
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Soft ambient vignette layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none" />

                    {/* Soundwave animation helper to give a "video-like" ambient feeling */}
                    {isPlaying && (
                      <div className="absolute top-4 right-4 flex items-end gap-1 px-3 py-1.5 rounded-lg bg-black/60 border border-white/5">
                        <span className="font-mono text-[9px] text-emerald-400 font-bold uppercase tracking-widest mr-1">STORY RUNNING</span>
                        <div className="flex items-end gap-0.5 h-3">
                          {[1, 2, 3, 4, 5].map((bar) => (
                            <motion.div
                              key={bar}
                              className="w-[2px] bg-emerald-400 rounded-full"
                              animate={{ height: [4, 12, 4] }}
                              transition={{
                                duration: 0.6 + bar * 0.1,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Subtitle / Teleprompter Display layer inside the screen */}
                    <div className="absolute bottom-6 inset-x-4 sm:inset-x-8 text-center bg-black/50 backdrop-blur-md border border-white/5 p-4 rounded-xl">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${activeVideo}-${subtitleIndex}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="font-display font-medium text-xs sm:text-sm text-gray-100 tracking-wide leading-relaxed"
                        >
                          "{chapters[activeVideo].subtitles[subtitleIndex]}"
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                )}

                {/* Simulated Custom Overlay Control Bar on hover */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 to-transparent p-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-3">
                    {playerMode === "interactive" && (
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer"
                      >
                        {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
                      </button>
                    )}
                    <span className="font-mono text-[10px] text-gray-300">
                      CH {activeVideo + 1} ● {chapters[activeVideo].title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-gray-500 uppercase">
                      {playerMode === "interactive" ? "Interactive Media" : "Direct Feed"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Slider (Interactive mode) or Quick watch links */}
              <div className="bg-[#0c0c0e] border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="w-full flex-1">
                  <div className="flex justify-between items-center font-mono text-[9px] text-gray-500 uppercase tracking-wider mb-1.5">
                    <span className="flex items-center gap-1">
                      <Sparkles size={10} className="text-yellow-400" />
                      {playerMode === "interactive" ? "Cinematic Timeline Progress" : "Direct YouTube Stream Link"}
                    </span>
                    <span>{playerMode === "interactive" ? `${Math.round(progress)}%` : "Verified Link"}</span>
                  </div>
                  
                  {playerMode === "interactive" ? (
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-white rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 font-sans">
                      Play the video on YouTube direct or switch back to the story reel for interactive visual chapters.
                    </p>
                  )}
                </div>

                <a
                  href={chapters[activeVideo].youtubeWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-display font-bold text-[10px] border border-white/10 flex items-center gap-1.5 transition-all cursor-pointer self-stretch sm:self-auto justify-center"
                >
                  <ExternalLink size={12} />
                  WATCH TRIBUTE ON YOUTUBE ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Chapter Switcher */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <h3 className="font-display font-black text-xl text-white mb-2 flex items-center gap-2">
              <Heart size={20} className="text-emerald-400 fill-emerald-400/10" /> Select Chapters of the Pack
            </h3>
            <p className="text-gray-400 font-sans text-xs sm:text-sm mb-4 leading-relaxed">
              Explore custom animated milestones in Cocoro's historic timeline. Click any chapter to switch the video player.
            </p>

            <div className="space-y-3">
              {chapters.map((chapter, index) => {
                const isActive = activeVideo === index;
                return (
                  <motion.div
                    key={index}
                    onClick={() => {
                      setActiveVideo(index);
                      if (playerMode === "interactive") {
                        setIsPlaying(true);
                      }
                    }}
                    className={`glass-panel p-4 rounded-2xl border flex gap-4 cursor-pointer transition-all ${
                      isActive
                        ? "border-white/20 bg-white/[0.04]"
                        : "border-white/5 bg-transparent hover:border-white/10"
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/5 relative group">
                      <img
                        src={chapter.thumbnail}
                        alt={chapter.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play size={12} className="text-white drop-shadow" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                          <Calendar size={10} />
                          {chapter.date}
                        </div>
                        <h4 className={`font-display font-bold text-sm sm:text-base truncate mt-1 ${isActive ? "text-white" : "text-gray-300"}`}>
                          {chapter.title}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-1 mt-1">
                          {chapter.desc}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-mono font-bold hover:text-white transition-colors">
                        SELECT CH {index + 1}
                        <ChevronRight size={10} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

