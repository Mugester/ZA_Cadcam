import React from 'react';
import { Link } from 'react-router-dom';
import imgcraft from '../../Images/jewlcraftmanship.jpg'

const Craftmanship = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 mt-11">
            <div className="max-w-5xl text-center mb-3">
                <h1 className="text-5xl font-bold text-[#003366] mb-4">Exquisite Craftsmanship</h1>
                <p className="text-lg text-gray-700">
                    At the core of our company lies a dedication to unparalleled craftsmanship. Every piece we create is a testament to our commitment to quality and artistry.
                </p>
            </div>
            <div className="w-full max-w-5xl mb-12">
                <img
                    src={imgcraft}
                    alt="Exquisite Craftsmanship"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    style={{ height: '496px' }}
                />
            </div>
            <div className="max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-semibold text-[#cf9b11] mb-4">The Art of Craftsmanship</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Craftsmanship is not just about skill but a passion for perfection. Our team of skilled artisans and designers work meticulously to create pieces that are not only beautiful but also enduring.
                </p>
            </div>
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Attention to Detail</h3>
                    <p className="text-gray-700">
                        Every element of our creations is carefully considered, from the initial design to the final finishing touches, ensuring an unparalleled level of detail.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Master Artisans</h3>
                    <p className="text-gray-700">
                        Our team of artisans brings decades of experience, blending traditional techniques with modern innovation to achieve extraordinary results.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Unique Designs</h3>
                    <p className="text-gray-700">
                        We take pride in creating unique, one-of-a-kind pieces that stand out for their design, quality, and elegance.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-[#003366] mb-4">Heritage Techniques</h3>
                    <p className="text-gray-700">
                        Incorporating heritage techniques into our modern processes ensures that every piece has a timeless quality and a rich story.
                    </p>
                </div>
            </div>
            <div className="max-w-5xl text-center">
                <h3 className="text-3xl font-semibold text-[#cf9b11] mb-4">Experience True Craftsmanship</h3>
                <p className="text-gray-700 text-lg mb-8">
                    Let us bring your creative vision to life with our dedication to artistry and quality.
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

export default Craftmanship;
