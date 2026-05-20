import { trackLead } from '../utils/pixel';

export default function Footer() {
  return (
    <footer className="bg-sano-dark text-sano-sand pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <a href="https://www.sanovet.com/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="font-serif text-3xl font-bold tracking-tight text-white mb-6 block">
              Sano<span className="text-sano-accent">Vet</span>
            </a>
            <p className="text-sano-sand/70 text-sm mb-6 leading-relaxed">
              Deine Experten für pflanzliche und hochwertige Ergänzungsfuttermittel. 
              Für die optimale Unterstützung der Gesundheit deines Pferdes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wider">PRODUKTE</h4>
            <ul className="space-y-3 text-sm text-sano-sand/70">
              <li><a href="https://www.sanovet.com/anwendungsgebiete/verdauung-leber/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Magen & Darm</a></li>
              <li><a href="https://www.sanovet.com/anwendungsgebiete/gelenke-sehnen/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Gelenke & Sehnen</a></li>
              <li><a href="https://www.sanovet.com/anwendungsgebiete/nerven/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Nerven & Ruhe</a></li>
              <li><a href="https://www.sanovet.com/anwendungsgebiete/huf-fell-haut/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Huf & Fell</a></li>
              <li><a href="https://www.sanovet.com/anwendungsgebiete/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Alle Produkte</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wider">KUNDENSERVICE</h4>
            <ul className="space-y-3 text-sm text-sano-sand/70">
              <li><a href="https://www.sanovet.com/kontakt/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Kontakt</a></li>
              <li><a href="https://www.sanovet.com/futterberatung/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Gratis Futterberatung</a></li>
              <li><a href="https://www.sanovet.com/information/versand-und-zahlung/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Versand & Zahlung</a></li>
              <li><a href="https://www.sanovet.com/information/widerrufsbelehrung/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-sano-accent transition-colors">Rückgabe</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sano-sand/50">
          <p>© {new Date().getFullYear()} SanoVet GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.sanovet.com/impressum/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Impressum</a>
            <a href="https://www.sanovet.com/datenschutz/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="https://www.sanovet.com/agb/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
