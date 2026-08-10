import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/' },
  { icon: <Linkedin size={18} />, href: 'https://linkedin.com/' },
  { icon: <Instagram size={18} />, href: 'https://instagram.com/' },
  { icon: <Mail size={18} />, href: 'mailto:yv836254@gmail.com' },
];

export default function Contact() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div className="glass-card rounded-[32px] border border-white/10 p-8 shadow-glow" whileHover={{ y: -5 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Get in touch</p>
        <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Let&apos;s build something together.</h2>
        <div className="mt-8 space-y-4 text-slate-300">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Email</p>
            <p className="mt-2 text-lg text-white">yv836254@gmail.com</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/70">Phone</p>
            <p className="mt-2 text-lg text-white">7396354633</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-300/70 hover:text-white hover:shadow-glow">
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.form className="glass-card rounded-[32px] border border-white/10 p-8 shadow-glow" whileHover={{ y: -5 }} transition={{ duration: 0.35, ease: 'easeOut' }} action="mailto:yv836254@gmail.com" method="GET" encType="text/plain">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70 focus:ring-1 focus:ring-cyan-300/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70 focus:ring-1 focus:ring-cyan-300/30"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-300/70 focus:ring-1 focus:ring-cyan-300/30"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  );
}
