import React from 'react';
import { Link } from 'react-router-dom';
import imagecad from '../../Images/cadcamjewl.jpg'

const CadCamJewelry = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-4">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">CAD/CAM Jewelry Design</h1>
                <p className="text-lg text-gray-700">
                    Transform your ideas into stunning jewelry designs with our CAD/CAM technology.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagecad}
                    alt="CAD/CAM Jewelry"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '510px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Innovative Design Solutions</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our CAD/CAM services allow you to visualize and create intricate jewelry designs with precision.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Precision Engineering</h3>
                    <p className="text-gray-700">
                        Our advanced CAD technology enables precise designs, ensuring your jewelry fits perfectly.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Rapid Prototyping</h3>
                    <p className="text-gray-700">
                        We can quickly turn your designs into prototypes, allowing for faster modifications and adjustments.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Custom Features</h3>
                    <p className="text-gray-700">
                        Add unique features to your designs, making your jewelry stand out and reflect your personal style.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Expert Guidance</h3>
                    <p className="text-gray-700">
                        Our team of experts is here to guide you through every step of the design process.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Get Started with CAD/CAM Jewelry</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Ready to bring your jewelry ideas to life? Contact us today to discuss your project!
                </p>
                <button className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300">
                <Link to='/contactus'>Contact Us</Link>
                </button>
            </div>
        </div>
    );
};

export default CadCamJewelry;
