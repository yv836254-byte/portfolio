import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, Code2, Coffee, Layout, Zap, Terminal } from 'lucide-react';

const skills = [
  { name: 'React.js', icon: <Atom size={20} />, levelLabel: 'Beginner', accent: '#22d3ee', featured: true, color: 'from-cyan-400 to-violet-400' },
  { name: 'JavaScript', icon: <Zap size={20} />, levelLabel: 'Advanced', accent: '#facc15', featured: true, color: 'from-amber-300 to-yellow-400' },
  { name: 'HTML', icon: <Code2 size={20} />, levelLabel: 'Advanced', accent: '#fb923c', featured: false, color: 'from-amber-400 to-orange-400' },
  { name: 'CSS', icon: <Layout size={20} />, levelLabel: 'Advanced', accent: '#38bdf8', featured: false, color: 'from-sky-400 to-blue-500' },
  { name: 'Java', icon: <Coffee size={20} />, levelLabel: 'Intermediate', accent: '#ef4444', featured: false, color: 'from-emerald-400 to-teal-300' },
  { name: 'Python', icon: <Terminal size={20} />, levelLabel: 'Intermediate', accent: '#4ade80', featured: false, color: 'from-emerald-300 to-slate-300' },
];

const tools = ['Vite', 'Tailwind', 'Framer', 'React', 'TypeScript', 'ESBuild', 'Git', 'VSCode'];

export default function Skills() {
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [hovered, setHovered] = useState<string | null>(null);

  const handleMove = (e: React.MouseEvent, name: string) => {
    const el = cardRefs.current[name];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
  };

  const handleLeave = (name: string) => {
    const el = cardRefs.current[name];
    if (!el) return;
    el.style.setProperty('--mx', `50%`);
    el.style.setProperty('--my', `50%`);
    setHovered(null);
  };

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">My skills</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Aurora-powered developer toolkit.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          Clean bento-style dashboard showing your featured and core skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => {
          const isFeatured = skill.featured;
          const colSpan = isFeatured ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1';
          return (
            <motion.button
              key={skill.name}
              ref={(el) => (cardRefs.current[skill.name] = el)}
              onMouseMove={(e) => handleMove(e, skill.name)}
              onMouseLeave={() => handleLeave(skill.name)}
              onMouseEnter={() => setHovered(skill.name)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className={`bento-card relative overflow-hidden rounded-2xl p-6 text-left border border-white/6 ${colSpan}`}
              style={{ ['--accent' as any]: skill.accent }}
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
              <div className="relative z-10">
                <div className="flex items-start gap-3">
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-sm`}>
                    {skill.icon}
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold font-sans text-white">{skill.name}</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="status-dot inline-block h-2.5 w-2.5 rounded-full" style={{ background: skill.accent }} />
                  <span className="text-sm text-slate-400">{skill.levelLabel}</span>
                </div>
              </div>

              <div className={`spotlight absolute inset-0 pointer-events-none`}></div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-2">
        <h4 className="text-sm font-semibold text-slate-300 mb-3">Tools & Technologies</h4>
        <div className="relative overflow-hidden">
          <div className="marquee">
            {[...tools, ...tools].map((t, i) => (
              <div key={`${t}-${i}`} className="chip inline-flex items-center justify-center px-4 py-2 mr-3 rounded-full bg-white/5 text-slate-200 text-sm">
                {t}
              </div>
            ))}
          </div>
          <div className="marquee marquee--duplicate" aria-hidden="true">
            {[...tools, ...tools].map((t, i) => (
              <div key={`dup-${t}-${i}`} className="chip inline-flex items-center justify-center px-4 py-2 mr-3 rounded-full bg-white/5 text-slate-200 text-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
