import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Database, 
  Code,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'AI-Integrated Application Engineering',
      description: 'Traditional applications are no longer enough. We build applications with AI embedded from the ground up — not as an afterthought. Agentic UX on the front end and agentic workflows beneath: human-in-the-loop decision points, agent handoff and orchestration, and multi-agent pipelines across .NET, Java, Python, and Node.js. We create context-aware experiences with agentic AI and copilot capabilities so users get the right assistance at the right moment. The application and the intelligence are one system.',
      features: [
        'AI embedded from day one, not retrofitted',
        'Agentic UX and agentic workflows',
        'Human-in-the-loop decision points',
        'Agent handoff and orchestration patterns',
        'Multi-agent pipelines',
        '.NET, Java, Python, and Node.js stacks'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'Agentic AI',
      description: 'Enterprise-grade AI systems built on frameworks like Microsoft Semantic Kernel, AutoGen, CrewAI, and LangGraph. Agents that don\'t just work — they work securely. We specialize in the defining challenge: data spillage. Federated agents with cross-organizational security controls, OAuth and OIDC at the agent level, and zero-trust principles from day one. We also assess business processes, identify where AI creates genuine leverage, and build solutions tailored to that reality — not off-the-shelf toolkits dressed up as strategy.',
      features: [
        'Semantic Kernel, AutoGen, CrewAI, LangGraph',
        'Federated agents and data spillage prevention',
        'OAuth and OIDC identity at the agent level',
        'Zero-trust security from day one',
        'Business process assessment for AI leverage',
        'Tailored solutions, not generic toolkits'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Modern cloud-native data warehouses, real-time pipelines, and analytics platforms designed for scale and governance. Data lakes on Azure and AWS form the foundation for large-scale storage and processing. Insights are surfaced through Power BI with embedded AI integration, turning raw data into decisions rather than dashboards.',
      features: [
        'Databricks, Azure Synapse, Microsoft Fabric',
        'AWS Glue, Snowflake, and AWS Redshift',
        'Data lakes on Azure and AWS',
        'Power BI with embedded AI integration',
        'Real-time pipelines and analytics at scale',
        'Governance and decision-ready insights'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Cloud-native foundations built on Kubernetes, with GitOps-driven delivery through Flux and ArgoCD. Deployed across Azure, AWS, and GCP — or hybrid where the architecture demands it. Repeatable, auditable, production-grade.',
      features: [
        'Kubernetes-based cloud-native foundations',
        'GitOps delivery with Flux and ArgoCD',
        'Azure, AWS, and GCP deployment',
        'Hybrid and multi-cloud architectures',
        'Repeatable, auditable pipelines',
        'Production-grade operations'
      ],
      color: 'from-sky-500 to-sky-400'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems and identify opportunities for improvement'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your business objectives'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with agile methodologies and continuous communication'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Ongoing monitoring, optimization, and support to ensure continued success'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - same dark theme as Home */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}>
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations 
              and drive sustainable growth through innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="section-dark-card rounded-2xl p-8 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and lasting results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="section-dark-card p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-sky-400" />
                  </div>
                )}
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
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <Link href="/contact">
              <motion.button 
                className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}