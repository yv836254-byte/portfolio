import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-30 mx-auto mb-8 rounded-3xl transition duration-500 ${isSticky ? 'bg-slate-950/80 shadow-glow' : 'bg-slate-950/40'} glass-card border border-white/10`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="text-base font-semibold tracking-[0.22em] text-cyan-300/90">
          YASHO.
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-200 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-cyan-300/60 hover:text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {mobileOpen ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/10 px-5 pb-5 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-900/80 hover:text-white" onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
