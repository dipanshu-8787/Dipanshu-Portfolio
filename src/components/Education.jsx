import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech — Computer Science & Engineering",
    location: "Punjab, India",
    period: "Since Aug 2023",
    score: "CGPA: 8.36",
    icon: "🎓",
    highlights: ["MERN Stack","DSA","Cloud Computing","Class Representative"],
    current: true,
  },
  {
    institution: "Maharana Pratap Education Center",
    degree: "Intermediate (Class XII)",
    location: "Kanpur, Uttar Pradesh",
    period: "Apr 2022 – Mar 2023",
    score: "90.25%",
    icon: "📚",
    highlights: ["Science Stream","Top 20 Rank in Board"],
    current: false,
  },
  {
    institution: "Maharana Pratap Education Center",
    degree: "Secondary (Class X)",
    location: "Kanpur, Uttar Pradesh",
    period: "Apr 2020 – Mar 2021",
    score: "93.5%",
    icon: "🏫",
    highlights: ["Merit Student","All Subjects"],
    current: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 px-6 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Education <span className="text-orange-400">&amp; Background</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent" />
          <div className="space-y-8 pl-16">
            {education.map((edu, i) => (
              <motion.div key={edu.institution+edu.degree} initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}}
                transition={{duration:0.7, delay:0.2+i*0.15, ease:[0.22,1,0.36,1]}}
                className="relative">
                {/* Dot */}
                <div className={`absolute -left-[2.6rem] top-5 w-4 h-4 rounded-full border-2 ${edu.current ? 'border-orange-400 bg-orange-500' : 'border-orange-500/40 bg-[#0d0d0d]'} shadow-lg`}>
                  {edu.current && <span className="absolute inset-0 rounded-full animate-ping bg-orange-400/30" />}
                </div>

                <div className="p-6 rounded-2xl bg-[#111111] border border-white/6 hover:border-orange-500/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-white">{edu.institution}</h3>
                        {edu.current && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">Current</span>
                        )}
                      </div>
                      <div className="text-gray-400 text-xs mt-1">{edu.degree}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-orange-400 font-bold text-sm">{edu.score}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{edu.period}</div>
                    </div>
                  </div>
                  <div className="text-gray-600 text-xs mb-3">📍 {edu.location}</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                      <span key={h} className="text-[10px] px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-500">{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
