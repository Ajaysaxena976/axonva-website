import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-8 py-4 text-base font-bold rounded-2xl gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#ffa21f] via-[#ff5722] to-[#d40d0d] text-white shadow-lg shadow-[#ff5722]/30 hover:shadow-[#ff5722]/50 hover:brightness-110 border border-white/20 btn-shimmer',
    secondary:
      'bg-[#120f3d]/80 text-white hover:bg-[#1a1656] border border-white/10 hover:border-white/25 shadow-lg shadow-black/40 backdrop-blur-md',
    outline:
      'bg-transparent text-white border border-[#ff5722]/40 hover:border-[#ff5722] hover:bg-[#ff5722]/10 shadow-sm shadow-[#ff5722]/10',
    blue:
      'bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white shadow-lg shadow-[#2563eb]/30 hover:shadow-[#2563eb]/50 hover:brightness-110 border border-white/20',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 border border-transparent',
  };

  const combinedClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} className="inline-block">
        <Link to={to} className={`group ${combinedClasses}`} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }} className="inline-block">
        <a href={href} className={`group ${combinedClasses}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} {...props}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      className={`group ${combinedClasses}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </motion.button>
  );
}
