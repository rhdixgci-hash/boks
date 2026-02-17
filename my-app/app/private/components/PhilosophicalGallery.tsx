import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Filter, Grid3x3, List, Network } from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  titleFa: string;
  year: string;
  medium: string;
  category: string;
  grounding: string;
  statement: string;
  image: string;
}

const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Bureaucratic Ontology #1',
    titleFa: 'هستی‌شناسی اداری',
    year: '2024',
    medium: 'Digital collage, archival stamps',
    category: 'Satirical Formalism',
    grounding: 'post-conceptual',
    statement: 'Official documents as existential comedy—the stamp legitimizes nothing and everything.',
    image: 'https://images.unsplash.com/photo-1757361821714-6aa79e181dab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZG9jdW1lbnQlMjBzdGFtcHxlbnwxfHx8fDE3NjA3MjA2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '2',
    title: 'Layers of Seeing',
    titleFa: 'لایه‌های دیدن',
    year: '2023',
    medium: 'Mixed media, Persian motifs',
    category: 'Neo-Miniature',
    grounding: 'persian-miniature',
    statement: 'Multiple narratives occupying the same visual plane—ancient technique, contemporary anxiety.',
    image: 'https://images.unsplash.com/photo-1615192214989-25f78edc2381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwZ2VvbWV0cmljJTIwcGF0dGVybnxlbnwxfHx8fDE3NjA3MjA2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '3',
    title: 'Untitled (The System)',
    titleFa: 'بی‌عنوان (سیستم)',
    year: '2024',
    medium: 'Installation, administrative forms',
    category: 'Institutional Critique',
    grounding: 'conceptual',
    statement: 'The gallery as bureaucracy. You are now part of the system by viewing this.',
    image: 'https://images.unsplash.com/photo-1683623170483-7614ea7ad626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0dWFsJTIwYXJ0JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NjA3MjA2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '4',
    title: 'Abstraction as Refusal',
    titleFa: 'انتزاع به مثابه امتناع',
    year: '2023',
    medium: 'Acrylic, canvas',
    category: 'Minimalist Resistance',
    grounding: 'cubism',
    statement: 'What cannot be represented cannot be commodified. A silence that speaks volumes.',
    image: 'https://images.unsplash.com/photo-1692704983632-42d3fe9d367e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzYwNzIwNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '5',
    title: 'Calligraphic Dissolution',
    titleFa: 'انحلال خطی',
    year: '2024',
    medium: 'Ink, digital manipulation',
    category: 'Linguistic Deconstruction',
    grounding: 'dada',
    statement: 'Letters losing meaning, meaning finding new forms. Language at its breaking point.',
    image: 'https://images.unsplash.com/photo-1619030143111-44eca5612c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsaWdyYXBoeSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MDcyMDY0MXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '6',
    title: 'Documentary Fiction #7',
    titleFa: 'داستان مستند',
    year: '2023',
    medium: 'Photography, text',
    category: 'Social Realism',
    grounding: 'realism',
    statement: 'Reality staged so carefully it becomes more real than reality itself.',
    image: 'https://images.unsplash.com/photo-1683623170483-7614ea7ad626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXB0dWFsJTIwYXJ0JTIwZ2FsbGVyeXxlbnwxfHx8fDE3NjA3MjA2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

type ViewMode = 'grid' | 'list' | 'network';

export function PhilosophicalGallery() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(artworks.map(a => a.category)));
  
  const filteredArtworks = selectedCategory 
    ? artworks.filter(a => a.category === selectedCategory)
    : artworks;

  return (
    <div className="py-16 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-6 text-neutral-800">
            Archive / آرشیو
          </h2>
          <p className="text-neutral-600 max-w-3xl mb-8">
            Not a gallery but an archaeological site. Each work is a stratum, a layer of thought 
            compressed into visual form. View them not as objects but as philosophical propositions.
          </p>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* View mode toggle */}
            <div className="flex items-center gap-2 border border-neutral-300 bg-white p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-neutral-800 text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
                aria-label="Grid view"
              >
                <Grid3x3 size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-neutral-800 text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
                aria-label="List view"
              >
                <List size={18} />
              </button>
              <button
                onClick={() => setViewMode('network')}
                className={`p-2 transition-colors ${viewMode === 'network' ? 'bg-neutral-800 text-white' : 'text-neutral-600 hover:bg-neutral-100'}`}
                aria-label="Network view"
              >
                <Network size={18} />
              </button>
            </div>

            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-neutral-500" />
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 text-sm border transition-colors ${!selectedCategory ? 'bg-neutral-800 text-white border-neutral-800' : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'}`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-sm border transition-colors ${selectedCategory === cat ? 'bg-neutral-800 text-white border-neutral-800' : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery views */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-3 overflow-hidden border border-neutral-300 bg-neutral-100">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-neutral-900">{artwork.title}</h3>
                    <span className="text-xs text-neutral-500">{artwork.year}</span>
                  </div>
                  <p className="text-sm text-neutral-600">{artwork.titleFa}</p>
                  <p className="text-xs text-neutral-500">{artwork.medium}</p>
                  <p className="text-sm text-neutral-700 italic mt-2 leading-relaxed">
                    {artwork.statement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="space-y-6">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-6 border border-neutral-300 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-48 h-48 flex-shrink-0 border border-neutral-200 bg-neutral-100">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-neutral-900">{artwork.title}</h3>
                    <span className="text-sm text-neutral-500">{artwork.year}</span>
                  </div>
                  <p className="text-neutral-600">{artwork.titleFa}</p>
                  <div className="flex gap-4 text-sm text-neutral-500">
                    <span>{artwork.medium}</span>
                    <span>•</span>
                    <span>{artwork.category}</span>
                  </div>
                  <p className="text-neutral-700 italic pt-2 leading-relaxed">
                    {artwork.statement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {viewMode === 'network' && (
          <div className="text-center py-20">
            <Network size={48} className="mx-auto mb-4 text-neutral-400" />
            <p className="text-neutral-600 mb-2">Network view: Conceptual mapping mode</p>
            <p className="text-sm text-neutral-500 italic max-w-md mx-auto">
              This view would show artworks as nodes in a philosophical network, 
              connected by shared groundings and conceptual threads. 
              A meta-visualization of thought itself.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
