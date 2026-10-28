import React from 'react';

export default function Badge({
  children,
  variant = 'fire',
  pulse = true,
  className = '',
}) {
  const variantStyles = {
    fire: {
      wrap: 'border-[#ff5722]/30 bg-[#ff5722]/10 text-[#ffa21f]',
      dot: 'bg-[#ff5722] shadow-[0_0_8px_#ff5722]',
    },
    blue: {
      wrap: 'border-[#3b82f6]/30 bg-[#2563eb]/10 text-[#60a5fa]',
      dot: 'bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]',
    },
    purple: {
      wrap: 'border-[#a855f7]/30 bg-[#7c3aed]/10 text-[#c084fc]',
      dot: 'bg-[#a855f7] shadow-[0_0_8px_#a855f7]',
    },
    success: {
      wrap: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      dot: 'bg-emerald-500 shadow-[0_0_8px_#10b981]',
    },
  };

  const current = variantStyles[variant] || variantStyles.fire;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold tracking-wide backdrop-blur-md transition-all ${current.wrap} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.dot}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${current.dot}`} />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
