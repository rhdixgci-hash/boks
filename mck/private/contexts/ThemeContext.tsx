import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ThemeVariant = 'bureaucratic' | 'saas' | 'academic' | 'avant-garde' | 'natural-paper' | 'newspaper' | 'organic-cosmos';

interface ThemeContextType {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeVariant>('bureaucratic');

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove('bureaucratic', 'saas', 'academic', 'avant-garde', 'natural-paper', 'newspaper', 'organic-cosmos');
    // Add current theme class
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const themeConfigs = {
  bureaucratic: {
    name: 'Minimalist Bureaucratic',
    nameFa: 'بوروکراتیک مینیمال',
    description: 'Persian minimalism meets satirical bureaucracy',
    icon: '□',
    personality: 'Understated, precise, philosophical'
  },
  saas: {
    name: 'Bold SaaS',
    nameFa: 'سااس جسورانه',
    description: 'Modern tech-forward design for digital products',
    icon: '◆',
    personality: 'Dynamic, confident, data-driven'
  },
  academic: {
    name: 'Academic Archive',
    nameFa: 'آرشیو آکادمیک',
    description: 'Research-heavy documentation aesthetic',
    icon: '▣',
    personality: 'Scholarly, systematic, methodical'
  },
  'avant-garde': {
    name: 'Avant-Garde',
    nameFa: 'آوانگارد',
    description: 'Experimental post-conceptual expression',
    icon: '◬',
    personality: 'Chaotic, artistic, unconventional'
  },
  'natural-paper': {
    name: 'Natural Paper',
    nameFa: 'کاغذ طبیعی',
    description: 'Tactile earth-toned reading space with golden ratios',
    icon: '⬚',
    personality: 'Organic, artisanal, contemplative'
  },
  'newspaper': {
    name: 'Graphite Newsprint',
    nameFa: 'روزنامه گرافیتی',
    description: 'Organic e-ink aesthetic with natural graphite tones',
    icon: '▦',
    personality: 'Contemplative, organic, anti-mainstream'
  },
  'organic-cosmos': {
    name: 'Organic Cosmos',
    nameFa: 'کیهان آلی',
    description: 'Nature photography palette - forest, space, stone',
    icon: '◐',
    personality: 'Naturalistic, painterly, avant-garde'
  }
} as const;