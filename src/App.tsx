import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Frustration from './components/Frustration';
import Solution from './components/Solution';
import Bonus from './components/Bonus';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/image.png)'}}>
      <Hero />
      <PainSection />
      <Frustration />
      <Solution />
      <Bonus />
      <Pricing />
      <CTA />
      <SocialProof />
    </div>
  );
}

export default App;