import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Star, RefreshCw, X, CreditCard, Sparkles, CheckCircle } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  priceUSD: number;
  priceCOCORO: number;
  image: string;
  quantity: number;
}

export default function Merchandise() {
  const COCORO_RATE = 0.000035; // Mock rate: 1 COCORO = $0.000035 USD
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"shopping" | "simulating" | "success">("shopping");

  const products = [
    {
      id: "prod-1",
      name: "COCORO Sovereign Hoodie",
      desc: "An ultra-premium heavy weight, drop-shoulder cotton hoodie. Features gold-stitched embroidery of the legendary Black Shiba.",
      priceUSD: 49.99,
      image: "../assets/images/cocoro_merch_hoodie_1783398535929.jpg",
      rating: 5,
    },
    {
      id: "prod-2",
      name: "COCORO Shadow Baseball Cap",
      desc: "Minimalist, unstructured 6-panel washed cotton cap. Styled with an exquisite custom-knit white crest.",
      priceUSD: 24.99,
      image: "../assets/images/cocoro_merch_cap_1783398546753.jpg",
      rating: 4.9,
    },
    {
      id: "prod-3",
      name: "COCORO Zen Matte Mug",
      desc: "Heavyweight ceramic mug with a custom satin-matte glaze. Adorned with a beautiful glowing neon portrait of Cocoro.",
      priceUSD: 18.99,
      image: "../assets/images/cocoro_merch_mug_1783398583807.jpg",
      rating: 5,
    },
    {
      id: "prod-4",
      name: "COCORO Eclipse Stainless Tumbler",
      desc: "A double-wall insulated matte black tumbler featuring a beautiful laser-etched minimalist golden portrait of Cocoro.",
      priceUSD: 29.99,
      image: "../assets/images/cocoro_merch_tumbler_1783399474427.jpg",
      rating: 5,
    },
    {
      id: "prod-5",
      name: "COCORO Cyberpunk Street Tee",
      desc: "Crafted with premium heavy-weight cotton. Showcases a high-contrast neon streetwear graphic print of Cocoro.",
      priceUSD: 34.99,
      image: "../assets/images/cocoro_merch_tee_1783399492009.jpg",
      rating: 4.9,
    },
    {
      id: "prod-6",
      name: "COCORO Kawaii Mascot Plushie",
      desc: "The ultimate desk companion. An adorable, highly detailed custom-embroidered plush toy of the beloved Black Shiba.",
      priceUSD: 39.99,
      image: "../assets/images/cocoro_merch_plushie_1783399507990.jpg",
      rating: 5,
    },
  ];

  const addToCart = (prod: typeof products[0]) => {
    const tokens = Math.round(prod.priceUSD / COCORO_RATE);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === prod.id);
      if (existing) {
        return prev.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: prod.id,
          name: prod.name,
          priceUSD: prod.priceUSD,
          priceCOCORO: tokens,
          image: prod.image,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
    );
  };

  const totalUSD = cart.reduce((acc, item) => acc + item.priceUSD * item.quantity, 0);
  const totalCOCORO = cart.reduce((acc, item) => acc + item.priceCOCORO * item.quantity, 0);

  const startCheckout = () => {
    setCheckoutStep("simulating");
    setTimeout(() => {
      setCheckoutStep("success");
      setCart([]);
    }, 2800);
  };

  return (
    <section id="merch" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background ambient neon flare */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <motion.div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <ShoppingBag size={12} />
              COCORO BOUTIQUE
            </motion.div>
            <motion.h2
              className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Official Merchandise
            </motion.h2>
          </div>

          {/* Quick-Access Cart Toggle */}
          <motion.button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white text-black font-display font-black text-xs hover:bg-gray-100 transition-all relative cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ShoppingBag size={15} />
            VIEW BAG
            {cart.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 border border-black text-white font-mono text-[9px] flex items-center justify-center font-bold animate-bounce">
                {cart.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => {
            const tokenCost = Math.round(p.priceUSD / COCORO_RATE);
            return (
              <motion.div
                key={p.id}
                className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Photo container */}
                <div className="relative aspect-square bg-[#050505] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-black/60 border border-white/5 font-mono text-[10px] text-gray-300 flex items-center gap-1">
                    <Star size={10} className="text-yellow-400 fill-yellow-400" />
                    {p.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="space-y-2 mb-6">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-gray-200 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    {/* Prices dual display */}
                    <div className="flex justify-between items-baseline">
                      <span className="font-display font-black text-2xl text-white">
                        ${p.priceUSD.toFixed(2)}
                      </span>
                      <span className="font-mono text-xs text-gray-400 flex items-center gap-1">
                        ≈ {tokenCost.toLocaleString()} $COCORO
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(p)}
                      className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs border border-white/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      🛒 ADD TO BAG
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cart Sidebar Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (checkoutStep !== "simulating") {
                  setIsCartOpen(false);
                  setCheckoutStep("shopping");
                }
              }}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#070709] border-l border-white/10 z-50 p-6 flex flex-col justify-between shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-gray-400" />
                  <h3 className="font-display font-black text-lg text-white">Your Boutique Bag</h3>
                </div>
                {checkoutStep !== "simulating" && (
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setCheckoutStep("shopping");
                    }}
                    className="p-1 text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Shopping List or Simulator screens */}
              <div className="flex-1 overflow-y-auto py-6">
                {checkoutStep === "shopping" ? (
                  cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 text-2xl border border-white/5">
                        🛍️
                      </div>
                      <h4 className="font-display font-bold text-white">Your bag is empty</h4>
                      <p className="text-xs text-gray-500 font-sans max-w-[200px]">
                        Add items from our premium merchandise line to continue.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-xl p-3"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover bg-black flex-shrink-0"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate">
                              {item.name}
                            </h4>
                            <div className="flex items-baseline justify-between mt-1">
                              <span className="font-mono text-xs text-white">
                                ${(item.priceUSD * item.quantity).toFixed(2)}
                              </span>
                              <span className="font-mono text-[10px] text-gray-500">
                                {(item.priceCOCORO * item.quantity).toLocaleString()} COCORO
                              </span>
                            </div>
                            <div className="flex justify-between items-center mt-2.5">
                              <div className="flex items-center gap-2 border border-white/5 bg-black/40 px-2 py-0.5 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="text-[10px] text-gray-400 hover:text-white px-1.5"
                                >
                                  -
                                </button>
                                <span className="font-mono text-xs text-white">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="text-[10px] text-gray-400 hover:text-white px-1.5"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-[10px] text-red-400 hover:text-red-300 font-mono"
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
                ) : checkoutStep === "simulating" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-white animate-spin" />
                      <RefreshCw size={20} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-white text-lg">Simulating Web3 Checkout</h4>
                      <p className="text-xs text-gray-400 font-sans max-w-xs leading-relaxed">
                        Connecting to your Ethereum wallet to sign authorization. Converting prices to $COCORO token balances...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-3xl"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-white text-lg">Simulated Order Received!</h4>
                      <p className="text-xs text-gray-400 font-sans max-w-xs leading-relaxed">
                        Your transaction was processed successfully. Real merchandise claims will open when the community takeover roadmap milestones are achieved.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Checkout Summary */}
              {cart.length > 0 && checkoutStep === "shopping" && (
                <div className="border-t border-white/5 pt-4 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500 font-sans">USD Merchandise Total</span>
                      <span className="text-white font-mono font-bold">${totalUSD.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 font-sans font-medium flex items-center gap-1">
                        <Sparkles size={12} className="text-yellow-400" /> Web3 $COCORO Cost
                      </span>
                      <span className="text-emerald-400 font-mono font-extrabold text-base">
                        {totalCOCORO.toLocaleString()} $COCORO
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={startCheckout}
                    className="w-full py-4 rounded-xl bg-white text-black font-display font-black text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CreditCard size={15} />
                    SIMULATE PURCHASE WITH $COCORO
                  </button>
                </div>
              )}

              {checkoutStep === "success" && (
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep("shopping");
                  }}
                  className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs border border-white/10 text-center"
                >
                  RETURN TO STORE
                </button>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
