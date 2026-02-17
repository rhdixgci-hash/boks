import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Type, Grid3x3, Layers, BookOpen, FileText } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ColorToken {
  name: string;
  nameFa: string;
  hex: string;
  meaning: string;
  grounding: string;
}

interface TypographySystem {
  category: string;
  categoryFa: string;
  typeface: string;
  usage: string;
  philosophy: string;
}

const colorSystem: ColorToken[] = [
  {
    name: 'Terracotta',
    nameFa: 'خاک رس',
    hex: '#C4845B',
    meaning: 'Persian earthenware, ancient craft traditions',
    grounding: 'Material memory of Persian pottery and miniature backgrounds'
  },
  {
    name: 'Sage',
    nameFa: 'مریم‌گلی',
    hex: '#6B7D6A',
    meaning: 'Natural oxidation, aged documents, wisdom',
    grounding: 'Color of historical manuscripts, bureaucratic paper patina'
  },
  {
    name: 'Charcoal',
    nameFa: 'ذغالی',
    hex: '#2C2C2C',
    meaning: 'Ink, authority, definitive statements',
    grounding: 'Traditional calligraphic ink, institutional power'
  },
  {
    name: 'Archive Beige',
    nameFa: 'بژ آرشیوی',
    hex: '#E8E3D8',
    meaning: 'Aged paper, archival memory',
    grounding: 'Color of historical documents, institutional records'
  },
  {
    name: 'Seal Red',
    nameFa: 'قرمز مهر',
    hex: '#C03B3B',
    meaning: 'Official stamps, authority, urgency',
    grounding: 'Bureaucratic seals, state apparatus signifiers'
  }
];

const typographySystem: TypographySystem[] = [
  {
    category: 'Primary Latin',
    categoryFa: 'لاتین اصلی',
    typeface: 'System Default (Sans-serif)',
    usage: 'Body text, navigation, UI elements',
    philosophy: 'Neutral modernist clarity - refuses decorative excess, prioritizes legibility as democratic value'
  },
  {
    category: 'Persian Script',
    categoryFa: 'خط فارسی',
    typeface: 'Vazirmatn / System Serif',
    usage: 'Farsi text, cultural anchoring',
    philosophy: 'Bridges traditional calligraphic heritage with digital legibility - maintains cultural memory in modern medium'
  },
  {
    category: 'Display / Headers',
    categoryFa: 'تیتر',
    typeface: 'Inherited from base (customizable)',
    usage: 'Titles, emphasis, philosophical statements',
    philosophy: 'Scale and weight as rhetorical devices - typography as spatial argument'
  },
  {
    category: 'Monospace / Code',
    categoryFa: 'یکپارچه',
    typeface: 'System Monospace',
    usage: 'Technical annotations, meta-commentary',
    philosophy: 'Machine logic made visible - reveals the digital substrate beneath artistic surface'
  }
];

const visualPrinciples = [
  {
    principle: 'Layered Composition',
    principleFa: 'ترکیب لایه‌ای',
    description: 'Multiple visual planes occupying same space, referencing Persian miniature tradition of simultaneous narratives',
    implementation: 'Overlapping geometric shapes, translucent borders, background pattern layers',
    philosophy: 'Reality as palimpsest - every surface contains prior inscriptions'
  },
  {
    principle: 'Asymmetric Balance',
    principleFa: 'تعادل نامتقارن',
    description: 'Rejection of centered symmetry in favor of dynamic tension',
    implementation: 'Off-center content blocks, varied grid columns, unexpected whitespace',
    philosophy: 'Opposition to false harmony - truth emerges from productive imbalance'
  },
  {
    principle: 'Bureaucratic Texture',
    principleFa: 'بافت اداری',
    description: 'Administrative aesthetics as critical material - stamps, seals, forms',
    implementation: 'Stamp motifs, serial numbers, official document styling',
    philosophy: 'Power operates through formalism - subvert by exposing and exaggerating formal structures'
  },
  {
    principle: 'Minimal Maximalism',
    principleFa: 'حداقل‌گرایی حداکثری',
    description: 'Sparse visual elements carrying maximum conceptual weight',
    implementation: 'Limited color palette, generous whitespace, precise geometry',
    philosophy: 'Every element justified philosophically - decoration is intellectual laziness'
  },
  {
    principle: 'Bilingual Spatial Logic',
    principleFa: 'منطق فضایی دوزبانه',
    description: 'Farsi and English coexist as equal spatial claims',
    implementation: 'Paired labels, secondary text in complementary script, dual navigation',
    philosophy: 'Language as territory - bilingualism as resistance to monolingual hegemony'
  }
];

