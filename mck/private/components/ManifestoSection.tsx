import { motion } from 'motion/react';
import { FileText, Stamp, Layers } from 'lucide-react';

interface Manifesto {
  id: string;
  title: string;
  titleFa: string;
  date: string;
  icon: 'document' | 'stamp' | 'layers';
  excerpt: string;
  fullText: string;
}

const manifestos: Manifesto[] = [
  {
    id: '1',
    title: 'On Grounding',
    titleFa: 'درباره تاسیس',
    date: 'October 2024',
    icon: 'layers',
    excerpt: 'There is no ground that is not already grounded in prior grounds.',
    fullText: `Every artistic gesture emerges from accumulated sediments of prior gestures. 
    To paint is not to begin fresh but to paint within and against the history of painting. 
    To critique institutions is to operate within institutional critique's own history. 
    We are always already grounded—the question is whether we acknowledge this condition 
    or pretend to transcendent novelty. This portfolio exists as a deliberate archaeology 
    of its own groundings.`
  },
  {
    id: '2',
    title: 'The Bureaucratic Sublime',
    titleFa: 'والایی اداری',
    date: 'September 2024',
    icon: 'stamp',
    excerpt: 'Official forms as existential comedy—the stamp legitimizes everything and nothing.',
    fullText: `In the space between the official and the absurd lies a productive tension. 
    The bureaucratic aesthetic—stamps, seals, forms in triplicate—becomes a site of resistance 
    precisely because it mimics power while revealing its arbitrary nature. Every stamp is both 
    authorization and mockery. Every form filled is both compliance and critique. 
    This is not mere satire but a philosophical stance: power operates through formalism, 
    and formalism can be turned against itself.`
  },
  {
    id: '3',
    title: 'Inductivism as Method',
    titleFa: 'استقرا به مثابه روش',
    date: 'August 2024',
    icon: 'document',
    excerpt: 'Build from the ground up, carrying all prior grounds forward.',
    fullText: `Deductive systems impose frameworks from above. Inductive practice builds from 
    accumulated particulars. This portfolio operates inductively: each work emerges from 
    specific material and conceptual conditions, yet carries forward the weight of all prior 
    work. The sum exceeds any singular piece. The method is the message: thought as 
    accumulation rather than revelation, understanding as layering rather than breakthrough. 
    We work in strata, not leaps.`
  }
];

export function ManifestoSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'stamp':
        return <Stamp size={32} />;
      case 'layers':
        return <Layers size={32} />;
      default:
        return <FileText size={32} />;
    }
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-neutral-800">
            Manifestos / مانیفست‌ها
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Philosophical positions as artistic statements. These texts ground the practice in explicit reflection.
          </p>
        </div>

        {/* Manifestos grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {manifestos.map((manifesto, index) => (
            <motion.div
              key={manifesto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Card */}
              <div className="border-2 border-neutral-300 bg-neutral-50 p-8 h-full flex flex-col transition-all hover:border-neutral-800 hover:shadow-lg">
                {/* Icon and stamp overlay */}
                <div className="relative mb-6">
                  <div className="text-neutral-400 group-hover:text-neutral-800 transition-colors">
                    {getIcon(manifesto.icon)}
                  </div>
                  {/* Decorative stamp effect */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 border-2 border-red-600 rounded-full opacity-20 rotate-12 flex items-center justify-center">
                    <span className="text-xs text-red-600 rotate-[-12deg]">URGENT</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-neutral-900">{manifesto.title}</h3>
                    <p className="text-sm text-neutral-600">{manifesto.titleFa}</p>
                    <p className="text-xs text-neutral-500">{manifesto.date}</p>
                  </div>

                  <p className="text-neutral-700 italic border-l-2 border-neutral-400 pl-4">
                    "{manifesto.excerpt}"
                  </p>

                  <p className="text-sm text-neutral-600 leading-relaxed pt-2">
                    {manifesto.fullText}
                  </p>
                </div>

                {/* Bureaucratic footer */}
                <div className="mt-6 pt-4 border-t border-neutral-300 flex items-center justify-between text-xs text-neutral-500">
                  <span>Doc. #{manifesto.id.padStart(3, '0')}</span>
                  <span>Filed: {manifesto.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meta-commentary footer */}
        <div className="mt-12 p-6 border-l-4 border-neutral-800 bg-neutral-100">
          <p className="text-sm text-neutral-700 leading-relaxed">
            <strong>Note on manifestos:</strong> These texts do not prescribe what art should be. 
            They describe the conditions under which this particular practice operates. 
            Manifestos are not declarations but acknowledgments—of history, of constraints, 
            of the impossibility of pure beginnings. They are reflexive gestures within 
            a practice already aware of its own theoretical weight.
          </p>
        </div>
      </div>
    </div>
  );
}
