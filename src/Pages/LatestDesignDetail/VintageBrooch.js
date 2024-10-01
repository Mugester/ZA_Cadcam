import React from 'react';
import { Link } from 'react-router-dom';
import imagebrooch from '../../Images/vintagebrooch.jpg'

const VintageBrooch = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-3">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Vintage Brooch</h1>
                <p className="text-lg text-gray-700">
                    Explore the charm and elegance of our Vintage Brooch collection. Each piece is a celebration of timeless beauty and exquisite craftsmanship.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagebrooch}
                    alt="Vintage Brooch"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Timeless Elegance</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our Vintage Brooch collection features pieces that have been carefully crafted to reflect the beauty and elegance of a bygone era. Each brooch is a testament to our commitment to quality and attention to detail.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Unique Designs</h3>
                    <p className="text-gray-700">
                        Our vintage brooches feature unique designs that capture the spirit and elegance of classic jewelry, making them perfect for any occasion.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Expert Craftsmanship</h3>
                    <p className="text-gray-700">
                        Each brooch is crafted with the utmost care and precision, using only the finest materials to create pieces that are both beautiful and durable.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Versatile Style</h3>
                    <p className="text-gray-700">
                        Whether you're dressing up for a formal event or adding a touch of elegance to your everyday look, our vintage brooches are the perfect accessory.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Heirloom Quality</h3>
                    <p className="text-gray-700">
                        Our vintage brooches are designed to be cherished for generations, making them a perfect heirloom to pass down through your family.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Discover Vintage Beauty</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Ready to add a touch of vintage elegance to your collection? Contact us today to explore our selection of exquisite vintage brooches.
                </p>
                <button
                    className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300"
                >
                    <Link to='/contactus'> Contact Us</Link>        </button>
            </div>
        </div>
    );
};

export default VintageBrooch;
