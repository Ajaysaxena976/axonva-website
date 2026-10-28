import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  ShoppingBag,
  Store,
  TrendingUp,
  Megaphone,
  Search,
  MapPin,
  Share2,
  Sparkles,
  Cpu,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Zap,
} from 'lucide-react';

import Card3D from '../components/common/Card3D';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import {
  SERVICE_CATEGORIES,
  CORE_SERVICES,
  SOCIAL_LINKS,
  SITE_CONFIG,
} from '../constants';

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

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  // Scroll to hash if user came from a link like /services#website-development
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    }
  }, [location.hash]);

  const filteredServices =
    selectedCategory === 'all'
      ? CORE_SERVICES
      : CORE_SERVICES.filter((s) => s.categoryId === selectedCategory);

  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="fire" className="mb-4">
            Full-Spectrum Digital Capabilities
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Our 10 Core Services,{' '}
            <span className="text-gradient-fire block mt-1">
              Organized for Exponential Growth
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            We don't offer generic isolated gigs. Every service at Axonva Ventures is built with high-velocity code, performance data, and modern design to generate measurable enterprise value.
          </p>

          {/* Core Promise reminder */}
          <div className="mt-6 inline-block p-3 px-5 rounded-xl bg-white/[0.04] border border-[#ff5722]/30 text-xs text-[#ffa21f] font-semibold">
            “{SITE_CONFIG.corePromiseEn}”
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-[#ffa21f] to-[#ff5722] text-white shadow-lg shadow-[#ff5722]/30 border border-white/20'
                : 'bg-[#120f3d]/70 text-slate-300 hover:text-white hover:bg-[#1a1656] border border-white/10'
            }`}
          >
            All Services ({CORE_SERVICES.length})
          </button>

          {SERVICE_CATEGORIES.map((cat) => {
            const count = CORE_SERVICES.filter((s) => s.categoryId === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#ffa21f] via-[#ff5722] to-[#d40d0d] text-white shadow-lg shadow-[#ff5722]/30 border border-white/20'
                    : 'bg-[#120f3d]/70 text-slate-300 hover:text-white hover:bg-[#1a1656] border border-white/10'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Services Showcase Cards */}
        <div className="space-y-12">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <Card3D intensity={8} className="w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Service Overview & Tech Stack */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Header with Number and Category */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ffa21f]/20 via-[#ff5722]/30 to-[#d40d0d]/20 border border-[#ff5722]/40 flex items-center justify-center text-[#ff9a1f] shadow-md shadow-[#ff5722]/20">
                            <IconComponent className="w-6 h-6" />
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-[#ffa21f]">
                                Service {service.serviceNumber}
                              </span>
                              <span className="text-slate-500 text-xs">•</span>
                              <span className="text-xs font-medium text-slate-400">
                                {service.categoryName}
                              </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        {/* Descriptions */}
                        <p className="text-sm sm:text-base font-semibold text-slate-200 mb-3">
                          {service.shortDesc}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                          {service.fullDesc}
                        </p>

                        {/* Tech Stacks Used */}
                        <div className="mb-6">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                            Technologies & Platforms:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-[#ffa21f]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Pill */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                          <Zap className="w-4 h-4 text-[#ff9a1f]" />
                          <span>{service.highlight}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            to={`/contact?service=${encodeURIComponent(service.title)}`}
                            variant="primary"
                            size="sm"
                            icon={ArrowRight}
                          >
                            Inquire for This
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right: Key Deliverables Panel */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                          <span className="text-xs font-bold text-white uppercase tracking-wider">
                            What You Receive (Deliverables)
                          </span>
                          <span className="text-[10px] font-mono text-[#ffa21f]">
                            100% Guaranteed
                          </span>
                        </div>

                        <ul className="space-y-3">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10">
                        <a
                          href={`${SOCIAL_LINKS.whatsapp}&text=${encodeURIComponent(`Hi Axonva, I am interested in ${service.title}. Let's discuss!`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-xs font-bold text-slate-300 hover:text-emerald-400 transition-all cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Quick WhatsApp Inquiry for this Service</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170e42] via-[#24113b] to-[#140b36] border border-[#ff5722]/40 text-center relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Need a Custom Growth Package Combining Multiple Services?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Most of our successful clients bundle Website/App Development + Meta & Google Performance Ads + SEO for unified scaling.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Build a Custom Growth Retainer
            </Button>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct Founder WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
