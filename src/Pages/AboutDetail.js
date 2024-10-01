import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import designimg from '../Images/design.jpg';
import modelingimg from '../Images/3d-printing.jpg';
import productionimg from '../Images/PRODUCTION.jpg';
import cadcamimg from '../Images/cadcam.jpg'
import '../Styles/AboutDetail.css'
import { Link } from 'react-router-dom';

const AboutUSData = [
  {
    id: 1,
    title: "Design",  
    image: designimg,
    description: "Our experienced designers use advanced CAD software to create detailed digital models of your jewelry concepts, ensuring every design is perfectly tailored to your needs.",
    path: '/design'
  },
  {
    id: 2,
    title: "3D Modeling",
    image: modelingimg,
    description: "We transform your design into a 3D model, allowing you to visualize the final product and make any adjustments before production.",
    path: '/3dmodeling'
  },
  {
    id: 3,
    title: "Production",
    image: productionimg,
    description: "Once the 3D model is finalized, we send it for production, ensuring that every piece meets our high standards of quality and craftsmanship.",
    path: '/production'
  },
  {
    id: 4,
    title: "CAD/CAM Jewelry",
    image: cadcamimg,
    description: "Using cutting-edge CAD/CAM technology, we bring precision and detail to every stage of the jewelry-making process, from design to production.",
    path: '/cadcamjewellery'
  }
];

const AboutDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 690,
      behavior: 'smooth',
    });
  }, []);

  return (
    <motion.div
      id="about-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="container mx-auto px-4 text-center mt-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg">
              Our mission is to provide exceptional CAD/CAM jewelry design services that exceed our clients' expectations. We strive for excellence in every project, combining cutting-edge technology with artistic expertise to create unique and beautiful jewelry.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg">
              We envision a future where every piece of jewelry is designed with the highest level of precision and creativity. By continuously innovating and adapting to industry trends, we aim to be a leader in the CAD/CAM jewelry design sector.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mb-12">
          {AboutUSData.map((AboutUs, index) => (
            <div key={index} className="card">
              <img src={AboutUs.image} alt={AboutUs.title} className="card-image" />
              <div className="info">
                <h3 className="text-2xl font-semibold mb-2">{AboutUs.title}</h3>
                <p>{AboutUs.description}</p>
                <button className="order-btn"><Link to={AboutUs.path}>Learn More</Link></button>
              </div>
              <div className="title-banner">{AboutUs.title}</div>
            </div>
          ))}
        </div>

        <div className="py-12 bg-white shadow-lg rounded-lg mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8 ms-5">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 px-8 ms-14">
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-400 text-3xl mr-4" />
              <p>Commitment to Quality</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-400 text-3xl mr-4" />
              <p>Customer Satisfaction</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-400 text-3xl mr-4" />
              <p>Innovation</p>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-yellow-400 text-3xl mr-4" />
              <p>Integrity</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutDetail;
