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

// Home Page
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

// Wrapper per la Vista Creativa
function CreativeWrapper() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project) return <NotFound />;
  return <CreativeLayout project={project} />;
}

// Wrapper per la Vista Tecnica
function TechnicalWrapper() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS_DATA.find((p) => p.id === projectId);
  if (!project) return <NotFound />;
  return <CaseStudy project={project} />;
}

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#030014]">
    <p className="font-mono uppercase tracking-widest">Project Not Found_</p>
    <a href="/" className="mt-4 text-blue-500 hover:underline">Return Home</a>
  </div>
);

export default function App() {
  return (
    <div className="bg-[#030014] min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Rotta Creativa */}
        <Route path="/project/:projectId" element={<CreativeWrapper />} />
        {/* Rotta Tecnica */}
        <Route path="/case-study/:projectId" element={<TechnicalWrapper />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}