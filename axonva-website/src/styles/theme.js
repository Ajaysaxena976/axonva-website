/**
 * Axonva Ventures Theme Configuration
 * JavaScript interface for the brand's design system tokens.
 * Change values here or in theme.css to customize the brand's look and feel.
 */

export const THEME = {
  colors: {
    primary: '#ff5722',       // Vibrant Orange
    primaryLight: '#ff7a00',  // Warm Orange
    primaryWarm: '#ff9a1f',   // Sunset Orange
    yellowGold: '#ffb703',    // Logo Yellow Accent
    redCrimson: '#d40d0d',    // Deep Crimson
    redDeep: '#6a0716',       // Shadow Red
    
    // Cosmic Blues / Purples
    bgDark: '#060517',        // Deep Space Black/Blue
    bgSurface: '#0b092b',     // Secondary Surface
    bgCard: '#120f3d',        // Card Background
    blueElectric: '#2563eb',  // Electric Blue
    blueVivid: '#3b82f6',     // Bright Blue
    purpleVivid: '#7c3aed',   // Vibrant Violet
    cyanNeon: '#06b6d4',      // Neon Cyan
    
    // Text colors
    textWhite: '#ffffff',
    textLight: '#f8fafc',
    textMuted: '#94a3b8',
    textDim: '#64748b',
  },
  
  gradients: {
    fire: 'linear-gradient(135deg, #ffb703 0%, #ff5722 45%, #d40d0d 100%)',
    cosmic: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #ff5722 100%)',
    card: 'linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
    hero: 'radial-gradient(circle at 50% 20%, rgba(255, 87, 34, 0.18) 0%, rgba(37, 99, 235, 0.12) 40%, rgba(6, 5, 23, 0) 80%)',
  },
  
  shadows: {
    fire: '0 10px 40px rgba(255, 87, 34, 0.35)',
    blue: '0 10px 40px rgba(37, 99, 235, 0.3)',
    cosmic: '0 0 60px rgba(124, 58, 237, 0.25)',
  }
};

export default THEME;
