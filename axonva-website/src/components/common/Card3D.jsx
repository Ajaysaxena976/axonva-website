import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Card3D({
  children,
  className = '',
  glare = true,
  glowColor = 'rgba(255, 87, 34, 0.25)',
  intensity = 18,
  ...props
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -intensity;
    const rotY = ((x - centerX) / centerX) * intensity;

    setRotateX(rotX);
    setRotateY(rotY);

    if (glare) {
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.25,
      });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    if (glare) {
      setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={`relative select-none ${className}`}
      {...props}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 260,
          mass: 0.4,
        }}
        className="relative h-full w-full rounded-2xl border border-white/10 bg-[#0d0a33]/70 backdrop-blur-xl p-6 transition-colors duration-300 hover:border-[#ff5722]/50 will-change-transform"
        style={{
          boxShadow: `0 20px 40px -15px rgba(0,0,0,0.7), 0 0 30px ${glowColor}`,
        }}
      >
        {/* Subtle Glare overlay on hover */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
            }}
          />
        )}

        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
