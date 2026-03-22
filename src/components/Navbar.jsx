import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Achievements", "Certificates", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scroll = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-xl" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {/* <div className="text-xl font-black tracking-tight font-display">
            DA<span className="text-orange-500">.</span>
          </div> */}
          <img
          src="/favicorn.png"
          alt="DA Logo"
          className="w-10 h-10 object-contain"/>
        </button>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className="text-sm text-gray-400 hover:text-orange-400 transition-colors relative group tracking-wide"
            >
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => scroll("Contact")}
            className="px-5 py-2 rounded-full border border-orange-500/50 text-orange-400 text-sm hover:bg-orange-400/20 transition-all shadow-lg shadow-orange-500/25"          
          >
            Hire Me
          </button>
        </div>

        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className="block w-6 h-0.5 bg-white origin-center" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-6 h-0.5 bg-white" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className="block w-6 h-0.5 bg-white origin-center" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button key={l} onClick={() => scroll(l)} className="text-left text-gray-300 hover:text-orange-400 py-1 transition-colors text-sm">
                  {l}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
