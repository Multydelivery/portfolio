import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faGithub,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 via-gray-600 to-green-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12 p-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Building Tomorrow's <span className="text-blue-500">Web</span>, Today.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Empowering innovation through modern design, cutting-edge technology, and a futuristic vision.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded-md shadow-md hover:bg-gray-600 transition transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="flex-1 flex flex-col items-center justify-end">
          <div className="relative rounded-full overflow-hidden shadow-lg w-64 h-64 border-4 border-orange-500 hover:scale-110 transition transform">
            <img
              src="/portfolio/images/january2025portfolioimg.JPG"
              alt="Developer"
              className="w-full h-full object-cover object-[50%_50%]"
            />
          </div>





          {/* Technology Icons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-5xl" title="HTML5" />
            <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-5xl" title="CSS3" />
            <FontAwesomeIcon icon={faJs} className="text-yellow-500 text-5xl" title="JavaScript" />
            <FontAwesomeIcon icon={faReact} className="text-cyan-500 text-5xl" title="React" />
            <FontAwesomeIcon icon={faNode} className="text-green-500 text-5xl" title="Node.js" />
            <FontAwesomeIcon icon={faGithub} className="text-gray-400 text-5xl" title="GitHub" />
            <FontAwesomeIcon icon={faDatabase} className="text-indigo-500 text-5xl" title="SQL" />
            <FontAwesomeIcon icon={faNpm} className="text-red-500 text-5xl" title="NPM" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
