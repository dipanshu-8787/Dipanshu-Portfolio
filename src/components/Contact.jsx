import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_name: "Dipanshu",
      },
      EMAILJS_PUBLIC_KEY
    );
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (err) {
    console.error(err);
    setStatus("error");
  }

  setTimeout(() => setStatus("idle"), 5000);
};

  const inputClass =
    "w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors";

  return (
    <section id="contact" className="py-28 pb-5 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}} className="text-center mb-16">
          <span className="text-xs text-orange-400 tracking-[0.3em] uppercase mb-3 block">Let's Connect</span>
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mt-3">
            Open to full-time roles, freelance projects, and collaborations. Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left: Info */}
          <motion.div initial={{opacity:0,x:-30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.1}}>
            <h3 className="text-lg font-bold text-white mb-2">Let's talk about something <span className="text-orange-400">special</span></h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-5">
              {[
                 { 
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    ), 
                    label: "Email", value: "dipansh89agnihotri@gmail.com", href: "mailto:dipansh89agnihotri@gmail.com" 
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    ), 
                    label: "Phone", value: "+91-6307878823", href: "tel:+916307878823" 
                  },
                  {
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    ), 
                    label: "Location", value: "Punjab, India", href: null 
                  },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-base shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-white hover:text-orange-400 transition-colors">{item.value}</a>
                    ) : (
                      <span className="text-sm text-white">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {[
                { label: "GitHub", href: "https://github.com/dipanshu-8787" },
                { label: "LinkedIn", href: "https://linkedin.com/in/dipanshu8787" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-white/10 text-xs text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-all">
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{opacity:0,x:30}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.7,delay:0.2}}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Full Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Dipanshu Agnihotri"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration / Job Opportunity"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={inputClass + " resize-none"}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}
                  className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                  ✅ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}
                  className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                  ❌ Something went wrong. Please try emailing me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{scale: status === "loading" ? 1 : 1.02}}
                whileTap={{scale: status === "loading" ? 1 : 0.97}}
                className="w-full py-3.5 rounded-xl bg-orange-600 text-black font-bold  border border-white/80 text-sm hover:bg-orange-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-orange-500/20"
              >
                {status === "loading" ? "Sending..." : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>

                  
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-10 pt-8 border-t border-white/5 max-w-xs mx-auto" >
            <img
              src="/favicorn.png"
              alt="DA Logo"
              className="w-16 h-16 object-contain mx-auto "
            />
            <div className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Dipanshu Agnihotri · All rights reserved
            </div>
          </motion.div>
      </div>
    </section>
  );
}
