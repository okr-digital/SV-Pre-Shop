/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import CategoryRouting from './components/CategoryRouting';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryRouting />
        <TrustSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
