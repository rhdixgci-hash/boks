import { motion } from 'motion/react';
import { BookOpen, Users, Megaphone } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="py-16 px-4 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-neutral-800">
            About / درباره
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Not a biography but a position. Not credentials but groundings.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left column - Philosophical statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border-l-4 border-neutral-800 pl-6 space-y-4">
              <h3 className="text-neutral-900">
                The Artist as Philosopher-Activist
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                Salman Englisi operates at the intersection of artistic practice, philosophical inquiry, 
                and social critique. The work is grounded in deep knowledge of art history—from Persian 
                miniature traditions to contemporary post-conceptual strategies—while maintaining a 
                critical distance from institutional frameworks.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                This is not art for galleries (though it may appear there) nor philosophy for 
                academics (though it engages theory). It is independent practice accountable only 
                to its own rigorous standards: intellectual honesty, formal precision, and 
                political awareness.
              </p>
            </div>

            <div className="border-l-4 border-neutral-400 pl-6 space-y-4">
              <h3 className="text-neutral-900">
                هنرمند به مثابه فیلسوف-فعال
              </h3>
              <p className="text-neutral-700 leading-relaxed" style={{ fontFamily: 'serif' }}>
                سلمان انگلیسی در تقاطع هنر، فلسفه و نقد اجتماعی فعالیت می‌کند. 
                این کار بر پایه شناخت عمیق تاریخ هنر—از سنت‌های مینیاتور ایرانی 
                تا استراتژی‌های پسا-مفهومی معاصر—استوار است، در حالی که فاصله 
                انتقادی از چارچوب‌های نهادی حفظ می‌شود.
              </p>
            </div>
          </motion.div>

          {/* Right column - Approach cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Philosophical approach */}
            <div className="bg-white border border-neutral-300 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 border border-neutral-300">
                  <BookOpen size={24} className="text-neutral-700" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-neutral-900">Philosophical Grounding</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Drawing from phenomenology, critical theory, and art philosophy. 
                    Influences include Heidegger's notion of grounding, Foucault's institutional 
                    analysis, and Adorno's critique of the culture industry. The work asks: 
                    what are the conditions of possibility for art today?
                  </p>
                </div>
              </div>
            </div>

            {/* Social activism */}
            <div className="bg-white border border-neutral-300 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 border border-neutral-300">
                  <Megaphone size={24} className="text-neutral-700" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-neutral-900">Activist Position</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Art as critique, not decoration. Every work intervenes in systems of power—
                    whether aesthetic institutions, bureaucratic structures, or cultural narratives. 
                    The satirical use of official forms mocks authority while revealing its 
                    arbitrary nature. This is jester-as-truth-teller.
                  </p>
                </div>
              </div>
            </div>

            {/* Independent practice */}
            <div className="bg-white border border-neutral-300 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neutral-100 border border-neutral-300">
                  <Users size={24} className="text-neutral-700" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-neutral-900">Independent Practice</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    No institutional affiliation. No commercial gallery representation. 
                    This autonomy enables a practice accountable only to its own standards 
                    of rigor and integrity. The work circulates in alternative networks, 
                    digital platforms, and temporary interventions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education/Background (styled as bureaucratic document) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border-2 border-neutral-800 p-8 relative"
        >
          {/* Stamp overlay */}
          <div className="absolute top-4 right-4 w-24 h-24 border-2 border-red-600 rounded-full opacity-20 rotate-12 flex items-center justify-center">
            <span className="text-xs text-red-600 rotate-[-12deg]">VERIFIED</span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b-2 border-neutral-300 pb-4">
              <h3 className="text-neutral-900">Credentials & Groundings</h3>
              <span className="text-xs text-neutral-500">Form 07-A</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">FIELD OF STUDY</p>
                  <p className="text-neutral-800">Philosophy of Art & Visual Culture</p>
                  <p className="text-sm text-neutral-600">PhD-level research (independent)</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">PRIMARY METHODS</p>
                  <p className="text-neutral-800">Inductive analysis, visual archaeology, institutional critique</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">INFLUENCES</p>
                  <p className="text-neutral-800">Persian miniature tradition, Dada, Conceptual art, 
                  Iranian bureaucratic aesthetics, Post-structuralist theory</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">MEDIUMS</p>
                  <p className="text-neutral-800">Digital collage, installation, photography, 
                  text, administrative materials, mixed media</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">LANGUAGES</p>
                  <p className="text-neutral-800">Farsi (Persian), English</p>
                  <p className="text-sm text-neutral-600">Bilingual practice & theory</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">STATUS</p>
                  <p className="text-neutral-800">Independent / Non-affiliated</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-300 flex items-center justify-between text-xs text-neutral-500">
              <span>Document authenticated: October 17, 2025</span>
              <span>Serial: SE-2024-001</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
