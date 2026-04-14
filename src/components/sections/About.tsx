'use client';

import { motion } from 'framer-motion';
import { CpuIcon, CodesandboxLogoIcon, HardDrivesIcon } from '@phosphor-icons/react';

export default function About() {
  const skills = [
    {
      icon: <CpuIcon size={32} weight="thin" className="text-blue-500" />,
      title: "Architettura Frontend",
      desc: "Sviluppo di SPA e Dashboard complesse in React e Next.js con focus su Type Safety e scalabilità."
    },
    {
      icon: <CodesandboxLogoIcon size={32} weight="thin" className="text-purple-500" />,
      title: "UI/UX Interaction",
      desc: "Creazione di interfacce fluide ed estetiche dove il design incontra animazioni performanti."
    },
    {
      icon: <HardDrivesIcon size={32} weight="thin" className="text-blue-400" />,
      title: "System Design",
      desc: "Progettazione di Design Systems atomici che garantiscono coerenza visiva su larga scala."
    }
  ];

  return (
    <section id="about" className="bg-[#030014] py-40 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Testo Intro */}
          <div className="lg:col-span-5 space-y-8">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]"
            >
              The Profile // 01
            </motion.span>
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase italic">
              Thinking <br /> <span className="text-white/20">Beyond Code.</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
              Sono uno sviluppatore senior specializzato nel trasformare visioni complesse in esperienze digitali pulite, veloci e memorabili.
            </p>
          </div>

          {/* Cards Skills */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-10 bg-white/2 border border-white/5 rounded-[2.5rem] space-y-6 hover:bg-white/4 transition-all group"
              >
                <div className="p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-white text-2xl font-medium tracking-tight uppercase">{skill.title}</h3>
                <p className="text-white/30 text-sm font-light leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}