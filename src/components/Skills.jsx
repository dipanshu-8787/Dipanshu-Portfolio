import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    color: "bg-orange-500",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "HTML / CSS", level: 92 },
      { name: "C++", level: 78 },
      { name: "Java", level: 72 },
      { name: "Python", level: 65 },
      { name: "C", level: 60 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    color: "bg-orange-400",
    skills: [
      { name: "React JS", level: 85 },
      { name: "Node JS", level: 82 },
      { name: "Express JS", level: 80 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    category: "Tools & Databases",
    color: "bg-orange-300",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 65 },
      { name: "REST APIs", level: 82 },
    ],
  },
];

const softSkills = ["Problem-Solving","Self-Learning","Adaptability","Project Management","Team Leadership","Communication"];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
        <span>{name}</span>
        <span className="text-orange-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 bg-[#0d0d0d]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Technical <span className="text-orange-400">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div key={group.category} initial={{opacity:0,y:40}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.7, delay:gi*0.15, ease:[0.22,1,0.36,1]}}
              className="p-6 rounded-2xl bg-[#111111] border border-white/6 hover:border-orange-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-6 rounded-full ${group.color}`} />
                <h3 className="font-bold text-white text-sm">{group.category}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} inView={inView} delay={gi*0.15+si*0.07+0.3} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.6}} className="text-center">
          <div className="text-s text-gray-500 tracking-widest uppercase mb-4">Soft Skills</div>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((s, i) => (
              <motion.span key={s} initial={{opacity:0,scale:0.8}} animate={inView?{opacity:1,scale:1}:{}}
                transition={{delay:0.0+i*0.01}}
                whileHover={{scale:1.1}}
                className="px-4 py-2 rounded-full border border-orange-500/20 text-sm text-gray-400 hover:text-orange-400 hover:border-orange-500/40 bg-white/[0.02] transition-all cursor-default shadow-lg shadow-orange-500/25">
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
