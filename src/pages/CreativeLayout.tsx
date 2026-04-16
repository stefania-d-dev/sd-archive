'use client';

import { motion, Variants } from 'framer-motion';
import { Project } from '../lib/projects'; 
import { 
  ArrowLeftIcon, 
  QuotesIcon, 
  TrendUpIcon, 
  FigmaLogoIcon, 
  InstagramLogoIcon,
  ArrowUpRightIcon,
  CodeIcon,
  GlobeIcon,
  SparkleIcon,
  ShieldCheckIcon,
  HandPointingIcon,
  LayoutIcon,
  PlayIcon
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface BrandConfig {
  accent: string;
  tagline: string;
  agencyName?: string;
  courtesyOf?: string;
  designPhilosophy: string;
  aiInsight: string;     
  externalLink?: string;
}

export default function CreativeLayout({ project }: { project: Project }) {
  const navigate = useNavigate();

  const brandConfigs: Record<string, BrandConfig> = {
    'animo-siciliano': { 
      accent: '#D4AF37', 
      tagline: "Tradition for the digital native.",
      agencyName: "Emmè Web Agency",
      courtesyOf: "Animo Siciliano Social Archive",
      designPhilosophy: "Ho trasformato la tradizione in un'estetica da boutique digitale. L'uso della tipografia Bold ma ordinata e una gestione maniacale dello spazio bianco elevano il prodotto da semplice 'food' a icona editoriale.",
      aiInsight: "L'AI avrebbe saturato i contrasti; io ho scelto di far respirare i contenuti, creando una coerenza visiva che definisce il posizionamento Premium del brand.",
      externalLink: "https://www.instagram.com/animosiciliano/"
    },
    'la-mariagnese': {
      accent: '#D32F2F', 
      tagline: "Sicilian legacy, contemporary aesthetics.",
      agencyName: "Emmè Web Agency",
      courtesyOf: "La Mariagnese Heritage Collection",
      designPhilosophy: "Pulizia visiva e gerarchie chiare. Come nelle promozioni stagionali per GUESS, qui il prodotto respira in composizioni che rifiutano il caos a favore di un lusso moderno e ordinato.",
      aiInsight: "L'occhio umano percepisce la tensione tra i bianchi; l'AI avrebbe solo riempito i vuoti, distruggendo l'aria Premium della composizione.",
      externalLink: "https://www.instagram.com/lamariagnese/"
    },
    'arredi-italiani': {
      accent: '#94A3B8',
      tagline: "Luxury Furniture Web Experience.",
      agencyName: "Emmè Web Agency + SWI Agency",
      courtesyOf: "Arredi Italiani S.r.l.",
      designPhilosophy: "Traduzione millimetrica da Figma a WordPress. La sfida è stata mantenere l'eleganza degli spazi bianchi e dei font sottili tipici del design d'arredo di lusso.",
      aiInsight: "Un builder automatico avrebbe sporcato il codice; il mio sviluppo custom preserva la profondità del design originale.",
    },
    'sano-siciliano': {
      accent: '#FFD700',
      tagline: "Healthy Living, Digital Craftsmanship.",
      agencyName: "Emmè Web Agency",
      courtesyOf: "Sano Siciliano",
      designPhilosophy: "Un design che respira, con ampi spazi bianchi e una tipografia leggera che riflette la freschezza e la naturalità del brand.",
      aiInsight: "L'AI avrebbe riempito ogni spazio; io ho scelto di valorizzare il vuoto, creando un'estetica che comunica salute e benessere.",
      externalLink: "https://www.instagram.com/sanosiciliano/"
    },
    'mosca-mobili': {
      accent: '#FFD700',
      tagline: "Healthy Living, Digital Craftsmanship.",
      agencyName: "Emmè Web Agency + SWI Agency",
      courtesyOf: "Mosca Mobili",
      designPhilosophy: "Un design che respira, con ampi spazi bianchi e una tipografia leggera che riflette la freschezza e la naturalità del brand.",
      aiInsight: "L'AI avrebbe riempito ogni spazio; io ho scelto di valorizzare il vuoto, creando un'estetica che comunica salute e benessere.",
      externalLink: "https://www.instagram.com/moscamobili/"
    }
  };

  const currentBrand = brandConfigs[project.id] || { 
    accent: '#FFFFFF', 
    tagline: "Digital Craftsmanship.", 
    designPhilosophy: "Gestione degli spazi e tipografia come firma distintiva.",
    aiInsight: "L'AI ottimizza, il designer compone.",
  };

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } 
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="bg-[#050505] min-h-screen text-white/90 selection:bg-white selection:text-black overflow-x-hidden"
    >
      {/* HUD Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <button 
          onClick={() => navigate(-1)}
          className="pointer-events-auto group flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full hover:bg-white hover:text-black transition-all duration-500"
        >
          <div className="bg-white/10 group-hover:bg-black/10 p-2 rounded-full">
            <ArrowLeftIcon size={18} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">SD_Studio</span>
        </button>

        <div className="pointer-events-auto flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="bg-white/5 p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-colors">
              <GlobeIcon size={18} />
            </a>
          )}
          {currentBrand.externalLink && (
            <a href={currentBrand.externalLink} target="_blank" rel="noreferrer" className="bg-white/5 p-2.5 rounded-full border border-white/10 hover:bg-[#E1306C] transition-colors">
              <InstagramLogoIcon size={18} />
            </a>
          )}
          {currentBrand.agencyName && (
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <ShieldCheckIcon size={14} className="text-white/40" />
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-60">Agency_Collab</span>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="inline-block px-4 py-1.5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-white/40 mb-4">
              {project.role} // Creative Direction
            </span>
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-bold tracking-[-0.04em] leading-[0.8] uppercase">
              {project.title.replace('_', ' ')}
            </h1>
          </motion.div>
          <div className="hidden lg:block pb-4 text-right">
             <FigmaLogoIcon size={32} weight="thin" className="opacity-20 mb-2 ml-auto" />
             <div className="text-[8px] font-mono uppercase tracking-[0.5em] text-white/20">System_Design</div>
          </div>
        </div>

        <motion.div 
          initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="relative h-[65vh] w-full rounded-[3.5rem] overflow-hidden border border-white/10"
        >
          <img src={project.image} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end">
            <p className="text-xl md:text-4xl font-light max-w-2xl leading-[1.1] italic">
              {project.description}
            </p>
            <div className="bg-white/5 backdrop-blur-2xl px-8 py-5 rounded-3xl border border-white/10 flex items-center gap-4 mt-6 md:mt-0">
              <TrendUpIcon size={24} className="text-amber-500" />
              <div>
                <p className="text-[9px] font-mono uppercase opacity-40 tracking-widest">Growth_Impact</p>
                <p className="text-lg font-bold font-mono uppercase tracking-tighter" style={{ color: currentBrand.accent }}>{project.performance}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Philosophy & AI Comparison */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-40">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="bg-white/2 border border-white/5 rounded-5xl p-12 relative overflow-hidden">
            <LayoutIcon size={120} weight="thin" className="absolute -top-10 -right-10 text-white/3" />
            <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/40 mb-8 flex items-center gap-2">
              <QuotesIcon size={14} weight="fill" style={{ color: currentBrand.accent }} /> Signature_Boutique
            </h3>
            <p className="text-2xl font-light leading-relaxed italic">
              {currentBrand.designPhilosophy}
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="bg-white/1 border border-white/5 rounded-5xl p-12 relative overflow-hidden">
            <SparkleIcon size={120} weight="thin" className="absolute -top-10 -right-10 text-amber-500/5" />
            <h3 className="text-[10px] font-mono uppercase tracking-[0.5em] text-amber-500/60 mb-8 flex items-center gap-2">
              <SparkleIcon size={14} weight="fill" /> Human_Sensitivity
            </h3>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              "{currentBrand.aiInsight}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - IMAGES & VIDEOS */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto mt-40">
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {project.gallery.map((item, index) => {
              const isVideo = item.toLowerCase().endsWith('.mp4');
              return (
                <motion.div 
                  key={index}
                  variants={fadeInUp} initial="initial" whileInView="whileInView"
                  className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 relative group"
                >
                  {isVideo ? (
                    <div className="relative">
                      <video 
                        src={item} 
                        autoPlay loop muted playsInline 
                        className="w-full h-auto block"
                      />
                      <div className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-md rounded-full">
                        <PlayIcon size={16} weight="fill" className="text-white/60" />
                      </div>
                    </div>
                  ) : (
                    <img src={item} alt={`Gallery ${index}`} className="w-full h-auto block" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Marchio Stefania_D (Sintesi) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-40">
        <div className="border-y border-white/5 py-32 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 mb-6 flex items-center gap-2">
               <CodeIcon size={14} /> Pattern_Analysis
            </h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9]">
              Il brand acquisisce un'identità <br />
              <span style={{ color: currentBrand.accent }}>Premium, Editoriale, Coerente.</span>
            </p>
          </div>
          <div className="text-8xl font-serif italic opacity-10 select-none">SD</div>
        </div>
      </section>

      {/* Agency & Courtesy */}
      {(currentBrand.agencyName || currentBrand.courtesyOf) && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto mt-40 opacity-40">
          <div className="grid md:grid-cols-2 gap-12 text-[9px] font-mono uppercase tracking-widest leading-loose">
            {currentBrand.agencyName && (
              <div>
                <p className="text-white/20 mb-2">// Disclaimer_Legale</p>
                <p>
                  Direzione creativa di {currentBrand.agencyName}. Design originale SD. 
                  Ogni modifica successiva non rispecchia necessariamente lo standard estetico qui presentato.
                </p>
              </div>
            )}
            {currentBrand.courtesyOf && (
              <div className="flex flex-col justify-end">
                <p className="flex items-center gap-2">
                  <HandPointingIcon size={12} /> Courtesy of {currentBrand.courtesyOf}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer Exit */}
      <footer className="mt-40 pb-20 text-center pt-40 border-t border-white/5">
        <button onClick={() => navigate(-1)} className="group flex flex-col items-center gap-6 mx-auto">
          <div className="w-px h-24 bg-white/10 relative overflow-hidden">
            <motion.div animate={{ y: [0, 96] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-full h-1/2 bg-white/40" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[1em] text-white/20 group-hover:text-white transition-colors">Exit_Archive</span>
            <ArrowUpRightIcon size={16} className="text-white/20 group-hover:text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </button>
      </footer>
    </motion.main>
  );
}