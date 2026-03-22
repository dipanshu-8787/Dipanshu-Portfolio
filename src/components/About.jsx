// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const stats = [
//   { num: "8.36", label: "CGPA" },
//   { num: "5+", label: "Projects" },
//   { num: "15+", label: "Certificates" },
//   { num: "200+", label: "DSA Solved" },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.22,1,0.36,1] } }),
// };

// export default function About() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="about" ref={ref} className="py-28 px-6">
//       <div className="max-w-6xl mx-auto">
//         <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
//           <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">Who I Am</span>
//           <h2 className="text-4xl md:text-5xl font-black font-display">
//             About <span className="text-orange-400">Me</span>
//           </h2>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <motion.p custom={0} variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"}
//               className="text-gray-400 leading-relaxed mb-5 text-sm">
//               I'm an aspiring software developer currently pursuing B.Tech in Computer Science at{" "}
//               <span className="text-white font-semibold">Lovely Professional University</span>, Punjab, with a CGPA of{" "}
//               <span className="text-orange-400 font-semibold">8.36</span>.
//             </motion.p>
//             <motion.p custom={1} variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"}
//               className="text-gray-400 leading-relaxed mb-5 text-sm">
//               My expertise lies in the <span className="text-orange-400 font-semibold">MERN Stack</span> — building full-stack
//               applications that are performant, scalable, and user-centric. I've built real-world projects including a Carbon
//               Footprint Tracker with JWT auth, RESTful APIs, and Chart.js visualizations.
//             </motion.p>
//             <motion.p custom={2} variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"}
//               className="text-gray-400 leading-relaxed mb-10 text-sm">
//               Beyond code, I've solved <span className="text-white font-semibold">200+ DSA problems</span> on LeetCode, GFG &
//               HackerRank, and served as <span className="text-white font-semibold">Class Representative for 3 consecutive years</span> — 
//               demonstrating leadership and communication alongside technical skill.
//             </motion.p>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {stats.map((s, i) => (
//                 <motion.div key={s.label} custom={3+i} variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"}
//                   className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-orange-500/30 transition-colors">
//                   <div className="text-2xl font-black text-orange-400">{s.num}</div>
//                   <div className="text-xs text-gray-500 mt-1">{s.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView?"show":"hidden"} className="space-y-4">
//           {[
//             {
//             icon: (
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//             </svg>
//             ),
//             label: "Location", value: "Punjab, India", href: null,
//             },
//             {icon: 
//               (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
//               </svg>),
//               label: "University", value: "Lovely Professional University", href: null,
//             },
//             {
//             icon: (
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//               </svg>),
//               label: "Email", value: "dipansh89agnihotri@gmail.com", href: "mailto:dipansh89agnihotri@gmail.com",
//             },
//             {
//             icon: (
//              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
//         </svg>
//       ),
//       label: "Phone", value: "+91-6307878823", href: "tel:+916307878823",
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
//         </svg>
//       ),
//       label: "GitHub", value: "github.com/dipanshu-8787", href: "https://github.com/dipanshu-8787",
//     },
//     {
//       icon: (
//         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//         </svg>
//       ),
//       label: "LinkedIn", value: "linkedin.com/in/dipanshu8787", href: "https://linkedin.com/in/dipanshu8787",
//     },
//   ].map((item, i) => (
//     <motion.div
//       key={item.label}
//       initial={{opacity:0,x:30}}
//       animate={inView?{opacity:1,x:0}:{}}
//       transition={{delay:0.3+i*0.08, duration:0.6}}>
//       {item.href ? (
//           <a href={item.href}
//           target={item.href.startsWith("http") ? "_blank" : undefined}
//           rel="noopener noreferrer"
//           className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/6 hover:border-orange-500/30 hover:text-orange-400 transition-all group">
//           <span className="text-orange-400 shrink-0">{item.icon}</span>
//           <span className="text-xs text-gray-500 w-20 shrink-0">{item.label}</span>
//           <span className="text-sm text-white group-hover:text-orange-400 truncate transition-colors">{item.value}</span>
//         </a>
//       ) : (
//         <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/6">
//           <span className="text-orange-400 shrink-0">{item.icon}</span>
//           <span className="text-xs text-gray-500 w-20 shrink-0">{item.label}</span>
//           <span className="text-sm text-white truncate">{item.value}</span>
//         </div>)}
//         </motion.div>
      
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: "8.36", label: "CGPA" },
  { num: "5+", label: "Projects" },
  { num: "15+", label: "Certificates" },
  { num: "200+", label: "DSA Solved" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">
            Who I Am
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            About <span className="text-orange-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text + Stats */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-gray-400 leading-relaxed mb-5 text-sm"
            >
              I'm an aspiring software developer currently pursuing B.Tech in Computer Science at{" "}
              <span className="text-white font-semibold">Lovely Professional University</span>, Punjab,
              with a CGPA of <span className="text-orange-400 font-semibold">8.36</span>.
            </motion.p>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-gray-400 leading-relaxed mb-5 text-sm"
            >
              My expertise lies in the{" "}
              <span className="text-orange-400 font-semibold">MERN Stack</span> — building full-stack
              applications that are performant, scalable, and user-centric. I've built real-world
              projects including a Carbon Footprint Tracker with JWT auth, RESTful APIs, and Chart.js
              visualizations.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="text-gray-400 leading-relaxed mb-10 text-sm"
            >
              Beyond code, I've solved{" "}
              <span className="text-white font-semibold">200+ DSA problems</span> on LeetCode, GFG &
              HackerRank, and served as{" "}
              <span className="text-white font-semibold">
                Class Representative for 3 consecutive years
              </span>{" "}
              — demonstrating leadership and communication alongside technical skill.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={3 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-orange-500/30 transition-colors"
                >
                  <div className="text-2xl font-black text-orange-400">{s.num}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Info Cards */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-4"
          >
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
                label: "Location",
                value: "Punjab, India",
                href: null,
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                ),
                label: "University",
                value: "Lovely Professional University",
                href: null,
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                ),
                label: "Email",
                value: "dipansh89agnihotri@gmail.com",
                href: "mailto:dipansh89agnihotri@gmail.com",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                ),
                label: "Phone",
                value: "+91-6307878823",
                href: "tel:+916307878823",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
                label: "GitHub",
                value: "github.com/dipanshu-8787",
                href: "https://github.com/dipanshu-8787",
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: "LinkedIn",
                value: "linkedin.com/in/dipanshu8787",
                href: "https://linkedin.com/in/dipanshu8787",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/6 hover:border-orange-500/60 hover:text-orange-400 transition-all group"
                  >
                    <span className="text-white-400 shrink-0">{item.icon}</span>
                    <span className="text-xs text-gray-500 w-20 shrink-0">{item.label}</span>
                    <span className="text-sm text-white group-hover:text-orange-400 truncate transition-colors">
                      {item.value}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/6 hover:border-orange-500/60 hover:text-orange-400 transition-all group">
                    <span className="text-white shrink-0">{item.icon}</span>
                    <span className="text-xs text-gray-500 w-20 shrink-0">{item.label}</span>
                    <span className="text-sm text-white group-hover:text-orange-400 truncate transition-colors">{item.value}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

