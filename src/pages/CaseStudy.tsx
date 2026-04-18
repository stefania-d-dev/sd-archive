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
  ShieldCheckIcon,
  GithubLogoIcon,
  SparkleIcon,
  PaintBrushIcon,
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

// IMPORT LOGHI
import logoSoulfarm from '../assets/Loghi/LogoSoulfarm.webp';
import logoDevFest from '../assets/Loghi/LogoDevFestCT.webp';
import imgNational from '../assets/Loghi/Logo_national.webp';
import imgPortfolio from '../assets/projects/portfolio-meta.webp';
import logoFides from '../assets/Loghi/LogoFides.webp';

// IMPORT VIDEO
import videoDevFest from '../assets/DevFestPassport/Registrazione_Passport_2025-11-11.mp4';

export default function CaseStudy({ project }: { project: Project }) {
  const navigate = useNavigate();

  const brandConfigs: Record<string, {
    accent: string;
    logo: string;
    figmaLink?: string;
    externalLink?: string;
    repo?: string;
    logicLabel?: string;
    logicIntro?: string;
    logicFeatures?: string[];
    technicalQuote?: string;
    workflow?: { title: string; text: string }[];
  }> = {
    'soulfarm': {
      accent: '#A8E6CF',
      logo: logoSoulfarm,
      figmaLink: 'https://www.figma.com/design/Pxbg0hOMQz6U1Hi9nVUyYf/test-frontend?node-id=0-1&t=0TnjKSWS2bEQ03X7-1',
      logicLabel: 'Frontend Architecture',
      logicIntro: "Replica pixel-perfect di un'interfaccia React esistente completata in 7 giorni: componenti atomici, TypeScript strict, zero dipendenze superflue.",
      logicFeatures: ['Atomic Component Design', 'TypeScript Strict Mode', 'Vite HMR Optimization'],
      technicalQuote: "Ogni componente è stato scritto per essere leggibile, tipizzato e scalabile — non solo per funzionare, ma per resistere nel tempo.",
      workflow: [
        { title: "Decomposizione Atomica", text: "Analisi del design Figma e scomposizione in componenti UI riutilizzabili e indipendenti." },
        { title: "TypeScript Integration", text: "Implementazione di interfacce rigorose per ogni prop e stato, azzerando i runtime errors." },
        { title: "Refactoring 2026", text: "Migrazione a React 19 e Tailwind v4 per massimizzare le performance." }
      ]
    },
    'devfest-passport': {
      accent: '#4285F4',
      logo: logoDevFest,
      repo: "https://github.com/stefania-d-dev/devfestlog_passport",
      logicLabel: 'Mobile Architecture',
      logicIntro: "Sviluppo cross-platform focalizzato sulla reattività dei dati e su un'interfaccia utente ad alta densità di asset grafici personalizzati.",
      logicFeatures: ['Real-time Data Sync', 'Pixel-Perfect Scaling', 'Cross-Platform Optimization'],
      technicalQuote: "Ogni linea di codice è stata scritta per massimizzare le performance su iOS e Android.",
      workflow: [
        { title: "Gamification Logic", text: "Progettazione di un sistema di rewarding basato su scansione codici per incentivare l'esplorazione." },
        { title: "Real-time Sync", text: "Integrazione con Firebase per la sincronizzazione istantanea dei progressi utente." },
        { title: "Pixel-Art Scaling", text: "Rendering custom in Flutter per mantenere asset 8-bit nitidi su display ad alta densità." }
      ]
    },
    'national-automotive': {
      accent: '#E30613',
      logo: imgNational,
      externalLink: "https://nationalautomotive.net/",
      logicLabel: 'WP Custom Engineering',
      logicIntro: "Ingegnerizzazione di un tema custom partendo dal codice sorgente, con card animate e micro-interazioni JS vanilla.",
      logicFeatures: ['Vanilla JS Interactions', 'DOM Performance Tuning', 'WP Engine Customization'],
      technicalQuote: "Ogni interazione è scritta a mano: nessun plugin, nessuna scorciatoia — solo codice pulito.",
      workflow: [
        { title: "Information Architecture", text: "Riorganizzazione di dataset complessi in una struttura di navigazione intuitiva." },
        { title: "Motion Engineering", text: "Sviluppo di card interattive e transizioni fluide in JS vanilla." },
        { title: "Performance Tuning", text: "Ottimizzazione aggressiva degli asset visivi e del caricamento condizionale." }
      ]
    },
    'fides-recovery-hub': {
      accent: '#0EA5E9',
      logo: logoFides, 
      externalLink: "https://fides-recovery-hub.vercel.app/",
      repo: "https://github.com/stefania-d-dev/fides-recovery-hub",
      logicLabel: 'Fintech Dashboard Engineering',
      logicIntro: "Sviluppo di una piattaforma MVP per la gestione del credito. La sfida è stata rendere digeribili dataset complessi attraverso una gerarchia visiva rigorosa.",
      logicFeatures: ['Data Visualization', 'WCAG 2.1 Compliance', 'State Management'],
      technicalQuote: "In una dashboard di recupero crediti, ogni pixel deve trasmettere affidabilità. Ho eliminato il superfluo per focalizzare l'operatore.",
      workflow: [
        { title: "Analisi della Gerarchia", text: "Mappatura dei KPI critici (Portfolio, DSO) per ridurre il rumore visivo." },
        { title: "Sviluppo Inclusivo", text: "Implementazione di pattern A11Y avanzati: skip-links e focus-trap nei modal." },
        { title: "Performance Tuning", text: "Build ultra-veloce con Vite, raggiungendo 100/100 in Lighthouse." }
      ]
    },
    'portfolio-2024': {
      accent: '#A78BFA',
      logo: imgPortfolio,
      externalLink: "https://stefania-d-dev.github.io/sd-archive/",
      repo: "https://github.com/stefania-d-dev/sd-archive",
      logicLabel: 'UI Engineering',
      logicIntro: "Portfolio costruito come laboratorio di sperimentazione: Framer Motion, Tailwind e filtraggio via stato React.",
      logicFeatures: ['Framer Motion Orchestration', 'Atomic Design System', 'WCAG 2.1 AA Compliance'],
      technicalQuote: "Non è solo una vetrina — è un manifesto. Ogni scelta tecnica è anche una scelta estetica.",
      workflow: [
        { title: "Concept Creativo", text: "Definizione di un'estetica hi-tech minimalista basata su tipografia bold." },
        { title: "Motion Systems", text: "Sviluppo di un sistema di transizioni orchestrate con Framer Motion." },
        { title: "Performance & SEO", text: "Ottimizzazione dei Core Web Vitals e accessibilità per un'esperienza premium." }
      ]
    },
  };

  const config = brandConfigs[project.id] || { accent: '#3b82f6', logo: '' };

  // Controllo per il bridge creativo (progetti che hanno una vista CreativeLayout)
  const hasCreativeView = [
    'animo-siciliano', 'la-mariagnese', 'arredi-italiani', 
    'sano-siciliano', 'mosca-mobili', 'bonaccorso-brand', 
    'farmacia-santrovaso', 'fides-recovery-hub'
  ].includes(project.id);

  const isMobile = project.type?.toLowerCase().includes('mobile');
  const isWP = project.tech.some(t => t.toLowerCase().includes('wordpress'));
  const isReact = project.tech.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('vite'));
  const isDevFest = project.id === 'devfest-passport';

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

  const logicLabel    = config.logicLabel    ?? (isMobile ? 'Mobile Architecture' : 'Logic Engineering');
  const logicIntro    = config.logicIntro    ?? "Architettura moderna basata su componenti funzionali, con gestione dello stato ottimizzata.";
  const logicFeatures = config.logicFeatures ?? ['Vite HMR Optimization', 'Functional Component Pattern', 'Modular CSS Architecture'];
  const technicalQuote = config.technicalQuote ?? `Ogni linea di codice è stata scritta per massimizzare le performance.`;

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-[#030014] min-h-screen text-white pb-32 overflow-x-hidden selection:bg-blue-500/30"
    >
      {/* 01. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#030014]/80 backdrop-blur-xl border-b border-white/5">
        <button 
          onClick={() => navigate('/')}
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

          <div className="flex items-center gap-2">
            {config.figmaLink && (
              <a href={config.figmaLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors">
                <FigmaLogoIcon size={18} weight="fill" />
              </a>
            )}
            {config.externalLink && (
              <a href={config.externalLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <GlobeIcon size={18} weight="bold" />
              </a>
            )}
            {config.repo && (
              <a href={config.repo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <GithubLogoIcon size={18} weight="fill" />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* 02. HERO (Responsive Layout) */}
      <header className="pt-48 md:pt-64 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 space-y-6">
            <motion.div {...fadeInUp} className="flex flex-wrap items-center gap-4 text-blue-500">
              <TerminalWindowIcon size={20} />
              <span className="font-mono text-[10px] uppercase tracking-[0.5em]">{project.role} // {getPlatformLabel()}</span>
            </motion.div>
            <motion.h1 
              {...fadeInUp} 
              className="text-5xl md:text-9xl font-bold tracking-tighter uppercase italic leading-[0.8]"
            >
              {project.title.replace(/_/g, ' ')}<span style={{ color: config.accent }}>.</span>
            </motion.h1>
          </div>

          <motion.div {...fadeInUp} className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            <div className="relative p-8 rounded-full border border-white/5 bg-white/2 backdrop-blur-3xl">
              <img src={config.logo} alt="Client" className="w-32 h-32 md:w-48 md:h-48 object-contain grayscale hover:grayscale-0 transition-all duration-700 relative z-10" />
              <div className="absolute inset-0 blur-3xl opacity-20 -z-10" style={{ backgroundColor: config.accent }} />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 md:mt-32 p-1 border border-white/10 rounded-2xl bg-white/5 shadow-2xl">
          {[
            { label: 'Platform', val: isMobile ? 'Flutter / Dart' : isWP ? 'WP Custom' : 'React / Vite', icon: isMobile ? <DeviceMobileIcon /> : <StackIcon /> },
            { label: 'Performance', val: project.performance, icon: <CpuIcon /> },
            { label: 'Timeline', val: project.duration, icon: <BrowsersIcon /> },
            { label: 'Status', val: project.status || 'Deployed', icon: <CubeIcon className={project.status === 'In Progress' ? 'animate-[spin_4s_linear_infinite]' : ''} /> }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-[#030014] flex flex-col gap-3">
              <div className="text-blue-500 flex items-center gap-2">
                {item.icon}
                <span className="text-[9px] font-mono uppercase opacity-50">{item.label}</span>
              </div>
              <p className="text-sm md:text-lg font-bold uppercase tracking-tight">{item.val}</p>
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
                <h2 className="text-2xl font-bold uppercase tracking-tighter">{logicLabel}</h2>
              </div>
              <p className="text-white/50 leading-relaxed font-light text-lg italic text-balance">{logicIntro}</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {logicFeatures.map((feat) => (
                <div key={feat} className="flex items-center gap-4 p-4 border border-white/5 rounded-xl bg-white/2 hover:bg-white/5 transition-all group">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-white/70">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-square">
            <img src={project.image} alt="Technical Preview" className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-all duration-1000" />
            <div className="absolute inset-0 bg-linear-to-t from-[#030014] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 text-blue-500 mb-4">
                <SparkleIcon size={24} />
                <span className="font-mono text-[10px] uppercase tracking-widest">System_Analysis</span>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Technical Implementation</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- NUOVA SEZIONE: BRIDGE TO CREATIVE VIEW --- */}
      {hasCreativeView && (
        <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-5xl bg-amber-500/5 border border-amber-500/20 p-8 md:p-16 text-center md:text-left"
          >
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-500/10 blur-[100px]" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-xl">
                <div className="flex items-center justify-center md:justify-start gap-3 text-amber-500 mb-6">
                  <PaintBrushIcon size={24} weight="duotone" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Visual_Identity_System</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-6 text-white">
                  L'estetica incontra <br/> <span className="text-amber-500">la strategia visiva.</span>
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Scopri la direzione creativa, la gestione del brand e l'approccio boutique che definisce l'interfaccia di questo progetto.
                </p>
              </div>

              <button 
                onClick={() => navigate(`/project/${project.id}`)}
                className="group flex flex-col items-center gap-4 bg-amber-500 text-black px-10 py-10 rounded-full hover:bg-white transition-all duration-500 hover:scale-105"
              >
                <PaintBrushIcon size={32} weight="bold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Open_Creative_View</span>
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* 04. CHALLENGE & SOLUTION */}
      <section className="py-32 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-24">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4 text-red-500/50 uppercase font-mono text-[10px] tracking-[0.4em]">
              <CodeIcon size={20} />
              <span>Critical_Obstacle</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold italic tracking-tighter leading-tight text-white/90">
              &quot;{project.challenge}&quot;
            </h3>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <div className="flex items-center gap-4 text-green-500/50 uppercase font-mono text-[10px] tracking-[0.4em]">
              <FileCodeIcon size={20} />
              <span>Engineering_Solution</span>
            </div>
            <p className="text-xl text-white/40 leading-relaxed font-light border-l-2 border-green-500/20 pl-8 italic">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 05. WORKFLOW */}
      {config.workflow && (
        <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-4 text-blue-500 mb-2">
              <StackIcon size={32} weight="thin" />
              <h2 className="text-2xl font-bold uppercase tracking-tighter italic text-white">Development_Workflow</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {config.workflow.map((step, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="relative p-8 rounded-3xl bg-white/2 border border-white/5">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-[#030014] border border-white/10 flex items-center justify-center font-mono text-xs text-blue-500">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold mb-4 uppercase tracking-tight text-white/90">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed italic">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 06. GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-white/5">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {isDevFest && (
              <motion.div {...fadeInUp} className="relative break-inside-avoid rounded-2xl overflow-hidden border border-blue-500/30">
                <video src={videoDevFest} autoPlay loop muted playsInline className="w-full h-auto block" />
              </motion.div>
            )}
            {project.gallery.map((img, idx) => (
              <motion.div key={idx} {...fadeInUp} className="relative group break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img src={img} alt={`Gallery detail ${idx + 1}`} className="w-full h-auto block object-contain" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* 07. DEEP DIVE & PRIVACY */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-white/2 border border-white/5">
              <TerminalWindowIcon size={40} className="text-blue-500 mb-6" />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Logic_Context</h4>
              <p className="text-white/40 text-sm leading-relaxed italic">{project.fullDescription}</p>
            </div>

            <div className="md:col-span-2 rounded-[2.5rem] bg-linear-to-br from-blue-500/10 to-transparent border border-blue-500/20 p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-white/90 italic tracking-tighter leading-tight">
                  {technicalQuote}
                </p>
              </div>

              {/* PRIVACY PROTOCOL */}
              <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <ShieldCheckIcon size={20} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Privacy_Protocol</span>
                </div>
                <p className="text-[10px] font-mono leading-relaxed text-blue-400/60 uppercase tracking-wider">
                  {project.agency ? (
                    `Project Protocol: Sviluppo tecnico eseguito in collaborazione con ${project.agency}. La proprietà intellettuale del codice sorgente appartiene ai rispettivi detentori.`
                  ) : project.id === 'soulfarm' ? (
                    `Technical Assessment: Replica pixel-perfect a scopo di valutazione tecnica. Tutti i marchi appartengono ai rispettivi aventi diritto.`
                  ) : (
                    `Technical Showcase: Progetto sviluppato come dimostrazione di competenze tecniche avanzate. Non rappresenta un prodotto commerciale.`
                  )}
                </p>
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