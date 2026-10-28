import React from 'react';
import {
  Target,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import SectionHeader from '../components/common/SectionHeader';
import Card3D from '../components/common/Card3D';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import Logo from '../components/logo/Logo';
import {
  SITE_CONFIG,
  IMPACT_METRICS,
} from '../constants';

export default function About() {
  const values = [
    {
      title: 'Zero Vanity Metrics',
      desc: 'We don’t celebrate impressions or clicks that don’t generate revenue. Our North Star is profitable ROAS, qualified leads, and enterprise bottom-line growth.',
      icon: Target,
      color: '#ff5722',
    },
    {
      title: 'Integrated Engineering & Marketing',
      desc: 'A great ad campaign fails on a slow, poorly coded site. A brilliant site fails without traffic. We unite software engineering with aggressive growth marketing under one roof.',
      icon: Layers,
      color: '#3b82f6',
    },
    {
      title: '100% Ad Transparency',
      desc: 'You always own your ad accounts, pixel data, source code, and domain credentials. Full access, zero hostage holding, and weekly granular reporting.',
      icon: ShieldCheck,
      color: '#10b981',
    },
    {
      title: 'Speed & Agile Velocity',
      desc: 'Startups can’t afford 6-month bloated turnaround cycles. We ship production-grade landing pages, cross-platform apps, and ad funnels in days and weeks, not quarters.',
      icon: Zap,
      color: '#ffb703',
    },
  ];

  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="fire" className="mb-4">
            About Axonva Ventures
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            We Are The Growth Engine Behind{' '}
            <span className="text-gradient-fire block mt-1">
              Ambitious Modern Businesses.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            Axonva Ventures was founded to solve a critical startup problem: the painful disconnect between web developers who don't understand marketing, and marketing agencies who can't write code.
          </p>
        </div>

        {/* Central Core Promise Banner */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#140f3d] via-[#1a1145] to-[#1a0c30] border border-[#ff5722]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff5722]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-[#ffa21f] uppercase tracking-wider block mb-2">
                The Driving Mission · हमारा संकल्प
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
                “{SITE_CONFIG.corePromiseEn}”
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 font-medium">
                {SITE_CONFIG.corePromiseHi}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Next.js & React Native Tech
                </span>
                <span className="flex items-center gap-1.5 text-[#ff7a00]">
                  <CheckCircle2 className="w-4 h-4" /> Meta & Google Performance Ads
                </span>
                <span className="flex items-center gap-1.5 text-blue-400">
                  <CheckCircle2 className="w-4 h-4" /> Organic SEO & E-Commerce
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 shadow-xl flex flex-col items-center">
                <Logo stacked height={70} />
                <span className="text-xs text-slate-400 mt-3 text-center">
                  Full-Stack Growth Consultancy
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Agency Problem vs Axonva Model */}
        <div className="mb-24">
          <SectionHeader
            badge="The Paradigm Shift"
            title="Traditional Agencies vs"
            highlight="The Axonva Growth Model"
            description="Why modern brands are firing traditional agencies and switching to full-funnel engineering partners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-8 rounded-2xl bg-red-950/20 border border-red-500/20 shadow-lg">
              <div className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">
                ✕ The Traditional Agency Model
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Disjointed, Slow & Vanity-Obsessed
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Developers build slow templates that marketers cannot optimize.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Ad agencies spend client money without fixing conversion bottlenecks on the landing page.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Report on likes, clicks, and impressions while bank balance remains unchanged.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✗</span>
                  <span>Account lock-in and zero code ownership.</span>
                </li>
              </ul>
            </div>

            {/* The Axonva Way */}
            <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2">
                ✓ The Axonva Ventures Model
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Full-Funnel Tech & Data Synergy
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Custom Next.js & React code engineered specifically for conversion velocity and SEO.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Scientific Meta & Google ad funnels tuned to real ROAS and customer acquisition cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Native mobile apps for iOS and Android on a unified high-performance codebase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>You retain 100% intellectual property, ad accounts, and source code.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <SectionHeader
            badge="Our Guiding Principles"
            title="The Values That"
            highlight="Guide Our Delivery"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card3D key={i} intensity={12}>
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-4 text-[#ffa21f]">
                  <v.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {v.desc}
                </p>
              </Card3D>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 mb-20 text-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Our Track Record in Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl sm:text-4xl font-black text-gradient-fire">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Ready to Build With Us?
          </h3>
          <p className="text-slate-300 text-sm mt-2 mb-6">
            Tell us about your current digital challenges and let’s construct a predictable growth roadmap.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Speak with an Axonva Strategist
          </Button>
        </div>
      </div>
    </div>
  );
}
