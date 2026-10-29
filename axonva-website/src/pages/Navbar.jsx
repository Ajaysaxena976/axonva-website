import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import Logo from '../components/logo/Logo';
import Button from '../components/common/Button';
import { useModal } from '../context/useModal';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '../constants';

export default function Navbar() {
  const { openStrategyModal } = useModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060517]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-[#060517]/40 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with 3D animation */}
          <div className="flex items-center">
            <Logo height={42} />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isHash = link.path.includes('#');

              if (isHash) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    className="font-inter font-medium px-3.5 py-1.5 text-xs xl:text-sm text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `font-inter font-medium px-3.5 py-1.5 text-xs xl:text-sm transition-all rounded-full ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-[#ffa21f]/20 to-[#ff5722]/30 border border-[#ff5722]/40 shadow-sm shadow-[#ff5722]/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-300 hover:text-emerald-400 bg-white/[0.04] hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 transition-all cursor-pointer"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <Button
              onClick={openStrategyModal}
              variant="primary"
              size="sm"
              icon={ArrowRight}
              className="shadow-md shadow-[#ff5722]/30"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-b border-white/10 bg-[#060517]/98 backdrop-blur-2xl px-5 pt-4 pb-6 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isHash = link.path.includes('#');

                if (isHash) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-inter font-medium px-4 py-2.5 rounded-xl text-sm text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-inter font-medium px-4 py-2.5 rounded-xl text-sm transition-all ${
                        isActive
                          ? 'text-[#ffa21f] bg-[#ff5722]/15 border border-[#ff5722]/30'
                          : 'text-slate-200 hover:text-white hover:bg-white/[0.06]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openStrategyModal();
                  }}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-center"
                >
                  Book Strategy Call
                </Button>

                <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-2">
                  <a
                    href={`tel:${CONTACT_INFO.phoneClean}`}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-[#ffa21f]"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>
                  <span className="text-[11px] text-slate-500">Gurugram / Delhi NCR</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
