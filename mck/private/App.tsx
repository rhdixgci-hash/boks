import { NavigationHeader } from './components/NavigationHeader';
import { HeroSection } from './components/HeroSection';
import { ArtMovementTimeline } from './components/ArtMovementTimeline';
import { PhilosophicalGallery } from './components/PhilosophicalGallery';
import { ManifestoSection } from './components/ManifestoSection';
import { ResearchArchive } from './components/ResearchArchive';
import { BrandBookSection } from './components/BrandBookSection';
import { VisualAnalysisSection } from './components/VisualAnalysisSection';
import { AboutSection } from './components/AboutSection';
import { FooterSection } from './components/FooterSection';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { SaaSShowcase } from './components/SaaSShowcase';
import { ExecutiveDashboard } from './components/ExecutiveDashboard';
import { BrandShowcase } from './components/BrandShowcase';
import { DesignSystemDocs } from './components/DesignSystemDocs';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <NavigationHeader />
        
        <main>
          <HeroSection />
          
          <section id="groundings">
            <ArtMovementTimeline />
          </section>
          
          <section id="archive">
            <PhilosophicalGallery />
          </section>
          
          <section id="manifestos">
            <ManifestoSection />
          </section>
          
          <section id="saas">
            <SaaSShowcase />
          </section>
          
          <section id="dashboard">
            <ExecutiveDashboard />
          </section>
          
          <section id="brandscape">
            <BrandShowcase />
          </section>
          
          <section id="design-system">
            <DesignSystemDocs />
          </section>
          
          <section id="research">
            <ResearchArchive />
          </section>
          
          <section id="brandbook">
            <BrandBookSection />
          </section>
          
          <section id="analysis">
            <VisualAnalysisSection />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
        </main>
        
        <FooterSection />
        
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}