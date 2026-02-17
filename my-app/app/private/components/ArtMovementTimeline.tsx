import { useState } from 'react';
import { motion } from 'motion/react';

interface ArtMovement {
  id: string;
  period: string;
  name: string;
  nameEn: string;
  nameFa: string;
  philosophy: string;
  color: string;
  influence: string;
}

const movements: ArtMovement[] = [
  {
    id: '1',
    period: '500-1500',
    name: 'Persian Miniature',
    nameEn: 'Persian Miniature',
    nameFa: 'مینیاتور ایرانی',
    philosophy: 'Layered narratives, geometric precision, spiritual representation',
    color: '#C4845B',
    influence: 'Foundation of visual storytelling through layered composition'
  },
  {
    id: '2',
    period: '1850-1900',
    name: 'Realism',
    nameEn: 'Realism',
    nameFa: 'رئالیسم',
    philosophy: 'Truth through observation, social critique, documentary impulse',
    color: '#6B7D6A',
    influence: 'Grounding in material reality and social consciousness'
  },
  {
    id: '3',
    period: '1905-1920',
    name: 'Cubism',
    nameEn: 'Cubism',
    nameFa: 'کوبیسم',
    philosophy: 'Multiple perspectives, deconstruction, intellectual analysis',
    color: '#8B7355',
    influence: 'Breaking the singular viewpoint, embracing complexity'
  },
  {
    id: '4',
    period: '1916-1924',
    name: 'Dada',
    nameEn: 'Dada',
    nameFa: 'دادائیسم',
    philosophy: 'Anti-art, absurdity, institutional critique, radical negation',
    color: '#4A5859',
    influence: 'Questioning art itself as a category and institution'
  },
  {
    id: '5',
    period: '1960s-1970s',
    name: 'Conceptual Art',
    nameEn: 'Conceptual Art',
    nameFa: 'هنر مفهومی',
    philosophy: 'Idea over object, dematerialization, linguistic turn',
    color: '#3D3D3D',
    influence: 'Art as intellectual proposition rather than commodity'
  },
  {
    id: '6',
    period: '1980s-Now',
    name: 'Post-Conceptual',
    nameEn: 'Post-Conceptual',
    nameFa: 'پسا-مفهومی',
    philosophy: 'After the end of art, meta-critique, network consciousness',
    color: '#2C2C2C',
    influence: 'Operating within and against the entire history simultaneously'
  }
];

export function ArtMovementTimeline() {
  const [selectedMovement, setSelectedMovement] = useState<string | null>(null);

  return (
    <div className="relative py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-neutral-800">
            Inductive Framework / چارچوب استقرایی
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Each movement is not a style but a grounding—a way of seeing that conditions all subsequent vision. 
            This portfolio exists in the accumulated weight of these groundings.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300 -translate-x-1/2" />

          {/* Movement nodes */}
          <div className="space-y-12">
            {movements.map((movement, index) => (
              <motion.div
                key={movement.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end pr-[52%]' : 'justify-start pl-[52%]'
                }`}
              >
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedMovement(movement.id === selectedMovement ? null : movement.id)}
                >
                  {/* Node dot */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md transition-all group-hover:scale-150"
                    style={{ 
                      backgroundColor: movement.color,
                      [index % 2 === 0 ? 'right' : 'left']: '-10%'
                    }}
                  />

                  {/* Content card */}
                  <div 
                    className="border border-neutral-300 bg-white p-6 transition-all group-hover:shadow-lg"
                    style={{ 
                      borderLeftWidth: index % 2 === 0 ? '4px' : '1px',
                      borderRightWidth: index % 2 === 0 ? '1px' : '4px',
                      borderColor: movement.color 
                    }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm text-neutral-500">{movement.period}</span>
                      <span className="text-xs text-neutral-400 ml-4">{movement.nameFa}</span>
                    </div>
                    <h3 className="mb-2 text-neutral-900">{movement.nameEn}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{movement.philosophy}</p>
                    
                    {selectedMovement === movement.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-3 border-t border-neutral-200 mt-3"
                      >
                        <p className="text-xs text-neutral-700 italic">
                          {movement.influence}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meta-commentary */}
        <div className="mt-16 p-6 border border-neutral-300 bg-neutral-50 max-w-3xl mx-auto">
          <p className="text-sm text-neutral-700 italic leading-relaxed">
            Note: This timeline is not chronological progress but archaeological layers. 
            The artist operates from the deepest stratum—aware that each gesture carries 
            the weight of every prior grounding. To create now is to create within the entire history.
          </p>
        </div>
      </div>
    </div>
  );
}
