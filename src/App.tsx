import { motion } from 'framer-motion';
import { About, Contact, CustomCursor, Footer, Hero, Navbar, Projects, Skills } from './components';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      <CustomCursor />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#22d3ee] opacity-20 blur-3xl animate-blob1" />
        <div className="absolute top-[10%] right-[-5%] h-[520px] w-[520px] rounded-full bg-[#8b5cf6] opacity-18 blur-3xl animate-blob2" />
        <div className="absolute bottom-[-10%] left-[15%] h-[460px] w-[460px] rounded-full bg-[#10b981] opacity-16 blur-3xl animate-blob3" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <Navbar />

        <main className="mt-24 space-y-32 pb-20">
          <motion.section
            id="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <Hero />
          </motion.section>

          <motion.section id="about" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <About />
          </motion.section>

          <motion.section id="skills" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <Skills />
          </motion.section>

          <motion.section id="projects" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <Projects />
          </motion.section>

          <motion.section id="contact" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <Contact />
          </motion.section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
