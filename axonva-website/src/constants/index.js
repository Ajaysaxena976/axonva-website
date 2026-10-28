/**
 * Axonva Ventures - Centralized Site Configuration & Data Constants
 * Edit values here to update text, contacts, links, services, or tech stack site-wide.
 */

export const SITE_CONFIG = {
  name: "Axonva Ventures",
  shortName: "Axonva",
  legalName: "Axonva Ventures Pvt. Ltd.",
  tagline: "Building Digital Presence. Driving Measurable Growth.",
  corePromiseEn: "We help businesses build their digital presence, reach the right audience and grow online.",
  // corePromiseHi: "हम बिज़नेस को उनकी डिजिटल पहचान बनाने, सही ऑडियंस तक पहुँचने और ऑनलाइन तेज़ी से ग्रो करने में मदद करते हैं।",
  consultancyType: "Full-Stack Tech & Performance Growth Consultancy",
  yearEstablished: "2024",
};

/**
 * Contact Information & Social Profiles
 * Centralized for 1-click site-wide edits.
 */
export const CONTACT_INFO = {
  email: "axonvaventures@gmail.com",
  supportEmail: "axonvaventures@gmail.com",
  phone: "+91 7417114056",
  phoneClean: "+917417114056",
  whatsappNumber: "+917417114056",
  whatsappMessage: "Hi Axonva Ventures, I want to discuss a project for my business growth.",
  address: {
    city: "Delhi NCR / Gurugram",
    state: "Haryana",
    country: "India",
    full: "DLF Cyber City, Sector 24, Gurugram, Delhi NCR 122002, India",
  },
  workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
  supportHours: "24/7 Client Support & Campaign Monitoring",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/axonvaventures",
  linkedin: "https://linkedin.com/company/axonva-ventures",
  facebook: "https://facebook.com/axonvaventures",
  twitter: "https://x.com/axonvaventures",
  youtube: "https://youtube.com/@axonvaventures",
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`,
  github: "https://github.com/axonva-ventures",
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Tech Stack", path: "/tech-stack" },
  { label: "Growth", path: "/growth" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
];

/**
 * 5 Strategic Service Categories organizing the Core Services
 * 1. Web & Digital Solutions
 * 2. Digital Marketing & Branding
 * 3. Performance Marketing
 * 4. Search & Local Growth
 * 5. Marketplace Management
 */
export const SERVICE_CATEGORIES = [
  {
    id: "web-digital",
    name: "Web & Digital Solutions",
    badge: "Engineering & AI",
    description: "Web development, high-converting e-commerce systems, and cutting-edge AI automation.",
    gradient: "from-amber-400 to-orange-500",
    color: "#ff7a00",
  },
  {
    id: "marketing-branding",
    name: "Digital Marketing & Branding",
    badge: "Reach & Brand Authority",
    description: "Omnichannel digital strategies, viral social media management, and 3D visual identities.",
    gradient: "from-orange-500 to-rose-600",
    color: "#ff3b1d",
  },
  {
    id: "performance",
    name: "Performance Marketing",
    badge: "ROI & Revenue Acceleration",
    description: "Result-driven advertising through Google Ads & Meta Ads for high ROAS and quality leads.",
    gradient: "from-rose-500 to-red-600",
    color: "#d40d0d",
  },
  {
    id: "search-local",
    name: "Search & Local Growth",
    badge: "Google Dominance",
    description: "Top organic Google rankings, technical SEO, and Google Business Profile Maps 3-Pack setup.",
    gradient: "from-blue-500 to-indigo-600",
    color: "#2563eb",
  },
  {
    id: "marketplace",
    name: "Marketplace Management",
    badge: "Marketplace Growth",
    description: "End-to-end management for Amazon, Flipkart, and Meesho to scale multi-channel seller revenue.",
    gradient: "from-purple-500 to-amber-500",
    color: "#7c3aed",
  },
];

/**
 * Core Services of Axonva Ventures organized into the 5 Categories
 */
export const CORE_SERVICES = [
  // -------------------------------------------------------------
  // 1. Web & Digital Solutions
  // -------------------------------------------------------------
  {
    id: "website-development",
    serviceNumber: "01",
    categoryId: "web-digital",
    categoryName: "Web & Digital Solutions",
    title: "Website Development",
    shortDesc: "Business websites, high-converting landing pages, corporate websites, portfolio websites and tailored web solutions.",
    fullDesc: "We design and develop ultrafast, responsive, and search-optimized web applications using modern web standards. Built from the ground up with clean architecture, stunning animations, and mobile-first responsiveness.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "MERN Stack", "Tailwind CSS"],
    deliverables: [
      "Custom Corporate & Business Websites",
      "High-Converting Landing Pages",
      "Dynamic Portfolio & Showcase Sites",
      "Fullstack Web Apps with MERN (MongoDB, Express, React, Node)",
      "Next.js Server-Side Rendered (SSR) & SEO-First Platforms",
      "Responsive on all screen sizes (Mobile, Tablet, 4K)",
    ],
    highlight: "Speed, Scalability & SEO Optimized",
    iconName: "Globe",
    imageName: "service-web-development.webp",
  },
  {
    id: "ecommerce-solutions",
    serviceNumber: "02",
    categoryId: "web-digital",
    categoryName: "Web & Digital Solutions",
    title: "E-Commerce Solutions",
    shortDesc: "E-commerce website development, product catalogues, marketplace setup and online selling solutions.",
    fullDesc: "Turn visitors into buyers with smooth, high-converting digital storefronts. We engineer bespoke e-commerce platforms with automated inventory, dynamic product catalogues, secure checkouts, and seamless payment gateway integrations.",
    techStack: ["Shopify", "Custom MERN Store", "WooCommerce", "Razorpay / Stripe", "Redis", "Cloudinary"],
    deliverables: [
      "Custom E-Commerce Store Design & Development",
      "Product Cataloguing & Variant Architecture",
      "1-Click Checkout & Multi-Currency Payment Gateways",
      "Automated Order Management & Shipping Integrations",
      "Abandoned Cart Recovery Funnels",
    ],
    highlight: "High Conversion Rate & Instant Checkout",
    iconName: "ShoppingBag",
    imageName: "service-ecommerce-solutions.webp",
  },
  {
    id: "ai-digital-solutions",
    serviceNumber: "03",
    categoryId: "web-digital",
    categoryName: "Web & Digital Solutions",
    title: "AI & Digital Solutions",
    shortDesc: "AI-powered content creation, creative solutions, automation and other digital tools to improve business productivity and growth.",
    fullDesc: "Harness artificial intelligence to 10x your business productivity and output. We implement intelligent automated lead nurturing, AI copywriting engines, customer support bots, and automated workflows that save hundreds of hours.",
    techStack: ["OpenAI / GPT-4o", "Claude", "Make.com / Zapier", "n8n Automation", "Custom AI Chatbots", "Voice Agents"],
    deliverables: [
      "Custom AI Chatbots for 24/7 Website Lead Capture",
      "Automated WhatsApp & CRM Lead Follow-up Workflows",
      "AI-Powered Content & Copywriting Engines",
      "Automated Invoicing & Operational Workflows",
      "AI Strategy Advisory for Business Efficiency",
    ],
    highlight: "10x Productivity · Zero Delay Automation · Smart AI",
    iconName: "Cpu",
    imageName: "service-ai-solutions.webp",
  },
  {
    id: "mobile-app-development",
    serviceNumber: "03.1",
    categoryId: "web-digital",
    categoryName: "Web & Digital Solutions",
    title: "Mobile App Development (iOS & Android)",
    shortDesc: "Native performance cross-platform mobile apps for iOS and Android (non-iOS) built with React Native.",
    fullDesc: "Reach customers in their pockets with fluid, high-performance mobile applications built with React Native. Single clean codebase running natively on both Apple iOS (iPhone/iPad) and Android platforms.",
    techStack: ["React Native", "Expo", "iOS / Apple SDK", "Android (Non-iOS)", "Redux / Zustand", "Firebase"],
    deliverables: [
      "Cross-Platform iOS & Android Apps",
      "App Store & Google Play Store Publishing",
      "Push Notifications & Offline Sync",
      "Payment Gateway & In-App Purchases",
      "Smooth 60FPS Native UI Interactions",
    ],
    highlight: "Single Codebase · Native 60 FPS · Both App Stores",
    iconName: "Smartphone",
    imageName: "service-mobile-apps.webp",
  },

  // -------------------------------------------------------------
  // 2. Digital Marketing & Branding
  // -------------------------------------------------------------
  {
    id: "digital-marketing",
    serviceNumber: "04",
    categoryId: "marketing-branding",
    categoryName: "Digital Marketing & Branding",
    title: "Digital Marketing",
    shortDesc: "Complete online marketing strategy, social media marketing, content marketing and brand promotion.",
    fullDesc: "A complete 360-degree online roadmap tailored to your industry. We synchronize brand storytelling, multichannel distribution, email nurture sequences, and influencer collaborations to capture loyal customers.",
    techStack: ["Omnichannel Funnels", "Content Engines", "Email Marketing", "Brand Positioning", "Growth Hacking"],
    deliverables: [
      "Full Digital Presence Architecture",
      "Target Audience Persona & Competitor Research",
      "Multi-Channel Content Strategy & Calendar",
      "Brand Promotion Campaigns & PR Outreach",
      "Email & WhatsApp Automated Nurture Sequences",
    ],
    highlight: "360° Digital Visibility & Customer Acquisition",
    iconName: "Megaphone",
    imageName: "service-digital-marketing.webp",
  },
  {
    id: "social-media-management",
    serviceNumber: "05",
    categoryId: "marketing-branding",
    categoryName: "Digital Marketing & Branding",
    title: "Social Media Management",
    shortDesc: "Instagram, Facebook and LinkedIn management, content planning, creatives, captions, reels and audience engagement.",
    fullDesc: "Transform social channels into an active community and client acquisition asset. From viral Reels to thought leadership carousels on LinkedIn, we script, design, schedule, and interact to build genuine brand loyalty.",
    techStack: ["Instagram", "LinkedIn", "Facebook", "Meta Business Suite", "Canva Pro", "Adobe Premiere"],
    deliverables: [
      "Custom Monthly Content Calendar & Aesthetic Feed Grid",
      "High-Retention Reels, Shorts & Motion Creatives",
      "Persuasive Hindi & English Captions + Hashtag Vault",
      "Active Community Management & DM Lead Triage",
      "LinkedIn B2B Founder Branding & Authority Articles",
    ],
    highlight: "Viral Reels · Authentic Community · Active Engagement",
    iconName: "Share2",
    imageName: "service-social-media.webp",
  },
  {
    id: "branding-creative",
    serviceNumber: "06",
    categoryId: "marketing-branding",
    categoryName: "Digital Marketing & Branding",
    title: "Branding & Creative Solutions",
    shortDesc: "Logo design, brand identity, social media creatives, advertising creatives, product graphics and marketing materials.",
    fullDesc: "Give your business an unmistakable visual soul. We design cohesive visual identities—modern 3D-styled logos, brand books, typography systems, packaging, and high-impact marketing collateral that command premium pricing.",
    techStack: ["Adobe Illustrator", "Photoshop", "Figma", "Blender 3D", "Brand Guidelines Book"],
    deliverables: [
      "Modern 3D & Vector Logo Design with Vector Source Files",
      "Brand Guidelines (Color Palettes, Typography, Tone of Voice)",
      "Social Media Templates & Banner Systems",
      "High-CTR Performance Ad Creatives & Static Posters",
      "Business Cards, Letterheads & Pitch Deck Design",
    ],
    highlight: "Unforgettable Brand Identity & 3D Visual Style",
    iconName: "Sparkles",
    imageName: "service-branding-creative.webp",
  },

  // -------------------------------------------------------------
  // 3. Performance Marketing
  // -------------------------------------------------------------
  {
    id: "performance-marketing",
    serviceNumber: "07",
    categoryId: "performance",
    categoryName: "Performance Marketing",
    title: "Google Ads & Meta Ads (Performance Marketing)",
    shortDesc: "Result-driven advertising through Google Ads & Meta Ads, including lead generation, sales campaigns, retargeting and campaign optimization.",
    fullDesc: "Stop burning ad budgets on vanity metrics. We construct scientifically engineered paid ad funnels across Meta (Facebook & Instagram) and Google Search, Display & Performance Max to produce predictable leads and high ROAS.",
    techStack: ["Meta Ads Manager", "Google Ads (PMax & Search)", "Meta Pixel & CAPI", "Google Tag Manager", "GA4 Analytics"],
    deliverables: [
      "Google Ads (Search, Performance Max, Display & YouTube)",
      "Meta Ads (High-converting Instagram & Facebook campaigns)",
      "Targeted Lead Generation & Sales Funnels",
      "Advanced Dynamic Retargeting & Custom Audiences",
      "A/B Creative Split Testing & Copy Optimization",
      "Transparent Weekly ROAS, CPA & CAC Telemetry Reporting",
    ],
    highlight: "Predictable Leads · Scalable ROAS · Zero Ad Waste",
    iconName: "TrendingUp",
    imageName: "service-performance-marketing.webp",
  },

  // -------------------------------------------------------------
  // 4. Search & Local Growth
  // -------------------------------------------------------------
  {
    id: "search-engine-optimization",
    serviceNumber: "08",
    categoryId: "search-local",
    categoryName: "Search & Local Growth",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "On-page SEO, technical SEO, local SEO, keyword optimization and Google search visibility.",
    fullDesc: "Rank on Google where high-intent buyers are searching. We fix technical crawl errors, optimize page speed, craft keyword-rich content, build high-authority backlinks, and establish topical authority for lasting organic traffic.",
    techStack: ["Google Search Console", "Semrush", "Ahrefs", "Schema.org", "Core Web Vitals", "Screaming Frog"],
    deliverables: [
      "In-Depth Technical SEO Audits & Core Web Vitals Fixes",
      "Commercial & Informational Keyword Mapping",
      "On-Page Content & Meta Tag Optimization",
      "Authority Backlink Strategy & Digital PR",
      "Competitor SERP Dominance & Keyword Ranking Reports",
    ],
    highlight: "Rank #1 on Google · Free Consistent Organic Traffic",
    iconName: "Search",
    imageName: "service-seo.webp",
  },
  {
    id: "google-business-profile",
    serviceNumber: "09",
    categoryId: "search-local",
    categoryName: "Search & Local Growth",
    title: "Google Business Profile & Local Growth",
    shortDesc: "Google Business Profile setup, optimization, local search visibility, review management and local SEO.",
    fullDesc: "Capture customers right in your geographical area. We set up, verify, and hyper-optimize your Google Business Profile (formerly GMB), helping your business appear in the coveted Google Maps 3-Pack whenever nearby customers search.",
    techStack: ["Google Business Profile", "Google Maps 3-Pack", "Local Citations", "Geo-Tagged Media", "Review Funnels"],
    deliverables: [
      "Google Business Profile Verification & Optimization",
      "Local Map Pack 3-Pack Ranking Strategy",
      "Geo-Tagged Images & Weekly Keyword Updates",
      "Automated 5-Star Customer Review Generation Funnel",
      "Local Citation & NAP (Name, Address, Phone) Consistency",
    ],
    highlight: "Local Google Maps Domination & Inbound Calls",
    iconName: "MapPin",
    imageName: "service-local-seo.webp",
  },

  // -------------------------------------------------------------
  // 5. Marketplace Management
  // -------------------------------------------------------------
  {
    id: "marketplace-management",
    serviceNumber: "10",
    categoryId: "marketplace",
    categoryName: "Marketplace Management",
    title: "Amazon, Flipkart & Meesho (Marketplace Management)",
    shortDesc: "Amazon, Flipkart, Meesho and other marketplace support including catalogue management, listings, A+ content and account growth.",
    fullDesc: "Dominate India's largest online marketplaces. Our marketplace specialists handle end-to-end account onboarding, high-ranking product listings, A+ Brand Story design, keyword indexing, reviews strategy, and daily order operations.",
    techStack: ["Amazon Seller Central", "Flipkart Seller Hub", "Meesho Supplier Panel", "Helium 10", "A+ Enhanced Brand Content"],
    deliverables: [
      "Amazon, Flipkart & Meesho Seller Onboarding & Storefront Setup",
      "SEO Keyword-Optimized Product Titles, Bullet Points & Descriptions",
      "High-Converting A+ Content & Enhanced Brand Graphics",
      "Catalogue Management, Variations & Inventory Syncing",
      "Sponsored Products Ads & Daily Account Health Monitoring",
      "Negative Review Mitigation & Buy Box Optimization",
    ],
    highlight: "Amazon Choice & Flipkart Assured Ready",
    iconName: "Store",
    imageName: "service-marketplace-management.webp",
  },
];

/**
 * Modern Tech Stacks explicitly highlighted
 */
export const TECH_STACKS = {
  frontend: [
    { name: "React.js", level: "Core", tag: "UI Engineering" },
    { name: "Next.js", level: "SSR / SSG", tag: "Fast SEO Web" },
    { name: "JavaScript (ES6+)", level: "Language", tag: "Interactive logic" },
    { name: "HTML5 & CSS3", level: "Semantic", tag: "Web Standards" },
    { name: "Tailwind CSS", level: "Styling", tag: "Modern Design" },
    { name: "Framer Motion", level: "Motion", tag: "3D & Smooth FX" },
  ],
  mobile: [
    { name: "React Native", level: "Framework", tag: "Cross-Platform" },
    { name: "Apple iOS", level: "Target OS", tag: "App Store" },
    { name: "Android (Non-iOS)", level: "Target OS", tag: "Google Play" },
    { name: "Expo", level: "Toolchain", tag: "Rapid Native Apps" },
  ],
  backend: [
    { name: "MERN Stack", level: "Fullstack", tag: "Mongo, Express, React, Node" },
    { name: "Node.js", level: "Runtime", tag: "High Concurrency" },
    { name: "MongoDB", level: "Database", tag: "NoSQL Scale" },
    { name: "REST & GraphQL", level: "APIs", tag: "Secure Microservices" },
  ],
  marketingAndAds: [
    { name: "Meta Ads (FB/Insta)", level: "Advertising", tag: "Lead & Sales Campaigns" },
    { name: "Google Ads", level: "Advertising", tag: "Search, PMax, YouTube" },
    { name: "Google Analytics 4", level: "Analytics", tag: "Full-Funnel Tracking" },
    { name: "Semrush & Ahrefs", level: "SEO Tools", tag: "Keyword Dominance" },
  ],
  ecommercePlatforms: [
    { name: "Shopify", level: "E-Com", tag: "Custom D2C Stores" },
    { name: "Amazon Marketplace", level: "Marketplace", tag: "A+ Content & Seller Ops" },
    { name: "Flipkart", level: "Marketplace", tag: "India E-Commerce" },
    { name: "Meesho", level: "Marketplace", tag: "Tier 2/3 Audience" },
  ],
  aiAndAutomation: [
    { name: "OpenAI & Gemini", level: "AI Intelligence", tag: "Creative & Content AI" },
    { name: "n8n / Zapier", level: "Automation", tag: "Workflow Pipeline" },
    { name: "Custom Chatbots", level: "Support", tag: "24/7 AI Lead Assistant" },
  ],
};

/**
 * Key Impact Metrics & Social Proof
 */
export const IMPACT_METRICS = [
  { value: "120+", label: "Projects Delivered", suffix: "", detail: "Web, Apps, Stores & Brand Identities" },
  { value: "4.8x", label: "Average ROAS", suffix: "", detail: "Profitable scaling across Meta & Google Ads" },
  { value: "₹12Cr+", label: "Client Revenue Generated", suffix: "", detail: "Through e-commerce & high-ticket lead gen" },
  { value: "99.4%", label: "Client Retention Rate", suffix: "", detail: "Long-term growth partnership mindset" },
];

/**
 * 4-Step Strategic Roadmap
 */
export const PROCESS_ROADMAP = [
  {
    step: "01",
    title: "Discovery & Digital Audit",
    description: "We deep-dive into your business model, customer psychology, competitors, and existing digital assets to identify your biggest revenue bottlenecks.",
    icon: "Compass",
  },
  {
    step: "02",
    title: "Strategy & 3D Prototyping",
    description: "We formulate a tailored action plan—wireframing user journeys, architecting tech stacks, and designing scroll-stopping brand aesthetics.",
    icon: "Layout",
  },
  {
    step: "03",
    title: "Agile Build & Campaign Launch",
    description: "Our engineers write clean, scalable code while our growth specialists configure conversion-focused ad funnels and SEO foundations.",
    icon: "Zap",
  },
  {
    step: "04",
    title: "Continuous Optimization & Scaling",
    description: "We monitor data daily, A/B test creatives and pages, lower acquisition costs, and scale your brand to market leadership.",
    icon: "TrendingUp",
  },
];

/**
 * Client Testimonials
 */
export const TESTIMONIALS = [
  {
    name: "Vikram Singhania",
    role: "Founder & CEO",
    company: "LuxeVeda Lifestyle (D2C)",
    quote: "Axonva Ventures completely overhauled our Shopify store and took over our Meta Ads. Within 90 days, our monthly revenue doubled and our ROAS jumped from 2.1x to 4.9x. Their design aesthetics and tech speed are unbeatable.",
    rating: 5,
    tag: "E-Commerce & Meta Ads",
  },
  {
    name: "Ananya Sharma",
    role: "Co-Founder",
    company: "SkillSphere EdTech",
    quote: "Building our cross-platform React Native app with Axonva was the best decision we made. Both iOS and Android versions launched ahead of schedule with zero critical bugs. True engineering professionals.",
    rating: 5,
    tag: "React Native App Development",
  },
  {
    name: "Rohit Agarwal",
    role: "Managing Director",
    company: "Agarwal Industrial Logistics",
    quote: "We needed a modern, authoritative corporate web presence and local Google visibility. Axonva built our Next.js corporate portal and ranked us #1 for all high-value keywords in Delhi NCR.",
    rating: 5,
    tag: "Web Dev & Google SEO",
  },
];

/**
 * Frequently Asked Questions
 */
export const FAQS = [
  {
    question: "How is Axonva Ventures different from typical digital agencies?",
    answer: "Unlike traditional agencies that treat services as disjointed checklists, Axonva functions as an integrated growth consultancy. We unite world-class web engineering (Next.js, React Native, MERN) with hardcore performance marketing (Google & Meta Ads) and creative branding. You get one dedicated growth team focused on revenue, not just vanity metrics.",
  },
  {
    question: "Do you develop both iOS and Android mobile apps?",
    answer: "Yes! We specialize in React Native development, allowing us to build a single high-performance codebase that deploys natively to both Apple iOS (iPhone/iPad) and Android devices, saving you up to 40% in development costs while maintaining 60 FPS native feel.",
  },
  {
    question: "How do you manage client ad spend and transparency?",
    answer: "Complete 100% transparency. Your Meta and Google ad budgets are spent directly through your own ad accounts—you always retain full ownership. We provide live interactive dashboards and weekly strategy meetings so you see exact CPA, ROAS, and revenue generated.",
  },
  {
    question: "Can we hire you for custom website development alone?",
    answer: "Absolutely. Whether you need a lightning-fast Next.js landing page, an enterprise corporate website, or a fullstack custom MERN web application, our tech engineering team will build it to the highest modern standards.",
  },
  {
    question: "What is your project turnaround time?",
    answer: "High-impact landing pages take 5–10 business days; full corporate websites typically take 2–3 weeks; custom e-commerce or React Native mobile applications take 4–6 weeks. We work with strict agile sprints and keep you updated at every stage.",
  },
];

/**
 * Asset Manifest
 * Complete list of image assets in the public directory (all .webp).
 * The user can drop or replace these anytime in /public.
 */
export const ASSETS_MANIFEST = [
  { name: "logo.webp", path: "/logo.webp", desc: "Main brand 3D glowing logo (512x512 or 1024x1024)" },
  { name: "favicon.webp", path: "/favicon.webp", desc: "Browser tab icon (64x64 or 128x128)" },
  { name: "hero-preview.webp", path: "/hero-preview.webp", desc: "Hero section visual preview" },
  { name: "service-web-development.webp", path: "/service-web-development.webp", desc: "Web dev illustration or screenshot" },
  { name: "service-mobile-apps.webp", path: "/service-mobile-apps.webp", desc: "Mobile app showcase mockup" },
  { name: "service-ecommerce-solutions.webp", path: "/service-ecommerce-solutions.webp", desc: "E-commerce dashboard/storefront mockup" },
  { name: "service-performance-marketing.webp", path: "/service-performance-marketing.webp", desc: "Meta/Google ads growth graphs" },
  { name: "service-digital-marketing.webp", path: "/service-digital-marketing.webp", desc: "Digital marketing campaign preview" },
  { name: "service-seo.webp", path: "/service-seo.webp", desc: "Google #1 ranking graph illustration" },
  { name: "service-local-seo.webp", path: "/service-local-seo.webp", desc: "Google Maps 3-pack local presence" },
  { name: "service-social-media.webp", path: "/service-social-media.webp", desc: "Social media reels and feed mockup" },
  { name: "service-branding-creative.webp", path: "/service-branding-creative.webp", desc: "Brand identity and 3D logo showcase" },
  { name: "service-marketplace-management.webp", path: "/service-marketplace-management.webp", desc: "Amazon / Flipkart seller dashboard mockup" },
  { name: "service-ai-solutions.webp", path: "/service-ai-solutions.webp", desc: "AI automation and chatbot interface" },
];
