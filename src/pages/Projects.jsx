import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  // Array of project details with image paths, GitHub links, live website links, and descriptions
  const projects = [
    {
      image: '/portfolio/Screenshot 2025-01-29 140504.png',
      title: 'E-Commerce Website',
      description: 'E-commerce platform with user authentication, product listing, and cart functionality. Using MERN stack, cloudinary, and Stripe API.',
      github: 'https://github.com/Multydelivery/melo-store',
      website: 'https://melo-store-iccy.vercel.app/',
    },
    {
      image: '/portfolio/images/APOD Nasa.png',
      title: 'NASA APOD Viewer',
      description: 'An app that fetches and displays NASA’s Astronomy Picture of the Day with details and explanations.',
      github: 'https://github.com/Multydelivery/nasa-day-photo',
      website: 'https://nasa-pic-days.netlify.app/',
    },
    {
      image: '/portfolio/images/hvacsolutionsscreenshot.png',
      title: 'HVAC Solutions',
      description: 'A modern HVAC management platform for technicians and customers to streamline service workflows.',
      github: 'https://github.com/Multydelivery/HVAC_Site2_demo',
      website: 'https://hvacsite2demo-c24d7c962450.herokuapp.com/',
    },
    {
      image: '/portfolio/images/pixel-plate-screenshot.png',
      title: 'Pixel Plate',
      description: 'A creative platform for pixel art and design enthusiasts to showcase and collaborate on projects.',
      github: 'https://github.com/Multydelivery/pix.elplate',
      website: 'https://pixel-plate.netlify.app/',
    },
    {
      image: '/portfolio/images/Screenshot 2024-09-17 160152.png',
      title: 'Next Project',
      description: 'A cutting-edge project leveraging the latest in technology to deliver impactful solutions.',
      github: 'https://github.com/Multydelivery/gym-workouts',
      website: 'https://gym-workouts-time.netlify.app/',
    },
    {
      image: '/portfolio/images/heromovieflowimg.png',
      title: 'Movieflow',
      description: 'A movie discovery platform that allows users to search, filter, and check trending movies using react, appwrite and netlify.',
      github: 'https://github.com/Multydelivery/movieflow',
      website: 'https://movieflow.netlify.app/',
    }
  ];

  return (
    <div className="bg-white py-20 my-20">
      {/* Heading Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Projects</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Explore some of the groundbreaking work I've done. Each project showcases creativity, innovation, and futuristic solutions for your projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Render Project Cards Dynamically */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-600 to-blue-700 opacity-20 blur-lg rounded-lg"></div>

              <div className="p-6 flex flex-col items-center">
                {/* Project Image (Circular) */}
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-pink-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Project Details */}
                <h3 className="text-xl font-bold text-gray-800 mt-4">{project.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{project.description}</p>

                {/* Buttons with Icons */}
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-gray-800 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-gradient-to-r from-pink-500 to-blue-500 rounded-md shadow-md hover:from-pink-600 hover:to-blue-600 transition flex items-center justify-center"
                  >
                    <FontAwesomeIcon icon={faBolt} className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

