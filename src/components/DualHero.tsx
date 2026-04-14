import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ArtisticHero() {
  const constraintsRef = useRef(null);
  const [hoveredPath, setHoveredPath] = useState<null | 'code' | 'design'>(null);

  return (
    <section 
      id="hero"
      ref={constraintsRef}
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-32 py-20 
                 bg-[#0F0F12] bg-[radial-gradient(circle_at_center,#1A1A22_0%,#0F0F12_100%)]"
    >
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1], 
          rotate: [0, 5, -5, 0], 
          x: hoveredPath === 'code' ? -30 : hoveredPath === 'design' ? 30 : 0 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-225 
                   bg-[conic-gradient(at_top_right,#D4AF37_0%,#A8871E_50%,#E1C66C_100%)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" 
      />

      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto w-full mb-24 md:mb-32 text-center lg:text-left"
      >
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.5em] font-light">
            Crafting Digital Realms
          </span>
          <motion.div animate={{ width: [0, 60, 0] }} transition={{duration: 2, repeat: Infinity, repeatDelay: 1}} className="h-px bg-[#D4AF37]/30" />
        </div>

        <h1 className="text-white text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7.5rem] font-bold leading-[0.95] tracking-tighter mb-6 relative">
          <span className="relative inline-block">
            Pixel
            <motion.span animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }} transition={{ duration: 0.5, delay: 1 }} className="absolute -top-6 -right-6 text-2xl text-[#D4AF37] font-mono">*</motion.span>
          </span> 
          <span className="font-serif italic font-extralight text-[#D4AF37] mx-2">&</span> Code.
          <br />
          <span className="text-white/60 font-extralight text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[5rem]">Stefania Deliso.</span>
        </h1>
        
        <p className="text-white font-mono text-sm uppercase tracking-[0.2em] mb-10 italic">
          "Non è un bug, è una feature mal progettata."
        </p>

        <p className="text-[#A0A0A0] text-lg max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed">
          Risolvo problemi digitali dal 2013. Unisco il Graphic Design alla potenza di React e TypeScript. 
          <span className="text-white font-medium"> Scegli la tua frequenza creativa:</span>
        </p>
      </motion.header>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full items-center">
        <InteractiveEntity 
          id="progetti"
          title="Frontend Dev"
          subtitle="Logic & Performance"
          description="React, TypeScript, Custom WP. Creare codice semantico e PageSpeed 90+."
          onHoverStart={() => setHoveredPath('code')}
          onHoverEnd={() => setHoveredPath(null)}
          color="#D4AF37"
          icon="<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5'><path d='m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16'/></svg>"
        />

        <InteractiveEntity 
          id="expertise"
          title="UI/UX Design"
          subtitle="Visone & Armonia"
          description="Branding, Figma Systems, UX Research. 10 anni di comunicazione visiva."
          onHoverStart={() => setHoveredPath('design')}
          onHoverEnd={() => setHoveredPath(null)}
          color="#E1C66C"
          icon="<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.5'><path d='M12 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 0c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5ZM12 9V2m0 0C9.24 2 7 4.24 7 7M12 2c2.76 0 5 2.24 5 5M12 9c-2.76 0-5-2.24-5-5M12 9c2.76 0 5-2.24 5-5'/></svg>"
        />
      </div>
    </section>
  );
}

interface InteractiveEntityProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  color: string;
  icon: string;
}

function InteractiveEntity({ id, title, subtitle, description, onHoverStart, onHoverEnd, color, icon }: InteractiveEntityProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // FIX: Tipizzazione corretta per React
  function handleMouseMove(event: React.MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    onHoverEnd();
  }

  return (
    <motion.button
      onClick={() => scrollToSection(id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onHoverStart}
      style={{ rotateX, rotateY, perspective: 1000 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="text-left group relative bg-white/1 backdrop-blur-[10px] border border-white/10 rounded-[30px] p-10 cursor-pointer overflow-hidden shadow-none"
    >
      <motion.div 
        style={{ x, y }} 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_60%)] from-[#D4AF371A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col h-full">
        <div style={{ backgroundColor: `${color}1A`, borderColor: `${color}30` }} className="w-16 h-16 rounded-full flex items-center justify-center mb-8 border backdrop-blur-[5px]">
          <div style={{ color: color }} className="w-7 h-7" dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
        <p style={{ color: color }} className="text-[10px] font-mono uppercase tracking-[0.4em] mb-3 font-light">{subtitle}</p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">{title}</h2>
        <p className="text-[#A0A0A0] mb-10 text-base font-light leading-relaxed grow">{description}</p>
        <div style={{ color: color }} className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
          <span>Inizia il Viaggio</span>
          <motion.span animate={{ x: [0, 5, 0] }} transition={{duration: 1, repeat: Infinity}} className="text-lg">→</motion.span>
        </div>
      </div>
    </motion.button>
  );
}