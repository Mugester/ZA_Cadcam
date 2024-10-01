import React from 'react';
import { ImWhatsapp } from "react-icons/im";
import { Link } from 'react-router-dom';

const WhatsAppCTA = () => {
  return (
    <Link
      to="https://wa.me/923164402059?text=Hi!%20I%20would%20like%20to%20learn%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white 
      px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-green-500 hover:to-green-700 transition-all 
      duration-300 fixed bottom-5 right-3"
    >
      <ImWhatsapp className="mr-2 text-white" size={25} />
      <span className="text-lg font-semibold">Chat with Us</span>
    </Link>
  );
};

export default WhatsAppCTA;
