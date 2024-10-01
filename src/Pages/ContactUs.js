import React, { useState, useEffect, useRef } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import '../Styles/ContactUs.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_d15rht8', 'template_9v5xb5e', form.current, '0AW12yVe2UEXg-p9K')
      .then(
        () => {
          console.log('Message sent!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`grid md:grid-cols-2 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-w-6xl mx-auto bg-white mb-12 font-[sans-serif] overflow-hidden slide-in ${isVisible ? 'visible' : ''}`}
      style={{ marginTop: '87px', border: '2px solid' }}
    >
      <div className="p-8 bg-gradient-to-r from-[#003366] via-[#003346] to-[#003366] flex flex-col justify-between min-h-[580px]">
        <div>
          <h2 className="text-4xl font-extrabold text-white">
            Get In <span style={{ color: '#c3910b' }}>Touch</span>
          </h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities? Our experienced team is ready to engage with you.
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="space-y-4 mt-5">
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                className="px-3 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  name="user_city"
                  className="px-3 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
                <input
                  type="text"
                  placeholder="Postcode"
                  name="user_postcode"
                  className="px-3 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
              </div>
              <input
                type="number"
                placeholder="Phone No."
                name="user_cell"
                className="px-3 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="px-3 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <textarea
                placeholder="Write Message"
                name="message"
                className="px-3 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 btn-hover flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 hover:bg-yellow-500 transition duration-200"
              style={{ backgroundColor: '#c3910b' }}
            >
              <FaEnvelope className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-4">
          <li className="flex items-center text-yellow-400 text-sm">
            <FaEnvelope className="mr-2" />
            <a href="mailto:zacadcam00@gmail.com" className="hover:underline" style={{ color: '#cf9b11' }}>
              zacadcam00@gmail.com
            </a>
          </li>
          <li className="flex items-center text-yellow-400 text-sm">
            <FaPhone className="mr-2" />
            <a href="tel:+92 316 4402059" className="hover:underline" style={{ color: '#cf9b11' }}>
              +92 316 4402059
            </a>
            <span className="mx-2">|</span>
            <a href="tel:+92 333 4024653" className="hover:underline" style={{ color: '#cf9b11' }}>
              +92 333 4024653
            </a>
          </li>
        </ul>
      </div>

      <div className="relative h-[624px]">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3399.4362268433642!2d74.3085059756134!3d31.567083374192602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM0JzAxLjUiTiA3NMKwMTgnMzkuOSJF!5e0!3m2!1sen!2s!4v1726815683534!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
