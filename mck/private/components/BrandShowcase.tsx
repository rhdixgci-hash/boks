import { motion } from 'motion/react';
import { 
  Layers, Palette, Type, Layout, 
  Sparkles, Zap, Grid, Eye
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useTheme, themeConfigs } from '../contexts/ThemeContext';

export function BrandShowcase() {
  const { theme } = useTheme();
  const currentTheme = themeConfigs[theme];

  const brandPrinciples = [
    {
      icon: Layers,
      title: 'Multi-layered Identity',
      description: 'Every theme expresses a different facet of brand capability',
      principle: 'Adaptability through systematic variation'
    },
    {
      icon: Palette,
      title: 'Color Psychology',
      description: 'Strategic use of color to evoke specific emotional responses',
      principle: 'Visual communication as intentional practice'
    },
    {
      icon: Type,
      title: 'Typographic Hierarchy',
      description: 'Bilingual typography systems that respect cultural contexts',
      principle: 'Form follows function follows culture'
    },
    {
      icon: Layout,
      title: 'Anti-Layout',
      description: 'Breaking conventions to create memorable experiences',
      principle: 'Disruption as design methodology'
    }
  ];

  const designTokens = [
    { category: 'Spacing', values: ['4px', '8px', '16px', '24px', '48px'] },
    { category: 'Typography', values: ['12px', '14px', '16px', '20px', '32px'] },
    { category: 'Radius', values: ['0px', '4px', '8px', '12px', '999px'] },
    { category: 'Elevation', values: ['none', 'sm', 'md', 'lg', 'xl'] }
  ];

  const themeApplications = [
    {
      area: 'Web Applications',
      examples: ['SaaS dashboards', 'E-commerce platforms', 'Portfolio sites', 'Corporate websites']
    },
    {
      area: 'Brand Guidelines',
      examples: ['Logo systems', 'Color palettes', 'Typography rules', 'Voice & tone']
    },
    {
      area: 'Marketing Materials',
      examples: ['Landing pages', 'Email templates', 'Social media', 'Advertising']
    },
    {
      area: 'Product Design',
      examples: ['Mobile apps', 'Desktop software', 'Design systems', 'Component libraries']
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="outline">
            <Sparkles className="w-3 h-3 mr-2 inline" />
            Current Theme: {currentTheme.name}
          </Badge>
          <h2 className="text-4xl mb-4">Digital Brandscape Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This site itself is a demonstration of comprehensive brand system design—
            explore four distinct visual languages, each embodying different strategic approaches.
          </p>
          <p className="text-sm text-muted-foreground mt-2" style={{ fontFamily: 'serif' }}>
            معماری برند دیجیتال / نشان‌دهی سیستم‌های طراحی
          </p>
        </motion.div>

        {/* Current Theme Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 bg-primary text-primary-foreground">
            <div className="flex items-start gap-6">
              <div className="text-6xl">{currentTheme.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">{currentTheme.name}</h3>
                <p className="text-lg mb-1 opacity-90" style={{ fontFamily: 'serif' }}>
                  {currentTheme.nameFa}
                </p>
                <p className="opacity-80 mb-4">{currentTheme.description}</p>
                <Badge variant="secondary" className="bg-primary-foreground text-primary">
                  Personality: {currentTheme.personality}
                </Badge>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Brand Principles */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">Core Brand Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brandPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <principle.icon className="w-10 h-10 mb-4 text-primary" />
                  <h4 className="text-lg mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{principle.description}</p>
                  <p className="text-xs italic text-muted-foreground border-l-2 border-primary pl-3">
                    {principle.principle}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Design Tokens */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8 text-center">Design Token System</h3>
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {designTokens.map((token) => (
                  <div key={token.category}>
                    <div className="flex items-center gap-2 mb-4">
                      <Grid className="w-4 h-4 text-primary" />
                      <h4 className="text-sm">{token.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {token.values.map((value, index) => (
                        <div
                          key={value}
                          className="flex items-center gap-3 text-sm p-2 bg-muted rounded"
                        >
                          <Badge variant="outline" className="text-xs">
                            T{index + 1}
                          </Badge>
                          <code className="text-xs">{value}</code>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Theme Applications */}
        <div className="mb-16">
          <h3 className="text-2xl mb-8 text-center">Brand Application Domains</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themeApplications.map((application, index) => (
              <motion.div
                key={application.area}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h4 className="text-lg mb-4 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    {application.area}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {application.examples.map((example) => (
                      <Badge key={example} variant="secondary">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meta Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-12 bg-muted">
            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl mb-4">This Site IS the Portfolio</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Every element you see—from the theme switcher to the layout system—is a working demonstration
              of full-stack design and development capabilities. Switch themes to experience different brand
              personalities and see how comprehensive design systems adapt across contexts.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Badge variant="outline">Design Systems</Badge>
              <Badge variant="outline">Brand Strategy</Badge>
              <Badge variant="outline">Full-Stack Dev</Badge>
              <Badge variant="outline">UI/UX Research</Badge>
              <Badge variant="outline">Visual Identity</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
