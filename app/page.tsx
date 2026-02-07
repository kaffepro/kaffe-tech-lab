"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        <Coffee className="w-12 h-12 text-stone-300 mb-8" strokeWidth={1} />
        <h1 className="text-6xl font-extralight tracking-widest text-stone-800 uppercase">
          Hello Kaffe Tech
        </h1>
        <div className="mt-4 h-px w-12 bg-stone-300" />
        <p className="mt-6 text-stone-400 font-light tracking-wide italic">
          Minimalist Japanese-inspired Coffee Laboratory
        </p>
      </motion.div>
    </main>
  );
}
