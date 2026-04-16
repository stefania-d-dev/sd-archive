import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/sections/Hero';
import Marquee from './components/layout/Marquee';
import About from './components/sections/About'; 
import Approach from './components/sections/Approach';
import SelectedWorks from './components/sections/SelectedWorks';
import CaseStudy from './pages/CaseStudy'; 
import CreativeLayout from './pages/CreativeLayout';
import Skills from './components/sections/Skills';
import { PROJECTS_DATA } from './lib/projects';
import Footer from './components/layout/Footer';

// Componente per la Home Page completa
const HomePage = () => (
  <>
    <Navbar />
    <ScrollToTop />
    <Hero />
    <Marquee />
    <About />
    <Approach />
    <Skills />
    <SelectedWorks />
    <Footer />
  </>
);

// Il "Vigile Urbano": Smista l'utente verso il layout corretto
function ProjectWrapper() {
  const { projectId } = useParams<{ projectId: string }>();
  
  // Cerchiamo il progetto nei dati importati usando l'id della rotta
  const project = PROJECTS_DATA.find((p) => p.id === projectId);

  // 1. Caso: Progetto non trovato
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white font-mono bg-[#030014] p-6 text-center">
        <p className="uppercase tracking-[0.5em] text-[10px] mb-8">Project Not Found_</p>
        <a href="/" className="text-blue-500 text-xs hover:underline uppercase tracking-widest">
          Return to home
        </a>
      </div>
    );
  }

  // 2. Caso: Progetto di Design (Layout Editoriale/Creativo)
  if (project.category === 'design') {
    return <CreativeLayout project={project} />; 
  }

  // 3. Caso: Progetto Code/Default (Layout Tecnico)
  return <CaseStudy project={project} />;
}

export default function App() {
  return (
    <div className="bg-[#030014] min-h-screen selection:bg-blue-500/30 selection:text-white">
      <Routes>
        {/* Rotta Principale */}
        <Route path="/" element={<HomePage />} />
        
        {/* Rotta Dinamica per i Case Studies */}
        <Route path="/project/:projectId" element={<ProjectWrapper />} />
        
        {/* Rotta di Fallback (Redirect alla Home se l'URL è sbagliato) */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}