import { motion } from 'motion/react';
import agilityImage from '../assets/images/sanovet_agility_1779259050294.png';
import coatImage from '../assets/images/sanovet_coat_1779271056270.png';
import { trackLead } from '../utils/pixel';

// Using placeholders for other categories to keep it lightweight, but styled beautifully
// In a real app we would have 4 specific images, but we only generated 1 specific category to save time.

const categories = [
  {
    id: 'magen',
    title: 'Magen & Darm',
    description: 'Für eine gesunde Verdauung und ein starkes Mikrobiom.',
    icon: '🌾',
    color: 'bg-orange-50',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.sanovet.com/anwendungsgebiete/verdauung-leber/'
  },
  {
    id: 'gelenke',
    title: 'Gelenke & Mobilität',
    description: 'Unterstützt Sehnen, Bänder und den gesamten Bewegungsapparat.',
    icon: '🐎',
    color: 'bg-emerald-50',
    image: agilityImage,
    url: 'https://www.sanovet.com/anwendungsgebiete/gelenke-sehnen/'
  },
  {
    id: 'nerven',
    title: 'Nerven & innere Ruhe',
    description: 'Für mehr Gelassenheit bei Stress, Turnier oder Umzug.',
    icon: '🌙',
    color: 'bg-indigo-50',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=800',
    url: 'https://www.sanovet.com/anwendungsgebiete/nerven/'
  },
  {
    id: 'huf',
    title: 'Huf & Fell',
    description: 'Fördert kräftiges Hufhorn und ein glänzendes, gesundes Haarkleid.',
    icon: '✨',
    color: 'bg-amber-50',
    image: coatImage,
    url: 'https://www.sanovet.com/anwendungsgebiete/huf-fell-haut/'
  }
];

export default function CategoryRouting() {
  return (
    <section id="categories" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sano-dark mb-4">
            Was braucht dein Pferd <span className="text-sano-green italic">gerade am meisten?</span>
          </h2>
          <p className="text-sano-dark/70 text-lg">
            Wähle den Bereich aus, bei dem du dein Pferd unterstützen möchtest. 
            Wir leiten dich direkt zu den passenden, von Experten entwickelten Produkten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.a
              href={cat.url}
              onClick={trackLead}
              target="_blank"
              rel="noopener noreferrer"
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-sano-beige/30"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-sano-dark/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={cat.image} 
                  alt={`Sanovet Kategorie ${cat.title}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-xl">
                  {cat.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-serif text-sano-dark mb-2 group-hover:text-sano-green transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sano-dark/70 text-sm mb-6 flex-1">
                  {cat.description}
                </p>
                <div className="flex items-center text-sano-green text-sm font-medium">
                  Produkte ansehen
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Fallback Consulting CTA */}
        <div className="mt-16 bg-sano-green rounded-[2rem] p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Du bist dir noch unsicher?</h3>
            <p className="text-white/80 mb-8">
              Jedes Pferd ist individuell. Nutze unsere kostenlose Futterberatung von unseren Experten, zusammen finden wir die perfekte Lösung.
            </p>
            <a 
              href="https://www.sanovet.com/futterberatung/" 
              onClick={trackLead}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-sano-green rounded-full font-semibold hover:bg-sano-sand transition-colors shadow-lg"
            >
              Zur Gratis Futterberatung
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
