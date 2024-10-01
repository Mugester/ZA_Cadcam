import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import serviceimg1 from '../Images/Designs.jpg';
import serviceimg2 from '../Images/3D Modeling.jpg';
import serviceimg3 from '../Images/jewelry-rendering.jpg';
import serviceimg4 from '../Images/Prototyping.jpg';
import serviceimg5 from '../Images/custom-designs.jpg';
import serviceimg6 from '../Images/3d-printing.jpg';
import serviceimg7 from '../Images/augmented-reality.jpg';
import serviceimg8 from '../Images/consultation.jpg';
import '../Styles/ServicesDetail.css'

const ServicesData = [
  {
    title: "Design Consultation",
    image: serviceimg8,
    description: "Offering expert consultation to guide you through the design process and ensure your vision is accurately translated into the final product."
  },
  {
    title: "CAD Design",
    image: serviceimg1,
    description: "Creating precise and intricate digital models tailored to your specifications, enabling accurate and creative designs for your jewelry."
  },
  {
    title: "Custom Design",
    image: serviceimg5,
    description: "Collaborating closely with clients to create unique, bespoke jewelry pieces, bringing your personal vision to life."
  },
  {
    title: "Prototyping",
    image: serviceimg4,
    description: "Developing prototypes to test the look and feel before final production, ensuring a perfect fit and finish."
  },
  {
    title: "3D Modeling",
    image: serviceimg2,
    description: "Transforming designs into 3D models for detailed visualization, providing a clear preview of the final product."
  },
  {
    title: "Augmented Reality (AR) Visualization",
    image: serviceimg7,
    description: "Implementing AR technology to overlay digital designs onto real-world environments, helping clients visualize how their jewelry will look in real life."
  },
  {
    title: "3D Printing",
    image: serviceimg6,
    description: "Utilizing advanced 3D printing technology to produce precise and intricate jewelry prototypes directly from digital models."
  },
  {
    title: "Jewelry Rendering",
    image: serviceimg3,
    description: "Providing realistic renderings to help visualize the final piece, ensuring every detail meets your expectations."
  }
];

const ServicesDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 690,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-12">What We Offer</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ServicesData.map((service, index) => (
          <div key={index} className="card shadow-lg rounded-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="title-banner">{service.title}</div>
            <div className="info px-4 py-4">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-white text-sm text-center">{service.description}</p>
              <div className="flex justify-center mt-4">
                <Link to={'/ordernow'} className="order-btn">Order Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetail;
