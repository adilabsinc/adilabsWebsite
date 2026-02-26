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
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-sky-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="text-gray-900 dark:text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                About{' '}
              </span>
              <span className="text-sky-600 dark:text-sky-400" style={{ fontFamily: "'Syne', sans-serif" }}>
                ADILABS
              </span>
              <span
                className="inline-flex items-center ml-2 px-3 py-0.5 rounded-full text-2xl md:text-3xl font-bold bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-700"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are pioneers in technology empowerment, dedicated to revolutionizing how businesses 
              operate through agentic AI, cloud-native infrastructure, and intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-sky-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower enterprises with <strong className="text-gray-800 dark:text-gray-200">agentic AI</strong> and intelligent automation—building 
                <strong className="text-gray-800 dark:text-gray-200"> federated agents</strong> with OAuth and OIDC, <strong className="text-gray-800 dark:text-gray-200">zero-trust</strong> security, 
                and <strong className="text-gray-800 dark:text-gray-200">cross-organization controls</strong>. We deliver <strong className="text-gray-800 dark:text-gray-200">LLM-powered</strong> solutions, 
                <strong className="text-gray-800 dark:text-gray-200"> semantic kernel</strong> and agent frameworks, and <strong className="text-gray-800 dark:text-gray-200">AI-integrated application engineering</strong> 
                so every organization can turn data into decisions and scale with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-sky-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the trusted partner for <strong className="text-gray-800 dark:text-gray-200">enterprise AI</strong> and <strong className="text-gray-800 dark:text-gray-200">cloud-native</strong> transformation—where 
                <strong className="text-gray-800 dark:text-gray-200"> agentic workflows</strong>, <strong className="text-gray-800 dark:text-gray-200">data &amp; analytics</strong> at scale, and 
                <strong className="text-gray-800 dark:text-gray-200"> secure multi-agent systems</strong> are the norm. We envision a future where <strong className="text-gray-800 dark:text-gray-200">human-in-the-loop AI</strong>, 
                <strong className="text-gray-800 dark:text-gray-200"> GitOps-driven infrastructure</strong>, and <strong className="text-gray-800 dark:text-gray-200">AI-powered decision intelligence</strong> 
                enable every business to innovate without compromise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
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

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Growth Story</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
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
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}