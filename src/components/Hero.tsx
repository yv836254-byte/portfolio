import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const roles = ['CSE Student', 'Full Stack Developer', 'AI Enthusiast'];
const codeSnippet = [
  "const developer = {",
  "  name: 'Yashovardhan',",
  "  role: 'Full Stack Developer',",
  "  skills: ['React', 'Python', 'Java'],",
  "};",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cycleComplete, setCycleComplete] = useState(false);

  useEffect(() => {
    const line = codeSnippet[lineIndex];
    if (cycleComplete) return;

    const interval = window.setInterval(() => {
      setCharIndex((prev) => {
        if (prev + 1 >= line.length) {
          clearInterval(interval);
          if (lineIndex + 1 < codeSnippet.length) {
            setLineIndex(lineIndex + 1);
            return 0;
          }
          setCycleComplete(true);
          return line.length;
        }
        return prev + 1;
      });
    }, 45);

    return () => window.clearInterval(interval);
  }, [lineIndex, cycleComplete]);

  useEffect(() => {
    if (!typing) {
      const timer = window.setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }, 1700);
      return () => window.clearTimeout(timer);
    }
  }, [typing]);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let charPos = 0;
    const interval = window.setInterval(() => {
      if (!typing) return;
      if (charPos <= fullText.length) {
        setDisplayText(fullText.slice(0, charPos));
        charPos += 1;
      } else {
        setTyping(false);
        window.clearInterval(interval);
      }
    }, 80);

    return () => window.clearInterval(interval);
  }, [currentRoleIndex, typing]);

  useEffect(() => {
    if (cycleComplete) {
      const timeout = window.setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
        setCycleComplete(false);
      }, 2000);
      return () => window.clearTimeout(timeout);
    }
  }, [cycleComplete]);

  const socialLinks = useMemo(
    () => [
      { icon: <Github size={18} />, href: 'https://github.com/' },
      { icon: <Linkedin size={18} />, href: 'https://linkedin.com/' },
      { icon: <Instagram size={18} />, href: 'https://instagram.com/' },
      { icon: <Mail size={18} />, href: 'mailto:yv836254@gmail.com' },
    ],
    [],
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
        <p className="mb-4 text-sm uppercase tracking-[0.36em] text-cyan-300/80">Aurora Portfolio</p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
          Hi, I&apos;m <span className="text-cyan-300">J. Yashovardhan</span>
        </h1>
        <div className="mt-6 flex items-center gap-3 text-lg text-slate-200 sm:text-xl">
          <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-violet-400" />
          <p className="font-medium">{displayText}&nbsp;</p>
          <span className="animate-pulse text-cyan-300">|</span>
        </div>
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          3rd year B.Tech CSE student passionate about building real-world AI-powered products.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-cyan-300/40 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-300 hover:bg-slate-900/90 hover:scale-[1.02]">
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {socialLinks.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/75 text-slate-200 transition hover:border-cyan-300/80 hover:text-white hover:shadow-glow">
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        className="relative mx-auto flex max-w-md items-center justify-center"
      >
        <motion.div
          className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/20 via-violet-400/15 to-emerald-400/20 blur-3xl"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity }}
        />
        <motion.div
          className="relative z-10 w-full rounded-[34px] border border-white/10 bg-slate-950/75 p-5 shadow-glow backdrop-blur-2xl sm:p-6"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        >
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/95 shadow-xl shadow-slate-950/40">
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-300/12 via-emerald-300/10 to-violet-400/12" />
            <div className="absolute inset-x-0 top-0 h-14 bg-slate-950/95" />
            <div className="absolute left-5 top-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-[0_0_12px_rgba(255,95,86,0.35)]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_12px_rgba(255,189,46,0.25)]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-[0_0_12px_rgba(39,201,63,0.25)]" />
            </div>
            <div className="relative rounded-[30px] border border-white/10 bg-slate-950/90 px-6 py-5 sm:px-7 sm:py-6">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                <span>app.tsx</span>
                <span className="text-slate-400">React</span>
              </div>
              <div className="space-y-2 text-sm font-mono leading-7 sm:text-base">
                {codeSnippet.map((line, index) => {
                  const visible = index < lineIndex || (index === lineIndex && charIndex > 0) || cycleComplete;
                  const text = index === lineIndex ? line.slice(0, charIndex) : line;
                  return (
                    <p key={index} className="whitespace-pre-wrap text-slate-200">
                      <span className="text-cyan-300">{visible ? text : ''}</span>
                      {!visible && index === lineIndex ? <span className="text-cyan-300">&nbsp;</span> : null}
                    </p>
                  );
                })}
                <span className="inline-block h-6 w-1 animate-pulse rounded-full bg-cyan-300" />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-cyan-200">React</span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-emerald-200">TypeScript</span>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-violet-200">Tailwind</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
