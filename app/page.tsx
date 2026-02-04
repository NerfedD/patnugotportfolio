"use client";

import { useState } from "react";
import { 
  Mail, 
  Github, 
  ExternalLink, 
  Terminal, 
  Gamepad2, 
  ChevronsLeftRightEllipsis,
  ChevronDown,
  Cpu,
  Code2,
  Globe,
  Database,
  Menu, 
  X,
  Phone,
  Facebook,
  Instagram,
  MessageCircle // Using this for Discord
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA CONFIGURATION ---
const PROJECTS = [
  {
    title: "Simple Calculator",
    description: "A simple project with 4 different calculators inside.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "COMPLETED",
    icon: ChevronsLeftRightEllipsis,
    theme: "cyan"
  },
  {
    title: "CardGame Board",
    description: "A barebones idea for a game board layout.",
    tags: ["JavaScript", "HTML", "CSS"],
    status: "PROTOTYPE",
    icon: ExternalLink,
    theme: "pink"
  },
  {
    title: "Quiz Game",
    description: "An interactive quiz game with optimized designs.",
    tags: ["Java", "HTML", "CSS"],
    status: "COMPLETED",
    icon: Gamepad2,
    theme: "purple"
  }
];

const CONTACT_INFO = [
  { label: "Phone", value: "+63 938 482 5324", icon: Phone, link: "tel:+639384825324", color: "text-green-400" },
  { label: "Email", value: "patnugot0304@gmail.com", icon: Mail, link: "mailto:patnugot0304@gmail.com", color: "text-pink-400" },
  { label: "Facebook", value: "Edd Vincent", icon: Facebook, link: "https://www.facebook.com/edd.vincent.90", color: "text-blue-500" },
  { label: "Instagram", value: "@nerfedd_deez", icon: Instagram, link: "https://www.instagram.com/nerfedd_deez/", color: "text-purple-500" },
  { label: "Discord", value: "nerfedligma", icon: MessageCircle, link: null, color: "text-indigo-400" }, // Link is null, strictly informational
  { label: "GitHub", value: "NerfedD", icon: Github, link: "https://github.com/NerfedD", color: "text-slate-200" },
];

// --- ANIMATION SETTINGS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- MAIN COMPONENT ---
export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <main className="bg-slate-950 text-cyan-400 font-mono relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 👾 BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* 🕹️ HUD DASHBOARD */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-cyan-900/30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-black tracking-tighter text-white text-lg">
            NERFED<span className="text-cyan-500">D</span>
          </div>

          <ul className="hidden md:flex gap-8 text-sm font-bold tracking-widest text-slate-400">
            {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
              <li key={item}>
                <a 
                  href={item === 'HOME' ? '#' : `#${item.toLowerCase()}`} 
                  className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                <span>ONLINE</span>
              </div>
              <span className="opacity-30">|</span>
              <span>LVL 21</span>
            </div>
            <button 
              onClick={toggleMenu}
              className="md:hidden text-cyan-400 hover:text-white transition-colors p-1 border border-cyan-900/50 rounded bg-slate-900/50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-cyan-900/30 bg-slate-950/95 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
            >
              <ul className="flex flex-col p-6 gap-4 text-center text-sm font-bold tracking-widest text-slate-400">
                {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((item) => (
                  <li key={item}>
                    <a 
                      href={item === 'HOME' ? '#' : `#${item.toLowerCase()}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 hover:text-cyan-400 hover:bg-slate-900/50 rounded transition-all border border-transparent hover:border-cyan-900/30"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-slate-900 py-3 bg-slate-900/30 text-center text-xs text-slate-500">
                 STATUS: <span className="text-green-500">ONLINE</span> • LVL 21
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 📦 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 👤 ME */}
        <section className="min-h-screen flex flex-col justify-center items-center py-20 md:py-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-24 w-full"
          >
            <div className="space-y-6 md:space-y-8 text-center md:text-left max-w-2xl">
              <div className="inline-block px-4 py-2 bg-cyan-950/50 border border-cyan-800 rounded text-xs md:text-sm tracking-wider text-cyan-300 mb-2">
                Nerfed<span className="text-cyan-500">D</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                EDD VINCENT <br className="md:hidden" /> <span className="text-cyan-500">PATNUGOT</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed md:border-l-4 md:border-cyan-900 md:pl-6">
                Computer Science Student. <br />
                Aspiring <span className="text-white">Game Developer</span> & <span className="text-white">Full-Stack Dev</span>.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4 md:gap-6 pt-4">
                <SocialButton href="https://github.com/NerfedD" icon={Github} label="GitHub" />
                <SocialButton 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=patnugot0304@gmail.com" 
                  icon={Mail} 
                  label="Gmail" 
                />
              </div>
            </div>

            <div className="relative shrink-0 group mt-10 md:mt-0">
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-500">
                <img src="/your-photo.png" alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce text-slate-500"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* 📜 ABOUT ME SECTION */}
        <section id="about" className="py-24 md:py-32 relative scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800 p-6 md:p-12 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center border border-cyan-500/30 text-cyan-400">
                <Terminal size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">CHARACTER BIO</h2>
                <p className="text-xs text-slate-500 tracking-widest">CLASS: TECH EXPLORER</p>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg mb-12">
              <p>
                I am a Computer Science student who believes technology has no boundaries. 
                My journey began with a fascination for <span className="text-cyan-400 font-bold">Game Development</span>, 
                learning how to build immersive worlds from scratch.
              </p>
              <p>
                Along the way, I discovered the power of <span className="text-pink-400 font-bold">Full-Stack Development</span>, 
                realizing that great applications share the same DNA as great games: interactivity, performance, and user experience.
              </p>
              <p className="border-l-4 border-cyan-500 pl-4 italic text-slate-400">
                "I am not defined by a single stack; I am a developer constantly scanning the horizon for new challenges."
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-500 mb-6 tracking-widest uppercase border-b border-slate-800 pb-2">Skill Inventory</h3>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-cyan-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2 text-sm md:text-base">
                    <Code2 size={18} /> Languages
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 group-hover:text-white transition-colors">
                    Python • Java • C • JavaScript
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-pink-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-pink-400 font-bold mb-2 text-sm md:text-base">
                    <Globe size={18} /> Frontend
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 group-hover:text-white transition-colors">
                    React • Tailwind • HTML • CSS
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-purple-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-purple-400 font-bold mb-2 text-sm md:text-base">
                    <Database size={18} /> Backend
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 group-hover:text-white transition-colors">
                    Node.js • SQL
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-green-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-green-400 font-bold mb-2 text-sm md:text-base">
                    <Cpu size={18} /> Core
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 group-hover:text-white transition-colors">
                    Problem Solving • Algorithms
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 📂 PROJECT LOG */}
        <section id="projects" className="py-24 md:py-32 scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-16"
          >
            <Terminal className="text-pink-500 w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">Project Log</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-10 md:grid-cols-2"
          >
            {PROJECTS.map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                 <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 📞 CONTACT HUB (New Section) */}
        <section id="contact" className="py-24 md:py-32 scroll-mt-24 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-16 justify-center">
              <div className="h-px bg-slate-800 w-12 md:w-32"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest uppercase">Contact Me</h2>
              <div className="h-px bg-slate-800 w-12 md:w-32"></div>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {CONTACT_INFO.map((contact, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all group"
                    >
                      <div className={`p-3 rounded-lg bg-slate-950 group-hover:scale-110 transition-transform ${contact.color}`}>
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{contact.label}</div>
                        <div className="text-slate-300 font-bold group-hover:text-white">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    // Logic for items without links (like Discord username)
                    <div className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl cursor-default">
                       <div className={`p-3 rounded-lg bg-slate-950 ${contact.color}`}>
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{contact.label}</div>
                        <div className="text-slate-300 font-bold">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </section>

        {/* FOOTER */}
        <footer className="pb-12 text-center text-slate-600 text-sm border-t border-slate-900 pt-12">
          <p className="mt-2">© {new Date().getFullYear()} NerfedD</p>
        </footer>

      </div>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function SocialButton({ href, icon: Icon, label }: any) {
  return (
    <a 
      href={href}
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg rounded hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1"
    >
      <Icon size={20} className="md:w-6 md:h-6" />
      <span>{label}</span>
    </a>
  );
}

function ProjectCard({ title, description, tags, status, icon: Icon, theme }: any) {
  const colors: any = {
    cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:text-cyan-400 text-cyan-200/70 bg-cyan-900/30 text-cyan-400",
    pink: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group-hover:text-pink-400 text-pink-200/70 bg-pink-900/30 text-pink-400",
    purple: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:text-purple-400 text-purple-200/70 bg-purple-900/30 text-purple-400",
  };
  
  const themeClass = colors[theme] || colors.cyan;
  const borderClass = themeClass.split(" ").slice(0, 2).join(" "); 
  const textClass = themeClass.split(" ").slice(2, 3).join(" ");   
  const tagClass = themeClass.split(" ").slice(3, 4).join(" ");    
  const badgeClass = themeClass.split(" ").slice(4).join(" ");     

  return (
    <div className={`group relative bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-xl transition-all duration-300 ${borderClass}`}>
      <div className={`absolute top-0 right-0 text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-lg ${badgeClass}`}>
        {status}
      </div>
      <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 transition-colors flex items-center gap-3 ${textClass}`}>
        <Icon size={24} /> {title}
      </h3>
      <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 text-xs md:text-sm font-bold text-slate-500">
        {tags.map((tag: string) => (
          <span key={tag} className={`bg-slate-800 px-3 py-1 rounded ${tagClass}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}