import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Palette, Component, Layout, Code, Package, 
  Layers, Grid, Type, Box, Sparkles, Zap,
  Server, Database, Cloud, Shield, Rocket,
  PenTool, Figma, Eye, Smartphone, Monitor,
  FileCode, GitBranch, Users, TrendingUp, CheckCircle2
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { useTheme, themeConfigs, ThemeVariant } from '../contexts/ThemeContext';
import { Separator } from './ui/separator';
import { WireframeShowcase } from './WireframeShowcase';

export function DesignSystemDocs() {
  const { theme, setTheme } = useTheme();
  const [activeComponent, setActiveComponent] = useState<string>('buttons');

  const componentShowcase = {
    buttons: {
      title: 'Button System',
      variants: ['Primary', 'Secondary', 'Outline', 'Ghost', 'Destructive'],
      usage: 'Consistent interactive elements across all themes'
    },
    cards: {
      title: 'Card Components',
      variants: ['Default', 'Elevated', 'Bordered', 'Interactive'],
      usage: 'Container system for content organization'
    },
    typography: {
      title: 'Typography Scale',
      variants: ['Display', 'Heading', 'Body', 'Caption', 'Code'],
      usage: 'Hierarchical text system with bilingual support'
    },
    forms: {
      title: 'Form Elements',
      variants: ['Input', 'Select', 'Checkbox', 'Radio', 'Switch'],
      usage: 'User input components with validation states'
    }
  };

  const serviceOfferings = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'text-blue-600',
      services: [
        { name: 'React/TypeScript Applications', level: 'Expert' },
        { name: 'Design System Implementation', level: 'Expert' },
        { name: 'Responsive Web Design', level: 'Expert' },
        { name: 'Animation & Interactions', level: 'Advanced' },
        { name: 'Performance Optimization', level: 'Expert' }
      ],
      deliverables: ['Production-ready code', 'Component libraries', 'Documentation', 'Testing suite']
    },
    {
      category: 'Backend Development',
      icon: Server,
      color: 'text-green-600',
      services: [
        { name: 'API Design & Development', level: 'Expert' },
        { name: 'Database Architecture', level: 'Expert' },
        { name: 'Microservices', level: 'Advanced' },
        { name: 'Authentication Systems', level: 'Expert' },
        { name: 'DevOps & CI/CD', level: 'Advanced' }
      ],
      deliverables: ['Scalable APIs', 'Database schemas', 'Security implementation', 'Deploy pipelines']
    },
    {
      category: 'UI/UX Design',
      icon: PenTool,
      color: 'text-purple-600',
      services: [
        { name: 'User Research & Testing', level: 'Expert' },
        { name: 'Interface Design', level: 'Expert' },
        { name: 'Design Systems', level: 'Expert' },
        { name: 'Prototyping', level: 'Expert' },
        { name: 'Brand Identity', level: 'Advanced' }
      ],
      deliverables: ['Figma files', 'Design systems', 'User flows', 'Brand guidelines']
    },
    {
      category: 'SaaS Architecture',
      icon: Cloud,
      color: 'text-cyan-600',
      services: [
        { name: 'Product Strategy', level: 'Expert' },
        { name: 'Infrastructure Design', level: 'Expert' },
        { name: 'Multi-tenancy', level: 'Advanced' },
        { name: 'Subscription Systems', level: 'Expert' },
        { name: 'Analytics Integration', level: 'Expert' }
      ],
      deliverables: ['Architecture docs', 'Scalability plans', 'Tech stack', 'Roadmap']
    }
  ];

  const brandApplications = [
    {
      platform: 'Web Applications',
      icon: Monitor,
      examples: [
        { name: 'Landing Pages', complexity: 'Simple', timeline: '1-2 weeks' },
        { name: 'Marketing Sites', complexity: 'Medium', timeline: '3-4 weeks' },
        { name: 'SaaS Dashboards', complexity: 'Complex', timeline: '8-12 weeks' },
        { name: 'E-commerce Platforms', complexity: 'Complex', timeline: '10-16 weeks' }
      ]
    },
    {
      platform: 'Mobile Experience',
      icon: Smartphone,
      examples: [
        { name: 'Responsive Design', complexity: 'Medium', timeline: '2-3 weeks' },
        { name: 'PWA Implementation', complexity: 'Medium', timeline: '3-5 weeks' },
        { name: 'Mobile-first Apps', complexity: 'Complex', timeline: '6-10 weeks' },
        { name: 'Cross-platform', complexity: 'Complex', timeline: '8-14 weeks' }
      ]
    },
    {
      platform: 'Brand Systems',
      icon: Palette,
      examples: [
        { name: 'Logo & Identity', complexity: 'Medium', timeline: '2-3 weeks' },
        { name: 'Design System', complexity: 'Complex', timeline: '6-8 weeks' },
        { name: 'Brand Guidelines', complexity: 'Medium', timeline: '3-4 weeks' },
        { name: 'Marketing Materials', complexity: 'Simple', timeline: '1-2 weeks' }
      ]
    }
  ];

  const polyphonicConcept = [
    {
      voice: 'Minimalist Bureaucratic',
      character: 'The Archivist',
      speaks: 'Through precision, restraint, and satirical formalism',
      applications: ['Documentation', 'Official communications', 'Research archives']
    },
    {
      voice: 'Bold SaaS',
      character: 'The Innovator',
      speaks: 'Through confidence, energy, and data-driven clarity',
      applications: ['Product launches', 'Marketing campaigns', 'Growth initiatives']
    },
    {
      voice: 'Academic Archive',
      character: 'The Scholar',
      speaks: 'Through depth, methodology, and systematic inquiry',
      applications: ['White papers', 'Case studies', 'Technical documentation']
    },
    {
      voice: 'Avant-Garde',
      character: 'The Disruptor',
      speaks: 'Through chaos, experimentation, and conceptual provocation',
      applications: ['Creative projects', 'Art direction', 'Conceptual proposals']
    }
  ];

  const technicalStack = [
    {
      layer: 'Frontend',
      technologies: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Motion/Framer Motion', 'Recharts'],
      icon: Code
    },
    {
      layer: 'Backend',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'REST/GraphQL'],
      icon: Server
    },
    {
      layer: 'Infrastructure',
      technologies: ['AWS/GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
      icon: Cloud
    },
    {
      layer: 'Design Tools',
      technologies: ['Figma', 'Adobe Suite', 'Sketch', 'Principle', 'Miro'],
      icon: Figma
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">
            <FileCode className="w-3 h-3 mr-2 inline" />
            Design System Documentation
          </Badge>
          <h2 className="text-4xl mb-4">Polyphonic Brand Servicescape</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
            A living design system that speaks in multiple voices—comprehensive documentation
            of our themed playground approach to creative service delivery.
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'serif' }}>
            مستندات سیستم طراحی / خدمات چندصدایی
          </p>
        </motion.div>

        {/* Polyphonic Brand Concept */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6" />
              Polyphonic Brand Architecture
            </h3>
            <p className="text-muted-foreground mb-6">
              Unlike monolithic brand systems, our approach embraces multiple "brand voices" 
              that can be deployed strategically based on context, audience, and objectives. 
              Each theme is a complete brand personality with its own visual language, tone, and application domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {polyphonicConcept.map((voice, index) => (
              <motion.div
                key={voice.voice}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg mb-1">{voice.voice}</h4>
                      <Badge variant="secondary">{voice.character}</Badge>
                    </div>
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{voice.speaks}"
                  </p>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">Best for:</div>
                    <div className="flex flex-wrap gap-2">
                      {voice.applications.map((app) => (
                        <Badge key={app} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Wireframe & Layout Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <WireframeShowcase />
          </motion.div>
        </div>

        {/* Component Showcase */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Component className="w-6 h-6" />
              Component Library
            </h3>
            <p className="text-muted-foreground">
              Theme-adaptive components that maintain consistency while expressing different brand personalities.
            </p>
          </motion.div>

          <Tabs defaultValue="buttons" onValueChange={setActiveComponent}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="typography">Typography</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
            </TabsList>

            {Object.entries(componentShowcase).map(([key, component]) => (
              <TabsContent key={key} value={key}>
                <Card className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl mb-2">{component.title}</h4>
                    <p className="text-sm text-muted-foreground">{component.usage}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Live Examples */}
                    <div>
                      <div className="text-sm mb-3">Variants:</div>
                      <div className="flex flex-wrap gap-3">
                        {component.variants.map((variant) => (
                          <Badge key={variant} variant="outline">
                            {variant}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Theme Comparison */}
                    <div>
                      <div className="text-sm mb-3">Cross-theme Behavior:</div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {(Object.keys(themeConfigs) as ThemeVariant[]).map((themeKey) => (
                          <div
                            key={themeKey}
                            className={`p-4 rounded border-2 transition-all cursor-pointer ${
                              theme === themeKey ? 'border-primary' : 'border-border hover:border-muted-foreground'
                            }`}
                            onClick={() => setTheme(themeKey)}
                          >
                            <div className="text-xs text-muted-foreground mb-2">
                              {themeConfigs[themeKey].name}
                            </div>
                            {key === 'buttons' && (
                              <Button size="sm" className="w-full">
                                Example
                              </Button>
                            )}
                            {key === 'cards' && (
                              <div className="h-12 bg-card border border-border rounded" />
                            )}
                            {key === 'typography' && (
                              <div className="space-y-1">
                                <div className="h-2 bg-foreground rounded w-3/4" />
                                <div className="h-1.5 bg-muted-foreground rounded w-full" />
                              </div>
                            )}
                            {key === 'forms' && (
                              <input 
                                className="w-full px-2 py-1 text-xs border border-border rounded bg-background"
                                placeholder="Input"
                                readOnly
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Service Offerings */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Rocket className="w-6 h-6" />
              Creative Service Catalog
            </h3>
            <p className="text-muted-foreground">
              Full-spectrum technical and creative services with transparent capabilities and deliverables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceOfferings.map((offering, index) => (
              <motion.div
                key={offering.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${offering.color}`}>
                      <offering.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl">{offering.category}</h4>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-3">Services:</div>
                      {offering.services.map((service) => (
                        <div key={service.name} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                          <span className="text-sm">{service.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {service.level}
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    <div>
                      <div className="text-sm text-muted-foreground mb-3">Deliverables:</div>
                      <div className="flex flex-wrap gap-2">
                        {offering.deliverables.map((deliverable) => (
                          <Badge key={deliverable} variant="outline" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Applications & Timelines */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Grid className="w-6 h-6" />
              Platform Applications & Scoping
            </h3>
            <p className="text-muted-foreground">
              Transparent project scoping with complexity assessment and realistic timelines.
            </p>
          </motion.div>

          <div className="space-y-6">
            {brandApplications.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <platform.icon className="w-6 h-6 text-primary" />
                    <h4 className="text-lg">{platform.platform}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {platform.examples.map((example) => (
                      <div key={example.name} className="p-4 bg-muted rounded-lg">
                        <div className="mb-3">{example.name}</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Complexity:</span>
                            <Badge 
                              variant={
                                example.complexity === 'Simple' ? 'secondary' :
                                example.complexity === 'Medium' ? 'outline' : 'default'
                              }
                              className="text-xs"
                            >
                              {example.complexity}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Timeline:</span>
                            <span>{example.timeline}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meta Documentation Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 bg-primary text-primary-foreground">
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl mb-4">Living Documentation</h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto mb-6">
                This page itself demonstrates the polyphonic approach: it's simultaneously
                a design system, a service catalog, a conceptual framework, and a portfolio piece.
                Every element you interact with is documentation that documents itself—
                a recursive demonstration of meta-design thinking applied to servicescape architecture.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Badge variant="secondary" className="bg-primary-foreground text-primary">
                  <GitBranch className="w-3 h-3 mr-2 inline" />
                  Version-controlled
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground text-primary">
                  <Users className="w-3 h-3 mr-2 inline" />
                  Collaborative
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground text-primary">
                  <TrendingUp className="w-3 h-3 mr-2 inline" />
                  Continuously evolving
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}