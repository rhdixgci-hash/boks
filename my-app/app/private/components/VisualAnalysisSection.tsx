import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Layers, TrendingUp, Network, Eye } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface VisualAnalysis {
  id: string;
  concept: string;
  conceptFa: string;
  description: string;
  visualization: 'comparison' | 'evolution' | 'network' | 'deconstruction';
  insights: string[];
}

const visualAnalyses: VisualAnalysis[] = [
  {
    id: 'VA001',
    concept: 'Layered Narrative Structure',
    conceptFa: 'ساختار روایی لایه‌ای',
    description: 'Analysis of how Persian miniature composition principles translate to digital space. Multiple visual planes coexist without perspectival hierarchy.',
    visualization: 'comparison',
    insights: [
      'Traditional miniatures: Flat plane with simultaneous scenes',
      'Digital translation: Z-index layering, opacity, translucency',
      'Conceptual continuity: Rejection of single viewpoint dominance',
      'Modern application: Web overlays, modal dialogs as narrative layers'
    ]
  },
  {
    id: 'VA002',
    concept: 'Evolution of Bureaucratic Forms',
    conceptFa: 'تکامل فرم‌های اداری',
    description: 'Tracking the visual language of official documents from Persian administrative history through contemporary digital interfaces.',
    visualization: 'evolution',
    insights: [
      'Historical stamps and seals: Physical impression as authentication',
      'Typed forms era: Grid-based information architecture',
      'Digital bureaucracy: Dropdown menus inherit form logic',
      'Critical appropriation: Exaggerating formalism exposes arbitrary authority'
    ]
  },
  {
    id: 'VA003',
    concept: 'Conceptual Network Mapping',
    conceptFa: 'نقشه‌برداری شبکه مفهومی',
    description: 'Visual analysis of how art movements interconnect as philosophical groundings rather than linear progression.',
    visualization: 'network',
    insights: [
      'Realism grounds Conceptual Art (truth-seeking, documentation)',
      'Persian Miniature informs Cubism (multiple perspectives)',
      'Dada enables Institutional Critique (anti-art as foundation for meta-art)',
      'All contemporary work exists within this accumulated network'
    ]
  },
  {
    id: 'VA004',
    concept: 'Deconstructing the Gallery Space',
    conceptFa: 'ساختارشکنی فضای گالری',
    description: 'Breaking down the traditional gallery presentation into its constituent power structures and spatial hierarchies.',
    visualization: 'deconstruction',
    insights: [
      'White walls: Claim to neutrality masks institutional authority',
      'Optimal viewing distance: Enforces bodily discipline',
      'Chronological hang: Imposes linear history on networked reality',
      'Digital gallery: Can subvert or reproduce these power structures'
    ]
  }
];

