import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import '../Styles/OrderNow.css';

const OrderNow = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        description: '',
    });
    const [isVisible, setIsVisible] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const message = `Order Details:
    Name: ${formData.name}
    City: ${formData.city}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Description: ${formData.description}`;
    
        const encodedMessage = encodeURIComponent(message);
    
        const whatsappLink = `https://wa.me/923334024653?text=${encodedMessage}`;
    
        window.open(whatsappLink, '_blank');
    
        setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            description: '',
        });
    
        setSubmitted(true);
    };
    

    return (
        <div
            className={`shadow-lg max-w-lg mx-auto bg-white mb-12 font-[sans-serif] slide-in ${isVisible ? 'visible' : ''}`}
            style={{
                marginTop: '85px',
                border: '2px solid #e0e0e0',
                padding: '16px',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                minHeight: '625px', 
            }}
        >
            {!submitted ? (
                <div className="p-8 bg-gradient-to-r from-[#002a52] to-[#005063] flex flex-col justify-between min-h-[550px] rounded-lg">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Place Your <span style={{ color: '#f5a623' }}>Order</span>
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Submit your order for jewelry CAD/CAM services, and our team will contact you promptly.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    className="px-4 py-3 bg-transparent text-gray-100 w-full text-sm border-b border-gray-400 focus:border-yellow-500 outline-none"
                                    required
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="City"
                                    className="px-4 py-3 bg-transparent text-gray-100 w-full text-sm border-b border-gray-400 focus:border-yellow-500 outline-none"
                                    required
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone No."
                                    className="px-4 py-3 bg-transparent text-gray-100 w-full text-sm border-b border-gray-400 focus:border-yellow-500 outline-none"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="px-4 py-3 bg-transparent text-gray-100 w-full text-sm border-b border-gray-400 focus:border-yellow-500 outline-none"
                                    required
                                />
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Write your requirements"
                                    className="px-4 py-3 bg-transparent text-gray-100 w-full text-sm border-b border-gray-400 focus:border-yellow-500 outline-none"
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-white transition duration-200"
                                style={{
                                    backgroundColor: '#f5a623',
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                    fontWeight: 'bold',
                                }}
                            >
                                <FaCheck className="mr-2" />
                                Submit Order
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="p-8 flex flex-col justify-center items-center text-center mt-28">
                    <FaCheck className="text-5xl text-green-500 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
                    <p className="text-gray-600 mt-2">Your order has been successfully submitted. We'll get in touch with you soon.</p>
                </div>
            )}
        </div>
    );
};

export default OrderNow;
