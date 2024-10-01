import React from 'react';
import { Link } from 'react-router-dom';
import imagemodeling from '../../Images/Modelingdetails.jpg'

const Modeling = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-4">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">3D Modeling</h1>
                <p className="text-lg text-gray-700">
                    Visualize your jewelry like never before with our advanced 3D modeling services.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagemodeling}
                    alt="3D Modeling"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '520px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Bring Your Design to Life</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our 3D modeling service allows you to see your design come to life in stunning detail before production.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Accurate Representations</h3>
                    <p className="text-gray-700">Get precise representations of your designs with our state-of-the-art modeling software.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Quick Turnaround</h3>
                    <p className="text-gray-700">We ensure quick turnaround times for our 3D models, keeping your project on schedule.</p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Start Your 3D Modeling Today</h3>
                <p className="text-gray-700 text-lg mb-8">Get in touch to begin your 3D modeling journey!</p>
                <button className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300">
                <Link to='/contactus'>Contact Us</Link>
                                </button>
            </div>
        </div>
    );
};

export default Modeling;
