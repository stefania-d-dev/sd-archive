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
  HandPointingIcon,
  LayoutIcon,
  PlayIcon,
  CpuIcon
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

interface BrandConfig {
  accent: string;
  tagline: string;
  agencyName?: string;
  courtesyOf?: string;
  designPhilosophy: string;
  aiInsight: string;
  signatureNote?: string;
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
      signatureNote: "Font puliti, gerarchie chiare, prodotti inseriti in composizioni che respirano: questa è la firma che riconosci su ogni progetto.",
      externalLink: "https://www.instagram.com/animosiciliano/"
    },
    'la-mariagnese': {
      accent: '#D32F2F', 
      tagline: "Sicilian legacy, contemporary aesthetics.",
      agencyName: "Emmè Web Agency",
      courtesyOf: "La Mariagnese Heritage Collection",
      designPhilosophy: "Pulizia visiva e gerarchie chiare. Il prodotto respira in composizioni che rifiutano il caos a favore di un lusso moderno e ordinato. La tipografia bold è controllata, mai aggressiva — è una scelta di autorità, non di volume.",
      aiInsight: "L'occhio umano percepisce la tensione tra i bianchi; l'AI avrebbe solo riempito i vuoti, distruggendo l'aria Premium della composizione.",
      signatureNote: "La coerenza visiva non è uniformità, è la somma di decisioni precise: margini, pesi tipografici, spazi. Ogni pixel bianco è una scelta consapevole.",
      externalLink: "https://www.instagram.com/lamariagnese/"
    },
    'arredi-italiani': {
      accent: '#94A3B8',
      tagline: "Luxury Furniture Web Experience.",
      agencyName: "Emmè Web Agency + SWI Agency",
      courtesyOf: "Arredi Italiani S.r.l.",
      designPhilosophy: "Traduzione millimetrica da Figma a WordPress. La sfida è stata mantenere l'eleganza degli spazi bianchi e dei font sottili tipici del design d'arredo di lusso.",
      aiInsight: "Un template avrebbe standardizzato l'eleganza fino a renderla anonima. Ogni margine, ogni peso tipografico è stato calibrato a mano perché il lusso non tollera l'approssimazione.",
      signatureNote: "Nel design di lusso il bianco non è assenza di contenuto, ma spazio. La gestione dello spazio è il prodotto.",
    },
    'sano-siciliano': {
      accent: '#FFD700',
      tagline: "Eccellenza siciliana, estetica contemporanea.",
      agencyName: "Emmè Web Agency",
      courtesyOf: "Sano Siciliano",
      designPhilosophy: "Un design che respira, con ampi spazi bianchi e una tipografia leggera che riflette la freschezza e la naturalità del brand.",
      aiInsight: "L'AI avrebbe riempito ogni spazio; io ho scelto di valorizzare il vuoto, creando un'estetica che comunica salute e benessere.",
      signatureNote: "La semplicità visiva è il risultato più difficile da ottenere, richiede più disciplina del massimalismo.",
      externalLink: "https://www.instagram.com/sanosiciliano/"
    },
    'mosca-mobili': {
      accent: '#C9A96E',
      tagline: "Artigianato italiano, esperienza digitale.",
      agencyName: "Emmè Web Agency + SWI Agency",
      courtesyOf: "Mosca Mobili",
      designPhilosophy: "Il legno ha una grammatica visiva propria: peso, calore, silenzio. Ho costruito il tema intorno a questi valori — tipografia serif sottile, spazi ariosi, animazioni che non disturbano ma accompagnano.",
      aiInsight: "Un generatore automatico avrebbe scelto il beige sicuro. Io ho scelto le sovrapposizioni e la tensione tra i pieni e i vuoti — perché l'artigianato non si comunica con l'ovvio.",
      signatureNote: "Il ritmo visivo di una pagina si costruisce come una composizione musicale: pause, respiri, accenti.",
      externalLink: "https://www.instagram.com/moscamobili/"
    },
    'bonaccorso-brand': {
      accent: '#C8A96E',
      tagline: "Fashion advertising, editorial precision.",
      agencyName: "Emmè Web Agency",
      courtesyOf: "Bonaccorso Brand",
      designPhilosophy: "Le grafiche per GUESS comunicavano un'aspirazione. Font puliti, gerarchie tipografiche chiare, composizioni in cui il prodotto respira. Un look editoriale da boutique digitale.",
      aiInsight: "In fashion advertising lo spazio bianco non è vuoto, è lusso. Ho gestito ogni margine con la stessa cura con cui un brand premium gestisce i materiali.",
      signatureNote: "Tipografia controllata, spazi che respirano, prodotti che acquisiscono un'aria Premium. Questa è la mia firma.",
    },
    'farmacia-santrovaso': {
      accent: '#008080',
      tagline: "Health, trust, and digital clarity.",
      agencyName: "Emmè Web Agency + SWI Agency",
      courtesyOf: "Farmacia Santrovaso",
      designPhilosophy: "In ambito Pharma, la chiarezza è un obbligo morale. Ho tradotto il progetto da Figma a WordPress mantenendo un'interfaccia clinica, ordinata e priva di rumore.",
      aiInsight: "L'AI tende a sovraccaricare le interfacce mediche. Io ho puntato sulla sottrazione: solo gli elementi essenziali per guidare l'utente senza distrazioni.",
      signatureNote: "L'ordine visivo comunica competenza. Gestione impeccabile delle griglie e leggibilità assoluta.",
      externalLink: "https://www.farmaciasantrovaso.it/"
    },
    'fides-recovery-hub': {
      accent: '#0EA5E9',
      tagline: "Precision, transparency, and data control.",
      agencyName: "Internal Lab (Stefania D.)",
      courtesyOf: "Project Proposal",
      designPhilosophy: "Il design di una dashboard finanziaria deve trasmettere sicurezza. Palette 'Deep Blue' istituzionale ed eliminazione di ogni frizione cognitiva.",
      aiInsight: "Ho analizzato i flussi di frizione tipici degli operatori finanziari per creare un'interfaccia densa di informazioni ma mai caotica.",
      signatureNote: "Nato come sfida tecnica proattiva per dimostrare che lo sviluppo non è solo esecuzione, ma comprensione del business.",
      externalLink: "https://fides-recovery-hub.vercel.app/"
    },
    'soulfarm': {
      accent: '#A8E6CF', 
      tagline: "Cultivating the future of agrotech.",
      designPhilosophy: "Un'estetica organica che fonde la tecnologia con la terra. Ho scelto verdi desaturati e un layout che richiama la crescita modulare.",
      aiInsight: "Mentre l'AI ottimizza i raccolti, il design deve rendere quei dati 'umani' e comprensibili.",
      signatureNote: "Sistemi complessi spiegati attraverso un design elementare e rassicurante.",
    },
    'portfolio-2024': {
      accent: '#A78BFA',
      tagline: "Personal branding as a digital signature.",
      designPhilosophy: "Minimalismo brutale mescolato con micro-interazioni fluide. Il portfolio è esso stesso il primo progetto di design.",
      aiInsight: "In un mondo di template pronti, l'autenticità visiva è l'unica metrica che conta.",
      signatureNote: "Il design è il messaggio, lo sviluppo è il mezzo.",
    },
    'national-automotive': {
      accent: '#E30613',
      tagline: "Power, speed, and institutional trust.",
      designPhilosophy: "Rosso corsa su sfondi scuri per evocare potenza e affidabilità. Layout strutturato per gestire cataloghi complessi con eleganza.",
      aiInsight: "Ho bilanciato l'aggressività del brand con una user experience pulita e orientata alla conversione.",
      signatureNote: "L'automotive richiede impatto immediato e precisione tecnica.",
    },
    'devfest-passport': {
      accent: '#4285F4',
      tagline: "Gamifying the developer experience.",
      designPhilosophy: "Colori primari Google-style reinterpretati in chiave dark mode. Iconografia giocosa ma gerarchia tecnica rigorosa.",
      aiInsight: "Ho progettato l'interfaccia per stimolare il collezionismo digitale attraverso feedback visivi immediati.",
      signatureNote: "Il design per sviluppatori deve essere tanto funzionale quanto gratificante.",
    }
  };

  const currentBrand = brandConfigs[project.id] || { 
    accent: '#FFFFFF', 
    tagline: "Digital Craftsmanship.", 
    designPhilosophy: "Gestione degli spazi e tipografia come firma distintiva.",
    aiInsight: "L'AI ottimizza, il designer compone.",
  };

  const hasTechnicalView = ['fides-recovery-hub', 'soulfarm', 'portfolio-2024', 'devfest-passport', 'national-automotive'].includes(project.id);

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
      className="bg-[#050505] min-h-screen text-white/90 selection:bg-white selection:text-black overflow-x-hidden pb-20"
    >
      {/* HUD Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
        <button 
          onClick={() => navigate('/')}
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
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="inline-block px-4 py-1.5 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-widest text-white/40 mb-4">
              {project.role} // Creative Direction
            </span>
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-bold tracking-[-0.04em] leading-[0.8] uppercase text-white">
              {project.title.replace(/_/g, ' ')}
            </h1>
          </motion.div>
          <div className="hidden lg:block pb-4 text-right">
             <FigmaLogoIcon size={32} weight="thin" className="opacity-20 mb-2 ml-auto text-white" />
             <div className="text-[8px] font-mono uppercase tracking-[0.5em] text-white/20">System_Design</div>
          </div>
        </div>

        <div className="flex flex-col md:block relative group">
          <motion.div 
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="relative h-[50vh] md:h-[65vh] w-full rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 z-0"
          >
            <img src={project.image} alt="Cover" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-100 md:opacity-90" />
          </motion.div>

          <div className="relative md:absolute md:bottom-12 md:left-12 md:right-12 z-10 
                          flex flex-col md:flex-row justify-between items-start md:items-end 
                          p-8 md:p-0 bg-[#050505] md:bg-transparent rounded-b-[2.5rem] -mt-12 md:mt-0 
                          border-x border-b border-white/10 md:border-none">
            
            <p className="text-xl md:text-4xl font-light max-w-2xl leading-[1.1] italic text-white/90">
              {project.description}
            </p>

            <div className="bg-white/5 backdrop-blur-2xl px-8 py-5 rounded-3xl border border-white/10 
                            flex items-center gap-4 mt-8 md:mt-0 w-full md:w-auto self-stretch md:self-auto">
              <TrendUpIcon size={24} className="text-amber-500" />
              <div>
                <p className="text-[9px] font-mono uppercase opacity-40 tracking-widest">Growth_Impact</p>
                <p className="text-lg font-bold font-mono uppercase tracking-tighter" style={{ color: currentBrand.accent }}>
                  {project.performance}
                </p>
              </div>
            </div>
          </div>
        </div>
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

      {/* Bridge to Technical Case Study */}
      {hasTechnicalView && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-5xl bg-blue-600/5 border border-blue-500/20 p-8 md:p-16"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px]" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-3 text-blue-400 mb-6">
                  <CpuIcon size={24} weight="duotone" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Engineering_Deep_Dive</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-none mb-6">
                  Oltre l'estetica: <br/> <span className="text-blue-500">il workflow tecnico.</span>
                </h3>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Dalla gestione dello stato alla scomposizione atomica dei componenti. Esplora le sfide ingegneristiche e le performance dietro questo progetto.
                </p>
              </div>
              <button 
                onClick={() => navigate(`/case-study/${project.id}`)}
                className="group flex flex-col items-center gap-4 bg-blue-500 text-black px-10 py-10 rounded-full hover:bg-white transition-all duration-500 hover:scale-105"
              >
                <CodeIcon size={32} weight="bold" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Open_Dev_Log</span>
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* Gallery Section */}
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
                      <video src={item} autoPlay loop muted playsInline className="w-full h-auto block" />
                      <div className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-md rounded-full">
                        <PlayIcon size={16} weight="fill" className="text-white/60" />
                      </div>
                    </div>
                  ) : (
                    <img src={item} alt={`Gallery ${index}`} className="w-full h-auto block object-cover" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Signature Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-40">
        <div className="border-y border-white/5 py-32 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl space-y-6">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] opacity-40 flex items-center gap-2">
               <CodeIcon size={14} /> Pattern_Analysis
            </h2>
            <p className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9]">
              Il brand acquisisce un'identità <br />
              <span style={{ color: currentBrand.accent }}>Premium, Editoriale, Coerente.</span>
            </p>
            {currentBrand.signatureNote && (
              <p className="text-sm text-white/30 font-light leading-relaxed border-l-2 pl-5 italic"
                style={{ borderColor: currentBrand.accent + '40' }}>
                {currentBrand.signatureNote}
              </p>
            )}
          </div>
          <div className="text-8xl font-serif italic opacity-10 select-none">SD</div>
        </div>
      </section>

      {/* Credits Section */}
      {(currentBrand.agencyName || currentBrand.courtesyOf) && (
        <section className="px-6 md:px-12 max-w-7xl mx-auto mt-40 opacity-40">
          <div className="grid md:grid-cols-2 gap-12 text-[9px] font-mono uppercase tracking-widest leading-loose">
            {currentBrand.agencyName && (
              <div>
                <p className="text-white/20 mb-2">// Credits_&_Role</p>
                <p>
                  {project.id.includes('arredi') || project.id.includes('mosca') || project.id.includes('farmacia') 
                    ? `Sviluppo tecnico Figma to WordPress. Direzione Creativa: ${currentBrand.agencyName}.` 
                    : `Concept visivo e Grafiche Social a cura di Stefania D.`}
                  <br />
                  Ogni modifica successiva alla consegna non rispecchia necessariamente lo standard estetico qui presentato.
                </p>
              </div>
            )}
            {currentBrand.courtesyOf && (
              <div className="flex flex-col justify-end md:text-right">
                <p className="flex items-center gap-2 md:justify-end">
                  <HandPointingIcon size={12} /> Courtesy of {currentBrand.courtesyOf}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-40 pb-20 text-center pt-20 border-t border-white/5">
        <button onClick={() => navigate('/')} className="group flex flex-col items-center gap-6 mx-auto">
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