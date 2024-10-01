import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGem } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {

    return (
        <footer className="bg-gradient-to-r from-[#003356] via-[#003346] to-[#003366] text-white py-12">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-center mt-2">
                        <Link to={'/'}>
                            <span className="text-[#c3910b] font-bold text-2xl mb-1 ft-brand me-28">ZA CADCAM</span>
                            <FaGem className="ft-gem" style={{ color: '#c3910b', fontSize: '80px', marginLeft: '25px' }} />
                        </Link>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4" style={{ color: '#c3910b' }}>Quick Links</h3>
                        <ul className="space-y-2 ft-links">
                            <li>
                                <Link to="/" className="hover:text-yellow-500">Home</Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-yellow-500">Services</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="hover:text-yellow-500">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="hover:text-yellow-500">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4" style={{ color: '#c3910b' }}>Contact Us</h3>
                        <p>Salman Building, First Floor, Shop No 1, Dhobi Mandi,<br /> Old Anarkali, Lahore</p>
                        <p>Email: zacadcam00@gmail.com | Phone: +92 316 4402059</p>
                        <div className="flex justify-center md:justify-start gap-4 text-2xl mt-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                                <FaFacebookF />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} ZA CADCAM. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
