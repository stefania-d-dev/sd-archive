'use client';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@phosphor-icons/react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // 1. Reset dello scroll al cambio pagina (La tua logica originale)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  // 2. Gestione visibilità pulsante e calcolo progresso scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra il pulsante dopo 300px di scroll
      setIsVisible(window.scrollY > 300);

      // Calcola la percentuale di scroll per il cerchio di progresso
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-10 right-10 z-999"
          >
            <button
              onClick={scrollToTop}
              className="relative group flex items-center justify-center w-14 h-14 bg-[#030014] border border-white/10 rounded-full text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
              aria-label="Back to top"
            >
              {/* Cerchio di progresso SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="28"
                  cy="28"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="text-white/5"
                />
                <motion.circle
                  cx="28"
                  cy="28"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="163.36" // 2 * Math.PI * r
                  initial={{ strokeDashoffset: 163.36 }}
                  animate={{ strokeDashoffset: 163.36 - (163.36 * progress) / 100 }}
                  className="text-blue-500"
                />
              </svg>

              {/* Icona Freccia */}
              <ArrowUpIcon 
                size={20} 
                weight="bold" 
                className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" 
              />
              
              {/* Effetto Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}