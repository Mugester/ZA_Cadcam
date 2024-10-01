import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img5 from '../Images/precision.jpg';
import img6 from '../Images/craftmanship.jpg';
import img7 from '../Images/innovation.jpg';
import img8 from '../Images/quality.jpg';
import '../Styles/Feature.css';

const featuresData = [
  {
    id: 1,
    title: "Precision",
    image: img5,
    description: "Our advanced CAD/CAM technology ensures precision in every detail, making your jewelry flawless.",
    path: '/precission',
  },
  {
    id: 2,
    title: "Craftsmanship",
    image: img6,
    description: "Our skilled artisans combine technology with traditional techniques to create timeless pieces.",
    path: '/craftmanship',
  },
  {
    id: 3,
    title: "Innovation",
    image: img7,
    description: "We stay ahead of trends with innovative designs and cutting-edge technology in the jewelry industry.",
    path: '/innovation', 
  },
  {
    id: 4,
    title: "Quality",
    image: img8,
    description: "We use only the highest quality materials to ensure your jewelry not only looks great but lasts a lifetime.",
    path: '/quality',
  }
];

const Feature = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuresData.map((feature) => (
            <div key={feature.id} className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="card-image w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <div className="info p-6 absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 transform translate-y-10">
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.path} className="order-btn mt-4">Read More</Link>
              </div>
              <div className="title-banner">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
