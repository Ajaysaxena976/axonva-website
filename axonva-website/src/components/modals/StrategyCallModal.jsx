import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Phone,
  User,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { useModal } from '../../context/useModal';
import { CONTACT_INFO } from '../../constants';
import Button from '../common/Button';
import Badge from '../common/Badge';

const TIME_SLOTS = [
  { id: 'anytime', label: 'Anytime Today', desc: 'Whenever Free', icon: '⚡' },
  { id: 'evening', label: 'Evening', desc: 'After 7:00 PM', icon: '🌙' },
  { id: 'morning', label: 'Morning', desc: '10:00 AM – 1:00 PM', icon: '🌅' },
  { id: 'afternoon', label: 'Afternoon', desc: '1:00 PM – 5:00 PM', icon: '☀️' },
  { id: 'tomorrow-morning', label: 'Tomorrow Morning', desc: '10:00 AM – 1:00 PM', icon: '📅' },
  { id: 'tomorrow-evening', label: 'Tomorrow Evening', desc: 'After 7:00 PM', icon: '🌆' },
];

const TOPICS = [
  'Website / App Development',
  'Meta & Google Performance Ads',
  'E-Commerce & Marketplaces',
  'Complete Growth Retainer',
];

export default function StrategyCallModal() {
  const { isOpen, closeStrategyModal } = useModal();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[0]);
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) return;

    // Clean phone number from constants
    const cleanNumber = CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, '');

    // Construct beautiful formatted WhatsApp message
    const message = `🔥 *New Strategy Call Request — Axonva Ventures*

👤 *Name:* ${name.trim()}
📞 *Phone / WhatsApp:* ${phone.trim()}
⏰ *Preferred Call Time:* ${selectedSlot.label} (${selectedSlot.desc})
🎯 *Interested In:* ${selectedTopic}

_Hello Axonva Team, I have booked a Strategy Consultation Call as per the details above. Please confirm the slot on WhatsApp._`;

    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setSelectedSlot(TIME_SLOTS[0]);
    setSelectedTopic(TOPICS[0]);
    closeStrategyModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeStrategyModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl bg-[#0d0a33] border border-[#ff5722]/40 p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(255,87,34,0.35)] overflow-hidden z-10 my-auto"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff5722]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2563eb]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeStrategyModal}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer z-20"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center flex flex-col items-center justify-center relative z-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 shadow-xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-sora font-semibold text-2xl text-white">
                  Strategy Call Requested!
                </h3>

                <p className="mt-2 text-sm text-slate-300 max-w-sm">
                  Thank you, <strong className="text-white">{name}</strong>! Your details have been formatted and sent to our WhatsApp desk.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#ffa21f] flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0 text-[#ff7a00]" />
                  <span>
                    Selected Slot: <strong>{selectedSlot.label}</strong> ({selectedSlot.desc})
                  </span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    onClick={handleReset}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Done
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                {/* Modal Title */}
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <Badge variant="fire">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-[#ffb703]" />
                        Free 30-Min Growth Consultation
                      </span>
                    </Badge>
                  </div>

                  <h3 className="font-sora font-semibold text-2xl text-white tracking-tight">
                    Book Your Strategy Call
                  </h3>
                  <p className="font-inter font-normal text-xs sm:text-sm text-slate-300 mt-1">
                    Fill this quick form. Your slot request will instantly send on WhatsApp.
                  </p>
                </div>

                {/* 1. Name & Phone */}
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-inter font-medium text-slate-300 block mb-1">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-inter font-medium text-slate-300 block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5722] focus:ring-1 focus:ring-[#ff5722] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Preferred Call Time Slot */}
                <div>
                  <label className="text-xs font-inter font-medium text-slate-300 block mb-1.5 flex items-center justify-between">
                    <span>When should we call you? (Preferred Time) *</span>
                    <span className="text-[10px] text-[#ffa21f] font-mono">1-Click Select</span>
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedSlot.id === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#ffa21f]/20 to-[#ff5722]/30 border-[#ff5722] shadow-md shadow-[#ff5722]/20'
                              : 'bg-white/[0.03] border-white/10 hover:border-white/25 hover:bg-white/[0.06]'
                          }`}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm">{slot.icon}</span>
                            <span className={`text-xs font-inter font-semibold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                              {slot.label}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 mt-0.5 font-inter">
                            {slot.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Quick Topic Pills */}
                <div>
                  <label className="text-xs font-inter font-medium text-slate-300 block mb-1.5">
                    What would you like to discuss?
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {TOPICS.map((topic) => {
                      const isSelected = selectedTopic === topic;
                      return (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`font-inter font-semibold px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#ff5722] text-white shadow-sm'
                              : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-700 hover:brightness-110 transition-all shadow-xl shadow-emerald-600/30 border border-emerald-400/30 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp & Confirm Call</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct founder desk · Zero spam · 100% confidential</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
