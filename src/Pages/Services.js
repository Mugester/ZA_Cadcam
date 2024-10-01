import React, { useState } from 'react';
import services from '../Images/service.jpg';
import ServicesDetail from './ServicesDetail';
import Footer from '../Components/Footer';
import '../Styles/Services.css'

const Services = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowDetail(true);
      setIsAnimating(false);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 400);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${isAnimating ? 'page-exit' : ''
        }`}
    >
      <div className="relative w-full h-screen">
        <img
          src={services}
          alt="Services"
          className={`object-cover h-screen w-full transition-opacity duration-800 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-40'
            }`}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-85"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold text-center drop-shadow-md">
            Our Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 text-center max-w-3xl leading-relaxed">
            We provide a range of high-quality CAD/CAM jewelry services, from design and modeling to rendering and prototyping. Let us help bring your creative visions to life.
          </p>
          <button
            onClick={handleClick}
            className="mt-12 bg-yellow-500 btn-hover flex items-center justify-center bg-white text-black py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 focus:outline-none"
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
          <ServicesDetail />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Services;
