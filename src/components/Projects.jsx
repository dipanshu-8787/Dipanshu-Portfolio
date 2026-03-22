import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Carbon Footprint Tracker",
    period: "Jun – Aug 2025",
    desc: "A full-stack web app helping users calculate, analyze, and reduce their carbon footprint based on daily activities — travel, food, and electricity usage.",
    highlights: ["Emissions calc across transportation, diet & energy","Personalized insights, leaderboards & suggestions","JWT Authentication with activity history","Chart.js data visualization"],
    tech: ["MongoDB","Express.js","React.js","Node.js","JWT","Chart.js","REST API"],
    badge: "Full-Stack",
    icon: "🌱",
    link: "https://github.com/dipanshu-8787",
    live: null,
  },
  {
    title: "Shanti Brick Field Website",
    period: "Jun – Jul 2024",
    desc: "A responsive business website for Shanti Brick Field showcasing products, company info, and enabling online customer inquiries with email notification on form submission.",
    highlights: ["6-page site: Home, About, Products, Gallery, Buy, Contact","Image slideshow with responsive design","PHP email notifications on form submit","Mobile-first responsive layout"],
    tech: ["HTML","CSS","JavaScript","TailwindCSS","PHP"],
    badge: "Client Project",
    icon: "🏗️",
    link: "https://github.com/dipanshu-8787",
    live: "https://shantibrickfield.kesug.com/",
  },
  {
    title: "Car Rental System",
    period: "Oct 2023 – Feb 2024",
    desc: "A frontend web application for exploring, selecting, and booking rental cars with an intuitive, fully responsive interface and smooth animations.",
    highlights: ["Car listings with model, price & duration","Smart filters for easy selection","Interactive booking form with instant summary","Smooth CSS animations"],
    tech: ["HTML","CSS","JavaScript"],
    badge: "Frontend",
    icon: "🚗",
    link: "https://github.com/dipanshu-8787",
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">Featured <span className="text-orange-400">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{opacity:0,y:50}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.5, delay:i*0.10, ease:[0.22,1,0.36,1]}}
              whileHover={{y:-8}}
              className="p-6 rounded-2xl bg-[#111111] border border-white/6 hover:border-orange-500/30 transition-all group flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm leading-tight">{p.title}</h3>
                    <div className="text-xs text-gray-600 mt-0.5">{p.period}</div>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full border border-orange-500/30 text-orange-400 bg-orange-500/5 shrink-0">
                  {p.badge}
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="text-orange-500 mt-0.5 shrink-0">▸</span>{h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/4 border border-white/8 text-gray-500">{t}</span>
                ))}
              </div>
              <div className="flex items-center justify-between shadow-lg shadow-orange-500/25">
  
                <a href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {p.live && (
                <a href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:text-orange-300 transition-colors inline-flex items-center gap-1.5">
                  Live Demo
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
                )}
              </div>
    
            </motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.7}} className="text-center mt-10">
          <a href="https://github.com/dipanshu-8787" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/12 text-gray-500 hover:text-orange-400 hover:border-orange-500/50 text-sm transition-all ">
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
