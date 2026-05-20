import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

import { trackLead } from '../utils/pixel';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-sano-sand/90 backdrop-blur-md border-b border-sano-beige/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button className="p-2 -ml-2 text-sano-dark hover:text-sano-green transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
            <a href="https://www.sanovet.com/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="font-serif text-2xl font-bold tracking-tight text-sano-green">
              Sano<span className="text-sano-accent">Vet</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-10">
            <a href="#categories" className="text-sm font-medium text-sano-dark hover:text-sano-green transition-colors relative group">
              Anwendungsgebiete
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sano-green transition-all group-hover:w-full"></span>
            </a>
            <a href="https://www.sanovet.com/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sano-dark hover:text-sano-green transition-colors relative group">
              Produkte
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sano-green transition-all group-hover:w-full"></span>
            </a>
            <a href="https://www.sanovet.com/futterberatung/" onClick={trackLead} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-sano-dark hover:text-sano-green transition-colors relative group">
              Ratgeber & Beratung
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sano-green transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Layout Balance */}
          <div className="w-8"></div>
        </div>
      </div>
    </motion.header>
  );
}
