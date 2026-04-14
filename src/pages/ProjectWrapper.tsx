import { useParams } from 'react-router-dom';
import { PROJECTS_DATA } from '../lib/projects';
import CaseStudy from './CaseStudy'; 
import CreativeLayout from './CreativeLayout';

export default function ProjectWrapper() {
  const { projectId } = useParams<{ projectId: string }>();
  
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

  // 3. Caso: Progetto Code (Layout Tecnico)
  return <CaseStudy project={project} />;
}