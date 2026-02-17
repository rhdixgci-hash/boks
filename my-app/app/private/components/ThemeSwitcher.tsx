import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme, ThemeVariant, themeConfigs } from '../contexts/ThemeContext';
import { Button } from './ui/button';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Theme Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-neutral-900 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        <Palette className="w-6 h-6" />
        <span className="absolute -top-12 right-0 bg-neutral-900 text-white px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Brand Themes
        </span>
      </motion.button>

      {/* Theme Selector Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-4xl mx-4"
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="border-b border-neutral-200 p-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl">Brand Theme Selection</h2>
                    <p className="text-sm text-neutral-600 mt-1" style={{ fontFamily: 'serif' }}>
                      انتخاب تم برند / Choose Your Brand Experience
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Theme Grid */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(Object.keys(themeConfigs) as ThemeVariant[]).map((themeKey) => {
                    const config = themeConfigs[themeKey];
                    const isActive = theme === themeKey;

                    return (
                      <motion.button
                        key={themeKey}
                        onClick={() => {
                          setTheme(themeKey);
                          setIsOpen(false);
                        }}
                        className={`relative p-6 rounded-lg border-2 transition-all text-left ${
                          isActive
                            ? 'border-neutral-900 bg-neutral-50'
                            : 'border-neutral-200 hover:border-neutral-400 bg-white'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Theme Icon */}
                        <div className="flex items-start justify-between mb-4">
                          <span className="text-4xl">{config.icon}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs"
                            >
                              ✓
                            </motion.div>
                          )}
                        </div>

                        {/* Theme Info */}
                        <h3 className="text-lg mb-1">{config.name}</h3>
                        <p className="text-sm text-neutral-600 mb-2" style={{ fontFamily: 'serif' }}>
                          {config.nameFa}
                        </p>
                        <p className="text-sm text-neutral-500 mb-3">{config.description}</p>
                        <p className="text-xs text-neutral-400 italic">
                          Personality: {config.personality}
                        </p>

                        {/* Visual Preview Bar */}
                        <div className="mt-4 flex gap-2 h-2">
                          <div className={`flex-1 rounded ${getThemePreviewColor(themeKey, 0)}`} />
                          <div className={`flex-1 rounded ${getThemePreviewColor(themeKey, 1)}`} />
                          <div className={`flex-1 rounded ${getThemePreviewColor(themeKey, 2)}`} />
                          <div className={`flex-1 rounded ${getThemePreviewColor(themeKey, 3)}`} />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Footer Info */}
                <div className="border-t border-neutral-200 p-4 bg-neutral-50">
                  <p className="text-xs text-neutral-600 text-center">
                    Each theme demonstrates a different brand personality and design system approach.
                    Switch freely to explore full-stack branding capabilities.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function getThemePreviewColor(theme: ThemeVariant, index: number): string {
  const colors = {
    bureaucratic: ['bg-neutral-900', 'bg-neutral-400', 'bg-neutral-200', 'bg-white border border-neutral-300'],
    saas: ['bg-blue-600', 'bg-cyan-500', 'bg-purple-600', 'bg-pink-500'],
    academic: ['bg-slate-800', 'bg-amber-700', 'bg-slate-500', 'bg-stone-300'],
    'avant-garde': ['bg-red-500', 'bg-yellow-400', 'bg-green-500', 'bg-blue-600'],
    'natural-paper': ['bg-[#8b7355]', 'bg-[#a67c52]', 'bg-[#d4cbbf]', 'bg-[#ebe7df]'],
    'newspaper': ['bg-[#2d2d2d]', 'bg-[#6b6b6b]', 'bg-[#a0a0a0]', 'bg-[#d8d6d0]'],
    'organic-cosmos': ['bg-[#2c3440]', 'bg-[#4a5d4a]', 'bg-[#8b9398]', 'bg-[#d8dce0]']
  };
  return colors[theme][index];
}