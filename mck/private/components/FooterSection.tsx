import { Mail, ExternalLink } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1 - Artist statement */}
          <div className="space-y-4">
            <div className="text-white">Salman Englisi</div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Philosopher-artist operating at the intersection of visual practice, 
              critical theory, and social activism. Independent research and production.
            </p>
            <p className="text-xs text-neutral-500" style={{ fontFamily: 'serif' }}>
              هنرمند-فیلسوف، تحقیق و تولید مستقل
            </p>
          </div>

          {/* Column 2 - Contact */}
          <div className="space-y-4">
            <h4 className="text-white">Contact / تماس</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="mailto:contact@salmanenglisi.art" 
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>contact@salmanenglisi.art</span>
              </a>
              <p className="text-neutral-500 text-xs">
                For inquiries, collaborations, or critical dialogue
              </p>
            </div>
          </div>

          {/* Column 3 - Links & meta */}
          <div className="space-y-4">
            <h4 className="text-white">Network</h4>
            <div className="space-y-2 text-sm">
              <a 
                href="#" 
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                <span>Archive (Full catalog)</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                <span>Research writings</span>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
                <span>Collaborative projects</span>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
            <div className="text-center md:text-left">
              <p>© 2024 Salman Englisi. All works protected under independent practice.</p>
              <p className="text-xs mt-1">
                This portfolio is itself an artwork—a meta-reflection on digital presentation 
                as philosophical medium.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span>Built with intentionality</span>
              <span>•</span>
              <span>Last updated: Oct 2024</span>
            </div>
          </div>
        </div>

        {/* Final meta-commentary */}
        <div className="mt-8 pt-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-600 italic text-center max-w-3xl mx-auto leading-relaxed">
            Colophon: This site employs minimalist design language derived from Persian geometric 
            traditions and bureaucratic aesthetics. Typography balances Latin and Persian scripts. 
            Layout structures mirror the inductivist methodology described in the manifestos. 
            Every design decision is a philosophical position made visible.
          </p>
        </div>
      </div>
    </footer>
  );
}
