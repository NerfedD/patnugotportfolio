"use client";

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
  Database
} from "lucide-react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.2
    }
  }
};

// --- MAIN COMPONENT ---
export default function Portfolio() {
  return (
    <main className="bg-slate-950 text-cyan-400 font-mono relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 👾 BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>

      {/* 🕹️ HUD DASHBOARD (Fixed Top) */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-cyan-900/30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex gap-8 text-sm font-bold tracking-widest text-slate-400">
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
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2 animate-pulse">
              <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
              <span>ONLINE</span>
            </div>
            <span className="opacity-30">|</span>
            <span>LVL 21</span>
          </div>
        </div>
      </nav>

      {/* 📦 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* (Home) */}
        <section className="min-h-screen flex flex-col justify-center pt-10 pb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="flex flex-col-reverse md:flex-row items-center justify-center gap-16 md:gap-24"
          >
            {/* Text Side */}
            <div className="space-y-8 text-center md:text-left max-w-2xl">
              <div className="inline-block px-4 py-2 bg-cyan-950/50 border border-cyan-800 rounded text-sm tracking-wider text-cyan-300 mb-2">
                NerfedD
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                EDD VINCENT <span className="text-cyan-500">PATNUGOT</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed border-l-4 border-cyan-900 pl-6">
                Computer Science Student. <br />
                Aspiring <span className="text-white">Game Developer</span> & <span className="text-white">Full-Stack Dev</span>.
              </p>
              <div className="flex justify-center md:justify-start gap-6 pt-4">
                <SocialButton href="https://github.com/NerfedD" icon={Github} label="GitHub" />
                <SocialButton href="https://mail.google.com/mail/?view=cm&fs=1&to=patnugot0304@gmail.com" icon={Mail} label="Gmail" 
/>
              </div>
            </div>

            {/* Photo Side */}
            <div className="relative shrink-0 group">
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-500">
                <img src="/your-photo.png" alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce text-slate-500"
          >
            <ChevronDown size={40} />
          </motion.div>
        </section>

        {/* 📜 ABOUT ME SECTION */}
        <section id="about" className="py-32 relative scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800 p-8 md:p-12 rounded-2xl backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-cyan-900/30 rounded-full flex items-center justify-center border border-cyan-500/30 text-cyan-400">
                <Terminal size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">CHARACTER BIO</h2>
                <p className="text-xs text-slate-500 tracking-widest">CLASS: TECH EXPLORER</p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg mb-12">
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

            {/* 🛠️ SKILL INVENTORY */}
            <div>
              <h3 className="text-sm font-bold text-slate-500 mb-6 tracking-widest uppercase border-b border-slate-800 pb-2">Skill Inventory</h3>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                
                {/* Languages */}
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-cyan-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                    <Code2 size={18} /> Languages
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    Python • Java • C • JavaScript
                  </div>
                </motion.div>

                {/* Frontend */}
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-pink-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-pink-400 font-bold mb-2">
                    <Globe size={18} /> Frontend
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    React • Tailwind • HTML • CSS
                  </div>
                </motion.div>

                {/* Backend */}
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-purple-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
                    <Database size={18} /> Backend
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    Node.js • SQL
                  </div>
                </motion.div>

                {/* Core/Tools */}
                <motion.div variants={fadeInUp} className="bg-slate-950 border border-slate-800 p-4 rounded-lg hover:border-green-500/50 transition-colors group">
                  <div className="flex items-center gap-2 text-green-400 font-bold mb-2">
                    <Cpu size={18} /> Core
                  </div>
                  <div className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    Problem Solving • Algorithms
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </motion.div>
        </section>

        {/* 📂 PROJECT LOG */}
        <section id="projects" className="py-32 scroll-mt-24 min-h-screen">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex items-center gap-4 mb-16"
          >
            <Terminal className="text-pink-500 w-8 h-8" />
            <h2 className="text-3xl font-bold text-white tracking-widest uppercase">Project Log</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </motion.div>
          
          {/* Grid Staggered Animation */}
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

        {/* FOOTER */}
        <motion.footer 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pb-12 text-center text-slate-600 text-sm border-t border-slate-900 pt-12"
        >
          <p className="mt-2">© {new Date().getFullYear()} NerfedD • PRESS START TO CONTINUE</p>
        </motion.footer>

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
      className="flex items-center gap-3 bg-slate-900 border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 px-8 py-4 text-lg rounded hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-1"
    >
      <Icon size={24} />
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
    <div className={`group relative bg-slate-900 border border-slate-800 p-8 rounded-xl transition-all duration-300 ${borderClass}`}>
      <div className={`absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-lg ${badgeClass}`}>
        {status}
      </div>
      <h3 className={`text-2xl font-bold text-white mb-3 transition-colors flex items-center gap-3 ${textClass}`}>
        <Icon size={24} /> {title}
      </h3>
      <p className="text-slate-400 text-base mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 text-sm font-bold text-slate-500">
        {tags.map((tag: string) => (
          <span key={tag} className={`bg-slate-800 px-3 py-1 rounded ${tagClass}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}