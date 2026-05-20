import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Leaf } from 'lucide-react';
import heroImage from '../assets/images/sanovet_hero_1779259009126.png'; // Using generated image

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sano-green/10 text-sano-green text-sm font-medium mb-6">
                <Leaf className="w-4 h-4" />
                <span>100% Natürliche Inhaltsstoffe</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-sano-dark font-bold leading-[1.1] mb-6">
                Weil dein Pferd <br />
                <span className="text-sano-green italic">nur das Beste</span> verdient.
              </h1>
              
              <p className="text-lg text-sano-dark/80 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
                Entwickelt von Experten, geliebt von Pferden. Finde genau die natürliche Unterstützung, die auf die individuellen Bedürfnisse deines Pferdes abgestimmt ist.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#categories" className="w-full sm:w-auto px-8 py-4 bg-sano-green text-white rounded-full font-medium shadow-lg shadow-sano-green/20 hover:bg-sano-green-light transition-all flex items-center justify-center group">
                  Jetzt Bedürfnis wählen
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center space-x-2 text-sm text-sano-dark/70">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-sano-sand bg-sano-beige flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <span>ÜBER 10.000 GLÜCKLICHE PFERDE</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl"
            >
              <div className="absolute inset-0 bg-sano-green/10 mix-blend-overlay z-10" />
              <img 
                src={heroImage} 
                alt="Jungreiterin umarmt ihr Pferd liebevoll auf einer Koppel" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Trust Badge Floating */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl max-w-[200px]">
                <div className="flex items-center space-x-1 text-sano-accent mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-sano-dark font-medium font-serif leading-tight">
                  "Mein Pferd war noch nie so entspannt und vital. Danke SanoVet!"
                </p>
                <p className="text-[10px] text-sano-dark/50 mt-1 uppercase tracking-wider">- Sarah & 'Bella'</p>
              </div>
            </motion.div>
            
            {/* Design Element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sano-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sano-green/20 rounded-full blur-3xl -z-10" />
          </div>
          
        </div>
      </div>
      
      {/* Banner / Trust Bar below hero */}
      <div className="mt-20 border-y border-sano-beige/50 bg-white/50 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-sano-beige">
            <div className="flex flex-col items-center justify-center px-4">
              <ShieldCheck className="w-6 h-6 text-sano-green mb-2" />
              <span className="text-xs font-semibold uppercase tracking-wider text-sano-dark">Tierarzt-Geprüft</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
              <Leaf className="w-6 h-6 text-sano-green mb-2" />
              <span className="text-xs font-semibold uppercase tracking-wider text-sano-dark">100% Natürlich</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
              <svg className="w-6 h-6 text-sano-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-sano-dark">Kostenloser Versand in DE/AT</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
              <svg className="w-6 h-6 text-sano-green mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-sano-dark">Gratis Futterberatung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
