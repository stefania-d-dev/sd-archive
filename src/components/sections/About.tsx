'use client';

import { motion } from 'framer-motion';
import { CpuIcon, CodesandboxLogoIcon, HardDrivesIcon, BrainIcon } from '@phosphor-icons/react';

export default function About() {
  const skills = [
    {
      icon: <CpuIcon size={32} weight="thin" className="text-blue-500" />,
      title: "UI Engineering",
      desc: "Sviluppo interfacce SaaS e Dashboard complesse in React/Next.js. Focus totale su Type Safety, performance e architetture B2B scalabili."
    },
    {
      icon: <BrainIcon size={32} weight="thin" className="text-purple-500" />,
      title: "AI Integration",
      desc: "Implementazione di soluzioni basate su Intelligenza Artificiale per ottimizzare i flussi di lavoro e migliorare l'esperienza utente."
    },
    {
      icon: <CodesandboxLogoIcon size={32} weight="thin" className="text-blue-400" />,
      title: "Design Systems",
      desc: "Progettazione di sistemi atomici su Figma che garantiscono coerenza millimetrica tra il prototipo e il codice finale."
    },
    {
      icon: <HardDrivesIcon size={32} weight="thin" className="text-green-500" />,
      title: "Problem Solving",
      desc: "Dall'ottimizzazione del codice alla riparazione hardware: un approccio analitico per risolvere colli di bottiglia tecnici e di business."
    }
  ];

  return (
    <section id="about" className="bg-[#030014] py-32 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Glow decorativo */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Testo Intro - Gerarchia potenziata */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">
                The Profile // 01
              </span>
              <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase italic">
                Thinking <br /> 
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white/40 to-white/5">Beyond Code.</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-md"
            >
              Sono un <span className="text-white">Hybrid Developer</span> con un'ossessione per i dettagli. Trasformo problemi complessi di business in prodotti digitali eleganti, veloci e pronti per il mercato.
            </motion.p>

            <div className="flex gap-4 pt-4">
               <div className="px-4 py-2 border border-white/10 rounded-full font-mono text-[9px] text-white/40 uppercase">SaaS Oriented</div>
               <div className="px-4 py-2 border border-white/10 rounded-full font-mono text-[9px] text-white/40 uppercase">B2B Focused</div>
            </div>
          </div>

          {/* Cards Skills - Migliorato il responsive e l'interazione */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 bg-white/2 border border-white/5 rounded-4xl md:rounded-[2.5rem] space-y-6 hover:bg-white/4 hover:border-blue-500/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Effetto luce al passaggio del mouse */}
                <div className="absolute -inset-px bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div className="mt-8 space-y-4">
                    <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight uppercase">
                      {skill.title}
                    </h3>
                    <p className="text-white/30 text-sm font-light leading-relaxed group-hover:text-white/50 transition-colors italic">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}