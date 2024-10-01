import React, { useState } from 'react';
import aboutImage from '../Images/aboutus1.jpg';
import AboutDetail from './AboutDetail';
import Footer from '../Components/Footer';
import '../Styles/AboutUs.css';

const AboutUs = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowDetail(true);
      setIsAnimating(false);
    }, 400);
  };


  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`${isAnimating ? 'page-exit' : ''}`}>
      <div className="relative">
        <img
          src={aboutImage}
          alt="About Us"
          className={`object-cover h-screen w-full object-center transition-opacity duration-800 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-10'}`}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-6 text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            At ZA CADCAM, we blend technology and craftsmanship to offer the finest CAD/CAM jewelry design services. Our team of experts is dedicated to turning your jewelry visions into reality with precision and creativity.
          </p>
          <button
            onClick={handleClick}
            className="mt-3 btn-hover flex items-center justify-center text-black py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-white-200 focus:outline-none"
            style={{ backgroundColor: '#cf9b11' }}
          >
            <span className="text-lg font-semibold">Learn More</span>
            <svg
              className="animate-bounce w-6 h-6 ml-3 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {showDetail && (
        <div className="fade-in">
          <AboutDetail />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
