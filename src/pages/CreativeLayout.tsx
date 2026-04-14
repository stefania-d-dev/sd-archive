import { motion } from 'framer-motion';
import { Project } from '../lib/projects';
import { 
  ArrowLeftIcon, 
  PaletteIcon, 
  TargetIcon, 
  CalendarBlankIcon, 
  QuotesIcon, 
  TrendUpIcon, 
  FigmaLogoIcon, 
  SparkleIcon, 
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

// LOGHI BRAND 
import logoSano from '../assets/Loghi/LogoSano.webp';
import logoAnimo from '../assets/Loghi/LogoAnimoSiciliano.webp';
import logoFarmacia from '../assets/Loghi/LogoFarmaciaSantrovaso.webp';
import logoBonaccorso from '../assets/Loghi/LogoBonaccorso.webp';
import logoArredi from '../assets/Loghi/LogoArrediIta.webp';
import logoSoulfarm from '../assets/Loghi/LogoSoulfarm.webp';
import logoDevFest from '../assets/Loghi/LogoDevFestCT.webp';
import logoMoscaMobili from '../assets/Loghi/LogoMoscaMobili.webp';

export default function CreativeLayout({ project }: { project: Project }) {
  const navigate = useNavigate();

  const brandConfigs: Record<string, { accent: string; isDesignBased: boolean; logo?: string; tagline: string }> = {
    'sano-siciliano': { 
      accent: '#FF69B4', 
      isDesignBased: true, 
      logo: logoSano,
      tagline: "Celebrating the Sicilian flavor through vibrant visual storytelling."
    },
    'bonaccorso-guess': { 
      accent: '#C5A572', 
      isDesignBased: true,
      logo: logoBonaccorso,
      tagline: "High-end fashion aesthetics meets digital elegance."
    },
    'animo-siciliano': { 
      accent: '#D4AF37', 
      isDesignBased: true,
      logo: logoAnimo,
      tagline: "Tradition reinterpreted for the digital native generation."
    },
    'arredi-italiani': { 
      accent: '#FFFFFF', 
      isDesignBased: false,
      logo: logoArredi,
      tagline: "Minimalist UI for premium interior design commerce."
    },
    'soulfarm': { 
      accent: '#A8E6CF', 
      isDesignBased: false,
      logo: logoSoulfarm,
      tagline: "Sustainable tech architecture for modern farming."
    },
    'devfest-passport': { 
      accent: '#4285F4', 
      isDesignBased: false,
      logo: logoDevFest,
      tagline: "Gamified event experience driven by clean code."
    },
    'farmacia-santrovaso': { 
      accent: '#00A859', 
      isDesignBased: false,
      logo: logoFarmacia,
      tagline: "Trust and clarity through user-centric healthcare design."
    },
    'mosca-mobili': { 
      accent: '#E30613',
      isDesignBased: false, 
      logo: logoMoscaMobili, 
      tagline: "L'artigianato italiano incontra il design digitale su misura."
    },
  };

  const currentBrand = brandConfigs[project.id] || { accent: '#FFFFFF', isDesignBased: false, tagline: "Digital Craftsmanship." };
  const contrastText = project.id === 'sano-siciliano' ? '#FFFFFF' : '#000000';

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#0a0a0a] min-h-screen text-[#e5e5e5] selection:bg-white/20 pb-32"
    >
      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-50">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white/50 hover:text-white transition-all group"
        >
          <ArrowLeftIcon size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Back</span>
        </button>
      </nav>

      {/* --- HERO --- */}
      <header className="relative pt-48 pb-24 px-8 md:px-16 max-w-7xl mx-auto border-b border-white/5 mb-16">
        <div className="grid md:grid-cols-4 gap-12 items-center">
          
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="md:col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12" style={{ backgroundColor: currentBrand.accent }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.5em]" style={{ color: currentBrand.accent }}>
                {project.role}
              </span>
            </div>
            
            <h1 className="text-[10vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter mb-8 uppercase text-white">
              {project.title.split('_')[0]} <br />
              <span className="font-serif italic font-extralight lowercase" style={{ color: currentBrand.accent }}>
                {project.title.split('_')[1] || ''}
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/40 italic max-w-2xl">
              {project.description}
            </p>
          </motion.div>

          {/* Logo Hero */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="md:col-span-1 flex items-center justify-center aspect-square group"
          >
            <img 
              src={currentBrand.logo} 
              alt="Brand Logo" 
              className="w-full h-auto max-h-52 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" 
            />
          </motion.div>
        </div>
      </header>

      <section className="px-8 md:px-16 max-w-7xl mx-auto">
        
        {/* Info Bento Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 bg-white/2 border border-white/10 rounded-[2.5rem] p-10">
            <div className="space-y-2">
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                <CalendarBlankIcon size={14} style={{ color: currentBrand.accent }} /> Timeline
              </p>
              <p className="text-base font-medium">{project.duration}</p>
            </div>
            <div className="space-y-2">
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                <TargetIcon size={14} style={{ color: currentBrand.accent }} /> Platform
              </p>
              <p className="text-base font-medium capitalize">{project.type}</p>
            </div>
            <div className="space-y-2">
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                <PaletteIcon size={14} style={{ color: currentBrand.accent }} /> Toolkit
              </p>
              <p className="text-base font-medium truncate">{project.tech.slice(0, 3).join(', ')}</p>
            </div>
            <div className="space-y-2">
              <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2">
                <TrendUpIcon size={14} style={{ color: currentBrand.accent }} /> Performance
              </p>
              <p className="text-base font-medium" style={{ color: currentBrand.accent }}>{project.performance}</p>
            </div>
        </div>

        {/* --- MAIN SHOWCASE --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-24">
          {currentBrand.isDesignBased ? (
            <>
              <motion.div className="md:col-span-8 rounded-5xl overflow-hidden border border-white/10 bg-white/5 h-150 md:h-200">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </motion.div>
              <div 
                className="md:col-span-4 rounded-5xl p-12 flex flex-col justify-center gap-8 min-h-100 transition-all shadow-2xl"
                style={{ backgroundColor: currentBrand.accent, color: contrastText }}
              >
                <SparkleIcon size={48} weight="fill" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-70">Brand Ethos_</h3>
                <p className="text-3xl font-serif italic leading-tight">{currentBrand.tagline}</p>
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-12 bg-white/3 border border-white/10 rounded-5xl p-16 grid md:grid-cols-3 gap-16 items-start">
                <div className="space-y-4">
                  <FigmaLogoIcon size={40} weight="duotone" style={{ color: currentBrand.accent }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em]" style={{ color: currentBrand.accent }}>Strategy & UI</span>
                  <h2 className="text-5xl font-bold uppercase italic tracking-tighter leading-none text-white">Digital <br /> Core_</h2>
                </div>
                <div className="md:col-span-2 text-white/50 text-xl leading-relaxed font-light border-l border-white/5 pl-12">
                  <QuotesIcon size={24} weight="fill" className="opacity-10 mb-6" />
                  {project.solution}
                </div>
              </div>
              <motion.div className="md:col-span-12 rounded-5xl overflow-hidden border border-white/10 bg-white/5 h-150 shadow-2xl shadow-black/50">
                 <img src={project.image} alt={project.title} className="w-full h-full object-top object-cover" />
              </motion.div>
            </>
          )}
        </div>

        {/* --- GALLERY --- */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-40 space-y-16">
            <div className="flex items-center gap-8">
              <h2 className="text-6xl font-bold tracking-tighter uppercase text-white shrink-0">Visual <br/> Identity_</h2>
              <div className="h-px grow bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 bg-white/2 backdrop-blur-xl rounded-5xl p-16 flex items-center justify-center border border-white/5 aspect-square group overflow-hidden">
                <img 
                  src={currentBrand.logo || project.gallery[0]} 
                  alt="Logo Detail" 
                  className="max-w-full h-auto max-h-48 object-contain group-hover:rotate-6 transition-transform duration-700" 
                />
              </div>
              
              <div className="md:col-span-8 grid grid-cols-2 gap-8">
                {project.gallery.slice(1, 3).map((img, i) => (
                  <div key={i} className="rounded-5xl overflow-hidden border border-white/5 aspect-square bg-white/5">
                    <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Visual Detail" />
                  </div>
                ))}
              </div>

              {project.gallery[5] && (
                <div className="md:col-span-12 rounded-5xl overflow-hidden border border-white/5 h-160 relative group shadow-2xl">
                  <img src={project.gallery[5]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Case Banner" />
                  <div className="absolute bottom-10 left-10">
                    <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em]">Project Archive // {new Date().getFullYear()}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-48 text-center py-32 border-t border-white/5">
        <motion.button 
          whileHover={{ y: -5 }}
          onClick={() => navigate(-1)} 
          className="text-white/20 hover:text-white transition-all text-[10px] font-mono uppercase tracking-[0.8em] flex flex-col items-center gap-8 mx-auto"
        >
          <div className="w-px h-24 bg-linear-to-b from-transparent to-white/20" />
          Back to Selection
        </motion.button>
      </footer>
    </motion.main>
  );
}