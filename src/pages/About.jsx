import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPalette,
  faRobot,
  faServer,
  faMobileAlt,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: faCode, color: "text-blue-500", description: "React, Next.js, Tailwind CSS, JavaScript/TypeScript" },
    { name: "UI/UX Design", icon: faPalette, color: "text-purple-500", description: "Figma, Adobe XD, User-Centered Design Principles" },
    { name: "Backend Development", icon: faServer, color: "text-green-500", description: "Node.js, Express, MongoDB, REST APIs" },
    { name: "Mobile Development", icon: faMobileAlt, color: "text-yellow-500", description: "React Native, Flutter, Progressive Web Apps" },
    { name: "AI Integration", icon: faRobot, color: "text-pink-500", description: "Machine Learning basics, AI API integration" },
    { name: "Creative Problem Solving", icon: faLightbulb, color: "text-cyan-500", description: "Innovative solutions for complex challenges" }
  ];

  return (
    <div className="relative bg-gray-50 min-h-screen flex items-center py-20 overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl group">
              <img 
                src="/portfolio/images/january2025portfolioimg.JPG" 
                alt="Felipe Sanz" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Felipe Sanz</h3>
              </div>
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl m-2 pointer-events-none"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Innovator
              </span>{' '}
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                Creator
              </span>
            </h1>

            <div className="prose prose-lg text-gray-600 mb-8 max-w-3xl">
              <p className="mb-4">
                With a <span className="font-semibold text-blue-600">5-year journey</span> in digital creation, I blend technical expertise with artistic vision to build immersive digital experiences. My background spans computer science fundamentals, design principles, and cutting-edge web technologies.
              </p>
              <p className="mb-4">
                As a <span className="font-semibold text-purple-600">full-stack developer</span>, I architect robust systems while crafting pixel-perfect interfaces. My passion lies in bridging the gap between functionality and aesthetics, creating solutions that are as beautiful as they are powerful.
              </p>
              <p>
                When I'm not coding, I'm exploring <span className="font-semibold text-pink-600">emerging technologies</span>, contributing to open-source projects, or mentoring aspiring developers. I believe in technology's power to transform ideas into impactful realities.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`text-3xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`}>
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1">{skill.name}</h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/felipesanz17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-sanz-b4b5b630b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href="https://x.com/felipeCode24"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a
                href="https://github.com/Multydelivery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white hover:shadow-lg hover:scale-105 transition-all"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