export function VisualAnalysisSection() {
  const [selectedAnalysis, setSelectedAnalysis] = useState<VisualAnalysis>(visualAnalyses[0]);

  const getVisualizationIcon = (type: string) => {
    switch (type) {
      case 'comparison':
        return <Layers size={24} />;
      case 'evolution':
        return <TrendingUp size={24} />;
      case 'network':
        return <Network size={24} />;
      case 'deconstruction':
        return <Eye size={24} />;
      default:
        return <Layers size={24} />;
    }
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-4 text-neutral-800">
            Visual Analysis / تحلیل بصری
          </h2>
          <p className="text-neutral-600 max-w-3xl">
            Meta-visual research: analyzing the visual language of art history to ground 
            contemporary practice. These analyses function as both research and artwork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left sidebar - Analysis selector */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-24">
              {visualAnalyses.map((analysis) => (
                <button
                  key={analysis.id}
                  onClick={() => setSelectedAnalysis(analysis)}
                  className={`w-full text-left p-4 border transition-all ${
                    selectedAnalysis.id === analysis.id
                      ? 'border-neutral-800 bg-neutral-800 text-white'
                      : 'border-neutral-300 bg-white hover:border-neutral-800'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0">
                      {getVisualizationIcon(analysis.visualization)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm mb-1">{analysis.concept}</p>
                      <p className={`text-xs ${
                        selectedAnalysis.id === analysis.id ? 'text-neutral-300' : 'text-neutral-500'
                      }`}>
                        {analysis.conceptFa}
                      </p>
                    </div>
                  </div>
                  <p className={`text-xs font-mono ${
                    selectedAnalysis.id === analysis.id ? 'text-neutral-400' : 'text-neutral-400'
                  }`}>
                    {analysis.id}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedAnalysis.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Analysis header */}
              <div className="border-2 border-neutral-800 bg-neutral-50 p-8 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 border-2 border-neutral-800 bg-white flex items-center justify-center flex-shrink-0">
                    {getVisualizationIcon(selectedAnalysis.visualization)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-neutral-900 mb-2">{selectedAnalysis.concept}</h3>
                    <p className="text-neutral-600 mb-1">{selectedAnalysis.conceptFa}</p>
                    <p className="text-xs text-neutral-500 font-mono">Analysis ID: {selectedAnalysis.id}</p>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed">{selectedAnalysis.description}</p>
              </div>

              {/* Visualization placeholder */}
              <div className="border border-neutral-300 bg-neutral-100 aspect-video mb-6 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mb-4 text-neutral-400">
                    {getVisualizationIcon(selectedAnalysis.visualization)}
                  </div>
                  <p className="text-sm text-neutral-600 mb-2">
                    Visual diagram: {selectedAnalysis.visualization}
                  </p>
                  <p className="text-xs text-neutral-500 italic max-w-md">
                    This would contain an interactive visualization mapping the conceptual relationships. 
                    The diagram itself is an analytical tool and artwork.
                  </p>
                </div>
              </div>

              {/* Key insights */}
              <div className="border border-neutral-300 bg-white p-6">
                <h4 className="mb-4 text-neutral-900">Key Insights</h4>
                <div className="space-y-3">
                  {selectedAnalysis.insights.map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 pb-3 border-b border-neutral-200 last:border-0"
                    >
                      <div className="w-6 h-6 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs">{index + 1}</span>
                      </div>
                      <p className="text-sm text-neutral-700 leading-relaxed flex-1">
                        {insight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Methodological note */}
              <div className="mt-6 p-4 bg-neutral-50 border-l-4 border-neutral-800">
                <p className="text-xs text-neutral-700 leading-relaxed">
                  <strong>Methodological note:</strong> These visual analyses employ close reading 
                  techniques borrowed from art history and critical theory, applied to the visual 
                  languages themselves. The goal is not to create new taxonomies but to make explicit 
                  the implicit structures that condition contemporary practice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* NVivo-style coding reference */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="border-neutral-300">
            <CardContent className="p-6">
              <h4 className="mb-3 text-neutral-900 flex items-center gap-2">
                <Layers size={18} />
                Thematic Codes
              </h4>
              <div className="space-y-2 text-sm text-neutral-700">
                <div className="flex items-center justify-between">
                  <span>Persian Heritage</span>
                  <span className="text-xs text-neutral-500">23 refs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Institutional Power</span>
                  <span className="text-xs text-neutral-500">18 refs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Layered Composition</span>
                  <span className="text-xs text-neutral-500">15 refs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Meta-Critique</span>
                  <span className="text-xs text-neutral-500">12 refs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-300">
            <CardContent className="p-6">
              <h4 className="mb-3 text-neutral-900 flex items-center gap-2">
                <Network size={18} />
                Concept Clusters
              </h4>
              <div className="space-y-2 text-sm text-neutral-700">
                <div className="p-2 bg-neutral-100 border border-neutral-300">
                  Bureaucracy → Authority → Subversion
                </div>
                <div className="p-2 bg-neutral-100 border border-neutral-300">
                  Miniature → Layering → Digital
                </div>
                <div className="p-2 bg-neutral-100 border border-neutral-300">
                  Grounding → History → Accumulation
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-300">
            <CardContent className="p-6">
              <h4 className="mb-3 text-neutral-900 flex items-center gap-2">
                <Eye size={18} />
                Analysis Status
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-neutral-700">Coded</span>
                    <span className="text-xs text-neutral-500">4/4</span>
                  </div>
                  <div className="h-2 bg-neutral-200">
                    <div className="h-full bg-neutral-800" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-neutral-700">Visualized</span>
                    <span className="text-xs text-neutral-500">4/4</span>
                  </div>
                  <div className="h-2 bg-neutral-200">
                    <div className="h-full bg-neutral-800" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 italic pt-2">
                  Analysis complete as of Oct 2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
