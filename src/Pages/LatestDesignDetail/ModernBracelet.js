import React from 'react';
import { Link } from 'react-router-dom';
import imagebracelt from '../../Images/bracelet.jpg'

const ModernBracelet = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-3">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Modern Bracelet</h1>
                <p className="text-lg text-gray-700">
                    Embrace contemporary elegance with our Modern Bracelet collection. Sleek, stylish, and sophisticated, these bracelets are perfect for any modern fashionista.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imagebracelt}
                    alt="Modern Bracelet"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">Contemporary Design</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Our Modern Bracelet collection features sleek, minimalist designs that are perfect for those who appreciate contemporary style. Each bracelet is crafted with precision and care to ensure a flawless finish.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Minimalist Aesthetic</h3>
                    <p className="text-gray-700">
                        Our modern bracelets are designed with a focus on simplicity and elegance, making them perfect for those who appreciate understated beauty.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Quality Materials</h3>
                    <p className="text-gray-700">
                        We use only the finest materials to create bracelets that are both beautiful and durable, ensuring that your piece will look great for years to come.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Custom Options</h3>
                    <p className="text-gray-700">
                        Looking for something truly unique? Our custom options allow you to create a bracelet that is perfectly tailored to your style and preferences.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Perfect Gift</h3>
                    <p className="text-gray-700">
                        A modern bracelet makes a perfect gift for any occasion. Whether you're celebrating a birthday, anniversary, or special achievement, our bracelets are sure to impress.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Explore Modern Style</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Ready to add a touch of modern elegance to your collection? Contact us today to explore our selection of stunning modern bracelets.
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

export default ModernBracelet;
