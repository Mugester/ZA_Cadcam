import React from 'react';
import { Link } from 'react-router-dom';
import imagecustom from '../../Images/customgoldnecklace.jpg'

const CustomNecklace = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-3">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Custom Necklace</h1>
                <p className="text-lg text-gray-700">
                    Create your dream necklace with our custom design services. From selecting the perfect gemstones to choosing the ideal setting, our expert craftsmen will bring your vision to life.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagecustom}
                    alt="Custom Necklace"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Design Your Own Necklace</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our custom necklace service allows you to create a piece that is uniquely yours. Choose from a wide range of precious metals, gemstones, and designs to create a necklace that reflects your personal style and elegance.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Personalized Design</h3>
                    <p className="text-gray-700">
                        Work with our designers to create a necklace that is truly one-of-a-kind, tailored to your unique preferences and specifications.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Exquisite Craftsmanship</h3>
                    <p className="text-gray-700">
                        Our craftsmen use only the finest materials and techniques to ensure that your custom necklace is both beautiful and durable.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Gemstone Selection</h3>
                    <p className="text-gray-700">
                        Choose from a variety of gemstones to create a necklace that is as unique as you are. Our experts will help you select the perfect stones for your design.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Lifetime Guarantee</h3>
                    <p className="text-gray-700">
                        We stand behind the quality of our work. Every custom necklace comes with a lifetime guarantee, ensuring your satisfaction for years to come.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Start Your Custom Design</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Ready to create your own custom necklace? Contact us today to get started on a piece that is uniquely yours.
                </p>
                <button
                    className="bg-[#cf9b11] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#003366] transition-colors duration-300"
                >
                    <Link to='/contactus'> Contact Us </Link></button>
            </div>
        </div>
    );
};

export default CustomNecklace;
