import React from 'react';
import {
  TrendingUp,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';

import SectionHeader from '../components/common/SectionHeader';
import Card3D from '../components/common/Card3D';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import GrowthGraph from '../components/effects/GrowthGraph';
import {
  PROCESS_ROADMAP,
  IMPACT_METRICS,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from '../constants';

export default function GrowthPage() {
  const funnels = [
    {
      title: 'E-Commerce & D2C Brands',
      roas: '4.5x – 6.8x ROAS',
      focus: 'High Purchase Volume & Low CPA',
      steps: [
        'Shopify / Custom MERN 1-Click Checkout Store',
        'Meta Ads (High-CTR Video Hooks, Reels & Carousels)',
        'Google Performance Max & Shopping Feeds',
        'Abandoned Cart Automated WhatsApp & Email Recovery',
      ],
      icon: TrendingUp,
      color: '#ff5722',
    },
    {
      title: 'B2B & High-Ticket Lead Gen',
      roas: '₹180 – ₹450 Qualified CPL',
      focus: 'Pre-Vetted Executive Leads',
      steps: [
        'Conversion-Engineered Next.js Landing Pages',
        'Google High-Intent Search Ads & Negative Keywords',
        'Meta Lead Forms with Two-Step Verification',
        'Instant CRM Sync & 24/7 AI Chatbot Qualifier',
      ],
      icon: Target,
      color: '#3b82f6',
    },
    {
      title: 'Local Businesses & Retail Stores',
      roas: '3x – 5x Inbound Footfall & Calls',
      focus: 'Local Geographic Dominance',
      steps: [
        'Google Business Profile (GMB) Verification & Optimization',
        'Google Maps 3-Pack Local Citations & Geo-Media',
        'Automated 5-Star WhatsApp Review Collection Funnel',
        'Hyper-Local Meta Radius Ads (5-10km Around Store)',
      ],
      icon: Award,
      color: '#10b981',
    },
  ];

  return (
    <div className="relative py-6 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         

          <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-4xl text-white tracking-tight leading-tight">
            Our Growth Telemetry &{' '}
            <span className="text-gradient-fire block mt-1">
              Scalable Performance Framework
            </span>
          </h1>

          <p className="font-inter font-normal mt-5 text-[14px] text-slate-300 leading-relaxed">
            Stop guessing your marketing spend. We turn paid ad budgets and search algorithms into predictable, repeatable customer acquisition machines.
          </p>

          {/* Core Promise Card */}
          <div className="mt-6 inline-block p-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#120f3d]/90 to-[#1f0d36]/90 border border-[#ff5722]/30 shadow-lg text-xs sm:text-sm text-[#ffa21f] font-inter font-medium">
            “{SITE_CONFIG.corePromiseEn}”
          </div>
        </div>

        {/* 1. Interactive Growth Motion Graph */}
        <div className="mb-12">
          <SectionHeader
            title="Interactive 6-Month"
            highlight="Scaling Projection"
            description="Toggle between Paid Ads ROAS, Organic SEO Traffic, and Client Revenue to observe the simulated growth trajectory of an Axonva partner."
          />

          <GrowthGraph />
        </div>

        {/* 2. Key Impact Metrics */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-[#120f3d] via-[#1a0e33] to-[#0c0827] border border-white/10 text-center">
          <h3 className="font-sora font-semibold text-xl text-white mb-6">
            Documented Client Benchmarks
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-3xl sm:text-5xl font-sora font-extrabold text-gradient-fire">
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

        {/* 3. Industry-Specific Growth Playbooks */}
        <div className="mb-12">
          <SectionHeader
           
            title="Targeted Growth Playbooks for"
            highlight="Every Business Model"
            description="We deploy customized growth architectures tailored to your specific monetization model."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funnels.map((f, i) => (
              <Card3D key={i} intensity={12} className="h-full">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#ffa21f] mb-4">
                      <f.icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-sora font-semibold text-xl text-white mb-1">{f.title}</h3>
                    <div className="text-xs font-inter font-medium text-emerald-400 mb-2">
                      Benchmark: {f.roas}
                    </div>
                    <p className="text-xs text-slate-400 mb-5 font-normal">
                      Primary Objective: {f.focus}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Engineered Funnel Steps:
                      </span>
                      {f.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ff7a00] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Button to="/contact" variant="outline" size="sm" icon={ArrowRight} className="w-full justify-center">
                      Deploy This Playbook
                    </Button>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>

        {/* 4. The 4-Step Strategic Roadmap */}
        <div className="mb-20">
          <SectionHeader
            title="The Axonva 4-Step"
            highlight="Execution Roadmap"
            description="From discovery audit to market leadership—our standardized roadmap."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_ROADMAP.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5722]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="text-3xl font-sora font-extrabold text-gradient-fire mb-3 font-mono">
                  {step.step}
                </div>
                <h4 className="font-sora font-semibold text-lg text-white mb-2">{step.title}</h4>
                <p className="font-inter font-normal text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                  {step.description}
                </p>

                {idx < PROCESS_ROADMAP.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-[2px] bg-gradient-to-r from-[#ff5722] to-transparent z-10" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#170e42] via-[#24113b] to-[#140b36] border border-[#ff5722]/40 text-center relative overflow-hidden">
        
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Ready to Unlock Profitable Customer Acquisition?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Book a complimentary 30-minute growth audit with our senior advertising & tech strategists.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
              Claim Your Free Growth Audit
            </Button>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
