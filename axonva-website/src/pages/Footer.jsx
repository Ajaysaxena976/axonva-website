import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import {
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  WhatsAppIcon,
} from '../components/common/SocialIcons';
import Logo from '../components/logo/Logo';
import Badge from '../components/common/Badge';
import { useModal } from '../context/useModal';
import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  CORE_SERVICES,
} from '../constants';

export default function Footer() {
  const { openStrategyModal } = useModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: InstagramIcon, href: SOCIAL_LINKS.instagram, label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-500/40' },
    { icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-500/40' },
    { icon: FacebookIcon, href: SOCIAL_LINKS.facebook, label: 'Facebook', color: 'hover:text-indigo-400 hover:border-indigo-500/40' },
    { icon: TwitterIcon, href: SOCIAL_LINKS.twitter, label: 'X (Twitter)', color: 'hover:text-sky-400 hover:border-sky-500/40' },
    { icon: YoutubeIcon, href: SOCIAL_LINKS.youtube, label: 'YouTube', color: 'hover:text-red-400 hover:border-red-500/40' },
    { icon: WhatsAppIcon, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', color: 'hover:text-emerald-400 hover:border-emerald-500/40' },
  ];

  return (
    <footer className="relative bg-[#040310] border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Ambient background glow in footer */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#ff5722]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#2563eb]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Brand & Promise Card */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#120f3d]/80 via-[#0d0a2d]/80 to-[#190c30]/80 border border-white/10 backdrop-blur-xl mb-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#ff5722]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <Logo height={42} />
                <Badge variant="fire">Core Promise</Badge>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                “{SITE_CONFIG.corePromiseEn}”
              </blockquote>
              <p className="text-xs sm:text-sm text-[#ffa21f]/90 mt-2 font-medium">
                {SITE_CONFIG.corePromiseHi}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3.5">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 border border-emerald-400/30 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Consult</span>
              </a>

              <button
                type="button"
                onClick={openStrategyModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#ffa21f] via-[#ff5722] to-[#d40d0d] hover:brightness-110 transition-all shadow-lg shadow-[#ff5722]/30 border border-white/20 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Strategy Call</span>
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>{SITE_CONFIG.name}</span>
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              We are an integrated digital growth consultancy combining full-stack web engineering, native mobile apps, result-obsessed performance marketing, and creative 3D brand experiences.
            </p>

            {/* Tech Stack Mini Tags */}
            <div className="mt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Engineered With
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js', 'React.js', 'React Native (iOS & Android)', 'MERN Stack', 'Meta Ads', 'Google Ads', 'Shopify'].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {socialIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 text-slate-400 transition-all duration-200 ${item.color} hover:scale-110 hover:bg-white/[0.08]`}
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Web, Marketing & Branding (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
              Web & Digital Solutions
            </h4>
            <ul className="space-y-2.5 mb-6">
              {CORE_SERVICES.filter((s) => s.categoryId === 'web-digital').map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="text-[#ff9a1f] text-[10px]">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff3b1d]" />
              Marketing & Branding
            </h4>
            <ul className="space-y-2.5">
              {CORE_SERVICES.filter((s) => s.categoryId === 'marketing-branding').map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="text-[#ff7a00] text-[10px]">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Performance, Search & Marketplace (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
              Growth & Platforms
            </h4>
            <ul className="space-y-2.5">
              {CORE_SERVICES.filter(
                (s) =>
                  s.categoryId === 'performance' ||
                  s.categoryId === 'search-local' ||
                  s.categoryId === 'marketplace'
              ).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs sm:text-sm text-slate-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <span className="text-[#60a5fa] text-[10px]">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-[#ffa21f] hover:underline inline-flex items-center gap-1 pt-2"
                >
                  View All Services <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location Info (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Direct Contacts
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ff7a00] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address.full}</span>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2025–2026 {SITE_CONFIG.legalName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/services" className="hover:text-slate-300 transition-colors">
              Services
            </Link>
            <Link to="/tech-stack" className="hover:text-slate-300 transition-colors">
              Tech Stack
            </Link>
            <Link to="/growth" className="hover:text-slate-300 transition-colors">
              Growth
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-[#ff5722]/20 hover:border-[#ff5722]/50 hover:text-white text-slate-400 transition-all flex items-center gap-1.5 cursor-pointer ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
