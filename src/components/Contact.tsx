/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#111417] mb-8">Contact</h2>
            <p className="text-[#4A4F55] mb-12 max-w-md">
              Vous avez un projet ou une question technique ? N'hésitez pas à nous contacter directement ou à passer à l'atelier.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="mt-1 text-[#4A4F55]"><MapPin size={20} /></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#111417] mb-1">Atelier</h4>
                  <p className="text-[#4A4F55]">123 Avenue de l'Industrie<br />75000 Paris, France</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-[#4A4F55]"><Phone size={20} /></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#111417] mb-1">Téléphone</h4>
                  <p className="text-[#4A4F55]">+33 (0)1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-[#4A4F55]"><Mail size={20} /></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#111417] mb-1">Email</h4>
                  <p className="text-[#4A4F55]">contact@dupont-metal.fr</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 text-[#4A4F55]"><Clock size={20} /></div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#111417] mb-1">Horaires</h4>
                  <p className="text-[#4A4F55]">Lun - Ven : 08:00 - 18:00<br />Sam : Sur rendez-vous</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] bg-gray-100 grayscale border border-gray-200"
          >
            {/* Placeholder for a map */}
            <div className="w-full h-full flex items-center justify-center bg-[#F2F4F6] relative">
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#111417 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
              />
              <div className="text-center z-10">
                <MapPin size={48} className="mx-auto mb-4 text-[#4A4F55]" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#111417]">Localisation Atelier</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
