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
  const techIcons = [
    { icon: faHtml5, color: 'text-orange-500', name: 'HTML5' },
    { icon: faCss3Alt, color: 'text-blue-500', name: 'CSS3' },
    { icon: faJs, color: 'text-yellow-500', name: 'JavaScript' },
    { icon: faReact, color: 'text-cyan-500', name: 'React' },
    { icon: faNode, color: 'text-green-500', name: 'Node.js' },
    { icon: faGithub, color: 'text-gray-300', name: 'GitHub' },
    { icon: faDatabase, color: 'text-indigo-500', name: 'Database' },
    { icon: faNpm, color: 'text-red-500', name: 'NPM' },
  ];

  return (
    <section id="home" className="relative bg-gray-900 overflow-hidden scroll-mt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 md:opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-emerald-900/10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 py-16 md:py-24 lg:py-32 relative z-20">
        {/* Text Content (unchanged) */}
        <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 block">
              Shaping the Future
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              with Code
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Merging human creativity with artificial intelligence to build the next generation of web experiences. 
            Where <span className="text-cyan-400 font-medium">cutting-edge technology</span> meets{' '}
            <span className="text-purple-400 font-medium">futuristic design</span>.
          </p>
          
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-500 hover:to-blue-500 relative overflow-hidden group text-sm sm:text-base"
            >
              <span className="relative z-10">Explore Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            
            <Link
              to="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 relative group text-sm sm:text-base"
            >
              <span className="relative z-10">Connect with Me</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Avatar with spinning rings */}
        <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-xs sm:max-w-sm mx-auto">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 group">
            {/* Hologram base - stays fixed */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-lg md:blur-xl animate-pulse-slow pointer-events-none"></div>
            
            {/* Spinning border rings - fixed outside the circle */}
            <div className="absolute inset-0 rounded-full border-2 md:border-4 border-cyan-400/50 animate-spin-slow pointer-events-none" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-2 sm:inset-4 rounded-full border-2 md:border-4 border-purple-400/50 animate-spin-slow-reverse pointer-events-none" style={{ animationDuration: '25s' }}></div>
            
            {/* Avatar image - centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-5/6 h-5/6 rounded-full overflow-hidden border border-white/20 bg-gray-800/50 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-500">
                <img
                  src="/portfolio/images/january2025portfolioimg.JPG"
                  alt="Futuristic Developer"
                  className="w-full h-full object-cover mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-purple-500/10 opacity-70 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Tech icons below profile */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 max-w-md">
            {techIcons.map((tech, index) => (
              <div 
                key={index}
                className={`${tech.color} text-3xl transition-all duration-300 hover:scale-125 hover:brightness-125`}
                title={tech.name}
              >
                <FontAwesomeIcon icon={tech.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
