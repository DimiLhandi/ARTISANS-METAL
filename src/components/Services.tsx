/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Hammer, Shield, Ruler, Layers, Settings } from "lucide-react";

const services = [
  {
    icon: <Layers size={32} />,
    title: "Fabrication sur mesure",
    description: "Conception de pièces uniques répondant à vos besoins spécifiques, du mobilier aux éléments structurels."
  },
  {
    icon: <Settings size={32} />,
    title: "Structures métalliques",
    description: "Réalisation de charpentes, mezzanines et renforts de structure pour bâtiments industriels et résidentiels."
  },
  {
    icon: <Ruler size={32} />,
    title: "Escaliers & Garde-corps",
    description: "Design et installation d'escaliers droits, tournants ou hélicoïdaux avec finitions acier, inox ou verre."
  },
  {
    icon: <Shield size={32} />,
    title: "Portails & Clôtures",
    description: "Sécurisation de vos accès avec des solutions robustes et esthétiques, motorisées ou manuelles."
  },
  {
    icon: <Hammer size={32} />,
    title: "Soudure & Réparation",
    description: "Interventions techniques sur site ou en atelier pour la maintenance et la réparation de vos équipements."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F2F4F6]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[#111417] mb-4">Services</h2>
          <div className="w-24 h-1 bg-[#4A4F55]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#9AA3AB]/20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 hover:bg-[#4A4F55] group transition-all duration-500 cursor-default"
            >
              <div className="text-[#4A4F55] group-hover:text-white mb-8 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111417] group-hover:text-white mb-4 uppercase tracking-tight transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-[#4A4F55] group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
