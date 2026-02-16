import React from 'react';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <main className="space-y-4">
        <Hero />
        <PortfolioGrid />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
