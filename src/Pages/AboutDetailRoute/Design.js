import React from 'react';
import { Link } from 'react-router-dom';
import imagedesign from '../../Images/jewldesign.jpg'

const Design = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-3">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Design</h1>
                <p className="text-lg text-gray-700">
                    Create your dream jewelry with our custom design services. Our expert designers work closely with you to bring your vision to life.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagedesign}
                    alt="Design"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Craft Your Own Design</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our design service allows you to create jewelry that reflects your personal style. Work with our designers to create a piece that is uniquely yours.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Tailored Solutions</h3>
                    <p className="text-gray-700">We tailor our design solutions to meet your unique preferences and specifications.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Innovative Ideas</h3>
                    <p className="text-gray-700">Our designers are always innovating to ensure your piece is not only beautiful but also contemporary.</p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Start Your Design Journey</h3>
                <p className="text-gray-700 text-lg mb-8">Contact us today to discuss your custom design project!</p>
                <button className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300">
                    <Link to='/contactus'>Contact Us</Link>
                </button>
            </div>
        </div>
    );
};

export default Design;
