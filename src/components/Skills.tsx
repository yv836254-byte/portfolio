import { motion } from 'framer-motion';
import { Atom, Code2, Coffee, Layout, Zap, Terminal } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: <Code2 size={24} />, level: 90, color: 'from-amber-400 to-orange-400' },
  { name: 'CSS', icon: <Layout size={24} />, level: 85, color: 'from-sky-400 to-blue-500' },
  { name: 'JavaScript', icon: <Zap size={24} />, level: 82, color: 'from-amber-300 to-yellow-400' },
  { name: 'React.js', icon: <Atom size={24} />, level: 78, color: 'from-cyan-400 to-violet-400' },
  { name: 'Java', icon: <Coffee size={24} />, level: 72, color: 'from-emerald-400 to-teal-300' },
  { name: 'Python', icon: <Terminal size={24} />, level: 70, color: 'from-emerald-300 to-slate-300' },
];

export default function Skills() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">My skills</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Aurora-powered developer toolkit.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          A blend of frontend polish and backend logic with modern frameworks, UI motion, and AI experimentation.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <motion.article
            key={skill.name}
            className="glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${skill.color} text-white shadow-lg shadow-slate-950/30`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <p className="text-sm text-slate-300">Level: {skill.name === 'React.js' ? 'Beginner' : 'Intermediate'}</p>
              </div>
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-900/80">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
