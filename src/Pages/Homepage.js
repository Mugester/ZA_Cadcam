import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import Feature from '../Components/Feature';
import Projects from '../Components/Projects';
import SplashScreen from '../Components/SplashScreen';

const Homepage = () => {
  const [isSplashComplete, setSplashComplete] = useState(false);

  const handleSplashEnd = () => {
    setSplashComplete(true);
  };

  return (
    <div>
      {!isSplashComplete && <SplashScreen onAnimationEnd={handleSplashEnd} />}
      {isSplashComplete && (
        <>
          <HeroSection />
          <Feature />
          <Projects />
        </>
      )}
    </div>
  );
};

export default Homepage;
