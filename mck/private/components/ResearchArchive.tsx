import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, BookOpen, Network, Download, ExternalLink } from 'lucide-react';

interface ResearchDocument {
  id: string;
  title: string;
  titleFa: string;
  type: 'essay' | 'analysis' | 'manifesto' | 'thesis';
  date: string;
  themes: string[];
  abstract: string;
  artMovements: string[];
  downloadable: boolean;
}

const researchDocuments: ResearchDocument[] = [
  {
    id: 'R001',
    title: 'The Inductivist Paradigm in Contemporary Art Practice',
    titleFa: 'پارادایم استقرایی در هنر معاصر',
    type: 'thesis',
    date: 'September 2024',
    themes: ['Methodology', 'Philosophy of Art', 'Epistemology'],
    abstract: 'This paper argues for an inductivist approach to artistic practice as an alternative to deductive, theory-driven production. Building from accumulated particulars rather than imposed frameworks, the inductivist artist works archaeologically - each piece emerging from prior groundings while carrying forward their accumulated weight.',
    artMovements: ['Conceptual Art', 'Post-Conceptual'],
    downloadable: true
  },
  {
    id: 'R002',
    title: 'Bureaucratic Aesthetics as Critical Practice',
    titleFa: 'زیبایی‌شناسی اداری به مثابه شیوه انتقادی',
    type: 'essay',
    date: 'August 2024',
    themes: ['Institutional Critique', 'Satire', 'Power'],
    abstract: 'Official forms, stamps, and administrative protocols are not mere aesthetics but material instantiations of power. This essay examines how appropriating bureaucratic visual language can expose and subvert institutional authority through formal mimicry and exaggeration.',
    artMovements: ['Dada', 'Institutional Critique'],
    downloadable: true
  },
  {
    id: 'R003',
    title: 'Persian Miniature Logic in Digital Space',
    titleFa: 'منطق مینیاتور ایرانی در فضای دیجیتال',
    type: 'analysis',
    date: 'July 2024',
    themes: ['Persian Art', 'Digital Media', 'Composition'],
    abstract: 'The Persian miniature tradition offers a sophisticated model for digital composition: multiple narrative planes, non-perspectival space, and layered temporalities. This analysis traces how these principles translate to contemporary screen-based work.',
    artMovements: ['Persian Miniature', 'Post-Conceptual'],
    downloadable: false
  },
  {
    id: 'R004',
    title: 'After the End of Art: Operating in Exhaustion',
    titleFa: 'پس از پایان هنر: فعالیت در خستگی',
    type: 'essay',
    date: 'June 2024',
    themes: ['Art History', 'Post-Modernism', 'Meta-Critique'],
    abstract: 'If art has indeed ended (as Danto argued), what remains for contemporary practice? This essay proposes that working "after the end" means operating with full awareness of art history as totality - every gesture understood as existing within, against, and because of all prior gestures.',
    artMovements: ['Post-Conceptual', 'Conceptual Art'],
    downloadable: true
  },
  {
    id: 'R005',
    title: 'The Jester as Philosopher: Satire and Truth',
    titleFa: 'دلقک به مثابه فیلسوف: طنز و حقیقت',
    type: 'manifesto',
    date: 'May 2024',
    themes: ['Satire', 'Social Critique', 'Role of Artist'],
    abstract: 'The court jester speaks truth to power through mockery. This manifesto argues for the artist-as-jester: one who operates within institutional structures while maintaining critical distance through humor, exaggeration, and formal subversion.',
    artMovements: ['Dada', 'Institutional Critique'],
    downloadable: true
  },
  {
    id: 'R006',
    title: 'Grounding on Grounding: Meta-Foundational Analysis',
    titleFa: 'تاسیس بر تاسیس: تحلیل فرابنیادی',
    type: 'thesis',
    date: 'April 2024',
    themes: ['Philosophy', 'Foundations', 'Epistemology'],
    abstract: 'All foundations rest on prior foundations. This thesis examines the impossibility of pure origins in artistic practice, arguing that every "new" movement is always already grounded in what preceded it. The task is not to escape grounding but to acknowledge and work within accumulated groundings.',
    artMovements: ['Conceptual Art', 'Realism', 'Cubism'],
    downloadable: true
  }
];

