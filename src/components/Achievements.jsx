import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  {
    icon: "👑",
    title: "Class Representative",
    subtitle: "2 Consecutive Academic Years",
    desc: "Elected as Class Representative for 3 consecutive academic years at Lovely Professional University — demonstrating leadership, communication, and trust among peers.",
    color: "border-yellow-500/30",
    badge: "Leadership",
    badgeColor: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
  },
  {
    icon: "💻",
    title: "200+ DSA Problems Solved",
    subtitle: "LeetCode · GFG · HackerRank",
    desc: "Solved 200+ Data Structures & Algorithm problems across LeetCode, GeeksForGeeks, and HackerRank — strengthening problem-solving and competitive programming skills.",
    color: "border-orange-500/30",
    badge: "Competitive Coding",
    badgeColor: "text-orange-400 border-orange-500/30 bg-orange-500/5",
  },
  {
    icon: "🏆",
    title: "Top 20 Rank — Board Exams",
    subtitle: "Class XII · CISCEBoard",
    desc: "Secured a position in the top 20 students in the 12th board examinations, showcasing academic excellence and disciplined study habits.",
    color: "border-emerald-500/30",
    badge: "Academic",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-28 px-6 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">Proud Moments</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Achievements <span className="text-orange-400">&amp; Awards</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div key={a.title} initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.5, delay:i*0.10, ease:[0.22,1,0.36,1]}}
              whileHover={{y:-7}}
              className={`p-7 rounded-2xl bg-[#111111] border ${a.color} hover:brightness-110 transition-all`}>
              <div className="text-4xl mb-5">{a.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-white text-base leading-tight">{a.title}</h3>
                <span className={`text-[10px] px-2.5 py-1 rounded-full border ${a.badgeColor} shrink-0`}>{a.badge}</span>
              </div>
              <div className="text-xs text-gray-500 mb-3">{a.subtitle}</div>
              <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
