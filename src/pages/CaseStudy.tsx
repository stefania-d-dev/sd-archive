'use client';

import { motion } from 'framer-motion';
import { Project } from '../lib/projects';
import { 
  ArrowLeftIcon, 
  CodeIcon, 
  CpuIcon, 
  TerminalWindowIcon,
  FileCodeIcon,
  FigmaLogoIcon,
  StackIcon,
  TreeStructureIcon,
  BrowsersIcon,
  CubeIcon,
  GlobeIcon,
  DeviceMobileIcon,
  ImagesIcon,
  ShieldCheckIcon
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

// IMPORT LOGHI
import logoSoulfarm from '../assets/Loghi/LogoSoulfarm.webp';
import logoDevFest from '../assets/Loghi/LogoDevFestCT.webp';
import imgNational from '../assets/Loghi/Logo_national.webp'; 

//IMPORT VIDEO
import videoDevFest from '../assets/DevFestPassport/Registrazione_Passport_2025-11-11.mp4';

export default function CaseStudy({ project }: { project: Project }) {
  const navigate = useNavigate();

  const brandConfigs: Record<string, { accent: string; logo: string; figmaLink?: string; externalLink?: string; repo?: string }> = {
    'soulfarm': { 
      accent: '#A8E6CF', 
      logo: logoSoulfarm, 
      figmaLink: 'https://www.figma.com/design/Pxbg0hOMQz6U1Hi9nVUyYf/test-frontend?node-id=0-1&t=0TnjKSWS2bEQ03X7-1' 
    },
    'devfest-passport': { 
      accent: '#4285F4', 
      logo: logoDevFest, 
      repo: "https://github.com/Darkmindy/devfestlog_passport"
    },
    'national-automotive': {
      accent: '#E30613', 
      logo: imgNational, 
      externalLink: "https://nationalautomotive.net/",
    },
  };

  const config = brandConfigs[project.id] || { accent: '#3b82f6', logo: '' };

  const isMobile = project.type?.toLowerCase().includes('mobile');
  const isWP = project.tech.some(t => t.toLowerCase().includes('wordpress'));
  const isReact = project.tech.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('vite'));

  const getPlatformLabel = () => {
    if (isMobile) return 'Mobile_Application';
    if (isWP) return 'WP_Custom_Architecture';
    if (isReact) return 'React_Vite_App';
    return 'Custom_Software';
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#030014] min-h-screen text-white pb-32 overflow-x-hidden selection:bg-blue-500/30"
    >
      {/* 01. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#030014]/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-all"
        >
          <ArrowLeftIcon size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" />
          <span>Exit_Process</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2 text-white/40 italic">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] font-mono">
                {t}
              </span>
            ))}
          </div>
          
          {(config.figmaLink || config.externalLink || config.repo) && (
            <a 
              href={config.figmaLink || config.externalLink || config.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              {config.figmaLink ? <FigmaLogoIcon size={18} weight="fill" /> : <GlobeIcon size={18} weight="bold" />}
            </a>
          )}
        </div>
      </nav>

      {/* 02. HERO */}
      <header className="pt-48 md:pt-64 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 space-y-6">
            <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-4 text-blue-500">
              <TerminalWindowIcon size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">{project.role} // {getPlatformLabel()}</span>
              {project.agency && (
                <span className="px-3 py-1 border border-blue-500/20 rounded-full text-[8px] tracking-[0.2em] bg-blue-500/5 text-blue-400 uppercase">
                  Collab: {project.agency}
                </span>
              )}
            </motion.div>
            <motion.h1 
              {...fadeInUp} 
              className="text-6xl md:text-9xl font-bold tracking-tighter uppercase italic leading-[0.8]"
            >
              {project.title.replace(/_/g, ' ')}<span style={{ color: config.accent }}>.</span>
            </motion.h1>
          </div>

          <motion.div {...fadeInUp} className="lg:col-span-4 flex justify-end">
            <div className="relative p-8 rounded-full border border-white/5 bg-white/2 backdrop-blur-3xl">
              <img src={config.logo} alt="Client" className="w-32 h-32 md:w-48 md:h-48 object-contain grayscale hover:grayscale-0 transition-all duration-700 relative z-10" />
              <div className="absolute inset-0 blur-3xl opacity-20 -z-10" style={{ backgroundColor: config.accent }} />
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32 p-1 border border-white/10 rounded-2xl bg-white/5 shadow-2xl">
          {[
            { label: 'Platform', val: isMobile ? 'Flutter / Dart' : isWP ? 'WP Custom' : 'React / Vite', icon: isMobile ? <DeviceMobileIcon /> : <StackIcon /> },
            { label: 'Performance', val: project.performance, icon: <CpuIcon /> },
            { label: 'Timeline', val: project.duration, icon: <BrowsersIcon /> },
            { 
              label: 'Status', 
              val: project.status || 'Deployed', 
              icon: <CubeIcon className={project.status === 'In Progress' ? 'animate-[spin_4s_linear_infinite]' : ''} /> 
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#030014] flex flex-col gap-3">
              <div className="text-blue-500 flex items-center gap-2">
                {item.icon}
                <span className="text-[9px] font-mono uppercase opacity-50">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.label === 'Status' && (
                   <div className={`w-1.5 h-1.5 rounded-full ${item.val === 'In Progress' ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
                )}
                <p className="text-lg font-bold uppercase tracking-tight">{item.val}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </header>

      {/* 03. ENGINEERING LOGIC */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div {...fadeInUp} className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-blue-500">
                <TreeStructureIcon size={32} weight="thin" />
                <h2 className="text-2xl font-bold uppercase tracking-tighter">
                  {isMobile ? 'Mobile Architecture' : 'Logic Engineering'}
                </h2>
              </div>
              <p className="text-white/50 leading-relaxed font-light text-lg italic">
                {isMobile 
                  ? "Sviluppo cross-platform focalizzato sulla reattività dei dati e su un'interfaccia utente ad alta densità di asset grafici personalizzati."
                  : isWP 
                  ? "Ingegnerizzazione di un tema custom partendo dal codice sorgente, eliminando il peso superfluo dei plugin per favorire script Vanilla JS performanti."
                  : "Architettura moderna basata su componenti funzionali, con gestione dello stato ottimizzata per flussi dati complessi."
                }
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {(isMobile ? ['Real-time Data Sync', 'Pixel-Perfect Scaling', 'Cross-Platform Optimization'] : 
                isWP ? ['Vanilla JS Logic', 'DOM Performance', 'WP Engine Customization'] : 
                ['Vite HMR Optimization', 'Functional Component Pattern', 'Modular CSS Architecture']
              ).map((feat) => (
                <div key={feat} className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/2 hover:bg-white/5 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] group-hover:scale-125 transition-transform" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-square shadow-2xl">
            <img src={project.image} alt="Technical Preview" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-pink-500">
                <CodeIcon size={24} />
                <span className="font-mono text-[10px] uppercase tracking-widest">System_Analysis</span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Technical Implementation</h3>
              <p className="text-white/40 text-sm italic font-light text-balance">
                Integrazione di logiche avanzate per garantire un'esperienza utente fluida e coerente con l'identità del brand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. CHALLENGE & SOLUTION */}
      <section className="py-32 bg-white/2 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-24">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4 text-red-500/50 uppercase font-mono text-[10px] tracking-[0.4em]">
              <CodeIcon size={20} />
              <span>Critical_Obstacle</span>
            </div>
            <h3 className="text-4xl font-bold italic tracking-tighter leading-tight text-white/90 text-balance">
              &quot;{project.challenge}&quot;
            </h3>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4 text-green-500/50 uppercase font-mono text-[10px] tracking-[0.4em]">
              <FileCodeIcon size={20} />
              <span>{isMobile ? 'Mobile_Solution' : 'Engineering_Solution'}</span>
            </div>
            <p className="text-xl text-white/40 leading-relaxed font-light border-l-2 border-green-500/20 pl-8 italic text-balance">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

    {/* SECTION GALLERY CON VIDEO INTEGRALE */}
{project.gallery && project.gallery.length > 0 && (
  <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
    <motion.div {...fadeInUp} className="flex flex-col gap-2 mb-16">
      <div className="flex items-center gap-4 text-blue-500">
        <ImagesIcon size={32} weight="thin" />
        <h2 className="text-2xl font-bold uppercase tracking-tighter italic text-white">Experience_Documentation</h2>
      </div>
      <p className="font-mono text-[9px] text-white/30 uppercase tracking-[0.4em] ml-12">UI interactions & Static Previews</p>
    </motion.div>

    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {/* VIDEO PREVIEW - Se presente, lo mettiamo come primo elemento per massimo impatto */}
      <motion.div 
        {...fadeInUp}
        className="relative break-inside-avoid rounded-2xl overflow-hidden border border-blue-500/30 bg-blue-500/5 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
      >
        <video 
          src= {videoDevFest}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto block"
        />
        <div className="absolute bottom-4 left-4 px-2 py-1 bg-blue-600 rounded font-mono text-[7px] text-white uppercase tracking-widest">
          Live_Session_REC
        </div>
      </motion.div>

      {/* SCREENSHOTS */}
      {project.gallery.map((img, idx) => (
        <motion.div 
          key={idx} 
          {...fadeInUp}
          className="relative group break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
        >
          <img 
            src={img} 
            alt={`Passport Detail ${idx}`} 
            className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded font-mono text-[7px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
            Ref_IMG_{idx + 1}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)}

      {/* 05. DEEP DIVE & DISCLAIMER */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
         <motion.div {...fadeInUp} className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic">Dev_Deep_Dive</h2>
            <p className="text-white/20 font-mono text-xs uppercase tracking-[0.5em]">Granular project analysis</p>
         </motion.div>

         <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white/2 border border-white/5 hover:border-blue-500/50 transition-colors group">
              <TerminalWindowIcon size={40} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Logic_Context</h4>
              <p className="text-white/40 text-sm leading-relaxed italic">{project.fullDescription}</p>
            </div>

            <div className="md:col-span-2 rounded-[2.5rem] bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] py-1 px-3 border border-blue-500/30 rounded-full text-blue-400">
                  Environment: {getPlatformLabel()}
                </span>
                <p className="text-2xl md:text-4xl font-bold text-white/90 italic tracking-tighter">
                  Ogni linea di codice è stata scritta per massimizzare le performance su {isMobile ? 'iOS e Android' : 'browser moderni'}.
                </p>
              </div>

              {/* SAFE DISCLAIMER: Appare solo se c'è un'agenzia */}
              {project.agency && (
                <div className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
                  <ShieldCheckIcon size={24} className="text-blue-400 shrink-0" />
                  <p className="text-[10px] font-mono leading-relaxed text-blue-400/60 uppercase tracking-wider">
                    Privacy_Protocol: Project developed in collaboration with {project.agency}. 
                    All source code and sensitive data are protected by confidentiality. 
                    Visuals shown are for demonstration purposes only.
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-8 relative z-10">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono p-2 bg-[#030014] border border-white/5 text-white/40 uppercase">#{t}</span>
                ))}
              </div>
            </div>
         </div>
      </section>

      <footer className="mt-20 py-20 text-center border-t border-white/5">
        <div className="inline-flex items-center gap-6 px-8 py-3 bg-white/5 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-[0.6em] text-white/40">EOF // Process_Terminated</span>
        </div>
      </footer>
    </motion.main>
  );
}