import React from 'react';
import imgQ from '../../Images/Jewlquality.jpg';
import { Link } from 'react-router-dom';

const Quality = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-4">
                <h1 className="text-5xl font-bold text-[#003366] mb-3">Uncompromising Quality</h1>
                <p className="text-lg text-gray-700">
                    Quality is more than just a promise; it's the foundation of everything we create. We are committed to delivering products and services that exceed expectations.
                </p>
            </div>

            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imgQ}
                    alt="Uncompromising Quality"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Our Commitment to Quality</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    We believe that quality is not just an end result, but a continuous journey. Our team is dedicated to maintaining the highest standards in every aspect of our work, ensuring that each product we deliver is nothing short of exceptional.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Rigorous Testing</h3>
                    <p className="text-gray-700">
                        Our products undergo comprehensive testing to ensure they meet our exacting quality standards before they reach our customers.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Expert Quality Control</h3>
                    <p className="text-gray-700">
                        Our team of quality control experts meticulously inspects every detail to ensure flawless execution and unparalleled quality.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">High-Grade Materials</h3>
                    <p className="text-gray-700">
                        We use only the finest materials in our products, ensuring durability, longevity, and a premium feel that sets us apart.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Customer Satisfaction</h3>
                    <p className="text-gray-700">
                        Our commitment to quality extends beyond our products to our customer service, ensuring that every interaction is positive and fulfilling.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Experience Quality</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Discover the difference that true quality can make in your projects and products.
                </p>
                <button
                    className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300"
                >
                    <Link to='/contactus'>Contact Us</Link>
                </button>
            </div>
        </div>
    );
};

export default Quality;
