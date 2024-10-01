import React from 'react';
import imgP from '../../Images/jewPrecision.jpg';
import { Link } from 'react-router-dom';

const Precision = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
      <div className="max-w-5xl text-center mb-3">
        <h1 className="text-5xl font-bold text-[#003366] mb-4">Unmatched Precision</h1>
        <p className="text-lg text-gray-700">
          Our commitment to precision is at the heart of every product we create. From design to delivery, we ensure every detail is meticulously crafted to perfection.
        </p>
      </div>

      <div className="w-full max-w-5xl mb-8">
        <img
          src={imgP}
          alt="Precision Crafting"
          className="w-full h-full object-cover rounded-lg shadow-lg"
          style={{ height: '496px' }}
        />
      </div>
      <div className="max-w-4xl text-center mb-12">
        <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Why Precision Matters</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Precision is what separates the ordinary from the extraordinary. At our company, we take pride in delivering the highest level of craftsmanship, using cutting-edge technology to ensure every product meets the most exacting standards.
        </p>
      </div>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">State-of-the-Art Technology</h3>
          <p className="text-gray-700">
            Our use of advanced CAD/CAM software and 3D printing ensures that every design is perfectly replicated with incredible accuracy.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">Expert Craftsmanship</h3>
          <p className="text-gray-700">
            With decades of experience, our artisans bring a level of skill and attention to detail that sets us apart from the competition.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">Quality Assurance</h3>
          <p className="text-gray-700">
            Every product undergoes a rigorous inspection process to ensure it meets our strict quality standards before it reaches you.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">Sustainable Practices</h3>
          <p className="text-gray-700">
            Our precision extends to our environmentally conscious practices, ensuring that every piece is crafted with minimal waste and a focus on sustainability.
          </p>
        </div>
      </div>
      <div className="max-w-5xl text-center">
        <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Experience Precision Today</h3>
        <p className="text-gray-700 text-lg mb-8">
          Discover how our precision-driven approach can bring your creative visions to life.
        </p>
        <button
          className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300"
        >
          <Link to='/contactus'> Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Precision;
