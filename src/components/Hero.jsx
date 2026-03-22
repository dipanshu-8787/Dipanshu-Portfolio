import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const NUM = 90;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      color: Math.random() > 0.6 ? "#f97316" : "#fb923c",
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2, cy = canvas.height / 2;
      const mxOff = (mouse.x - cx) / cx, myOff = (mouse.y - cy) / cy;

      particles.forEach((p) => {
        p.x += p.vx + mxOff * 0.08;
        p.y += p.vy + myOff * 0.08;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.globalAlpha = (1 - dist / 110) * 0.1;
            ctx.strokeStyle = "#f97316";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const roles = ["Full-Stack Developer", "MERN Stack Engineer", "Problem Solver", "UI Enthusiast"];

function TypeWriter() {
  const ref = useRef(null);
  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false, timeout;
    const tick = () => {
      const current = roles[roleIdx];
      if (!deleting) {
        charIdx++;
        if (ref.current) ref.current.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) { deleting = true; timeout = setTimeout(tick, 1800); return; }
      } else {
        charIdx--;
        if (ref.current) ref.current.textContent = current.slice(0, charIdx);
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
      }
      timeout = setTimeout(tick, deleting ? 45 : 75);
    };
    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);
  return <span ref={ref} className="text-orange-400" />;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-orange-500/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-4 flex justify-center ">
              <span className="inline-block px-4 py-1.5 rounded-full border  border-orange-500/30 text-orange-400 text-xs tracking-[0.2em] uppercase bg-orange-500/5">
                Available for Opportunities
              </span>
            </motion.div>
            <motion.p variants={item} className="text-orange-400/70 text-sm mb-2 font-mono-custom tracking-widest">Hi, I'm</motion.p>
            <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 leading-none tracking-tight font-display">
              Dipanshu<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Agnihotri</span>
            </motion.h1>
            <motion.div variants={item} className="text-lg text-gray-400 mb-2 h-7">
              I'm a <TypeWriter /><span className="text-orange-400 animate-pulse">|</span>
            </motion.div>
            <motion.p variants={item} className="text-gray-500 mt-4 mb-8 text-sm leading-relaxed max-w-md">
              B.Tech CSE @ Lovely Professional University · <span className="text-orange-400 font-semibold">2+ Years of Experience </span>· Building scalable,
              performant web experiences with the MERN stack.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-7 py-3 rounded-full bg-orange-500 text-black font-bold text-sm hover:bg-orange-400 active:scale-95 transition-all shadow-lg shadow-orange-500/25"
              >
                View Projects
              </button>
              <a
                href="/Dipanshu_CV.pdf"
                 download
                className="px-7 py-3 rounded-full border border-white/50 text-white font-semibold text-sm hover:border-orange-500/50 hover:text-orange-400 transition-all inline-flex items-center gap-2 shadow-lg shadow-orange-500/25"
                >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                  Download CV
              </a>
              
            </motion.div>
            <motion.div variants={item} className="flex gap-5 mt-8">
              {[
                { label: "GitHub", href: "https://github.com/dipanshu-8787" },
                { label: "LinkedIn", href: "https://linkedin.com/in/dipanshu8787" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-orange-400 transition-colors underline underline-offset-4">
                  {s.label} ↗
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-orange-700/10 blur-xl scale-105" />
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-3xl border border-orange-500/20 overflow-hidden bg-gradient-to-br from-[#1a1008] to-[#0f0f0f]">
                {/* Replace src below with your actual photo path like /your-photo.jpg */}
                <img
                  src="\src\components\profile.png"
                  alt="Dipanshu Agnihotri"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                {/* Fallback avatar if no image */}
                <div className="w-full h-full items-center justify-center text-center px-6 hidden" style={{display:'none'}}>
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 mx-auto mb-4 flex items-center justify-center text-4xl font-black text-black shadow-lg">
                    DA
                  </div>
                  <div className="text-white font-bold">Dipanshu Agnihotri</div>
                  <div className="text-orange-400 text-xs mt-1">Full-Stack Developer</div>
                </div>
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="text-white font-bold text-sm">Dipanshu Agnihotri</div>
                  <div className="text-orange-400 text-xs">Full-Stack Developer</div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-[#1a1008] border border-orange-500/30 rounded-2xl px-4 py-2 shadow-xl"
              >
                <div className="text-xs text-gray-400">CGPA</div>
                <div className="text-orange-400 font-black text-lg">8.36</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-[#1a1008] border border-orange-500/30 rounded-2xl px-4 py-2 shadow-xl"
              >
                <div className="text-xs text-gray-400">Experience</div>
                <div className="text-orange-400 font-black text-lg">MERN</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-700 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}
