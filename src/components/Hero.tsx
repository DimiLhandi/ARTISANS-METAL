/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#F2F4F6] pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-6 text-[#111417]">
            La précision au service <br />
            <span className="text-[#4A4F55]">de la solidité.</span>
          </h1>
          <p className="text-lg text-[#4A4F55] max-w-md mb-10 font-medium">
            Expert du métal depuis plus de 10 ans. Conception et réalisation de structures métalliques sur mesure pour particuliers et professionnels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-[#4A4F55] text-white text-sm font-bold tracking-widest hover:bg-[#111417] transition-all duration-300 text-center"
            >
              NOS RÉALISATIONS
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-[#4A4F55] text-[#4A4F55] text-sm font-bold tracking-widest hover:bg-[#4A4F55] hover:text-white transition-all duration-300 text-center"
            >
              CONTACT
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          {/* Abstract Metal Icon / Logo */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[1px] border-[#4A4F55]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-[1px] border-[#4A4F55]/10"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10L90 90M90 10L10 90" stroke="#4A4F55" strokeWidth="2" />
                <rect x="25" y="25" width="50" height="50" stroke="#111417" strokeWidth="4" />
                <circle cx="50" cy="50" r="5" fill="#4A4F55" />
              </svg>
            </div>
            
            {/* Brushed metal effect simulation overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9AA3AB]/5 -skew-x-12 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4A4F55]/20 to-transparent" />
    </section>
  );
}
