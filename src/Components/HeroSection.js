import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import heroimg from '../Images/img.jpg';
import '../Styles/HeroSection.css';

const HeroSection = () => {

  return (
    <div>
      <section
        className={`hero-section bg-cover h-screen relative transition-opacity duration-150 ease-in-out`}
        style={{ backgroundImage: `url(${heroimg})`, backgroundColor: '#003356' }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto text-center mt-8">
              Innovative Jewelry Design with CAD/CAM Technology
            </h1>
            <p className="mt-4 text-xl max-w-5xl mx-auto">
              From intricate CAD designs to flawless 3D models, we turn your unique jewelry concepts into reality with unmatched precision and craftsmanship. Our advanced technology ensures every piece is meticulously designed and ready for perfect manufacturing.
            </p>
            <button
              className="mt-6 text-dark px-6 py-3 rounded-lg btn-hover"
              style={{ backgroundColor: '#c3990b' }}
            >
              <Link to={'/ordernow'}>
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
