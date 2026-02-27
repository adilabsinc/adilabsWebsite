import { motion } from 'framer-motion';
import { 
  Building2, 
  Clock, 
  FileSearch, 
  ShieldAlert, 
  Users, 
  CheckCircle,
  ArrowRight,
  Zap,
  BarChart3,
  Settings
} from 'lucide-react';
import { Link } from 'wouter';

export default function Products() {
  const platformFeatures = [
    {
      icon: Clock,
      title: 'Timesheet Management',
      tag: 'Workforce & Labor',
      tagColor: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
      description: 'AI-driven timesheet and workforce management that turns labor data into predictive insights. Smart approval workflows, real-time cost visibility, and anomaly detection keep projects on track and compliant.',
      keyPoints: [
        'AI-powered time entry and auto-categorization',
        'Predictive labor cost analytics',
        'Real-time project and cost dashboards',
        'Smart approval workflows & compliance',
        'Anomaly detection for fraud and errors',
        'ERP, payroll & scheduling integration'
      ]
    },
    {
      icon: FileSearch,
      title: 'LimeDocs',
      tag: 'Document Intelligence',
      tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
      description: 'Agentic document intelligence that understands your content. Office 365–native AI agents that summarize, compare, and answer in natural language—decisions from documents, not dashboards.',
      keyPoints: [
        'Natural language document queries',
        'Office 365, SharePoint & Teams',
        'Semantic search & summarization',
        'Human-in-the-loop & citations',
        'Enterprise security & multi-tenant',
        'RAG-powered answers with sources'
      ]
    },
    {
      icon: Building2,
      title: 'Bardline',
      tag: 'Construction & Capital',
      tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
      description: 'Construction and capital project control powered by AI. Estimate-to-complete, field reporting, change management, and cost forecasting in one platform that learns from your projects.',
      keyPoints: [
        'AI cost control & forecasting',
        'Field reporting & mobile capture',
        'Estimate-to-complete workflows',
        'Real-time program dashboards',
        'BIM, scheduling & ERP integration',
        'Predictive cost & schedule alerts'
      ]
    },
    {
      icon: ShieldAlert,
      title: 'Bardline Risk',
      tag: 'Risk & Safety',
      tagColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
      description: 'Risk and safety intelligence for capital projects. AI-assisted hazard ID, risk scoring, and mitigation with full audit trails and compliance—from site-level to enterprise risk posture.',
      keyPoints: [
        'AI hazard & risk identification',
        'Risk scoring & prioritization',
        'Safety observations & incidents',
        'Compliance & audit reporting',
        'Bardline & third-party integration',
        'Predictive risk analytics'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual processes by up to 75% with intelligent automation',
      percentage: '75%'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through optimized resource management',
      percentage: '40%'
    },
    {
      title: 'Faster Delivery',
      description: 'Accelerate project timelines with streamlined workflows',
      percentage: '60%'
    },
    {
      title: 'Better Compliance',
      description: 'Ensure regulatory compliance with automated reporting',
      percentage: '95%'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - same dark theme as Home */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
                Enterprise SaaS Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Tailored for large civil and infrastructure companies, especially in metro and railway sectors. 
                Transform your project management with AI-powered automation and intelligent workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button 
                    className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <motion.button 
                  className="px-8 py-4 border-2 border-white/50 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Project Progress</span>
                      <span className="text-sm">87%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full">
                      <div className="h-2 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">42</div>
                        <div className="text-xs opacity-80">Active Tasks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-xs opacity-80">On Schedule</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">$2.1M</div>
                        <div className="text-xs opacity-80">Budget Used</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Platform Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for infrastructure and civil engineering projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative section-dark-card rounded-2xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6 flex flex-col flex-1">
                  {feature.tag && (
                    <span className={`inline-flex w-fit px-3 py-1.5 rounded-md text-sm font-medium mb-4 ${feature.tagColor}`}>
                      {feature.tag}
                    </span>
                  )}
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-sky-500/20">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-4 line-clamp-3">
                    {feature.description}
                  </p>
                  {feature.keyPoints && feature.keyPoints.length > 0 && (
                    <ul className="space-y-2.5 mt-auto pt-4 border-t border-white/10">
                      {feature.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Measurable Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact on your business operations and bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="section-dark-card p-8 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-sky-400 mb-4">
                  {benefit.percentage}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - commented out
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Industry Applications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Versatile solutions for various infrastructure and civil engineering sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-gradient-to-br from-sky-50 to-sky-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Trusted by / Our Clients */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients include leading organizations in infrastructure, transportation, and construction
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

      {/* Implementation Timeline */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Implementation Timeline</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our streamlined deployment process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { phase: 'Week 1-2', title: 'Setup & Configuration', icon: Settings },
              { phase: 'Week 3-4', title: 'Data Migration', icon: BarChart3 },
              { phase: 'Week 5-6', title: 'Team Training', icon: Users },
              { phase: 'Week 7+', title: 'Go Live & Support', icon: Zap }
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sky-400 font-semibold mb-2">{step.phase}</div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - same dark theme as Home */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how our SaaS platform can revolutionize your infrastructure projects with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button 
                className="px-8 py-4 border-2 border-white/50 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}