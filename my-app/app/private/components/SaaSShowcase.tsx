import { motion } from 'motion/react';
import { 
  TrendingUp, Users, DollarSign, Activity, 
  BarChart3, Zap, Target, Rocket,
  Code, Layers, GitBranch, Database,
  PenTool, Search, LineChart, Globe
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

export function SaaSShowcase() {
  const metrics = [
    { label: 'Active Projects', value: '47', change: '+12%', icon: Rocket, color: 'text-blue-600' },
    { label: 'Client Satisfaction', value: '98%', change: '+3%', icon: Users, color: 'text-green-600' },
    { label: 'Revenue Growth', value: '$2.4M', change: '+34%', icon: DollarSign, color: 'text-purple-600' },
    { label: 'System Uptime', value: '99.9%', change: '+0.1%', icon: Activity, color: 'text-cyan-600' }
  ];

  const services = [
    {
      category: 'Development',
      icon: Code,
      services: ['Full-Stack Development', 'React/TypeScript', 'Node.js/Python', 'Mobile Apps', 'API Design'],
      expertise: 95
    },
    {
      category: 'Design & UX',
      icon: PenTool,
      services: ['UI/UX Design', 'Design Systems', 'User Research', 'Prototyping', 'Brand Identity'],
      expertise: 98
    },
    {
      category: 'Marketing & SEO',
      icon: Search,
      services: ['SEO Strategy', 'Content Marketing', 'Analytics', 'Social Media', 'Growth Hacking'],
      expertise: 92
    },
    {
      category: 'SaaS Architecture',
      icon: Database,
      services: ['Scalable Infrastructure', 'Cloud Solutions', 'DevOps', 'Security', 'Performance'],
      expertise: 94
    }
  ];

  const teamCapabilities = [
    { role: 'Senior Developers', count: 12, utilization: 87 },
    { role: 'UX/UI Designers', count: 8, utilization: 92 },
    { role: 'Product Managers', count: 5, utilization: 95 },
    { role: 'SEO Specialists', count: 4, utilization: 88 },
    { role: 'DevOps Engineers', count: 6, utilization: 84 }
  ];

  const caseStudies = [
    {
      client: 'FinTech Startup',
      challenge: 'Build scalable banking platform',
      solution: 'Microservices architecture with React frontend',
      results: '+250% user growth, 99.99% uptime',
      roi: '+340%'
    },
    {
      client: 'E-commerce Brand',
      challenge: 'Redesign checkout flow',
      solution: 'User research + A/B testing + new UI',
      results: '+67% conversion rate, -43% cart abandonment',
      roi: '+210%'
    },
    {
      client: 'B2B SaaS Platform',
      challenge: 'Improve organic traffic',
      solution: 'Technical SEO + content strategy',
      results: '+420% organic traffic, #1 ranking for 47 keywords',
      roi: '+180%'
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">
            SaaS Excellence
          </Badge>
          <h2 className="text-4xl mb-4">Full-Stack SaaS Partnership</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            From concept to scale — design, development, branding, and growth.
          </p>
          <p className="text-sm text-neutral-500 mt-2" style={{ fontFamily: 'serif' }}>
            شریک کامل سااس / کامل‌ترین همکاری
          </p>
        </motion.div>

        {/* Executive Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <div className="text-3xl mb-1">{metric.value}</div>
                <div className="text-sm text-neutral-600">{metric.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Services & Capabilities */}
        <Tabs defaultValue="services" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="cases">Case Studies</TabsTrigger>
          </TabsList>

          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl">{service.category}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Expertise Level</span>
                        <span>{service.expertise}%</span>
                      </div>
                      <Progress value={service.expertise} className="h-2" />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="team">
            <Card className="p-8">
              <h3 className="text-2xl mb-6">Team Capacity & Utilization</h3>
              <div className="space-y-6">
                {teamCapabilities.map((team, index) => (
                  <motion.div
                    key={team.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{team.count}</Badge>
                        <span>{team.role}</span>
                      </div>
                      <span className="text-sm text-neutral-600">{team.utilization}% utilized</span>
                    </div>
                    <Progress value={team.utilization} className="h-3" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl mb-1">35+</div>
                    <div className="text-sm text-neutral-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1">89%</div>
                    <div className="text-sm text-neutral-600">Avg. Utilization</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-1">24/7</div>
                    <div className="text-sm text-neutral-600">Support</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cases">
            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl mb-1">{study.client}</h3>
                        <Badge variant="secondary">ROI: {study.roi}</Badge>
                      </div>
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-neutral-500 mb-1">Challenge</div>
                        <p className="text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 mb-1">Solution</div>
                        <p className="text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500 mb-1">Results</div>
                        <p className="text-sm">{study.results}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 bg-neutral-900 text-white">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-3xl mb-4">Ready to Build Something Extraordinary?</h3>
            <p className="text-lg text-neutral-300 mb-6 max-w-2xl mx-auto">
              Partner with a team that understands design, code, growth, and scale.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Code className="w-4 h-4 mr-2 inline" />
                Development
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                <PenTool className="w-4 h-4 mr-2 inline" />
                Design
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Search className="w-4 h-4 mr-2 inline" />
                Marketing
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2">
                <Target className="w-4 h-4 mr-2 inline" />
                Strategy
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
