import React from 'react';
import Badge from './Badge';

export default function SectionHeader({
  badge,
  badgeVariant = 'fire',
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-4 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}

      <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className="text-gradient-fire block sm:inline mt-1 sm:mt-0">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="font-inter font-normal mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
