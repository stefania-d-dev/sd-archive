// 1. Importa le immagini come asset
import imgArredi from '../assets/projects/Arredi-italiani-browser-mockup.webp';
import imgSoulfarm from '../assets/projects/Soulfarm-browser-mockup.webp';
import imgFarmacia from '../assets/projects/Farmacia-santrovaso-browser-mockup.webp';
import imgNational from '../assets/projects/nationalautomotive-mockup.webp';
import imgDevFest from '../assets/projects/devfest-app-mockup.webp';
import imgAnimo from '../assets/AnimoSiciliano/design_project_2.webp';
import imgBonaccorso from '../assets/design_project_1.webp';
import imgMariagnese from '../assets/design_project_10.webp';
import imgSano from '../assets/SanoSiciliano/design_project_3.webp';
import imgMosca from '../assets/projects/MoscaMobili-browser-mockup.webp';
import imgPortfolio from '../assets/projects/portfolio-meta.webp';

// Gallery di Sano Siciliano
import sanoLogo from '../assets/Loghi/LogoSano.webp';
import sano5 from '../assets/SanoSiciliano/design_project_5.webp';
import sano6 from '../assets/SanoSiciliano/design_project_6.webp';
import sano7 from '../assets/SanoSiciliano/design_project_7.webp';
import sano8 from '../assets/SanoSiciliano/design_project_8.webp';
import sano9 from '../assets/SanoSiciliano/design_project_9.webp';

//Gallery di Animo Siciliano
import animologo from '../assets/Loghi/LogoAnimoSiciliano.webp';
import animo1 from '../assets/AnimoSiciliano/Animo1.webp';
import animo2 from '../assets/AnimoSiciliano/Animo2.webp';
import animo3 from '../assets/AnimoSiciliano/Animo3.webp';
import animo4 from '../assets/AnimoSiciliano/Animo4.mp4';
import animo5 from '../assets/AnimoSiciliano/Animo5.mp4';
import animo6 from '../assets/AnimoSiciliano/Animo6.mp4';


// Gallery di DevFest Passport
import dfpWelcome from '../assets/DevFestPassport/dfpWelcome.webp';
import dfpLog from '../assets/DevFestPassport/dfpLog.webp';


