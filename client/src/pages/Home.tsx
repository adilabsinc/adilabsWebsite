import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  ArrowRight, 
  Database,
  Settings,
  Zap,
  CalendarCheck,
  Briefcase,
  Handshake,
  Cpu,
  Clock,
  FileSearch,
  Building2,
  ShieldAlert
} from 'lucide-react';
import CountUp from 'react-countup';

const heroTaglines = [
  'Rapid Innovation Quality Delivery',
  'What transformation can we power for you?',
  'Governed. Secured. Enterprise-scale.',
  'Production-ready AI platforms.'
];

export default function Home() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const counterStats = [
    { number: 14, suffix: '+', label: 'Years of Experience', icon: CalendarCheck },
    { number: 3, suffix: '+', label: 'Industries Served', icon: Briefcase },
    { number: 3, suffix: '+', label: 'Strategic Partners', icon: Handshake },
    { number: 100, suffix: '+', label: 'Technologies Supported', icon: Cpu }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Agentic AI',
      description: 'Enterprise-grade AI on Semantic Kernel, AutoGen, CrewAI, LangGraph. Federated agents, OAuth/OIDC at the agent level, zero-trust from day one—no data spillage.',
      href: '/services'
    },
    {
      icon: Settings,
      title: 'AI-Integrated Application Engineering',
      description: 'Applications with AI embedded from the ground up: agentic UX, human-in-the-loop workflows, multi-agent pipelines across .NET, Java, Python, and Node.js.',
      href: '/services'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Modern cloud-native data warehouses, real-time pipelines, and analytics platforms. Databricks, Azure Synapse, Fabric, Snowflake, AWS—with Power BI and embedded AI turning raw data into decisions.',
      href: '/services'
    },
    {
      icon: Cloud,
      title: 'Infrastructure',
      description: 'Cloud-native foundations on Kubernetes, GitOps with Flux and ArgoCD. Azure, AWS, GCP—or hybrid. Repeatable, auditable, production-grade.',
      href: '/services'
    }
  ];

  const products = [
    { title: 'Timesheets (PBA)', icon: Clock, href: '/products' },
    { title: 'LimeDocs', icon: FileSearch, href: '/products' },
    { title: 'Bardline', icon: Building2, href: '/products' },
    { title: 'Bardline Risk', icon: ShieldAlert, href: '/products' }
  ];
  return (
    <div className="pt-16">
      {/* Hero Section - RADcube style */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-radcube-bg">
        <div className="absolute inset-0 z-0 hero-radcube-glow" />
        <div className="absolute inset-0 z-0 hero-radcube-lines" />
        <div className="absolute inset-0 z-0 hero-radcube-dots" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm md:text-base font-medium mb-6 min-h-[2.75rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <Zap className="w-4 h-4 text-cyan-400/80 flex-shrink-0" />
              <span className="min-w-[200px] sm:min-w-[280px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={taglineIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="block"
                  >
                    {heroTaglines[taglineIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
              Enterprise <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">AI</span> That Works— Securely, at Scale
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
              We're an enterprise <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent font-semibold">AI</span> and technology services firm. We build production-ready systems across data & analytics, infrastructure, <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent font-semibold">AI</span>-integrated applications, and agentic <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent font-semibold">AI</span>—governed, secured, and built for scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg font-semibold text-base hover:from-sky-400 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Platform
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border border-white/50 rounded-lg font-semibold text-base text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Counter Stats - just below hero */}
      <section className="relative py-16 hero-radcube-bg border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {counterStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 rounded-full border border-white/15 bg-white/[0.03] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold text-white tabular-nums mb-1">
                    <CountUp
                      key={stat.label}
                      end={stat.number}
                      duration={4.5}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services - dark theme with glowing cards */}
      <section className="py-20 services-dark-section text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 hero-radcube-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Services</h2>
            <p className="text-lg text-gray-300 mb-3">
              Integrated capabilities. Governed by design.
            </p>
            <p className="text-gray-400 max-w-3xl leading-relaxed">
              ADILABS delivers enterprise-grade capabilities unified by security, governance, and Responsible AI principles. Each capability is designed to modernize systems, operationalize AI, and scale innovation while reducing risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={service.title} href={service.href}>
                <motion.div
                  className="services-card h-full p-6 rounded-xl transition-all duration-300 group flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="services-card-icon w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center mt-4 text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
                    Learn more
                    <span className="ml-2 w-8 h-8 rounded-full border border-sky-400/50 flex items-center justify-center group-hover:border-sky-300 group-hover:bg-sky-500/10 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Suite - dark theme, compact cards with icons */}
      <section className="py-20 products-suite-section text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 hero-radcube-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">ADILABS Products & Platform</h2>
            <p className="text-lg text-gray-400 mb-3">
              From governed innovation to production-ready platforms.
            </p>
            <p className="text-gray-400 max-w-3xl leading-relaxed mb-6">
              Every ADILABS product—Timesheets (PBA), LimeDocs, Bardline, and Bardline Risk—is engineered to be enterprise-ready from day one: stress-tested, secured, and governed. We'd welcome the opportunity to walk you through a live demo.
            </p>
            <Link href="/products">
              <motion.button
                className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Platform <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, index) => (
              <Link key={product.title} href={product.href}>
                <motion.div
                  className={`product-suite-card p-6 rounded-xl flex flex-col group ${index === 2 ? 'product-suite-card-highlight' : ''}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 rounded-xl bg-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/30 transition-colors">
                    <product.icon className="w-7 h-7 text-sky-300" />
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-auto">
                    <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">{product.title}</h3>
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders - dark section, logos on white */}
      <section className="py-20 bg-[#0c1222] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work closely with technology and service partners who share our commitment to quality, innovation, and long-term value creation.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl bg-white p-5 md:p-6 flex items-center justify-center min-h-[80px] shadow-sm hover:shadow-md transition-shadow">
              <img src="/t_500x300%20(1).jpg" alt="Trusted client" className="h-10 md:h-12 w-auto object-contain max-w-[140px]" />
            </div>
            <div className="rounded-xl bg-white p-5 md:p-6 flex items-center justify-center min-h-[80px] shadow-sm hover:shadow-md transition-shadow">
              <img src="/t_500x300.jpg" alt="Trusted client" className="h-10 md:h-12 w-auto object-contain max-w-[140px]" />
            </div>
            <div className="rounded-xl bg-white p-5 md:p-6 flex items-center justify-center min-h-[80px] shadow-sm hover:shadow-md transition-shadow">
              <img src="/onxpress-logo.svg" alt="OnExpress" className="h-10 md:h-12 w-auto object-contain max-w-[140px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Stories Section */}
      {/*       {/* Customer stories - commented out
      <section className="py-20 bg-[#181828]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Customer stories</h2>
            <div className="flex gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"><span className="sr-only">Previous</span><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"><span className="sr-only">Next</span><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#232336] rounded-2xl p-8 shadow-lg flex flex-col items-start relative">
              <div className="absolute -top-10 left-8">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Elizabeth Taylor" className="w-20 h-20 rounded-full border-4 border-sky-400 object-cover shadow-xl" />
              </div>
              <div className="mt-12">
                <p className="text-gray-200 mb-6">It has completely transformed the way I approach my design projects. The tool's ability to generate unique and innovative designs is simply mind-boggling.</p>
                <div className="font-bold text-white">Elizabeth Taylor</div>
                <div className="text-gray-400 text-sm">Product Manager</div>
              </div>
            </div>
            <div className="bg-[#232336] rounded-2xl p-8 shadow-lg flex flex-col items-start relative">
              <div className="absolute -top-10 left-8">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Ashley Watson" className="w-20 h-20 rounded-full border-4 border-sky-400 object-cover shadow-xl" />
              </div>
              <div className="mt-12">
                <p className="text-gray-200 mb-6">I appreciate the flexibility it provides, allowing me to adjust parameters and fine-tune the generated designs to meet my specific requirements.</p>
                <div className="font-bold text-white">Ashley Watson</div>
                <div className="text-gray-400 text-sm">Product Designer</div>
              </div>
            </div>
            <div className="bg-[#232336] rounded-2xl p-8 shadow-lg flex flex-col items-start relative">
              <div className="absolute -top-10 left-8">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Caleb Jones" className="w-20 h-20 rounded-full border-4 border-sky-400 object-cover shadow-xl" />
              </div>
              <div className="mt-12">
                <p className="text-gray-200 mb-6">The AI tool's speed and efficiency are impressive. It rapidly generates multiple design options, saving me valuable time and effort in the ideation phase.</p>
                <div className="font-bold text-white">Caleb Jones</div>
                <div className="text-gray-400 text-sm">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */ } 

      {/* Final CTA */}
      <section className="py-20 hero-radcube-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 hero-radcube-glow" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Let's Build What's Next Together
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Ready to accelerate digital transformation with AI you can trust?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule a Demo <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/products">
                <motion.button 
                  className="px-8 py-4 border-2 border-white/50 rounded-lg font-semibold text-lg text-white hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Our Platform <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}