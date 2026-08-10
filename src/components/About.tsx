import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="glass-card rounded-[32px] border border-white/10 p-8 shadow-glow"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">About me</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Crafting intelligent digital experiences.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I am a 3rd year B.Tech CSE student specializing in building scalable full-stack applications and AI-powered products.
            I thrive on designing meaningful solutions and iterating quickly to bring startup ideas from concept to reality.
          </p>
        </div>

        <div className="rounded-[28px] border border-cyan-300/15 bg-slate-900/70 p-6 text-slate-200 shadow-xl shadow-cyan-500/10">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Current status</p>
          <p className="mt-3 text-2xl font-semibold text-white">3rd year CSE student</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>AI research interests, full-stack product design, and growth-focused engineering.</p>
            <p>Building web apps with thoughtful motion, immersive UX, and clean frontend architecture.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
