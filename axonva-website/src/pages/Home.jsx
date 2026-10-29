import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
  Smartphone,
  ShoppingBag,
  Store,
  Megaphone,
  Search,
  MapPin,
  Share2,
  Cpu,
  CheckCircle2,
  Zap,
  ChevronRight,
  MessageSquare,
  BarChart3,
  Plus,
  Minus,
} from 'lucide-react';

import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import Card3D from '../components/common/Card3D';
import SectionHeader from '../components/common/SectionHeader';
import Logo from '../components/logo/Logo';
import { useModal } from '../context/useModal';
import {
  SITE_CONFIG,
  SOCIAL_LINKS,
  SERVICE_CATEGORIES,
  CORE_SERVICES,
  IMPACT_METRICS,
  TESTIMONIALS,
  FAQS,
} from '../constants';


// Icon map for core services
const iconMap = {
  Globe: Globe,
  Smartphone: Smartphone,
  ShoppingBag: ShoppingBag,
  Store: Store,
  TrendingUp: TrendingUp,
  Megaphone: Megaphone,
  Search: Search,
  MapPin: MapPin,
  Share2: Share2,
  Sparkles: Sparkles,
  Cpu: Cpu,
};

export default function Home() {
  const { openStrategyModal } = useModal();
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredServices = CORE_SERVICES.filter(
    (s) => s.categoryId === activeCategory
  );


  return (
    <div className="relative overflow-hidden">

  

      {/* ========================================================
          1. HERO SECTION (High Impact, 3D Glow, Radiant Mesh)
      ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-4 pb-8 lg:py-12">
        {/* Glow backdrop behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#ff5722]/15 via-[#7c3aed]/10 to-[#2563eb]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
            
              {/* Main Headline */}
              <h1 className="font-sora font-extrabold text-3xl sm:text-5-2xl lg:text-3xl xl:text-3xl text-white tracking-tight leading-[1.08]">
                We Build Digital Experiences{' '}
                <span className="text-gradient-fire block mt-1">
               That Drives <br className='md:hidden'/> Revenue
                </span>
              </h1>

              {/* Core Promise Card with Golden Glow */}
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#120f3d]/90 via-[#18134d]/80 to-[#210c30]/90 border border-[#ff5722]/30 shadow-[0_10px_35px_-10px_rgba(255,87,34,0.3)] backdrop-blur-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#ffa21f] uppercase tracking-wider mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-ping" />
                  Our Core Promise
                </div>
                <p className="text-base sm:text-lg md:text-sm text-white leading-snug">
                  “{SITE_CONFIG.corePromiseEn}”
                </p>
                <p className="text-xs sm:text-sm text-slate-300/80 mt-1">
                  {SITE_CONFIG.corePromiseHi}
                </p>
              </div>

              {/* Tagline / Subtitle */}
              {/* <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From  <strong className="text-white font-semibold">Next.js & React Native</strong> platforms to high-ROAS <strong className="text-white font-semibold">Meta & Google Ads</strong> and e-commerce dominance, we help ambitious businesses scale into unstoppable market leaders.
              </p> */}


<p className="mt-6 text-[14px] text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
  We build <strong className="text-white font-semibold">powerful digital experiences</strong> and deliver <strong className="text-white font-semibold">marketing that drives growth.</strong>
</p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  onClick={openStrategyModal}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full sm:w-auto shadow-xl shadow-[#ff5722]/35"
                >
                  Book Free Strategy Call
                </Button>

                <Button
                  to="/services"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore 10 Core Services
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>React Native (iOS & Android)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff9a1f]" />
                  <span>Verified Meta & Google Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Full MERN & Next.js Architecture</span>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive 3D Card Cluster Visual */}
          <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <Card3D intensity={18} className="w-full">
                <div className="flex flex-col gap-5 p-2">
                  {/* Top Bar with Brand Indicator */}
                  <div className="flex items-center justify-between pb-3 ">
                    <div className="flex items-center gap-2.5">
                      {/* <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" /> */}
                      {/* <span className="text-xs font-bold text-white tracking-wider uppercase">
                        Axonva Growth Telemetry
                      </span> */}
                    </div>
                    {/* <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-[#ffa21f] border border-white/10">
                      LIVE BENCHMARK
                    </span> */}
                  </div>

                  {/* Central Animated Visual - 3D Logo Showcase */}
                  <div className="py-6 flex flex-col items-center justify-center relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#13103f] to-[#0a0827] border border-white/10">
                    <div className="absolute inset-0 bg-mesh-grid opacity-30" />
                    
                    {/* Glowing Logo */}
                    <div className="relative z-10 transform scale-110 sm:scale-125 my-4">
                      <Logo stacked height={80} />
                    </div>

                    <div className="relative z-10 mt-3 text-center px-4">
                      <span className="text-xs font-semibold text-slate-300">
                        High-Performance Digital Growth Engine
                      </span>
                    </div>
                  </div>

                  {/* Simulated Growth Telemetry Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex flex-col">
                      <span className="text-[10px] uppercase font-inter font-medium text-slate-400">
                        Paid Ads ROAS
                      </span>
                      <div className="text-xl font-sora font-extrabold text-white mt-0.5 flex items-center gap-1.5">
                        <span className="text-gradient-fire">5.2x</span>
                        <span className="text-[10px] text-emerald-400 font-bold">+340%</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">Google & Meta Funnels</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex flex-col">
                      <span className="text-[10px] uppercase font-inter font-medium text-slate-400">
                        Web & App Speed
                      </span>
                      <div className="text-xl font-sora font-extrabold text-white mt-0.5 flex items-center gap-1.5">
                        <span className="text-blue-400">99/100</span>
                        <span className="text-[10px] text-emerald-400 font-bold">Fast</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">Core Web Vitals Score</span>
                    </div>
                  </div>

                  {/* Bottom Notification Pill */}
                  {/* <div className="p-2.5 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#ff7a00]" />
                      Organized Into 5 Growth Categories
                    </span>
                    <span className="text-[11px] font-bold text-[#ffa21f]">10 Services</span>
                  </div> */}
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>



      {/* ========================================================
          2. TECH & CHANNEL MARQUEE STRIP
      ======================================================== */}
      <section className="relative py-6 bg-[#080721]/90 border-y border-white/10 overflow-hidden">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 shrink-0 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300/80"
          >
            {[
              'React.js',
              'Next.js 15 (SSR & SEO)',
              'React Native (iOS & Android)',
              'MERN Stack Architecture',
              'Meta Ads (Facebook & Instagram)',
              'Google Ads (Search & PMax)',
              'Shopify & Custom E-Commerce',
              'Amazon & Flipkart Marketplace',
              'Search Engine Optimization (SEO)',
              'AI Content & Automation Workflows',
              '3D Brand Identity Systems',
            ].map((tech, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span className="hover:text-white transition-colors">{tech}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 shrink-0 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300/80 ml-8"
          >
            {[
              'React.js',
              'Next.js 15 (SSR & SEO)',
              'React Native (iOS & Android)',
              'MERN Stack Architecture',
              'Meta Ads (Facebook & Instagram)',
              'Google Ads (Search & PMax)',
              'Shopify & Custom E-Commerce',
              'Amazon & Flipkart Marketplace',
              'Search Engine Optimization (SEO)',
              'AI Content & Automation Workflows',
              '3D Brand Identity Systems',
            ].map((tech, i) => (
              <span key={`clone-${i}`} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
                <span className="hover:text-white transition-colors">{tech}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          3. CATEGORIZED CORE SERVICES (The user's key vision)
      ======================================================== */}
      <section id="services" className="relative py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Axonva Core Services"
            highlight="Organized for Real Impact"
            description="We don't sell random disjointed services. We organize technology, performance advertising, e-commerce, and brand growth into structured strategic pillars for maximum synergy."
          />

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`font-inter font-semibold px-5 py-3 rounded-2xl text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ffa21f] via-[#ff5722] to-[#d40d0d] text-white shadow-xl shadow-[#ff5722]/30 scale-105 border border-white/20'
                      : 'bg-[#120f3d]/70 text-slate-300 hover:text-white hover:bg-[#1a1656] border border-white/10'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white/70" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner */}
          {(() => {
            const currentCat = SERVICE_CATEGORIES.find((c) => c.id === activeCategory);
            return (
              <div className="mb-10 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-inter font-medium text-[#ffa21f] uppercase tracking-wider">
                    {currentCat?.badge}
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-white mt-0.5">
                    {currentCat?.name}
                  </h3>
                  <p className="font-inter font-normal text-sm text-slate-300 mt-1">
                    {currentCat?.description}
                  </p>
                </div>
                <Button to="/contact" variant="outline" size="sm" icon={ArrowRight}>
                  Request Custom Quote
                </Button>
              </div>
            );
          })()}

          {/* Services Grid for Active Category */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {filteredServices.map((service) => {
                const IconComponent = iconMap[service.iconName] || Globe;

                return (
                  <Card3D key={service.id} intensity={14} className="h-full">
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Service Number & Icon Header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ffa21f]/20 via-[#ff5722]/30 to-[#d40d0d]/20 border border-[#ff5722]/40 flex items-center justify-center text-[#ff9a1f] shadow-md shadow-[#ff5722]/20">
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-[11px] font-mono font-bold text-[#ffa21f] uppercase tracking-widest">
                                Service {service.serviceNumber}
                              </span>
                              <h4 className="font-sora font-semibold text-xl text-white tracking-tight">
                                {service.title}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Short Description */}
                        <p className="text-sm text-slate-300 leading-relaxed mb-5">
                          {service.shortDesc}
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-2 mb-6">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                            Key Deliverables & Execution:
                          </span>
                          {service.deliverables.slice(0, 4).map((d, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a00] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills & CTA */}
                      <div className="pt-4 border-t border-white/10 mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs font-semibold text-[#ffa21f]">
                            {service.highlight}
                          </span>
                          <Link
                            to="/contact"
                            className="text-xs font-bold text-white hover:text-[#ffa21f] flex items-center gap-1 group transition-colors"
                          >
                            <span>Consult on this</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* View All Services Link */}
          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              Explore Full Breakdown of All 10 Services
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. DEDICATED PAGES SHOWCASE SPOTLIGHT
          (Spotlights for Tech Stack & Growth Pages)
      ======================================================== */}
      <section className="relative py-8 lg:py-12 bg-[#080721]/70 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Engineering & Growth"
            title="Explore Dedicated Portals for"
            highlight="Tech Stack & Growth Framework"
            description="Deep dive into our full-stack programming frameworks, cross-platform app toolchains, and proprietary scaling telemetry."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tech Stack Spotlight Card */}
            <Card3D intensity={12}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-inter font-medium text-[#ffa21f] uppercase tracking-wider">
                        Dedicated Portal
                      </span>
                      <h3 className="font-sora font-semibold text-2xl text-white">
                        Full-Stack Tech Stack
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    See our complete production engineering environment: HTML, CSS, JavaScript, React.js, Next.js 15 SSR, MERN Stack (MongoDB, Express, React, Node), and React Native cross-platform apps for iOS & Android.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Next.js 15', 'React Native (iOS & Android)', 'MERN Stack', 'Tailwind CSS', 'GraphQL / REST', 'OpenAI & AI Bots'].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400">
                    6 Enterprise Toolchains
                  </span>
                  <Button to="/tech-stack" variant="primary" size="sm" icon={ArrowRight}>
                    Open Tech Stack Page
                  </Button>
                </div>
              </div>
            </Card3D>

            {/* Growth Framework Spotlight Card */}
            <Card3D intensity={12}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-inter font-medium text-emerald-400 uppercase tracking-wider">
                        Telemetry & ROI
                      </span>
                      <h3 className="font-sora font-semibold text-2xl text-white">
                        Growth Framework & Motion Graph
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Explore our interactive 6-month growth simulation graph, proven playbooks for D2C E-Commerce, B2B lead generation, and local Google Map Pack domination.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Interactive ROAS Graph', '4-Step Roadmap', 'D2C Funnels', 'Google Maps 3-Pack', 'Meta Conversions API', '₹12Cr+ Scaled'].map((item) => (
                      <span
                        key={item}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">
                    Interactive Motion Graphs
                  </span>
                  <Button to="/growth" variant="primary" size="sm" icon={ArrowRight}>
                    Open Growth Page
                  </Button>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. IMPACT METRICS BAR
      ======================================================== */}
      <section className="relative py-16 bg-gradient-to-r from-[#120f3d] via-[#1a0e33] to-[#0c0827] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {IMPACT_METRICS.map((metric, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold text-white tracking-tight">
                  <span className="text-gradient-fire">{metric.value}</span>
                </div>
                <div className="text-sm font-inter font-medium text-white mt-1">
                  {metric.label}
                </div>
                <div className="text-xs font-inter font-normal text-slate-400 mt-0.5">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. CLIENT TESTIMONIALS (Social Proof)
      ======================================================== */}
      <section className="relative py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Founder Testimonials"
            title="Trusted by Fast-Growing Startups &"
            highlight="Modern Enterprises"
            description="Here is what founders and business leaders say about scaling with Axonva Ventures."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <Card3D key={idx} intensity={10} className="h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 text-[#ffb703] mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-base">★</span>
                      ))}
                      <span className="text-[11px] font-bold text-slate-400 ml-2 px-2 py-0.5 rounded bg-white/[0.05]">
                        {t.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                      “{t.quote}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="font-bold text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#ffa21f] font-medium">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. FREQUENTLY ASKED QUESTIONS (Accordion)
      ======================================================== */}
      <section className="relative py-8 lg:py-12 bg-[#080721]/60 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Clear Answers"
            title="Frequently Asked"
            highlight="Questions"
            description="Everything you need to know about partnering with Axonva Ventures."
          />

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0d0a33]/60 backdrop-blur-xl overflow-hidden transition-colors hover:border-[#ff5722]/40"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-lg bg-white/[0.05] text-[#ff7a00] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. HIGH IMPACT CTA BANNER
      ======================================================== */}
      <section className="relative py-8 lg:py-14 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#170e42] via-[#24113b] to-[#140b36] border border-[#ff5722]/40 shadow-[0_20px_60px_-15px_rgba(255,87,34,0.3)] relative overflow-hidden text-center">
            {/* Glowing orbs */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#ff5722]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#2563eb]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <Badge variant="fire" className="mb-4">
                Ready to Grow Online?
              </Badge>

              <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Let's Build Your Digital Presence & Scale Your Business.
              </h2>

              <p className="font-inter font-normal mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our founders and technical team for a free 30-minute growth roadmap. No obligations, zero fluff—just pure actionable strategy.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={openStrategyModal}
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full sm:w-auto shadow-xl shadow-[#ff5722]/40"
                >
                  Schedule Strategy Call
                </Button>

                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-sora font-semibold text-white bg-emerald-600/90 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 border border-emerald-400/30 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="mt-6 text-xs text-slate-400">
                Direct founder access · Quick 2-hour response · Free audit included
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
