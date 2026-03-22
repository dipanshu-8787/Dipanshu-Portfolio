import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1buNVvAZICxZMVVXcAWcMw5JaLLXYIo03";
const training = {
  org: "CipherSchools",
  role: "MERN Stack Developer",
  period: "Jun – Jul 2025",
  desc: "Comprehensive training covering MongoDB, Express.js, React.js, and Node.js. Capstone: Carbon Footprint Tracker.",
};

const certs = [
  { title: "Interpersonal Communication For Engineering Leaders", issuer: "Rice University / Coursera", period: "Feb–Mar 2026" },
  { title: "Full Stack Dev — MERN Stack", issuer: "CipherSchools", period: "Jun–Jul 2025" },
  { title: "Back-End Apps with Node.js & Express", issuer: "IBM / Coursera", period: "Oct–Nov 2025" },
  { title: "Cloud Computing", issuer: "NPTEL", period: "Jan–Apr 2025" },
  { title: "Data Structure & Algorithm", issuer: "IamNeo", period: "Aug–Dec 2024" },
  { title: "MySQL", issuer: "HackerRank", period: "Apr–May 2024" },
  { title: "Database Structures & MySQL", issuer: "Meta / Coursera", period: "Mar–Apr 2023" },
  { title: "HTML, CSS & JS Responsive Web", issuer: "FreeCodeCamp", period: "Aug–Oct 2023" },
];

function CertIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
      <rect x="4" y="6" width="40" height="30" rx="3" fill="#1a1008" stroke="#f97316" strokeWidth="1.5"/>
      <line x1="12" y1="16" x2="36" y2="16" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="22" x2="30" y2="22" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12" y1="28" x2="26" y2="28" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="42" r="5" fill="#1a1008" stroke="#f97316" strokeWidth="1.5"/>
      <line x1="19" y1="42" x2="15" y2="46" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="29" y1="42" x2="33" y2="46" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="24" cy="42" r="2" fill="#f97316"/>
    </svg>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certificates" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Certificates <span className="text-orange-400">&amp; Training</span>
          </h2>
          <motion.a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.4}}
            whileHover={{scale:1.04}}
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full border border-orange-500/40 text-orange-400 text-xs bg-orange-500/5 hover:bg-orange-500/10 transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.28 3l5.72 9.9L17.72 3H6.28zM3 17.5L6.28 3H2.5L0 17.5H3zm18 0L18.5 3H14.72l3.56 6.16L3 21h18zM12 21l3.56-6.16L12 8.5 8.44 14.84 12 21z"/>
            </svg>
            View All Certificates on Google Drive ↗
          </motion.a>
        </motion.div>

        {/* Training highlight */}
        <motion.div initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.1}}
          className="mb-10 p-6 md:p-8 rounded-2xl border border-orange-500/20 bg-orange-500/[0.03] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-xl shadow-lg shrink-0">🎓</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-bold text-white text-lg">{training.org}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">{training.period}</span>
              </div>
              <div className="text-orange-400 text-sm font-medium mt-0.5">{training.role}</div>
              <p className="text-gray-500 text-xs mt-2 max-w-2xl leading-relaxed">{training.desc}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.div key={c.title} initial={{opacity:0,scale:0.9,y:20}} animate={inView?{opacity:1,scale:1,y:0}:{}}
              transition={{duration:0.5, delay:0.2+i*0.07}}
              whileHover={{y:-4, borderColor:"rgba(249,115,22,0.4)"}}
              className="p-5 rounded-2xl bg-[#111111] border border-white/6 transition-all cursor-default group">
              <div className="mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                <CertIcon />
              </div>
              <h4 className="text-white text-sm font-semibold leading-snug mb-1">{c.title}</h4>
              <div className="text-gray-500 text-xs">{c.issuer}</div>
              <div className="text-gray-700 text-[10px] mt-1">{c.period}</div>
              <div className="mt-3">
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-orange-500/20 text-orange-500/70">Verified ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
