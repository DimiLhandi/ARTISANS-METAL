/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import React, { useState } from "react";
import { Check } from "lucide-react";

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="devis" className="py-24 bg-[#F2F4F6]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#111417] mb-4">Demande de Devis</h2>
          <p className="text-[#4A4F55] uppercase tracking-widest text-xs font-bold">
            Réponse rapide sous 24-48h • Gratuit et sans engagement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 shadow-xl"
        >
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#111417] mb-2 uppercase">Message Envoyé</h3>
              <p className="text-[#4A4F55]">Nous reviendrons vers vous dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#111417]">Nom & Prénom</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#4A4F55] outline-none transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#111417]">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#4A4F55] outline-none transition-all"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#111417]">Téléphone</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#4A4F55] outline-none transition-all"
                    placeholder="06 00 00 00 00"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#111417]">Type de prestation</label>
                  <select className="w-full px-4 py-3 bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#4A4F55] outline-none transition-all appearance-none">
                    <option>Escalier / Garde-corps</option>
                    <option>Structure métallique</option>
                    <option>Portail / Clôture</option>
                    <option>Mobilier sur mesure</option>
                    <option>Autre projet</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#111417]">Description du projet</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#F2F4F6] border-none focus:ring-2 focus:ring-[#4A4F55] outline-none transition-all resize-none"
                  placeholder="Détaillez votre besoin, dimensions, matériaux souhaités..."
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 bg-[#4A4F55] text-white font-bold tracking-[0.2em] hover:bg-[#111417] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER LA DEMANDE"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
