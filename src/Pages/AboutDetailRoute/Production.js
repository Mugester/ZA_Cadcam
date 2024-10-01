import React from 'react';
import { Link } from 'react-router-dom';
import imageProduction from '../../Images/jewlproduction.jpg'

const Production = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-4">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Production</h1>
                <p className="text-lg text-gray-700">
                    Experience unparalleled quality with our production services.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imageProduction}
                    alt="Production"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '515px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12"> 
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Excellence in Every Piece</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our production process ensures that every piece of jewelry meets the highest standards of quality and craftsmanship.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Skilled Craftsmen</h3>
                    <p className="text-gray-700">Our skilled craftsmen pay attention to every detail, ensuring a perfect finish.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">High-Quality Materials</h3>
                    <p className="text-gray-700">We use only the finest materials to create pieces that last a lifetime.</p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Start Your Production Journey</h3>
                <p className="text-gray-700 text-lg mb-8">Contact us to learn more about our production services!</p>
                <button className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300">
                <Link to='/contactus'>Contact Us</Link>
                </button>
            </div>
        </div>
    );
};

export default Production;