export function ResearchArchive() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  const types = Array.from(new Set(researchDocuments.map(d => d.type)));
  
  const filteredDocs = selectedType 
    ? researchDocuments.filter(d => d.type === selectedType)
    : researchDocuments;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'thesis':
        return <BookOpen size={20} />;
      case 'manifesto':
        return <FileText size={20} />;
      case 'analysis':
        return <Network size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <div className="py-16 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-4 text-neutral-800">
            Research Archive / آرشیو پژوهشی
          </h2>
          <p className="text-neutral-600 max-w-3xl mb-8">
            Theoretical writings, critical analyses, and philosophical investigations. 
            Each document grounds the artistic practice in explicit intellectual inquiry.
          </p>

          {/* Filter by type */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-neutral-500">Filter by type:</span>
            <button
              onClick={() => setSelectedType(null)}
              className={`px-3 py-1 text-sm border transition-colors ${!selectedType ? 'bg-neutral-800 text-white border-neutral-800' : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'}`}
            >
              All
            </button>
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1 text-sm border transition-colors capitalize ${selectedType === type ? 'bg-neutral-800 text-white border-neutral-800' : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Documents list */}
        <div className="space-y-4">
          {filteredDocs.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border border-neutral-300 bg-white"
            >
              {/* Document header */}
              <div
                className="p-6 cursor-pointer hover:bg-neutral-50 transition-colors"
                onClick={() => setExpandedDoc(expandedDoc === doc.id ? null : doc.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Icon and ID */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-neutral-300 bg-neutral-100 flex items-center justify-center mb-2">
                      {getTypeIcon(doc.type)}
                    </div>
                    <p className="text-xs text-neutral-500 text-center font-mono">{doc.id}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <h3 className="text-neutral-900 mb-1">{doc.title}</h3>
                        <p className="text-sm text-neutral-600 mb-2">{doc.titleFa}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs px-2 py-1 bg-neutral-200 text-neutral-700 uppercase">
                          {doc.type}
                        </span>
                        {doc.downloadable && (
                          <Download size={16} className="text-neutral-500" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>{doc.themes.join(', ')}</span>
                    </div>

                    {/* Abstract preview */}
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      {expandedDoc === doc.id ? doc.abstract : `${doc.abstract.substring(0, 150)}...`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedDoc === doc.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-neutral-300 bg-neutral-50 p-6"
                >
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs text-neutral-500 mb-2">RELATED ART MOVEMENTS</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.artMovements.map(movement => (
                          <span
                            key={movement}
                            className="text-xs px-2 py-1 bg-white border border-neutral-300 text-neutral-700"
                          >
                            {movement}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 mb-2">THEMATIC TAGS</p>
                      <div className="flex flex-wrap gap-2">
                        {doc.themes.map(theme => (
                          <span
                            key={theme}
                            className="text-xs px-2 py-1 bg-neutral-800 text-white"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {doc.downloadable ? (
                      <button className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white hover:bg-neutral-900 transition-colors text-sm">
                        <Download size={16} />
                        Download PDF
                      </button>
                    ) : (
                      <span className="text-xs text-neutral-500 italic">Full text available upon request</span>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 border border-neutral-300 hover:border-neutral-800 transition-colors text-sm">
                      <ExternalLink size={16} />
                      View full text
                    </button>
                  </div>

                  {/* Meta info */}
                  <div className="mt-6 pt-4 border-t border-neutral-300 text-xs text-neutral-500">
                    <p>
                      <strong>Citation:</strong> Englisi, Salman. "{doc.title}." 
                      Independent Research Archive, {doc.date}. 
                      Document ID: {doc.id}.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Archive note */}
        <div className="mt-12 p-6 border-2 border-neutral-800 bg-white">
          <h4 className="mb-3 text-neutral-900">Archive Methodology</h4>
          <p className="text-sm text-neutral-700 leading-relaxed mb-3">
            This research archive operates as living documentation. Unlike traditional academic publishing, 
            these texts emerge organically from practice and are continuously revised based on new work. 
            Each document is dated to its initial publication but understood as provisional - 
            subject to amendment as understanding deepens.
          </p>
          <p className="text-xs text-neutral-600 italic">
            The archive itself is an artwork: a meta-reflection on knowledge production, 
            institutional validation, and the commodification of intellectual labor.
          </p>
        </div>
      </div>
    </div>
  );
}
