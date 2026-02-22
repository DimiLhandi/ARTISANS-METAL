/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const projects = [
  { id: 1, title: "Escalier Hélicoïdal", category: "Structure", image: "https://picsum.photos/seed/stairs/800/800" },
  { id: 2, title: "Garde-corps Industriel", category: "Sécurité", image: "https://picsum.photos/seed/railing/800/800" },
  { id: 3, title: "Verrière Acier", category: "Design", image: "https://picsum.photos/seed/glass/800/800" },
  { id: 4, title: "Portail Motorisé", category: "Extérieur", image: "https://picsum.photos/seed/gate/800/800" },
  { id: 5, title: "Mezzanine Atelier", category: "Structure", image: "https://picsum.photos/seed/mezzanine/800/800" },
  { id: 6, title: "Mobilier Design", category: "Mobilier", image: "https://picsum.photos/seed/furniture/800/800" },
  { id: 7, title: "Soudure Précision", category: "Technique", image: "https://picsum.photos/seed/welding/800/800" },
  { id: 8, title: "Structure Toiture", category: "Charpente", image: "https://picsum.photos/seed/roof/800/800" },
  { id: 9, title: "Détail Finition", category: "Artisanat", image: "https://picsum.photos/seed/detail/800/800" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-[#111417] mb-4">Réalisations</h2>
            <div className="w-24 h-1 bg-[#4A4F55]" />
          </div>
          <p className="text-[#4A4F55] text-sm uppercase tracking-widest font-bold hidden md:block">
            Galerie de projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden bg-gray-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#111417]/0 group-hover:bg-[#111417]/80 transition-all duration-500 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100">
                <span className="text-[#9AA3AB] text-xs uppercase tracking-[0.3em] mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight text-center">
                  {project.title}
                </h3>
                <div className="mt-6 w-12 h-px bg-white/30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
