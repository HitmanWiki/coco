import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ExternalLink, TrendingUp, Send } from "lucide-react";
// @ts-ignore
import cocoroLogo from "../assets/images/cocoro_logo_1783396817862.jpg";

interface NavbarProps {
  onPlayBark: () => void;
}

export default function Navbar({ onPlayBark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Memes", href: "#memes" },
    { name: "Merchandise", href: "#merch" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "How to Buy", href: "#how-to-buy" },
    { name: "Live Chart", href: "#chart" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#050505]/85 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <motion.div
              className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPlayBark}
            >
              <img
                src={cocoroLogo}
                alt="COCORO Logo"
                className="w-full h-full object-cover group-hover:brightness-110"
                referrerPolicy="no-referrer"
              />
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <div className="flex flex-col">
              <span 
                className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1 cursor-pointer"
                onClick={onPlayBark}
              >
                COCORO
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/10 text-white font-mono font-medium">
                  ETH
                </span>
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-sans font-medium text-sm text-gray-400 hover:text-white transition-colors py-1 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <motion.a
                href="https://x.com/cocoroblackshib"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ y: -2 }}
              >
                <span className="font-semibold text-xs font-mono">X</span>
              </motion.a>
              <motion.a
                href="https://t.me/Cocoro_ethereum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                whileHover={{ y: -2 }}
              >
                <Send size={14} className="ml-[-1px] mt-[1px]" />
              </motion.a>
              <motion.a
                href="https://dexscreener.com/ethereum/0x0d1cfdb753f03500f5ae1f565dc3823367630061"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-white text-[#050505] text-xs font-display font-bold hover:bg-[#e5e7eb] transition-all flex items-center gap-1.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp size={12} />
                Live Chart
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass-panel border-x-0 border-b border-white/10 absolute top-full left-0 right-0 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-4 pt-2 pb-6 space-y-3 bg-[#050505]/95">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg font-sans font-medium text-base text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex items-center gap-4 px-3">
                <a
                  href="https://x.com/cocoroblackshib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <span className="font-semibold text-sm font-mono bg-white/5 w-7 h-7 rounded-full flex items-center justify-center">X</span>
                  Twitter
                </a>
                <a
                  href="https://t.me/Cocoro_ethereum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <span className="bg-white/5 w-7 h-7 rounded-full flex items-center justify-center"><Send size={12} /></span>
                  Telegram
                </a>
              </div>
              <div className="pt-2 px-3">
                <a
                  href="https://dexscreener.com/ethereum/0x0d1cfdb753f03500f5ae1f565dc3823367630061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-white text-[#050505] font-display font-bold text-center text-sm flex items-center justify-center gap-2"
                >
                  <TrendingUp size={14} />
                  View Chart on Dexscreener
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
