import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to meet our clients specific needs and challenges.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project we undertake.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions are designed to scale and make a worldwide difference.'
    }
  ];

  // const team = [
  //   {
  //     name: 'Masarrath Sulthana',
  //     role: 'Head of Operations (HOO)',
  //     expertise: 'AI & Machine Learning',
  //     experience: '12+ years'
  //   },
  //   {
  //     name: 'Mohammed Shahnawaz',
  //     role: 'Chief Technology Officer (CTO)',
  //     expertise: 'Distributed Systems',
  //     experience: '5+ years'
  //   },
  //   {
  //     name: 'Altaf Aziz',
  //     role: 'Managing Director (MD)',
  //     expertise: 'Business Strategy',
  //     experience: '10+ years'
  //   },
  // ];

  return (
    <div className="pt-16">
      {/* Hero Section - same dark theme as Home */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
            >
              About ADILABS AI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are pioneers in technology empowerment, dedicated to revolutionizing how businesses 
              operate through agentic AI, cloud-native infrastructure, and intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="section-dark-card p-8 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-sky-400 mr-4" />
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower enterprises with <strong className="text-white">agentic AI</strong> and intelligent automation—building 
                <strong className="text-white"> federated agents</strong> with OAuth and OIDC, <strong className="text-white">zero-trust</strong> security, 
                and <strong className="text-white">cross-organization controls</strong>. We deliver <strong className="text-white">LLM-powered</strong> solutions, 
                <strong className="text-white"> semantic kernel</strong> and agent frameworks, and <strong className="text-white">AI-integrated application engineering</strong> 
                so every organization can turn data into decisions and scale with confidence.
              </p>
            </motion.div>

            <motion.div
              className="section-dark-card p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-sky-400 mr-4" />
                <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the trusted partner for <strong className="text-white">enterprise AI</strong> and <strong className="text-white">cloud-native</strong> transformation—where 
                <strong className="text-white"> agentic workflows</strong>, <strong className="text-white">data &amp; analytics</strong> at scale, and 
                <strong className="text-white"> secure multi-agent systems</strong> are the norm. We envision a future where <strong className="text-white">human-in-the-loop AI</strong>, 
                <strong className="text-white"> GitOps-driven infrastructure</strong>, and <strong className="text-white">AI-powered decision intelligence</strong> 
                enable every business to innovate without compromise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="section-dark-card p-8 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the experts driving innovation and excellence at ADILABS INC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-sky-600 to-sky-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sky-600 dark:text-sky-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                  {member.expertise}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Company Stats - same dark theme as Home CTA */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Growth Story</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to industry leader, our journey reflects our commitment to innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2019', label: 'Founded' },
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Enterprise Clients' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}