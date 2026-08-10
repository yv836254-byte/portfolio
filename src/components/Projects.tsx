import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Ringless AI',
    description: 'A live AI call assistant application that automates calls intelligently. Built with React, TypeScript, Vite, and Tailwind CSS.',
    live: 'https://ringless-ai.vercel.app',
    github: 'https://github.com/',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'Live Demo',
  },
  {
    title: 'Next Launch',
    description: 'Coming soon — a premium startup dashboard for organizing AI workflows, product metrics, and creative launch plans.',
    tech: ['Coming Soon'],
    status: 'Soon',
  },
  {
    title: 'Aurora Studio',
    description: 'Coming soon — interactive portfolio experiences with custom motion, design systems, and polished brand storytelling.',
    tech: ['Coming Soon'],
    status: 'Soon',
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Featured work</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Featured projects.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          Selected ideas with premium motion, polished UI, and real product intent.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="group glass-card rounded-3xl border border-white/10 p-6 shadow-glow"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
              </div>
              <span className="inline-flex items-center rounded-full border border-cyan-300/20 bg-slate-900/70 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-cyan-200">
                {project.status === 'Live Demo' ? (
                  <span className="mr-2 inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                ) : null}
                {project.status}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span key={tag} className="rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-300 shadow-sm transition group-hover:border-cyan-300/40">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-glow"
                >
                  Live Demo
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
