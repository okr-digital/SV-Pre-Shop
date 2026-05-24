/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryRouting from './components/CategoryRouting';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

import { initFacebookPixel } from './utils/pixel';

export default function App() {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryRouting />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}
