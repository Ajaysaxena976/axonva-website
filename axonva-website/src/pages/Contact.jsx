import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Zap,
} from 'lucide-react';

import Card3D from '../components/common/Card3D';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  CORE_SERVICES,
  SITE_CONFIG,
} from '../constants';

export default function Contact() {
  const location = useLocation();

  const getInitialService = () => {
    try {
      const params = new URLSearchParams(location.search);
      const serviceParam = params.get('service');
      if (serviceParam) return serviceParam;
    } catch {
      // Fallback
    }
    return 'Website Development';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: getInitialService(),
    budget: '₹50,000 – ₹1,50,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="fire" className="mb-4">
            Direct Founder Access
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Let’s Build Something{' '}
            <span className="text-gradient-fire block mt-1">
              Remarkable Together.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind, need a tech team, or want to scale your ROAS with Google & Meta ads? Send us your brief and we will reply within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts & Value Props */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              {/* Direct Info Card */}
              <div className="p-6 rounded-3xl bg-[#0e0b36]/80 border border-white/10 shadow-xl backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722]" />
                  Direct Consultation Channels
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722]/50 hover:bg-[#ff5722]/10 transition-all group"
                  >
                    <Mail className="w-5 h-5 text-[#ff7a00] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Email Inquiry
                      </span>
                      <span className="font-semibold text-white break-all">
                        {CONTACT_INFO.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`tel:${CONTACT_INFO.phoneClean}`}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ff5722]/50 hover:bg-[#ff5722]/10 transition-all group"
                  >
                    <Phone className="w-5 h-5 text-[#ff7a00] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Direct Phone / Call
                      </span>
                      <span className="font-semibold text-white">
                        {CONTACT_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all group"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                        Instant WhatsApp Chat
                      </span>
                      <span className="font-semibold text-white">
                        Chat directly with our team (Instant Reply)
                      </span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Headquarters
                      </span>
                      <span>{CONTACT_INFO.address.full}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300">
                    <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Operating Hours
                      </span>
                      <span>{CONTACT_INFO.workingHours}</span>
                      <span className="text-[11px] text-[#ffa21f] block mt-0.5 font-medium">
                        {CONTACT_INFO.supportHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Guarantee Pill */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#ff5722]/15 to-transparent border border-[#ff5722]/30 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#ff7a00] shrink-0" />
                <div className="text-xs text-slate-200">
                  <strong className="text-white block">2-Hour First Response Guarantee</strong>
                  We value your time. No robotic automated queues—talk to founders and real engineers.
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              {SITE_CONFIG.legalName} · Non-Disclosure Agreement (NDA) available upon request.
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <Card3D intensity={10} className="w-full">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 max-w-md">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior growth and engineering leads have received your details and will get in touch within 2 business hours.
                  </p>
                  <div className="mt-8 flex gap-3">
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="secondary"
                      size="sm"
                    >
                      Send Another Inquiry
                    </Button>
                    <a
                      href={SOCIAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ping us on WhatsApp Now</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-3 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        Project & Growth Brief
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Fill in your details below for a tailored proposal.
                      </p>
                    </div>
                    <Badge variant="fire">Fast Track</Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Work / Personal Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Company or Startup Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Ventures / Stealth"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Needed */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Primary Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c092c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors cursor-pointer"
                      >
                        {CORE_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.serviceNumber} - {s.title}
                          </option>
                        ))}
                        <option value="Full Growth Retainer (Tech + Ads)">
                          Full Retainer (Tech + Ads + SEO)
                        </option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0c092c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] transition-colors cursor-pointer"
                      >
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                        <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
                        <option value="₹1,50,000 – ₹3,00,000">₹1,50,000 – ₹3,00,000</option>
                        <option value="₹3,00,000+ (Enterprise)">₹3,00,000+ (Enterprise Retainer)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Tell us about your project & goals *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your requirements (e.g. We need a modern Next.js website and high-converting Meta Ads for our D2C brand...)"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      className="w-full justify-center text-base shadow-xl shadow-[#ff5722]/35"
                    >
                      Submit Consultation Request
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    🔒 We respect your privacy. No spam. 100% confidential.
                  </p>
                </form>
              )}
            </Card3D>
          </div>
        </div>
      </div>
    </div>
  );
}
