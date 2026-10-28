import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background dark color */}
      <div className="absolute inset-0 bg-[#060517]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-mesh-grid opacity-60" />

      {/* Floating Orange/Red Glow (Top Left / Center) */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #ff5722 0%, #d40d0d 60%, transparent 80%)',
        }}
      />

      {/* Floating Cosmic Blue/Indigo Glow (Top Right) */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[5%] right-[5%] w-[550px] h-[550px] rounded-full blur-[150px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #2563eb 0%, #7c3aed 60%, transparent 80%)',
        }}
      />

      {/* Warm Golden Flare (Bottom Center) */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -30, 40, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[-15%] left-[30%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #ffa21f 0%, #ff3b1d 50%, transparent 75%)',
        }}
      />

      {/* Subtle vignette border */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(6,5,23,0.9)]" />
    </div>
  );
}
