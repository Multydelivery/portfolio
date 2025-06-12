import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faRocket, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      image: '/portfolio/Screenshot 2025-01-29 140504.png',
      title: 'E-Commerce Website',
      description: 'Full-featured e-commerce platform with MERN stack, Cloudinary integration, and Stripe payment processing.',
      github: 'https://github.com/Multydelivery/melo-store',
      website: 'https://melo-store-iccy.vercel.app/',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      image: '/portfolio/images/APOD Nasa.png',
      title: 'NASA APOD Viewer',
      description: 'Interactive gallery showcasing NASA\'s Astronomy Picture of the Day with detailed explanations.',
      github: 'https://github.com/Multydelivery/nasa-day-photo',
      website: 'https://nasa-pic-days.netlify.app/',
      tech: ['React', 'NASA API', 'Tailwind CSS']
    },
    {
      image: '/portfolio/images/hvacsolutionsscreenshot.png',
      title: 'HVAC Solutions',
      description: 'Comprehensive HVAC management system for technicians and customers with service workflow automation.',
      github: 'https://github.com/Multydelivery/HVAC_Site2_demo',
      website: 'https://hvacsite2demo-c24d7c962450.herokuapp.com/',
      tech: ['Express', 'Handlebars', 'MySQL']
    },
    {
      image: '/portfolio/images/pixel-plate-screenshot.png',
      title: 'Pixel Plate',
      description: 'Collaborative pixel art platform with real-time editing and community sharing features.',
      github: 'https://github.com/Multydelivery/pix.elplate',
      website: 'https://pixel-plate.netlify.app/',
      tech: ['React', 'Firebase', 'Canvas API']
    },
    {
      image: '/portfolio/images/Screenshot 2024-09-17 160152.png',
      title: 'Gym Workouts',
      description: 'AI-powered workout planner with exercise database and personalized training programs.',
      github: 'https://github.com/Multydelivery/gym-workouts',
      website: 'https://gym-workouts-time.netlify.app/',
      tech: ['Next.js', 'TypeScript', 'AI Integration']
    },
    {
      image: '/portfolio/images/heromovieflowimg.png',
      title: 'MovieFlow',
      description: 'Advanced movie discovery platform with trending analytics and personalized recommendations.',
      github: 'https://github.com/Multydelivery/movieflow',
      website: 'https://movieflow.netlify.app/',
      tech: ['React', 'Appwrite', 'Netlify']
    },
    {
      image: 'images/fooddeliveyappportfolioimg.png',
      title: 'Food Delivery App',
      description: 'Comprehensive food delivery platform with real-time order tracking, restaurant management, and user-friendly interface.',
      github: 'https://github.com/Multydelivery/melo-food-delivery',
      website: 'https://www.melomarket.com.co/',
      tech: ['React', 'JavaScrip', 'Express', 'MongoDB', 'Node.js', 'stripe', 'Tailwind CSS', 'Axios', 'Cloudinary']
    }
  ];

  return (
    <section className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      </div>

      {/* Heading Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Future</span> Projects
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl">
          Cutting-edge solutions that blend innovative technology with exceptional user experiences
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 group"
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none"></div>
              
              {/* Project Image with hover effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full text-gray-300 hover:text-white hover:bg-gray-600 transition"
                      aria-label="GitHub"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white hover:shadow-lg transition"
                      aria-label="Live Demo"
                    >
                      <FontAwesomeIcon icon={faRocket} size="xs" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-cyan-400 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-20 text-center">
        <div className="inline-block bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-0.5">
          <div className="bg-gray-900/80 rounded-xl px-8 py-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-2">Have a futuristic project in mind?</h3>
            <p className="text-gray-300 mb-4">Let's build something extraordinary together</p>
            <a
              href="/portfolio/contact"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
            >
              <FontAwesomeIcon icon={faBolt} className="mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
