"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string; // e.g., 'md:col-span-2'
  rowSpan?: string; // e.g., 'md:row-span-2'
  delay?: number;
}

/**
 * BentoItem - A single card within the BentoGrid.
 * Supports different column and row spans.
 * Includes entrance animation for a premium feel.
 */
export default function BentoItem({ 
  children, 
  className = '', 
  colSpan = '', 
  rowSpan = '',
  delay = 0 
}: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.23, 1, 0.32, 1] // Custom ease-out
      }}
      className={`bento-card overflow-hidden flex flex-col h-full ${colSpan} ${rowSpan} ${className}`}
    >
      {children}
    </motion.div>
  );
}
