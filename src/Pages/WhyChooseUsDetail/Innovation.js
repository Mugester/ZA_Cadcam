import React from 'react';
import { Link } from 'react-router-dom';
import imageP from '../../Images/jewPrecision.jpg'

const Innovation = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-13">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Innovative Solutions</h1>
                <p className="text-lg text-gray-700">
                    Innovation is the driving force behind our success. We are constantly exploring new technologies and methods to push the boundaries of what's possible.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imageP}
                    alt="Innovative Solutions"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">The Power of Innovation</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Innovation is at the core of everything we do. Our team is dedicated to exploring new possibilities and pushing the boundaries of what's possible, using cutting-edge technology and creative thinking to solve complex challenges.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Cutting-Edge Technology</h3>
                    <p className="text-gray-700">
                        We utilize the latest technology to bring innovative solutions to life, ensuring that we remain at the forefront of our industry.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Creative Problem Solving</h3>
                    <p className="text-gray-700">
                        Our team thrives on finding creative solutions to complex problems, always seeking new and better ways to serve our clients.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Continuous Improvement</h3>
                    <p className="text-gray-700">
                        We believe in continuous improvement and are always looking for ways to refine our processes and deliver better results.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Sustainable Innovation</h3>
                    <p className="text-gray-700">
                        Our commitment to sustainability drives us to find innovative ways to reduce our environmental impact while delivering exceptional products.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Join the Innovation</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Discover how our innovative approach can help you achieve your goals.
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

export default Innovation;
