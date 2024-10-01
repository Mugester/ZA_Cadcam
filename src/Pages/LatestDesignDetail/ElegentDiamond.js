import React from 'react';
import { Link } from 'react-router-dom';
import imagediamond from '../../Images/ElegantDiamondRing.jpg'

const ElegentDiamond = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-3">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Elegent Diamond Ring</h1>
                <p className="text-lg text-gray-700">
                    Discover the exquisite beauty and unparalleled craftsmanship of our Elegent Diamond collection. Every piece is a testament to our dedication to quality and elegance.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagediamond}
                    alt="Elegent Diamond"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Unmatched Elegance and Quality</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our Elegent Diamond collection features meticulously crafted pieces that exude sophistication and style. Each diamond is hand-selected for its exceptional brilliance and clarity, ensuring that you receive a piece that is truly one-of-a-kind.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Exceptional Clarity</h3>
                    <p className="text-gray-700">
                        Each diamond in the Elegent Diamond collection is chosen for its stunning clarity, ensuring that your piece sparkles with unmatched brilliance.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Exquisite Craftsmanship</h3>
                    <p className="text-gray-700">
                        Our master craftsmen use only the finest materials and techniques to create jewelry that is not only beautiful but also durable and timeless.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Custom Designs</h3>
                    <p className="text-gray-700">
                        We offer custom design services to create a piece that is uniquely yours, tailored to your individual style and preferences.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Sustainable Sourcing</h3>
                    <p className="text-gray-700">
                        We are committed to sourcing our diamonds responsibly, ensuring that each piece is created with respect for both people and the environment.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Experience Elegance</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Discover the beauty and elegance of our diamond collection. Contact us today to learn more or schedule a private viewing.
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

export default ElegentDiamond;
