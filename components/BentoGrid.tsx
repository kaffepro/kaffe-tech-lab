import React from 'react';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * BentoGrid - A responsive grid container for bento-style layouts.
 * Uses a 4-column layout on medium screens and above.
 */
export default function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}
