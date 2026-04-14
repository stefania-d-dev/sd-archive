'use client';

import { motion } from 'framer-motion';
import { GithubLogoIcon, LinkedinLogoIcon, ArrowUpRightIcon, GlobeSimpleIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react';

export default function Footer() {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/stefania-deliso-developer/', icon: <LinkedinLogoIcon weight="thin" size={18} /> },
    { name: 'GitHub', url: 'https://github.com/darkmindy', icon: <GithubLogoIcon weight="thin" size={18} /> },
  ];

  return (
    <footer className="relative bg-[#030014] pt-32 pb-12 px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-350 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-12">
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.8] uppercase text-white">
              Prossimo<br /><span className="text-blue-500 italic font-light">Step?</span>
            </h2>
            <div className="group relative inline-block">
              <a href="mailto:stefania.devgdi@gmail.com" className="text-2xl md:text-4xl text-white font-medium flex items-center gap-6 hover:text-blue-400 transition-all">
                <EnvelopeSimpleIcon size={32} weight="thin" className="text-blue-500" />
                stefania.devgdi@gmail.com
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                  <ArrowUpRightIcon size={24} weight="bold" />
                </div>
              </a>
            </div>
          </motion.div>

          <div className="bg-white/2 border border-white/5 rounded-3xl p-10 space-y-10">
            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] border-b border-white/5 pb-6">03_Network & Connectivity</p>
            <div className="space-y-4">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" className="flex items-center justify-between p-5 rounded-2xl border border-white/5 hover:bg-white/3 transition-all group">
                  <div className="flex items-center gap-4 text-white">
                    <span className="text-white/20 group-hover:text-blue-400 transition-colors">{social.icon}</span>
                    <span className="text-xs uppercase tracking-widest text-white/60">{social.name}</span>
                  </div>
                  <ArrowUpRightIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 text-[10px] font-mono text-white/20 uppercase tracking-widest pt-4">
              <GlobeSimpleIcon size={14} weight="thin" className="text-green-500" />
              <span>Sicily / Remote / Worldwide</span>
            </div>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
          <p>© 2026 Stefania Deliso</p>
          <div className="flex gap-8">
            {['React', 'TypeScript', 'Tailwind'].map(tech => (
              <span key={tech} className="flex items-center gap-2 tracking-widest"><div className="w-1 h-1 bg-blue-500 rounded-full" /> {tech}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}