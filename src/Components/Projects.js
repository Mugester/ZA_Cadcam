import React, { useEffect, useState } from 'react';
import img1 from '../Images/ring.jpg';
import img2 from '../Images/gold.jpg';
import img3 from '../Images/brooch.jpg';
import img4 from '../Images/bracelet.jpg';
import '../Styles/Project.css';
import { Link } from 'react-router-dom';

const StatItem = ({ targetValue, text, duration }) => {
  const [count, setCount] = useState(0);
  const intervalTime = duration / targetValue;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetValue) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return targetValue;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [targetValue, intervalTime]);

  return (
    <div className="relative">
      <h3 className="text-5xl font-bold text-[#003366]">{count}+</h3>
      <div className="w-full h-0.5 bg-[#003366] mt-2 mb-2"></div>
      <p className="mt-2 text-lg">{text}</p>
    </div>
  );
};

const projectsData = [
  {
    id:1,
    title: "Elegant Diamond Ring",
    image: img1,
    description: "A beautifully crafted diamond ring showcasing our meticulous design and craftsmanship.",
    path: '/diamondproject'
  },
  {
    id:1,
    title: "Custom Gold Necklace",
    image: img2,
    description: "A personalized gold necklace tailored to the client's specifications, featuring intricate detailing.",
    path: '/necklaceproject'
  },
  {
    id:1,
    title: "Vintage Brooch",
    image: img3,
    description: "A vintage-inspired brooch blending classic design with modern technology for a unique look.",
    path: '/broochproject'
  },
  {
    id:1,
    title: "Modern Silver Bracelet",
    image: img4,
    description: "A sleek silver bracelet designed with contemporary style and precision craftsmanship.",
    path: '/braceletproject'
  }
];

// Projects Component
const Projects = () => {
  const statDuration = 2000;

  return (
    <>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Latest Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card bg-white rounded-lg shadow-lg overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="project-info absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 transform translate-y-10 p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <button className="project-btn mt-4"><Link to={project.path}>View Details</Link></button>
                </div>
                <div className="title-banner">{project.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-cover bg-center overflow-hidden bg-gradient-to-r from-yellow-100 to-blue-100">
        <h2 className="text-center font-bold text-4xl text-[#003366] mb-8">Trust The Jewelry Experts</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <StatItem
            targetValue={23}
            text="Precious metal qualities available for manufacturing"
            duration={statDuration}
          />
          <StatItem
            targetValue={70}
            text="Team members dedicated to your success"
            duration={statDuration}
          />
          <StatItem
            targetValue={450}
            text="Projects completed for happy customers"
            duration={statDuration}
          />
          <StatItem
            targetValue={19}
            text="3D printers running day and night"
            duration={statDuration}
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
