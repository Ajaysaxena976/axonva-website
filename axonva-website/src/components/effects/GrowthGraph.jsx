import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Award, ArrowUpRight, BarChart3 } from 'lucide-react';
import Card3D from '../common/Card3D';

const METRIC_TABS = [
  {
    id: 'roas',
    label: 'Paid Ads ROAS',
    icon: TrendingUp,
    badge: 'Meta & Google Ads',
    stat: '5.4x',
    statLabel: 'Peak Campaign ROAS',
    growth: '+280%',
    color: '#ff5722',
    data: [
      { month: 'Month 1', value: 1.8, height: 35, leads: '₹1.8L' },
      { month: 'Month 2', value: 2.6, height: 50, leads: '₹3.9L' },
      { month: 'Month 3', value: 3.4, height: 68, leads: '₹6.2L' },
      { month: 'Month 4', value: 4.2, height: 82, leads: '₹9.4L' },
      { month: 'Month 5', value: 4.9, height: 92, leads: '₹14.8L' },
      { month: 'Month 6', value: 5.4, height: 100, leads: '₹21.5L' },
    ],
  },
  {
    id: 'seo',
    label: 'Organic SEO Traffic',
    icon: Users,
    badge: 'Search Visibility',
    stat: '85,000+',
    statLabel: 'Monthly Search Impressions',
    growth: '+420%',
    color: '#3b82f6',
    data: [
      { month: 'Month 1', value: 1200, height: 25, leads: '1.2k' },
      { month: 'Month 2', value: 4800, height: 42, leads: '4.8k' },
      { month: 'Month 3', value: 14000, height: 60, leads: '14k' },
      { month: 'Month 4', value: 32000, height: 75, leads: '32k' },
      { month: 'Month 5', value: 58000, height: 88, leads: '58k' },
      { month: 'Month 6', value: 85000, height: 100, leads: '85k+' },
    ],
  },
  {
    id: 'revenue',
    label: 'Client Revenue Scaled',
    icon: DollarSign,
    badge: 'Full-Funnel Growth',
    stat: '₹12Cr+',
    statLabel: 'Total Value Generated',
    growth: '+310%',
    color: '#10b981',
    data: [
      { month: 'Month 1', value: 20, height: 30, leads: '₹20L' },
      { month: 'Month 2', value: 45, height: 48, leads: '₹45L' },
      { month: 'Month 3', value: 90, height: 65, leads: '₹90L' },
      { month: 'Month 4', value: 160, height: 78, leads: '₹1.6Cr' },
      { month: 'Month 5', value: 240, height: 89, leads: '₹2.4Cr' },
      { month: 'Month 6', value: 350, height: 100, leads: '₹3.5Cr' },
    ],
  },
];

export default function GrowthGraph() {
  const [activeTab, setActiveTab] = useState('roas');
  const currentMetric = METRIC_TABS.find((t) => t.id === activeTab) || METRIC_TABS[0];

  return (
    <div id="growth-graph" className="w-full">
      <Card3D intensity={12} className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#ff7a00]" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Simulated 6-Month Client Scaling Trajectory
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Real benchmark growth achieved by businesses under Axonva’s full-funnel strategy.
              </p>
            </div>

            {/* Metric Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-[#060517]/80 rounded-xl border border-white/10 shrink-0 overflow-x-auto">
              {METRIC_TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-[#ffa21f] to-[#ff5722] text-white shadow-md shadow-[#ff5722]/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                {currentMetric.statLabel}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 tracking-tight">
                {currentMetric.stat}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                Scale Velocity
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-0.5 flex items-center gap-1 tracking-tight">
                {currentMetric.growth}
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-gradient-to-br from-[#ff5722]/15 to-transparent border border-[#ff5722]/20">
              <span className="text-[11px] font-medium text-[#ffa21f] uppercase tracking-wider block">
                Target Timeline
              </span>
              <div className="text-sm font-semibold text-white mt-1">
                Full Funnel Flywheel in 90–180 Days
              </div>
            </div>
          </div>

          {/* Animated Motion Graph Visualization */}
          <div className="relative pt-6 pb-2">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-dashed border-slate-500 w-full" />
              <div className="border-b border-dashed border-slate-500 w-full" />
              <div className="border-b border-dashed border-slate-500 w-full" />
              <div className="border-b border-white/30 w-full" />
            </div>

            {/* Animated Bars & Points */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-6 gap-2 sm:gap-4 items-end h-56 pt-8 relative z-10"
              >
                {currentMetric.data.map((item, idx) => (
                  <div key={item.month} className="flex flex-col items-center h-full justify-end group">
                    {/* Floating Value Tooltip on hover */}
                    <div className="mb-2 text-[10px] sm:text-xs font-bold text-slate-300 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all bg-[#0a0830] px-2 py-0.5 rounded-md border border-white/10 shadow-md">
                      {item.leads}
                    </div>

                    {/* Bar Pillar */}
                    <div className="w-full max-w-[42px] bg-white/[0.04] rounded-t-xl overflow-hidden p-1 flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${item.height}%` }}
                        transition={{
                          duration: 0.8,
                          delay: idx * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="w-full rounded-t-lg transition-all group-hover:brightness-125 relative"
                        style={{
                          background:
                            idx === currentMetric.data.length - 1
                              ? 'linear-gradient(180deg, #ffa21f 0%, #ff5722 60%, #d40d0d 100%)'
                              : 'linear-gradient(180deg, rgba(255, 87, 34, 0.7) 0%, rgba(37, 99, 235, 0.4) 100%)',
                          boxShadow:
                            idx === currentMetric.data.length - 1
                              ? '0 0 20px rgba(255, 87, 34, 0.6)'
                              : 'none',
                        }}
                      >
                        {/* Shimmer top glow */}
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-white/70 rounded-t-lg" />
                      </motion.div>
                    </div>

                    {/* Month Label */}
                    <span className="text-[10px] sm:text-xs text-slate-400 mt-2 font-medium">
                      {item.month}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#ff9a1f]" />
              Data backed by actual client campaign telemetry
            </span>
            <span className="text-slate-500">Live Optimization Weekly</span>
          </div>
        </div>
      </Card3D>
    </div>
  );
}
