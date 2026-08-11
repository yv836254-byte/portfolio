import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, Code2, Coffee, Layout, Zap, Terminal } from 'lucide-react';

const skillNodes = [
  {
    name: 'HTML',
    icon: <Code2 size={24} />,
    level: 90,
    color: 'from-amber-400 to-orange-400',
    accent: '#fb923c',
    proficiency: 'Advanced',
    size: 90,
    position: { x: 180, y: 190 },
    mobile: { x: 300, y: 135 },
  },
  {
    name: 'CSS',
    icon: <Layout size={24} />,
    level: 85,
    color: 'from-sky-400 to-blue-500',
    accent: '#38bdf8',
    proficiency: 'Advanced',
    size: 90,
    position: { x: 430, y: 170 },
    mobile: { x: 220, y: 220 },
  },
  {
    name: 'JavaScript',
    icon: <Zap size={24} />,
    level: 82,
    color: 'from-amber-300 to-yellow-400',
    accent: '#facc15',
    proficiency: 'Advanced',
    size: 90,
    position: { x: 140, y: 360 },
    mobile: { x: 380, y: 230 },
  },
  {
    name: 'React.js',
    icon: <Atom size={24} />,
    level: 40,
    color: 'from-cyan-400 to-violet-400',
    accent: '#22d3ee',
    proficiency: 'Beginner',
    size: 60,
    position: { x: 460, y: 390 },
    mobile: { x: 240, y: 380 },
  },
  {
    name: 'Java',
    icon: <Coffee size={24} />,
    level: 72,
    color: 'from-emerald-400 to-teal-300',
    accent: '#ef4444',
    proficiency: 'Intermediate',
    size: 90,
    position: { x: 300, y: 90 },
    mobile: { x: 340, y: 430 },
  },
  {
    name: 'Python',
    icon: <Terminal size={24} />,
    level: 70,
    color: 'from-emerald-300 to-slate-300',
    accent: '#4ade80',
    proficiency: 'Intermediate',
    size: 90,
    position: { x: 320, y: 500 },
    mobile: { x: 300, y: 520 },
  },
];

const centerPoint = { x: 300, y: 300 };

export default function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const nodes = useMemo(
    () =>
      skillNodes.map((node) => ({
        ...node,
        driftX: -6 + Math.random() * 12,
        driftY: -8 + Math.random() * 16,
        driftDuration: 6 + Math.random() * 3,
        pointerFactor: 0.02 + Math.random() * 0.01,
      })),
    []
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setCursor({
      x: Math.max(-1, Math.min(1, x / (rect.width * 0.45))),
      y: Math.max(-1, Math.min(1, y / (rect.height * 0.45))),
      active: true,
    });
  };

  const handlePointerLeave = () => {
    setCursor({ x: 0, y: 0, active: false });
    if (!isMobile) setHovered(null);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Skill Constellation</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Aurora-powered developer toolkit.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          A floating network of skills orbiting a central core, with subtle motion, glow, and interactive depth.
        </p>
      </div>

      <div className="skills-constellation">
        <div className="stars" aria-hidden="true" />
        <div
          ref={containerRef}
          className="constellation-container"
          onMouseMove={handlePointerMove}
          onMouseLeave={handlePointerLeave}
          role="presentation"
        >
          <svg className="constellation-lines" viewBox="0 0 600 600" preserveAspectRatio="none" aria-hidden="true">
            {nodes.map((node) => {
              const deltaX = cursor.x * node.pointerFactor * 120;
              const deltaY = cursor.y * node.pointerFactor * 120;
              const nodeX = (isMobile ? node.mobile.x : node.position.x) + deltaX;
              const nodeY = (isMobile ? node.mobile.y : node.position.y) + deltaY;
              return (
                <motion.line
                  key={node.name}
                  x1={centerPoint.x}
                  y1={centerPoint.y}
                  x2={nodeX}
                  y2={nodeY}
                  className={`constellation-line ${hovered === node.name ? 'line-active' : ''}`}
                />
              );
            })}
          </svg>

          <motion.div
            className="core-node"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="core-glow" />
            <span className="core-label">YASHU</span>
          </motion.div>

          {nodes.map((node) => {
            const deltaX = cursor.x * node.pointerFactor * 100;
            const deltaY = cursor.y * node.pointerFactor * 100;
            const baseX = isMobile ? node.mobile.x : node.position.x;
            const baseY = isMobile ? node.mobile.y : node.position.y;
            const nodeX = baseX + deltaX;
            const nodeY = baseY + deltaY;
            const isActive = hovered === node.name;
            return (
              <div
                key={node.name}
                className="node-anchor"
                style={{ left: nodeX, top: nodeY, width: node.size, height: node.size }}
              >
                <motion.button
                  type="button"
                  className="skill-node"
                  onMouseEnter={() => setHovered(node.name)}
                  onMouseLeave={() => !isMobile && setHovered(null)}
                  onClick={() => setHovered((current) => (current === node.name ? null : node.name))}
                  animate={{ x: [0, node.driftX, 0], y: [0, node.driftY, 0] }}
                  transition={{ duration: node.driftDuration, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.08 }}
                  style={{
                    boxShadow: `0 0 30px ${node.accent}33, inset 0 0 0 1px rgba(255,255,255,0.08)`,
                    backgroundImage: `radial-gradient(circle at 30% 30%, ${node.accent}22, rgba(15,23,42,0.9) 45%)`,
                  }}
                >
                  <span className="skill-icon">{node.icon}</span>
                  <span className={`skill-label ${isActive ? 'skill-label-visible' : ''}`}>
                    {node.name} — {node.level}%
                  </span>
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
