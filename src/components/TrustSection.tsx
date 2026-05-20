import { motion } from 'motion/react';
import trustImage from '../assets/images/sanovet_trust_1779259029778.png';
import { CheckCircle2 } from 'lucide-react';
import { trackLead } from '../utils/pixel';

export default function TrustSection() {
  return (
    <section className="py-24 bg-sano-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img 
                src={trustImage} 
                alt="Vertrauensvolle Beziehung zwischen Reiterin und Pferd" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Stat Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]"
            >
              <div className="text-4xl font-serif font-bold text-sano-green mb-1">98%</div>
              <p className="text-sm text-sano-dark/80 leading-tight">
                unserer Kunden würden SanoVet ihren Stallkollegen empfehlen.
              </p>
            </motion.div>
          </div>

          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-sano-dark mb-6 leading-tight">
                SanoVet: <span className="text-sano-green italic">Wissenschaft trifft Natur</span>
              </h2>
              <p className="text-sano-dark/70 text-lg mb-8">
                Hinter SanoVet steht die feste Überzeugung, dass hochwertige Ernährung die Basis für ein langes, glückliches Pferdeleben ist. Wir kombinieren modernste Erkenntnisse der Tiermedizin mit der geballten Kraft natürlicher Pflanzenstoffe.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Höchste Bioverfügbarkeit für optimale Aufnahme',
                  'Frei von unnötigen Füllstoffen oder künstlichen Aromen',
                  'Von Tierärzten und Ernährungsexperten entwickelt',
                  'Hergestellt unter strengen Qualitätskontrollen in Europa'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-sano-accent flex-shrink-0 mr-3" />
                    <span className="text-sano-dark/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://www.sanovet.com/"
                onClick={trackLead}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block px-8 py-3 bg-sano-dark text-white rounded-full font-medium hover:bg-sano-green transition-colors"
              >
                Mehr über unsere Philosophie
              </a>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