export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  tech: string[];
  description: string;      
  fullDescription: string;  
  challenge: string;        
  solution: string;         
  performance: string;
  image: string;
  gallery?: string[];
  videos?: string[];     
  liveUrl?: string;
  repo?: string;
  category: 'code' | 'design';
  type: string;
  agency?: string;
  status?: 'Deployed' | 'In Progress' | 'Beta' | 'Archived';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "arredi-italiani",
    title: "Arredi_Italiani",
    role: "Creative Developer",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["WordPress Custom", "Figma to Code", "CSS Grid/Flex", "Gutenberg"],
    description: "Sviluppo di un tema WordPress custom pixel-perfect partendo da design Figma complessi per un brand luxury.",
    fullDescription: "Il progetto ha richiesto la traduzione di un design editoriale sofisticato in un tema WordPress performante. La sfida è stata mantenere l'integrità estetica di Figma utilizzando la struttura a blocchi di Gutenberg, estesa attraverso CSS custom avanzato.",
    challenge: "Tradurre layout asimmetrici e tipografia complessa da Figma a WordPress, garantendo la massima flessibilità di editing per il cliente tramite blocchi custom.",
    solution: "Sviluppo di un framework CSS dedicato basato sull'HTML nativo di Gutenberg. Ottimizzazione delle query del database per gestire il catalogo senza plugin pesanti, mantenendo il caricamento sotto i 2 secondi.",
    performance: "Figma to WP Perfection",
    image: imgArredi, 
    type: 'Custom Theme Development',
    category: 'design'
  },
  {
    id: "mosca-mobili",
    title: "Mosca Mobili",
    role: "Creative Developer",
    duration: "2025",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["WordPress Custom", "PHP", "CSS3 Animation", "Figma"],
    description: "Sviluppo di un sito web custom per un brand di mobili artigianali italiani.",
    fullDescription: "Il progetto ha richiesto la creazione di un tema WordPress su misura, partendo da design complessi in Figma. L'obiettivo era tradurre l'artigianato italiano in un'esperienza digitale elegante e performante, con particolare attenzione alla tipografia e alle animazioni leggere.",
    challenge: "Mantenere un'estetica artigianale e sofisticata garantendo al contempo un'esperienza utente fluida e moderna attraverso animazioni CSS leggere.",
    solution: "Implementazione di un design system coerente su WordPress, con utilizzo di CSS moderno per gestire le sovrapposizioni e le trasparenze del design originale senza appesantire il DOM.",
    performance: "Elegant Craftsmanship Online",
    image: imgMosca, 
    type: 'Custom Theme Development',
    category: 'design'   
  },
  {
    id: "soulfarm",
    title: "Soulfarm",
    role: "React Developer (Coding Test)",
    duration: "2024",
    tech: ["React", "Vite", "TypeScript", "TailwindCSS", "pnpm"],
    status: "Deployed",
    description: "Sviluppo di una replica pixel-perfect del sito Soulfarm.it come prova tecnica di sviluppo frontend avanzato.",
    fullDescription: "Il progetto è stato realizzato in soli 7 giorni, partendo dall'analisi del sito originale e ricostruendo ogni componente da zero. L'obiettivo era dimostrare la capacità di gestire uno stack moderno garantendo performance elevate e pulizia del codice.",
    challenge: "Replicare fedelmente layout complessi e interazioni dinamiche nel minor tempo possibile, mantenendo il codice scalabile e tipizzato con TypeScript.",
    solution: "Utilizzo di componenti funzionali atomici, gestione ottimizzata del DOM con React e styling rapido ma preciso tramite TailwindCSS. L'intero workflow è stato gestito con pnpm per la massima efficienza dei pacchetti.",
    performance: "100% Pixel Perfect Delivery",
    image: imgSoulfarm,
    repo: "https://github.com/Darkmindy/soulfarm-react",
    type: 'Frontend Challenge',
    category: 'code'
  },
  {
    id: "farmacia-santrovaso",
    title: "Farmacia_Santrovaso",
    role: "Creative Developer",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["WordPress Custom", "PHP", "CSS3 Animation", "Figma"],
    description: "Digitalizzazione dell'identità farmaceutica attraverso un'interfaccia pulita, sicura e altamente performante.",
    fullDescription: "Partendo dal prototipo Figma della Software House, ho sviluppato il tema custom concentrandomi sull'accessibilità e sulla pulizia del codice. Ogni blocco Gutenberg è stato stilizzato per rispecchiare la precisione medica richiesta dal brand.",
    challenge: "Mantenere un'estetica minimale 'sanitaria' garantendo al contempo un'esperienza utente dinamica e moderna attraverso animazioni CSS leggere.",
    solution: "Implementazione di un design system coerente su WordPress. Utilizzo di CSS moderno per gestire le sovrapposizioni e le trasparenze del design originale senza appesantire il DOM.",
    performance: "Clean & Accessible Code",
    image: imgFarmacia, 
    type: 'Healthcare UI Dev',
    category: 'design'
  },
  {
    id: "national-automotive",
    title: "National_Automotive",
    role: "UI/UX Designer & Motion Developer",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["Wordpress Custom", "PHP", "CSS3 Animation", "JavaScript"],
    description: "Hub digitale per il settore automotive, focalizzato su gerarchia visiva e micro-interazioni avanzate.",
    fullDescription: "In questo progetto ho curato l'intera struttura informativa, assicurandomi che la complessità dei servizi automotive fosse comunicata in modo semplice. Il focus principale è stato lo sviluppo delle card animate e della fluidità di navigazione.",
    challenge: "Organizzare una grande mole di dati e servizi senza sovraccaricare l'utente, mantenendo un'estetica professionale e high-tech.",
    solution: "Implementazione di una gerarchia visiva rigorosa e di un sistema di card interattive con JQuery (JS vanilla) che rispondono al movimento dell'utente, creando un senso di profondità e modernità.",
    performance: "High-End Micro-interactions",
    image: imgNational,
    liveUrl: "https://nationalautomotive.net/",
    type: 'Automotive Platform',
    category: 'code'
  },
{
   id: "devfest-passport",
    title: "DevFest Passport",
    role: "Flutter & UI Designer",
    duration: "2025",
    status: "Archived",
    tech: ["Flutter", "Firebase", "Dart", "Pixel Art System"],
    description: "App companion con sistema di gamification ed estetica Game Boy Color.",
    fullDescription: "Sviluppata per la DevFest'25, questa applicazione mobile trasforma l'esperienza dell'evento in un gioco. I partecipanti potevano scansionare codici, collezionare timbri digitali nel proprio 'Passport' (come mostrato nella gallery) e monitorare i progressi in tempo reale, tutto all'interno di un'interfaccia nostalgica ispirata al mondo 8-bit.",
    challenge: "La sfida era doppia: garantire una sincronizzazione dei dati istantanea tra centinaia di utenti contemporaneamente e mantenere un'estetica Pixel Art coerente e nitida su schermi moderni ad alta densità di pixel.",
    solution: "Ho utilizzato Flutter per lo sviluppo cross-platform e Firebase Realtime Database per la gestione dei timbri in tempo reale. Per la parte visuale, ho creato asset pixel-perfect scalabili, implementando una logica di gamification che ha aumentato drasticamente l'interazione dei partecipanti con gli stand dell'evento.",
    performance: "Real-time Sync / Gamified UX",
    image: imgDevFest, 
    gallery: [
      dfpWelcome,
      dfpLog
    ],
    repo: "https://github.com/Darkmindy/devfestlog_passport",
    type: 'mobile',
    category: 'code'
  },
  {
    id: "animo-siciliano",
    title: "Animo_Siciliano",
    role: "Brand & Social Designer",
    duration: "2024",
    agency: "Web Agency Emmè",
    status: "Deployed",
    tech: ["Social Design", "Photoshop", "Branding"],
    description: "Visual storytelling per shop online di prodotti tipici siciliani.",
    fullDescription: "Strategia visiva e creazione contenuti per esaltare l'eccellenza gastronomica siciliana sui canali digitali.",
    challenge: "Elevare la percezione del brand attraverso un'estetica editoriale che si distinguesse dai competitor commerciali.",
    solution: "Utilizzo di typography serif elegante, palette colori calde e fotografia lifestyle emozionale focalizzata sul territorio.",
    performance: "High Engagement",
    image: imgAnimo,
    gallery: [animologo,animo1,animo2,animo3],
    videos : [animo4,animo5,animo6],
    category: 'design',
    type: 'branding' 
  },
  {
    id: "bonaccorso-guess",
    title: "Bonaccorso_GUESS",
    role: "Visual & Content Designer",
    duration: "2024",
    agency: "Web Agency Emmè",
    tech: ["Canva Pro", "Social Media Design", "Product ADV", "Visual Strategy"],
    description: "Digital advertising e visual storytelling per il lancio della collezione GUESS Winter 2024.",
    fullDescription: "La campagna si è focalizzata sull'elevazione della percezione del brand GUESS all'interno dei punti vendita Bonaccorso. Attraverso un approccio 'educational', abbiamo guidato l'utente alla scoperta della qualità costruttiva degli accessori.",
    challenge: "Comunicare i dettagli tecnici e i materiali premium dei prodotti GUESS in modo immediato e coinvolgente per un pubblico social.",
    solution: "Implementazione di annotazioni 'handwritten' e frecce direzionali sui visual dei prodotti. Un linguaggio visivo artigianale che contrasta con la perfezione industriale del prodotto, creando un tocco personale ed esclusivo.",
    performance: "Premium Brand Perception",
    image: imgBonaccorso, 
    type: 'Fashion Advertising',
    category: 'design'
  },
  {
    id: "sano-siciliano",
    title: "Sano_Siciliano",
    role: "Social Media Designer",
    duration: "2024 - 2025",
    agency: "Web Agency Emmè",
    tech: ["Canva Pro", "Visual Storytelling", "Instagram Strategy", "Content Design"],
    description: "Strategia visiva e content creation per le campagne stagionali di un brand di eccellenze gastronomiche siciliane.",
    fullDescription: "Dalla vivacità del Carnevale alla delicatezza di San Valentino, abbiamo creato un ecosistema visivo che celebra la tradizione dolciaria siciliana con un linguaggio moderno e pop.",
    challenge: "Comunicare la tradizione siciliana attraverso un linguaggio visivo festoso e moderno che inviti all'engagement immediato sui social.",
    solution: "Utilizzo di palette vivaci (Pink & Gold) e composizioni dinamiche con elementi grafici celebrativi. Copy giocosi e diretti che trasformano il prodotto nel protagonista della festa.",
    performance: "100% Brand Consistency",
    image: imgSano,
    gallery: [
      sanoLogo,
      sano5,
      sano6,
      sano7,
      sano8,
      sano9
    ],
    type: 'Social Campaign',
    category: 'design'
  },
  {
    id: "la-mariagnese",
    title: "La_Mariagnese",
    role: "Creative Direction & Design",
    duration: "2024 - March 2025",
    agency: "Web Agency Emmè",
    tech: ["Visual Identity", "Social Layout Design", "Content Strategy", "Typography"],
    description: "Direzione creativa e design per un brand d'eccellenza siciliano, curando l'estetica editoriale fino a Marzo 2025.",
    fullDescription: "Ho curato l'intera comunicazione visiva del brand, stabilendo un linguaggio grafico basato sull'equilibrio tra tradizione siciliana e minimalismo contemporaneo. Il mio intervento si è concluso a Marzo 2025, definendo lo standard qualitativo che ha reso il brand riconoscibile nel settore.",
    challenge: "Distinguere il brand nel mercato gastronomico attraverso un layout pulito, eliminando il rumore visivo tipico dei competitor e puntando sulla forza delle immagini e della tipografia.",
    solution: "Sviluppo di un sistema di griglie flessibili per il feed e le storie, utilizzo di palette cromatiche ispirate alla terra e una rigorosa selezione tipografica serif per trasmettere autorità e artigianalità.",
    performance: "Premium Visual Standard",
    image: imgMariagnese, 
    type: 'Brand Identity',
    category: 'design'
  },
  {
    id: "portfolio-2024",
    title: "SD_PORTFOLIO",
    role: "UI Engineer & Designer",
    duration: "2024 - 2026",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    description: "Un laboratorio di sperimentazione tra design atomico e performance frontend.",
    fullDescription: "Questo portfolio non è solo una vetrina, ma un manifesto del mio approccio al digitale. Ho voluto unire la potenza di Next.js con una ricerca estetica basata sul minimalismo hi-tech e sulla fluidità delle animazioni, curando ogni singolo pixel come se fosse una riga di codice.",
    challenge: "Bilanciare la complessità visiva (Bento Grid, Glassmorphism, Background Blurs) con la necessità di mantenere caricamenti istantanei e una struttura di codice scalabile.",
    solution: "Utilizzo di Framer Motion per la gestione orchestrata delle animazioni e Tailwind CSS per un design atomico efficiente. Il sistema di filtraggio dei progetti è gestito tramite stati React per garantire una transizione fluida tra categorie senza ricaricamenti.",
    performance: "99 FPS / 0.4s LOAD",
    image: imgPortfolio, 
    liveUrl: "https://darkmindy.github.io/SD_Portfolio_Final/",
    repo: "https://github.com/darkmindy/SD_Portfolio_Final",
    type: 'UI Engineering / Portfolio',
    category: 'code'
  }
];