export function BrandBookSection() {
  const [selectedColor, setSelectedColor] = useState<ColorToken | null>(null);

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="mb-2 text-neutral-800">
                Brand Book / کتاب برند
              </h2>
              <p className="text-neutral-600 max-w-2xl">
                This is not a style guide but a philosophical system made visible. 
                Every design decision documented as intellectual position.
              </p>
            </div>
            <div className="hidden md:block p-4 border-2 border-red-600 rotate-3 opacity-30">
              <span className="text-xs text-red-600">INTERNAL</span>
            </div>
          </div>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
            <TabsTrigger value="colors" className="flex items-center gap-2">
              <Palette size={16} />
              <span className="hidden sm:inline">Colors</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center gap-2">
              <Type size={16} />
              <span className="hidden sm:inline">Typography</span>
            </TabsTrigger>
            <TabsTrigger value="principles" className="flex items-center gap-2">
              <Layers size={16} />
              <span className="hidden sm:inline">Principles</span>
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Grid3x3 size={16} />
              <span className="hidden sm:inline">System</span>
            </TabsTrigger>
          </TabsList>

          {/* Color System Tab */}
          <TabsContent value="colors" className="space-y-8">
            <div className="border-l-4 border-neutral-800 pl-6 mb-8">
              <h3 className="mb-2 text-neutral-900">Color Philosophy</h3>
              <p className="text-neutral-700 leading-relaxed">
                Color is never decorative. Each hue carries historical weight, cultural memory, 
                and institutional meaning. This palette emerges from archaeological analysis of 
                Persian material culture and bureaucratic visual regimes.
              </p>
            </div>

            {/* Color swatches */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorSystem.map((color) => (
                <motion.div
                  key={color.hex}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedColor(selectedColor?.hex === color.hex ? null : color)}
                  className="cursor-pointer border border-neutral-300 bg-neutral-50 overflow-hidden group"
                >
                  {/* Color swatch */}
                  <div
                    className="h-32 relative transition-all group-hover:h-40"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 text-xs font-mono">
                      {color.hex}
                    </div>
                  </div>
                  
                  {/* Color info */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-neutral-900">{color.name}</h4>
                      <span className="text-sm text-neutral-600">{color.nameFa}</span>
                    </div>
                    <p className="text-sm text-neutral-600">{color.meaning}</p>
                    
                    <AnimatePresence>
                      {selectedColor?.hex === color.hex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-3 border-t border-neutral-300"
                        >
                          <p className="text-xs text-neutral-700 italic leading-relaxed">
                            <strong>Grounding:</strong> {color.grounding}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Color usage rules */}
            <div className="mt-8 p-6 border border-neutral-300 bg-neutral-50">
              <h4 className="mb-4 text-neutral-900">Usage Protocol</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-2"><strong>Primary Palette:</strong></p>
                  <ul className="space-y-1 text-neutral-700">
                    <li>• Charcoal for primary text and borders</li>
                    <li>• Archive Beige for backgrounds and neutral zones</li>
                    <li>• Seal Red sparingly, only for emphasis/authority</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2"><strong>Accent Application:</strong></p>
                  <ul className="space-y-1 text-neutral-700">
                    <li>• Terracotta for Persian heritage references</li>
                    <li>• Sage for natural/organic content</li>
                    <li>• Never use pure black (#000) or pure white (#FFF)</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <div className="border-l-4 border-neutral-800 pl-6 mb-8">
              <h3 className="mb-2 text-neutral-900">Typography as Argument</h3>
              <p className="text-neutral-700 leading-relaxed">
                Type is spatial rhetoric. Every font choice, every weight, every line height 
                makes a philosophical claim about hierarchy, authority, and accessibility.
              </p>
            </div>

            {/* Typography system */}
            <div className="space-y-6">
              {typographySystem.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-neutral-300 bg-white p-6"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">CATEGORY</p>
                      <h4 className="text-neutral-900 mb-1">{type.category}</h4>
                      <p className="text-sm text-neutral-600">{type.categoryFa}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">TYPEFACE</p>
                      <p className="text-neutral-800 mb-2" style={{ fontFamily: type.typeface.includes('Mono') ? 'monospace' : 'inherit' }}>
                        {type.typeface}
                      </p>
                      <p className="text-xs text-neutral-600">{type.usage}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">PHILOSOPHY</p>
                      <p className="text-sm text-neutral-700 italic leading-relaxed">
                        {type.philosophy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scale and hierarchy */}
            <div className="mt-8 p-6 border-2 border-neutral-800 bg-neutral-50">
              <h4 className="mb-4 text-neutral-900">Hierarchical Scale</h4>
              <div className="space-y-3">
                <div className="pb-2 border-b border-neutral-300">
                  <p className="text-3xl text-neutral-900">Heading Level 1</p>
                  <p className="text-sm text-neutral-600 mt-1">Primary page titles, philosophical declarations</p>
                </div>
                <div className="pb-2 border-b border-neutral-300">
                  <p className="text-2xl text-neutral-900">Heading Level 2</p>
                  <p className="text-sm text-neutral-600 mt-1">Section headers, major conceptual divisions</p>
                </div>
                <div className="pb-2 border-b border-neutral-300">
                  <p className="text-xl text-neutral-900">Heading Level 3</p>
                  <p className="text-sm text-neutral-600 mt-1">Subsections, specific topics</p>
                </div>
                <div>
                  <p className="text-neutral-700">Body text maintains comfortable reading size with generous line-height for extended philosophical content.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Visual Principles Tab */}
          <TabsContent value="principles" className="space-y-8">
            <div className="border-l-4 border-neutral-800 pl-6 mb-8">
              <h3 className="mb-2 text-neutral-900">Design Principles as Grounding</h3>
              <p className="text-neutral-700 leading-relaxed">
                These are not aesthetic preferences but philosophical commitments. 
                Each principle emerges from critical analysis of art history and power structures.
              </p>
            </div>

            {/* Principles grid */}
            <div className="space-y-6">
              {visualPrinciples.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-neutral-300 bg-white p-6 hover:border-neutral-800 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 border-2 border-neutral-800 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="text-neutral-900">{item.principle}</h4>
                        <span className="text-sm text-neutral-600 hidden md:inline">{item.principleFa}</span>
                      </div>
                      <p className="text-neutral-700 mb-3">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 pl-16">
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">IMPLEMENTATION</p>
                      <p className="text-sm text-neutral-700">{item.implementation}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">PHILOSOPHICAL BASIS</p>
                      <p className="text-sm text-neutral-700 italic">{item.philosophy}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Design System Tab */}
          <TabsContent value="system" className="space-y-8">
            <div className="border-l-4 border-neutral-800 pl-6 mb-8">
              <h3 className="mb-2 text-neutral-900">Systematic Consistency</h3>
              <p className="text-neutral-700 leading-relaxed">
                Reusable components and patterns ensure philosophical coherence across all touchpoints.
              </p>
            </div>

            {/* Component documentation */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Spacing system */}
              <div className="border border-neutral-300 p-6 bg-neutral-50">
                <h4 className="mb-4 text-neutral-900 flex items-center gap-2">
                  <Grid3x3 size={20} />
                  Spacing Scale
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-1 bg-neutral-800" style={{ height: '4px' }}></div>
                    <span className="text-sm text-neutral-600">4px - Minimal</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 bg-neutral-800" style={{ height: '8px' }}></div>
                    <span className="text-sm text-neutral-600">8px - Tight</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 bg-neutral-800" style={{ height: '16px' }}></div>
                    <span className="text-sm text-neutral-600">16px - Standard</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 bg-neutral-800" style={{ height: '24px' }}></div>
                    <span className="text-sm text-neutral-600">24px - Comfortable</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 bg-neutral-800" style={{ height: '32px' }}></div>
                    <span className="text-sm text-neutral-600">32px - Generous</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 mt-4 italic">
                  Spacing follows 4px base unit - mathematical rigor as design principle
                </p>
              </div>

              {/* Border patterns */}
              <div className="border border-neutral-300 p-6 bg-neutral-50">
                <h4 className="mb-4 text-neutral-900 flex items-center gap-2">
                  <FileText size={20} />
                  Border Patterns
                </h4>
                <div className="space-y-3">
                  <div className="border border-neutral-300 p-3 bg-white">
                    <span className="text-sm">Standard Border (1px)</span>
                  </div>
                  <div className="border-2 border-neutral-800 p-3 bg-white">
                    <span className="text-sm">Emphasis Border (2px)</span>
                  </div>
                  <div className="border-l-4 border-neutral-800 pl-4 p-3">
                    <span className="text-sm">Accent Left Border (4px)</span>
                  </div>
                  <div className="border-2 border-red-600 p-3 bg-white opacity-20">
                    <span className="text-sm text-red-600">Stamp/Seal Effect</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 mt-4 italic">
                  Borders as territorial markers - defining conceptual zones
                </p>
              </div>
            </div>

            {/* Meta-commentary */}
            <div className="mt-8 p-6 border-2 border-neutral-800 bg-white">
              <BookOpen size={24} className="mb-3 text-neutral-700" />
              <h4 className="mb-3 text-neutral-900">Living Documentation</h4>
              <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                This brand book is not fixed but evolves inductively. As new works emerge, 
                they may challenge or extend these principles. Documentation follows practice, 
                not vice versa. The system serves the art, never constrains it.
              </p>
              <div className="pt-3 border-t border-neutral-300 flex items-center justify-between text-xs text-neutral-500">
                <span>Last updated: October 17, 2025</span>
                <span>Version: 1.0 (Initial grounding)</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
