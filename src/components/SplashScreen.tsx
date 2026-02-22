/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const name = "JEAN DUPONT";
  const letters = name.split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F2F4F6] overflow-hidden"
    >
      <div className="text-center">
        <h1 className="flex justify-center overflow-hidden mb-12">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.1,
                delay: index * 0.05,
                ease: "linear",
              }}
              className="inline-block whitespace-pre text-[#111417] font-bold"
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={onComplete}
          className="px-12 py-4 bg-[#4A4F55] text-white text-sm tracking-[0.2em] font-bold hover:bg-[#111417] transition-colors duration-300"
        >
          ACCÉDER
        </motion.button>
      </div>
      
      {/* Decorative lines for industrial feel */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-[#111417]/5" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-[#111417]/5" />
    </motion.div>
  );
}
