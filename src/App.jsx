import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 18;
      if (progress >= 100) {
        setLoadProgress(100);
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      } else {
        setLoadProgress(Math.floor(progress));
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <img
                src="/favicorn.png"
                alt="DA Logo"
                className="w-20 h-20 object-contain mx-auto mb-2"
              />
              <div className="text-xs text-gray-600 tracking-[0.3em] mb-8 uppercase">Loading Portfolio</div>
              <div className="w-48 h-[2px] bg-gray-800 rounded-full mx-auto overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <div className="text-orange-500 text-xs mt-3 font-mono">{loadProgress}%</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Certificates />
          <Education />
          <Contact />
        </div>
      )}
    </>
  );
}
