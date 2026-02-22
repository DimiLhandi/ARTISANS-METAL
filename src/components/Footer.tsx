/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Linkedin, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold tracking-tighter text-[#111417] uppercase mb-2">Jean Dupont</h3>
            <p className="text-xs text-[#4A4F55] uppercase tracking-widest font-bold">Artisan Métallier • Serrurier • Ferronnier</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-[#4A4F55] hover:text-[#111417] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-[#4A4F55] hover:text-[#111417] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-[#4A4F55] hover:text-[#111417] transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12 mb-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#111417] mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#4A4F55]">
              <li><a href="#artisan" className="hover:text-[#111417] transition-colors">L'Artisan</a></li>
              <li><a href="#services" className="hover:text-[#111417] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#111417] transition-colors">Réalisations</a></li>
              <li><a href="#devis" className="hover:text-[#111417] transition-colors">Devis</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#111417] mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-[#4A4F55]">
              <li><a href="#" className="hover:text-[#111417] transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-[#111417] transition-colors">Politique de Confidentialité</a></li>
              <li><a href="#" className="hover:text-[#111417] transition-colors">CGU</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-4 border border-[#4A4F55] text-[#4A4F55] hover:bg-[#4A4F55] hover:text-white transition-all duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#9AA3AB] font-bold">
          <p>© {new Date().getFullYear()} Jean Dupont Métallerie. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Précision • Solidité • Esthétique</p>
        </div>
      </div>
    </footer>
  );
}
