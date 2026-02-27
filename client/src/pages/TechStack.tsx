import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Database,
  Cloud,
  Code2,
  Brain,
  GitBranch,
  BarChart3,
  ArrowRight,
  Cpu,
  Zap,
  LayoutDashboard,
  Server,
  Bot,
  Workflow,
} from 'lucide-react';
import { Link } from 'wouter';

type Tech = {
  name: string;
  slug: string;
  color: string;
  fallbackIcon?: React.ElementType;
  description?: string;
  /** When CDN slug fails, use this direct icon URL (e.g. for Azure, Oracle) */
  iconUrl?: string;
};

type TechGroup = {
  id: string;
  label: string;
  icon: React.ElementType;
  gradient: string;
  borderColor: string;
  glowColor: string;
  description: string;
  techs: Tech[];
};

const techGroups: TechGroup[] = [
  {
    id: 'agentic-ai',
    label: 'Agentic AI',
    icon: Bot,
    gradient: 'from-fuchsia-500 to-pink-600',
    borderColor: 'border-fuchsia-500/30',
    glowColor: 'rgba(217,70,239,0.15)',
    description: 'Orchestration frameworks and platforms for building enterprise-grade agentic AI systems.',
    techs: [
      {
        name: 'Semantic Kernel',
        slug: 'microsoftazure',
        color: '00A4EF',
        description: 'Agent orchestration',
        fallbackIcon: Bot,
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      },
      { name: 'AWS Bedrock', slug: 'amazonwebservices', color: 'FF9900', description: 'Managed LLMs', fallbackIcon: Cloud },
      { name: 'LangGraph', slug: 'langchain', color: '1C3C3C', description: 'Agent graphs', fallbackIcon: Workflow },
      {
        name: 'AutoGen',
        slug: 'microsoftazure',
        color: '00A4EF',
        description: 'Multi-agent',
        fallbackIcon: GitBranch,
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      },
      { name: 'CrewAI', slug: 'crewai', color: 'F5A623', description: 'Agent crews', fallbackIcon: Zap },
      {
        name: 'Azure AI Foundry',
        slug: 'microsoftazure',
        color: '0078D4',
        description: 'AI platform',
        fallbackIcon: Cloud,
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: Brain,
    gradient: 'from-pink-500 to-rose-500',
    borderColor: 'border-pink-500/30',
    glowColor: 'rgba(236,72,153,0.15)',
    description: 'Deep learning frameworks, LLM orchestration, and agentic AI toolkits.',
    techs: [
      { name: 'TensorFlow', slug: 'tensorflow', color: 'FF6F00', description: 'ML framework' },
      { name: 'PyTorch', slug: 'pytorch', color: 'EE4C2C', description: 'Deep learning' },
      { name: 'OpenAI', slug: 'openai', color: '412991', description: 'LLM APIs' },
      { name: 'Hugging Face', slug: 'huggingface', color: 'FFD21E', description: 'Model hub' },
      { name: 'Python', slug: 'python', color: '3776AB', description: 'AI language' },
      { name: 'Jupyter', slug: 'jupyter', color: 'F37626', description: 'Notebooks' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend & UI',
    icon: Code2,
    gradient: 'from-sky-400 to-indigo-500',
    borderColor: 'border-indigo-500/30',
    glowColor: 'rgba(99,102,241,0.15)',
    description: 'Modern UI frameworks, component libraries, and progressive web apps.',
    techs: [
      { name: 'React', slug: 'react', color: '61DAFB', description: 'UI library' },
      { name: 'Next.js', slug: 'nextdotjs', color: '000000', description: 'React framework' },
      { name: 'TypeScript', slug: 'typescript', color: '3178C6', description: 'Typed JS' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4', description: 'Utility CSS' },
      { name: 'Vue.js', slug: 'vuedotjs', color: '4FC08D', description: 'Progressive UI' },
      { name: 'Angular', slug: 'angular', color: 'DD0031', description: 'Enterprise UI' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: Server,
    gradient: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/30',
    glowColor: 'rgba(249,115,22,0.15)',
    description: 'Server-side runtimes, API gateways, and microservices frameworks.',
    techs: [
      { name: 'Node.js', slug: 'nodedotjs', color: '339933', description: 'JS runtime' },
      { name: '.NET', slug: 'dotnet', color: '512BD4', description: 'Enterprise framework' },
      { name: 'FastAPI', slug: 'fastapi', color: '009688', description: 'Python APIs' },
      { name: 'GraphQL', slug: 'graphql', color: 'E10098', description: 'Query language' },
      { name: 'Java', slug: 'openjdk', color: 'ED8B00', description: 'Enterprise language' },
      { name: 'Go', slug: 'go', color: '00ADD8', description: 'Systems language' },
    ],
  },
  {
    id: 'databases',
    label: 'Database Technologies',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16,185,129,0.15)',
    description: 'Relational, NoSQL, and cloud-native storage solutions for every scale.',
    techs: [
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', description: 'Relational DB' },
      { name: 'MongoDB', slug: 'mongodb', color: '47A248', description: 'Document DB' },
      { name: 'Redis', slug: 'redis', color: 'DC382D', description: 'In-memory cache' },
      { name: 'MySQL', slug: 'mysql', color: '4479A1', description: 'Relational DB' },
      { name: 'Elasticsearch', slug: 'elasticsearch', color: '005571', description: 'Search engine' },
      { name: 'Cassandra', slug: 'apachecassandra', color: '1287B1', description: 'Wide-column DB' },
    ],
  },
  {
    id: 'cloud-storage',
    label: 'Cloud Platforms',
    icon: Cloud,
    gradient: 'from-sky-500 to-cyan-500',
    borderColor: 'border-sky-500/30',
    glowColor: 'rgba(14,165,233,0.15)',
    description: 'Leading cloud providers and edge platforms we deploy and architect on.',
    techs: [
      { name: 'AWS', slug: 'amazonwebservices', color: 'FF9900', description: 'Amazon Web Services', fallbackIcon: Cloud },
      {
        name: 'Azure',
        slug: 'microsoftazure',
        color: '0078D4',
        description: 'Microsoft Azure',
        fallbackIcon: Cloud,
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
      },
      { name: 'Google Cloud', slug: 'googlecloud', color: '4285F4', description: 'Google Cloud Platform', fallbackIcon: Cloud },
      { name: 'Cloudflare', slug: 'cloudflare', color: 'F48120', description: 'Edge & CDN', fallbackIcon: Cloud },
      { name: 'DigitalOcean', slug: 'digitalocean', color: '0080FF', description: 'Cloud hosting', fallbackIcon: Cloud },
      {
        name: 'Oracle Cloud',
        slug: 'oracle',
        color: 'F80000',
        description: 'Enterprise cloud',
        fallbackIcon: Cloud,
        iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons/oracle.svg',
      },
    ],
  },
  {
    id: 'devops',
    label: 'Compute & Infrastructure',
    icon: GitBranch,
    gradient: 'from-violet-500 to-purple-500',
    borderColor: 'border-violet-500/30',
    glowColor: 'rgba(139,92,246,0.15)',
    description: 'Container orchestration, CI/CD pipelines, and infrastructure as code across cloud platforms.',
    techs: [
      { name: 'Kubernetes', slug: 'kubernetes', color: '326CE5', description: 'Orchestration' },
      { name: 'Docker', slug: 'docker', color: '2496ED', description: 'Containers' },
      { name: 'GitHub Actions', slug: 'githubactions', color: '2088FF', description: 'CI/CD' },
      { name: 'ArgoCD', slug: 'argo', color: 'EF7B4D', description: 'GitOps delivery' },
      { name: 'Terraform', slug: 'terraform', color: '7B42BC', description: 'IaC' },
      { name: 'Helm', slug: 'helm', color: '277A9F', description: 'K8s packages' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Platforms',
    icon: Cpu,
    gradient: 'from-green-500 to-lime-500',
    borderColor: 'border-green-500/30',
    glowColor: 'rgba(34,197,94,0.15)',
    description: 'Cross-platform and native mobile apps for iOS and Android.',
    techs: [
      { name: 'React Native', slug: 'react', color: '61DAFB', description: 'Cross-platform' },
      { name: 'Flutter', slug: 'flutter', color: '02569B', description: 'Cross-platform' },
      { name: 'Swift', slug: 'swift', color: 'F05138', description: 'iOS native' },
      { name: 'Kotlin', slug: 'kotlin', color: '7F52FF', description: 'Android native' },
      { name: 'Expo', slug: 'expo', color: '000000', description: 'RN toolchain' },
      { name: 'Firebase', slug: 'firebase', color: 'FFCA28', description: 'Mobile backend' },
    ],
  },
  {
    id: 'data-analytics',
    label: 'Data & Analytics',
    icon: BarChart3,
    gradient: 'from-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500/30',
    glowColor: 'rgba(6,182,212,0.15)',
    description: 'Data warehouses, streaming pipelines, and BI dashboards at scale.',
    techs: [
      { name: 'Databricks', slug: 'databricks', color: 'FF3621', description: 'Lakehouse platform' },
      { name: 'Snowflake', slug: 'snowflake', color: '29B5E8', description: 'Data warehouse' },
      { name: 'Apache Kafka', slug: 'apachekafka', color: '231F20', description: 'Event streaming' },
      { name: 'Apache Spark', slug: 'apachespark', color: 'E25A1C', description: 'Big data' },
      { name: 'Power BI', slug: 'powerbi', color: 'F2C811', description: 'BI & reporting', fallbackIcon: LayoutDashboard },
      { name: 'dbt', slug: 'dbt', color: 'FF694A', description: 'Data transforms', fallbackIcon: Workflow },
    ],
  },
];

const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';
const JSDELIVR_ICONS = 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons';

function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const [imgError, setImgError] = useState(false);
  const [useSecondary, setUseSecondary] = useState(false);
  const FallbackIcon = tech.fallbackIcon ?? Code2;

  const primarySrc =
    tech.iconUrl ?? `${SIMPLE_ICONS_CDN}/${tech.slug}/${tech.color}`;
  const secondarySrc = `${JSDELIVR_ICONS}/${tech.slug}.svg`;

  const handleImgError = () => {
    if (!useSecondary) {
      setUseSecondary(true);
    } else {
      setImgError(true);
    }
  };

  const imgSrc = useSecondary && !imgError ? secondarySrc : primarySrc;

  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 transition-all duration-300 group cursor-default"
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-200 bg-white">
        {imgError ? (
          <FallbackIcon className="w-6 h-6" style={{ color: `#${tech.color}` }} />
        ) : (
          <img
            src={imgSrc}
            alt={tech.name}
            className="w-6 h-6 object-contain"
            onError={handleImgError}
          />
        )}
      </div>
      <span className="text-sm font-semibold text-white text-center leading-tight">{tech.name}</span>
      {tech.description && (
        <span className="text-[11px] text-gray-400 text-center">{tech.description}</span>
      )}
    </motion.div>
  );
}

function GroupCard({ group, index }: { group: TechGroup; index: number }) {
  const GroupIcon = group.icon;

  return (
    <motion.div
      className={`rounded-2xl border ${group.borderColor} overflow-hidden`}
      style={{ background: `linear-gradient(145deg, rgba(15,23,42,0.9) 0%, rgba(12,18,34,0.95) 100%)` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ boxShadow: `0 0 40px ${group.glowColor}` }}
    >
      {/* Group header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-4 mb-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${group.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <GroupIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{group.label}</h3>
            <p className="text-xs text-gray-400 mt-0.5 max-w-xs">{group.description}</p>
          </div>
        </div>
        <div className={`h-px bg-gradient-to-r ${group.gradient} opacity-30 mt-4`} />
      </div>

      {/* Tech grid */}
      <div className="px-6 pb-6 grid grid-cols-3 gap-3">
        {group.techs.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const totalTechs = techGroups.reduce((sum, g) => sum + g.techs.length, 0);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-4 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Engineering Arsenal
            </motion.span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
            >
              Tech Stack &amp;{' '}
              <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A curated map of the tools, platforms, and frameworks we use to build
              production-grade systems — grouped by domain so you know exactly what we bring to each layer.
            </p>

            {/* Stat strip */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {[
                { value: techGroups.length, label: 'Technology Domains' },
                { value: `${totalTechs}+`, label: 'Technologies Mastered' },
                { value: '5+', label: 'Years of Practice' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category filter pills */}
      <section className="sticky top-16 z-40 py-4 section-dark border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {techGroups.map((group) => {
              const G = group.icon;
              return (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${group.borderColor} text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200`}
                >
                  <G className="w-3.5 h-3.5" />
                  {group.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech groups grid */}
      <section className="py-20 section-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techGroups.map((group, index) => (
              <div key={group.id} id={group.id}>
                <GroupCard group={group} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 page-hero-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 page-hero-glow" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Don&apos;t see what you need?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our stack evolves with the industry. Reach out and let&apos;s talk about the right technology
              choices for your specific problem.
            </p>
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-gray-900 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Talk to Our Engineers</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
