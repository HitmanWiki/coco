import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Tokenomics from "./components/Tokenomics";
import MemeSection from "./components/MemeSection";
import Merchandise from "./components/Merchandise";
import Roadmap from "./components/Roadmap";
import HowToBuy from "./components/HowToBuy";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  const [lastBarkTime, setLastBarkTime] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  // High-fidelity web audio bark synthesizer
  // Generates organic Shiba bark sounds directly in the browser's sandbox
  const playBarkSound = () => {
    // Debounce to prevent acoustic flooding
    const now = Date.now();
    if (now - lastBarkTime < 250) return;
    setLastBarkTime(now);

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      
      // Node 1: Main bark oscillator
      const osc1 = ctx.createOscillator();
      const gainNode1 = ctx.createGain();
      osc1.type = "triangle";
      
      // Pitch sweeps quickly downward
      osc1.frequency.setValueAtTime(340, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.16);
      
      gainNode1.gain.setValueAtTime(0.35, ctx.currentTime);
      gainNode1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      
      // Node 2: Secondary growl oscillator for raspiness
      const osc2 = ctx.createOscillator();
      const gainNode2 = ctx.createGain();
      osc2.type = "sawtooth";
      
      osc2.frequency.setValueAtTime(260, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.14);
      
      gainNode2.gain.setValueAtTime(0.18, ctx.currentTime);
      gainNode2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      
      // Node 3: Filter to smooth the sound and make it warmer/muffled like a dog bark
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.18);
      
      // Connect nodes
      osc1.connect(gainNode1);
      osc2.connect(gainNode2);
      
      gainNode1.connect(filter);
      gainNode2.connect(filter);
      
      filter.connect(ctx.destination);
      
      // Execute sound sequence
      osc1.start();
      osc2.start();
      
      osc1.stop(ctx.currentTime + 0.2);
      osc2.stop(ctx.currentTime + 0.2);
    } catch (err) {
      console.warn("AudioContext initialization bypassed or blocked by security policies", err);
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-white selection:text-[#050505] scroll-smooth antialiased relative">
      {/* Interactive 5-Scroll Welcome Intro overlay */}
      {showWelcome && (
        <WelcomeScreen 
          onComplete={() => setShowWelcome(false)} 
          onPlayBark={playBarkSound} 
        />
      )}

      {/* Animated Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#0d0d15] rounded-full blur-[150px] opacity-60 animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#080d14] rounded-full blur-[150px] opacity-45 animate-pulse" style={{ animationDuration: "16s" }} />
        <div className="absolute top-[30%] right-[5%] w-[350px] h-[350px] bg-white/[0.015] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute bottom-[35%] left-[2%] w-[400px] h-[400px] bg-white/[0.012] rounded-full blur-[130px] animate-pulse" style={{ animationDuration: "18s" }} />
      </div>

      {/* Floating Header Navbar */}
      <Navbar onPlayBark={playBarkSound} />

      {/* Main content body */}
      <main className="relative z-10">
        {/* Hero Landing */}
        <Hero onPlayBark={playBarkSound} />

        {/* Legend of COCORO */}
        <About onPlayBark={playBarkSound} />

        {/* Journey & Historical Chronicles */}
        <Journey />

        {/* Tokenomics dashboard and metrics */}
        <Tokenomics />

        {/* Meme Ticker Gallery */}
        <MemeSection />

        {/* Merchandise Boutique */}
        <Merchandise />

        {/* Official Roadmap & Milestones */}
        <Roadmap />

        {/* Simple How to buy steps */}
        <HowToBuy />

        {/* Dexscreener Live charts */}
        <Chart />
      </main>

      {/* Structured Footer */}
      <Footer />
    </div>
  );
}
