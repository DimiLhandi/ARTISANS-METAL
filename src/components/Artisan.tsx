/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Artisan() {
  return (
    <section id="artisan" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/metal-workshop/800/1000"
              alt="Atelier de métallerie"
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#4A4F55] hidden md:flex items-center justify-center p-8 text-white">
              <p className="text-center font-bold tracking-tighter leading-none">
                <span className="text-5xl block">10</span>
                <span className="text-xs uppercase tracking-widest">Ans d'expérience</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-[#111417]">Votre Artisan du Métal</h2>
            <div className="space-y-6 text-[#4A4F55] text-base">
              <p>
                Spécialisé dans la métallerie fine et la serrurerie, j'accompagne mes clients dans la réalisation de projets alliant esthétique industrielle et robustesse structurelle.
              </p>
              <p>
                Chaque pièce qui sort de mon atelier est le fruit d'une étude précise et d'une maîtrise rigoureuse des matériaux. De la découpe laser à la soudure haute précision, nous ne laissons aucune place à l'improvisation.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-[#111417] font-bold uppercase text-xs tracking-widest mb-2">Technicité</h4>
                  <p className="text-sm">Maîtrise avancée des alliages et des techniques de soudure.</p>
                </div>
                <div>
                  <h4 className="text-[#111417] font-bold uppercase text-xs tracking-widest mb-2">Précision</h4>
                  <p className="text-sm">Finitions impeccables et respect strict des cotes.</p>
                </div>
                <div>
                  <h4 className="text-[#111417] font-bold uppercase text-xs tracking-widest mb-2">Sécurité</h4>
                  <p className="text-sm">Conformité totale aux normes de construction en vigueur.</p>
                </div>
                <div>
                  <h4 className="text-[#111417] font-bold uppercase text-xs tracking-widest mb-2">Sur Mesure</h4>
                  <p className="text-sm">Adaptation complète à vos contraintes architecturales.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
