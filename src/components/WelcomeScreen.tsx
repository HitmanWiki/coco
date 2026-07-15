import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, ArrowUp, Sparkles, Volume2, ShieldAlert } from "lucide-react";
// @ts-ignore
import cocoroLogo from "../assets/images/cocoro_logo_rh_1784086237306.jpg";

interface WelcomeScreenProps {
  onComplete: () => void;
  onPlayBark: () => void;
}

export default function WelcomeScreen({ onComplete, onPlayBark }: WelcomeScreenProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  // Handle step increments on scroll/wheel
  const handleScroll = (deltaY: number) => {
    const now = Date.now();
    // Debounce scroll inputs to make each step feel deliberate and satisfying
    if (now - lastScrollTime.current < 600) return;

    if (deltaY > 15) {
      // Scroll Down -> Zoom Logo Out (Make Larger)
      if (step < 5) {
        setDirection(1);
        const nextStep = step + 1;
        setStep(nextStep);

        if (nextStep === 5) {
          // Trigger bark on final transition
          setTimeout(() => onPlayBark(), 100);
          // Wait for transition to complete before triggering main site reveal
          setTimeout(() => onComplete(), 1200);
        } else {
          // Play a light audio-like feedback bark or beep if possible
          onPlayBark();
        }
        lastScrollTime.current = now;
      }
    } else if (deltaY < -15) {
      // Scroll Up -> Zoom Logo In (Make Smaller)
      if (step > 0 && step < 5) {
        setDirection(-1);
        const nextStep = step - 1;
        setStep(nextStep);
        onPlayBark();
        lastScrollTime.current = now;
      }
    }
  };

  // Add event listeners for wheel and touch events
  useEffect(() => {
    const handleWheelEvent = (e: WheelEvent) => {
      // Prevent default browser scrolling while intro is active
      if (step < 5) {
        e.preventDefault();
        handleScroll(e.deltaY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (step >= 5) return;
      e.preventDefault();
      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY; // Positive is swipe up (scroll down)
      
      if (Math.abs(deltaY) > 30) {
        handleScroll(deltaY);
        touchStartY.current = touchEndY; // Reset baseline
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (step >= 5) return;
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        handleScroll(50);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        handleScroll(-50);
      }
    };

    // Use passive: false to allow e.preventDefault()
    window.addEventListener("wheel", handleWheelEvent, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    // Lock page body overflow
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [step]);

  // Map step to visual properties of the logo and effects
  // We want the logo to become larger and larger
  const getLogoScale = () => {
    switch (step) {
      case 0: return 1.0;
      case 1: return 2.6;
      case 2: return 6.5;
      case 3: return 18.0;
      case 4: return 45.0;
      case 5: return 130.0; // Grows so large it completely eclipses the screen
      default: return 1.0;
    }
  };

  const getInnerImgScale = () => {
    switch (step) {
      case 0: return 1.0;
      case 1: return 1.2;
      case 2: return 1.55;
      case 3: return 2.1;
      case 4: return 3.2;
      case 5: return 5.0;
      default: return 1.0;
    }
  };

  const getLogoOpacity = () => {
    if (step === 5) return 0;
    return 1;
  };

  const getBlurAmount = () => {
    // Keep it sharp and high-fidelity until the final transition warp
    if (step === 5) return "blur(25px)";
    return "blur(0px)";
  };

  const stepsInfo = [
    { title: "KABOSU'S TRUE HEIR", desc: "Atsuko Sato introduces the legendary black puppy." },
    { title: "ROBINHOOD REVOLUTION", desc: "COCORO claims its throne on the ultimate high-speed network." },
    { title: "LOCKING THE LIQUIDITY", desc: "No core developers, fully decentralized, and governed by the community." },
    { title: "LAUNCH PROTOCOLS READY", desc: "Bracing for hyper-velocity and 0% transaction taxes." },
    { title: "UNLEASH THE SAMURAI", desc: "One final scroll to enter the domain of the Robinhood Shiba..." }
  ];

  return (
    <AnimatePresence>
      {step < 5 && (
        <motion.div
          id="welcome-overlay"
          className="fixed inset-0 z-[100] bg-[#030304] flex flex-col justify-between items-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Radiant Neon Green Background Grid & Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,5,0.07)_0%,transparent_70%)]" />
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 200, 5, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 200, 5, 0.15) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }}
            />
            
            {/* Pulsating energy rings emanating from center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-[#00c805]/15 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#00c805]/10 rounded-full animate-pulse" />
          </div>

          {/* Top Bar: Brand & Sound Indicator */}
          <div className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00c805] animate-ping" />
              <span className="font-display font-black text-sm tracking-widest text-white">
                ROBINHOOD CHAIN PROTOCOL
              </span>
            </div>
            
            <button
              onClick={() => {
                setStep(5);
                onPlayBark();
                onComplete();
              }}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-400 hover:text-white border border-white/10 transition-all"
            >
              SKIP INTRO
            </button>
          </div>

          {/* Center Stage: The Expanding Logo and Energy Waves */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full px-4">
            {/* Absolute background text */}
            <div className="absolute select-none font-display font-black text-[12vw] text-white/[0.01] tracking-tighter leading-none pointer-events-none text-center">
              COCORO
            </div>

            {/* Futuristic HUD Scanning Reticle targeting the puppy's face */}
            <div className="absolute pointer-events-none z-10 w-48 h-48 sm:w-56 sm:h-56 border border-white/5 rounded-full flex items-center justify-center">
              <div className="absolute -inset-1 border border-dashed border-[#00c805]/20 rounded-full animate-spin-slow" />
              {/* Corner Brackets */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00c805]/60" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00c805]/60" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00c805]/60" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00c805]/60" />
              
              {/* Live Status Indicators on HUD */}
              <div className="absolute left-full ml-4 top-4 hidden md:block text-[9px] font-mono text-gray-500 whitespace-nowrap space-y-0.5">
                <div>SYSTEM_LOCK: <span className="text-[#00c805] font-bold">STABLE</span></div>
                <div>DEPTH: <span className="text-white">{(getLogoScale() * getInnerImgScale()).toFixed(1)}x</span></div>
                <div>SCAN: <span className="text-[#00c805]">COCORO_CORE</span></div>
              </div>
            </div>

            {/* Glowing Aura directly behind the Logo */}
            <motion.div 
              className="absolute w-64 h-64 bg-[#00c805]/20 rounded-full blur-[100px] pointer-events-none"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Core Mascot Frame with Scroll-Bound Zoom */}
            <motion.div
              className="relative z-20 cursor-pointer"
              style={{ transformOrigin: "50% 41%" }}
              animate={{
                scale: getLogoScale(),
                opacity: getLogoOpacity(),
                filter: getBlurAmount()
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 17,
                mass: 0.9
              }}
              onClick={() => handleScroll(50)}
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-b from-[#00c805] to-[#008003] shadow-[0_0_50px_rgba(0,200,5,0.4)] relative group overflow-hidden">
                <motion.img
                  src={cocoroLogo}
                  alt="COCORO Mascot"
                  className="w-full h-full object-cover rounded-full"
                  style={{ transformOrigin: "50% 41%" }}
                  animate={{
                    scale: getInnerImgScale()
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 17,
                    mass: 0.9
                  }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#00c805]/10 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Orbital Target Indicator */}
              <div className="absolute -inset-4 border border-[#00c805]/25 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 border border-dashed border-white/10 rounded-full pointer-events-none" />
            </motion.div>

            {/* Overlay description text synced with scroll steps */}
            <div className="mt-16 text-center max-w-md relative z-10 h-28 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: direction * 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -direction * 15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-2"
                >
                  <div className="text-xs font-mono tracking-[0.25em] text-[#00c805] font-extrabold uppercase">
                    {step < 5 ? stepsInfo[step]?.title : "LAUNCH SUCCESS"}
                  </div>
                  <h1 className="font-display font-black text-2xl tracking-tight text-white uppercase">
                    {step === 0 ? "SCROLL TO ENTER COCORO" : `STEP 0${step} UNLOCKED`}
                  </h1>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans px-4">
                    {step < 5 ? stepsInfo[step]?.desc : "Loading high-frequency Robinhood Chain dApp..."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Bar: Interactive Scroll Dots & Guidance */}
          <div className="w-full max-w-md mx-auto px-6 py-8 flex flex-col items-center gap-4 relative z-10">
            {/* Progress Dots */}
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === step
                      ? "w-8 bg-[#00c805]"
                      : index < step
                      ? "w-2 bg-[#00c805]/55"
                      : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Scroll Assist Hint */}
            <div className="flex items-center gap-2 mt-1">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#00c805]"
              >
                <ArrowDown size={14} />
              </motion.div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                {step === 0 ? "SCROLL DOWN OR TAP LOGO" : `SCROLL TO TRANSITION (${step}/5)`}
              </span>
            </div>
            
            {/* Quick volume note */}
            <div className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity">
              <Volume2 size={10} className="text-[#00c805]" />
              <span className="text-[9px] font-sans font-medium text-gray-500">
                Bark Sound FX enabled for high-fidelity immersion.
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
