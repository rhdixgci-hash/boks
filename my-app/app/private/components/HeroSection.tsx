import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { Badge } from './ui/badge';
import { Sparkles, Code, Palette, TrendingUp } from 'lucide-react';

export function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-muted/30 to-background">
      {/* Decorative geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rotate-45" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-primary" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-primary rotate-12" />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border-2 border-primary" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Stamp/seal decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 0.15, scale: 1, rotate: -12 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-10 md:right-0 w-48 h-48 border-4 border-red-600 rounded-full flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-red-600">OFFICIAL</div>
            <div className="text-xs text-red-600 mt-1">2024</div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Artist name / Brand */}
          <div className="space-y-2">
            <h1 className="text-foreground tracking-tight">
              Salman Englisi
            </h1>
            <p className="text-muted-foreground tracking-wider" style={{ fontFamily: 'serif' }}>
              سلمان انگلیسی
            </p>
          </div>

          {/* Subtitle / Role */}
          <div className="space-y-4">
            <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Philosopher-Artist / Independent Activist / Analytical Jester
            </p>
            <p className="text-muted-foreground" style={{ fontFamily: 'serif' }}>
              هنرمند-فیلسوف / فعال مستقل / دلقک تحلیلگر
            </p>
          </div>
          
          {/* New: Capabilities Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex gap-3 justify-center flex-wrap"
          >
            <Badge variant="outline" className="gap-2">
              <Palette className="w-3 h-3" />
              Full-Stack Design
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Code className="w-3 h-3" />
              Development
            </Badge>
            <Badge variant="outline" className="gap-2">
              <TrendingUp className="w-3 h-3" />
              SaaS Expertise
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Sparkles className="w-3 h-3" />
              Brand Systems
            </Badge>
          </motion.div>

          {/* Main philosophical statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 space-y-6 max-w-3xl mx-auto"
          >
            <div className="border-t-2 border-b-2 border-border py-8 px-6">
              <p className="text-foreground leading-relaxed italic">
                "This is not a portfolio. It is a grounding on grounding itself—
                a twisted archaeology where each visual layer carries the accumulated 
                weight of art history from Persian miniatures to post-conceptual critique. 
                Here, the digital gallery becomes a philosophical proposition AND a living demonstration
                of comprehensive design systems, SaaS architecture, and brand strategy.
                The site itself IS the showcase."
              </p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Operating from an inductivist paradigm, this practice builds from accumulated particulars 
              rather than imposed frameworks. The work spans satirical formalism, institutional critique, 
              neo-miniature aesthetics, and bureaucratic subversion—while simultaneously demonstrating
              full-stack development, UI/UX design, brand system architecture, and executive-level analytics.
              Switch themes to explore different brand expressions.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="pt-12"
          >
            <div className="inline-flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Explore Digital Brandscape</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-px h-12 bg-muted-foreground"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}