import { motion } from 'framer-motion';
import { Project } from '../lib/projects';
import { 
  ArrowLeftIcon, 
  CodeIcon, 
  CpuIcon, 
  TerminalWindowIcon,
  FileCodeIcon
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

// IMPORT LOGHI
import logoSano from '../assets/Loghi/LogoSano.webp';
import logoAnimo from '../assets/Loghi/LogoAnimoSiciliano.webp';
import logoFarmacia from '../assets/Loghi/LogoFarmaciaSantrovaso.webp';
import logoBonaccorso from '../assets/Loghi/LogoBonaccorso.webp';
import logoArredi from '../assets/Loghi/LogoArrediIta.webp';
import logoSoulfarm from '../assets/Loghi/LogoSoulfarm.webp';
import logoDevFest from '../assets/Loghi/LogoDevFestCT.webp';
import logoMoscaMobili from '../assets/Loghi/LogoMoscaMobili.webp';

export default function CaseStudy({ project }: { project: Project }) {
  const navigate = useNavigate();

  // Stessa logica di configurazione per coerenza
  const brandConfigs: Record<string, { accent: string; logo?: string }> = {
    'sano-siciliano': { accent: '#FF69B4', logo: logoSano },
    'bonaccorso-guess': { accent: '#C5A572', logo: logoBonaccorso },
    'animo-siciliano': { accent: '#D4AF37', logo: logoAnimo },
    'arredi-italiani': { accent: '#FFFFFF', logo: logoArredi },
    'soulfarm': { accent: '#A8E6CF', logo: logoSoulfarm },
    'devfest-passport': { accent: '#4285F4', logo: logoDevFest },
    'farmacia-santrovaso': { accent: '#00A859', logo: logoFarmacia },
    'mosca-mobili': { accent: '#E30613', logo: logoMoscaMobili },
  };

  const currentBrand = brandConfigs[project.id] || { accent: '#3b82f6' }; // Default blue se non trovato

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#030014] min-h-screen text-white selection:bg-blue-500/30 pb-32"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center bg-[#030014]/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 hover:text-blue-400 transition-colors"
        >
          <ArrowLeftIcon size={16} /> Back_to_Terminal
        </button>
        <div className="flex gap-3">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-[9px] font-mono text-blue-400 uppercase tracking-widest">
              {t}
            </span>
          ))}
        </div>
      </nav>

      {/* --- HEADER CON LOGO --- */}
      <header className="pt-56 pb-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-20 items-center">
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="h-px w-8" style={{ backgroundColor: currentBrand.accent }} />
               <span className="font-mono text-[10px] uppercase tracking-[0.5em]" style={{ color: currentBrand.accent }}>
                 {project.role}
               </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-12 leading-[0.8] uppercase">
              {project.title.replace('_', ' ')}<span style={{ color: currentBrand.accent }}>.</span>
            </h1>
            <p className="text-2xl text-white/40 font-light max-w-xl leading-relaxed italic">
              {project.description}
            </p>
          </motion.div>

          {/* Slot Logo Brand - Trasparenza Ghost */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div 
                className="absolute inset-0 blur-3xl opacity-20 transition-opacity group-hover:opacity-40" 
                style={{ backgroundColor: currentBrand.accent }}
              />
              <img 
                src={currentBrand.logo} 
                alt="Brand Logo" 
                className="relative z-10 w-full max-w-50 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-24 pt-12 border-t border-white/5">
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.5em]" style={{ color: currentBrand.accent }}>Time_Frame</p>
              <p className="text-3xl font-light">{project.duration}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-[0.5em]" style={{ color: currentBrand.accent }}>System_Stack</p>
              <p className="text-xl font-light text-white/60 leading-snug">{project.tech.join(' + ')}</p>
            </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Preview */}
          <div className="lg:col-span-2 rounded-5xl overflow-hidden border border-white/10 bg-slate-900/20 aspect-video group relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
          </div>

          <div className="flex flex-col gap-6">
            {/* Dev Log */}
            <div className="bg-white/2 border border-white/5 rounded-[2.5rem] p-10 flex-1 backdrop-blur-3xl">
              <div className="flex items-center gap-4 mb-8" style={{ color: currentBrand.accent }}>
                <TerminalWindowIcon size={28} />
                <span className="font-mono text-xs uppercase tracking-[0.3em]">Dev_Log</span>
              </div>
              <p className="text-base text-white/50 leading-relaxed font-light italic">
                {project.fullDescription}
              </p>
            </div>

            {/* Performance Card - Colore Dinamico */}
            <div 
              className="rounded-[2.5rem] p-10 text-white shadow-2xl transition-all duration-500"
              style={{ 
                backgroundColor: currentBrand.accent === '#FFFFFF' ? '#1e1e1e' : currentBrand.accent,
                boxShadow: `0 20px 40px ${currentBrand.accent}15` 
              }}
            >
              <CpuIcon size={32} className="mb-6 opacity-40" />
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] mb-2 opacity-70">Efficiency_Rate</h3>
              <p className="text-3xl font-bold tracking-tight">{project.performance}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- OBSTACLE & SOLUTION --- */}
      <section className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-32">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-white/20">
              <CodeIcon size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">The_Obstacle</span>
            </div>
            <h2 className="text-4xl font-bold italic leading-tight text-white/90">"{project.challenge}"</h2>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-white/20">
              <FileCodeIcon size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">The_Solution</span>
            </div>
            <p className="text-xl text-white/40 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-32 py-20 text-center border-t border-white/5">
          <p className="text-[10px] font-mono text-white/10 uppercase tracking-[1em]">EOF_SYSTEM_READY</p>
      </footer>
    </motion.main>
  );
}