import React, { useState } from 'react';
import {
  Globe,
  Smartphone,
  Layers,
  TrendingUp,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react';

import SectionHeader from '../components/common/SectionHeader';
import Card3D from '../components/common/Card3D';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import { TECH_STACKS, SOCIAL_LINKS } from '../constants';

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Web & Frontend', icon: Globe },
  { id: 'mobile', label: 'Mobile Apps (iOS & Android)', icon: Smartphone },
  { id: 'backend', label: 'MERN & Backend', icon: Layers },
  { id: 'ads', label: 'Paid Ads & Analytics', icon: TrendingUp },
  { id: 'ecommerce', label: 'E-Commerce & Marketplaces', icon: ShoppingBag },
  { id: 'ai', label: 'AI & Automation', icon: Cpu },
];

export default function TechStackPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const stackSections = [
    {
      id: 'frontend',
      title: 'Frontend Web Engineering',
      subtitle: 'Ultrafast, responsive, and SEO-first user interfaces.',
      icon: Globe,
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-500/50',
      items: TECH_STACKS.frontend,
      description:
        'We build modern web applications adhering to modern Core Web Vitals standards. Built with HTML5, CSS3, JavaScript, React.js, and Next.js 15 for lightning-fast server-side rendering and search engine indexing.',
    },
    {
      id: 'mobile',
      title: 'Mobile App Development (iOS & Non-iOS Android)',
      subtitle: 'Single high-performance codebase for both Apple App Store and Google Play.',
      icon: Smartphone,
      color: 'text-[#ff7a00]',
      borderColor: 'hover:border-[#ff5722]/50',
      items: TECH_STACKS.mobile,
      description:
        'Reach customers on their primary devices. Using React Native, we engineer smooth 60 FPS mobile apps deployed natively to iOS (iPhone & iPad) and Android without maintaining two separate expensive engineering teams.',
    },
    {
      id: 'backend',
      title: 'MERN Stack & Cloud Architecture',
      subtitle: 'Scalable APIs, secure databases, and fault-tolerant infrastructure.',
      icon: Layers,
      color: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      items: TECH_STACKS.backend,
      description:
        'Our fullstack engineers utilize MongoDB, Express.js, React, and Node.js (MERN) alongside robust REST & GraphQL APIs to handle massive concurrent traffic, fast database reads, and high data reliability.',
    },
    {
      id: 'ads',
      title: 'Paid Ads, Tracking & Performance Analytics',
      subtitle: 'Accurate pixel telemetry, server-side CAPI tracking, and ROAS attribution.',
      icon: TrendingUp,
      color: 'text-rose-400',
      borderColor: 'hover:border-rose-500/50',
      items: TECH_STACKS.marketingAndAds,
      description:
        'Great code means nothing without data. We configure Meta Conversions API (CAPI), Google Tag Manager, GA4, and deep keyword research suites (Semrush, Search Console) for pinpoint attribution.',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Engines & Marketplace Panels',
      subtitle: 'Custom digital storefronts and top Indian marketplace accounts.',
      icon: ShoppingBag,
      color: 'text-amber-400',
      borderColor: 'hover:border-amber-500/50',
      items: TECH_STACKS.ecommercePlatforms,
      description:
        'From high-converting Shopify and custom MERN storefronts to Amazon Seller Central, Flipkart Seller Hub, and Meesho Supplier Panel operations, we empower multi-channel commerce.',
    },
    {
      id: 'ai',
      title: 'AI Tools & Intelligent Automation',
      subtitle: 'Next-gen workflow acceleration, chatbots, and generative pipelines.',
      icon: Cpu,
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-500/50',
      items: TECH_STACKS.aiAndAutomation,
      description:
        'We integrate cutting-edge OpenAI GPT-4o, Claude, and n8n/Zapier automations directly into business operations—handling 24/7 lead inquiries, customer support, and instant WhatsApp alerts.',
    },
  ];

  const filteredSections =
    activeFilter === 'all'
      ? stackSections
      : stackSections.filter((s) => s.id === activeFilter);

  return (
    <div className="relative py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
        

          <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-4xl text-white tracking-tight leading-tight">
            Modern Tech Stacks Built for{' '}
            <span className="text-gradient-fire block mt-1">
              Scale, Speed & High Conversion
            </span>
          </h1>

          <p className="font-inter font-normal mt-5 text-[14px] text-slate-300 leading-relaxed">
            We don't use outdated, bloated website builders. Our software engineers build production-grade web systems in <strong className="text-white font-semibold">HTML, CSS, JS, React, Next.js, MERN Stack</strong>, and cross-platform apps in <strong className="text-white font-semibold">React Native (iOS & Android)</strong>.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`font-inter font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ffa21f] via-[#ff5722] to-[#d40d0d] text-white shadow-lg shadow-[#ff5722]/30 border border-white/20'
                    : 'bg-[#120f3d]/70 text-slate-300 hover:text-white hover:bg-[#1a1656] border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Stack Sections Grid */}
        <div className="space-y-12">
          {filteredSections.map((sec) => (
            <Card3D key={sec.id} intensity={10} className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Column */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-2xl bg-white/[0.05] border border-white/10 ${sec.color}`}>
                        <sec.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-inter font-medium text-[#ffa21f] uppercase tracking-wider">
                          Axonva Core Pillar
                        </span>
                        <h2 className="font-sora font-bold text-2xl text-white tracking-tight">
                          {sec.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-slate-200 mb-2">
                      {sec.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {sec.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Production Grade & Scalable
                    </span>
                    <Button to="/contact" variant="outline" size="sm" icon={ArrowRight}>
                      Discuss This Stack
                    </Button>
                  </div>
                </div>

                {/* Right Technology Badges Grid */}
                <div className="lg:col-span-6 p-6 rounded-2xl bg-black/40 border border-white/10">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mb-4">
                    Toolchain & Frameworks Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sec.items.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722]/40 transition-colors flex flex-col justify-between group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sora font-semibold text-sm text-white group-hover:text-[#ffa21f] transition-colors">
                            {tech.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#ff7a00]">
                            {tech.level}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 mt-2 font-medium">
                          {tech.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Engineering Guarantees Strip */}
        <div className="mt-10">
          <SectionHeader
            title="Our Non-Negotiable"
            highlight="Code Quality Guarantees"
            description="When you build software with Axonva, you receive an enterprise asset you actually own."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card3D intensity={12}>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clean, Modular Codebase</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Zero spaghettified spaghetti code. Fully typed, well-commented, and component-driven architecture that any future in-house developer can maintain.
              </p>
            </Card3D>

            <Card3D intensity={12}>
              <div className="w-12 h-12 rounded-xl bg-[#ff5722]/15 border border-[#ff5722]/30 text-[#ff7a00] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">90+ Lighthouse PageSpeed</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We obsess over Core Web Vitals, server response times (TTFB), image compression (WebP), and asset bundling for lightning loads.
              </p>
            </Card3D>

            <Card3D intensity={12}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Intellectual Property</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Full Git repository access, source code handover, domain credentials, and ad account ownership. You own your digital assets completely.
              </p>
            </Card3D>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170e42] via-[#24113b] to-[#140b36] border border-[#ff5722]/40 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Have a Tech Specification Ready or Need Architecture Advice?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Our principal software engineers and CTO team can review your tech requirements and recommend the optimal stack.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Schedule Technical Consultation
            </Button>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30"
            >
              <span>Chat with Tech Lead on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
