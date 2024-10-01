import React, { useEffect } from 'react';
import '../Styles/SplashScreen.css';
import { gsap } from 'gsap';
import { FaGem } from 'react-icons/fa';

const SplashScreen = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(onAnimationEnd, -6);
      },
    });

    timeline
      .fromTo(
        '.splash-text', 
        { opacity: 0, y: -50 },
        {
          duration: 0.5, 
          opacity: 1,
          y: 0,
          ease: 'power4.out',
        }
      )
      .fromTo(
        '.diamond-icon', 
        { opacity: 0, scale: 0.5, rotate: 0 },
        {
          duration: 1,
          opacity: 1,
          scale: 1,
          rotate: 360,
          ease: 'elastic.out(1, 0.75)',
        },
        '-=0.5' 
      );

    return () => {
      timeline.kill();
    };
  }, [onAnimationEnd]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h3 className="splash-text">ZA CADCAM</h3> 
        <FaGem className="diamond-icon" /> 
      </div>
    </div>
  );
};

export default SplashScreen;
