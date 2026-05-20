import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { initFacebookPixel } from '../utils/pixel';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sano_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    } else if (consent === 'accepted') {
      initFacebookPixel();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sano_cookie_consent', 'accepted');
    setIsVisible(false);
    initFacebookPixel();
  };

  const handleDecline = () => {
    localStorage.setItem('sano_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-sano-dark text-white rounded-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
            <div className="flex-1">
              <h3 className="text-lg font-serif font-bold mb-2">Wir verwenden Cookies</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. Weitere Informationen erhalten Sie in unserer <a href="https://www.sanovet.com/datenschutz/" target="_blank" rel="noopener noreferrer" className="underline hover:text-sano-accent">Datenschutzerklärung</a>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Nur Essenzielle
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-lg bg-sano-green hover:bg-sano-green-light text-sm font-medium transition-colors whitespace-nowrap"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
