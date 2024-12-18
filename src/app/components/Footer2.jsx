// take this as a second footer
import React, { useState } from 'react';
import { FaSpaceShuttle, FaGlobeAmericas, FaRocket, FaMoon } from 'react-icons/fa';
import { GiPlanetConquest, GiUfo } from 'react-icons/gi'; // Added more space-related icons
import Button from './Button';

const Footer = () => {
  const [tiltStyles, setTiltStyles] = useState({});

  const handleMouseMove = (e, id) => {
    const { clientX, clientY } = e;
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / (width / 2);
    const deltaY = (clientY - centerY) / (height / 2);

    const rotateX = deltaY * 10;
    const rotateY = deltaX * 30;

    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
        willChange: 'transform',
      },
    }));
  };

  const handleMouseLeave = (id) => {
    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
      },
    }));
  };

  return (
    <footer className="bg-gray-800 shadow-2xl shadow-white text-white p-10 flex flex-col md:flex-row justify-between items-start relative">
      {/* Left Section */}
      <div className="flex py-auto flex-col items-start w-full md:w-2/3 mb-6">
        <h1
          className="text-8xl font-bold mb-4 bg-gradient-to-r from-[#FFFFF0] to-[#DAA520] bg-clip-text text-transparent capitalize py-auto"
          onMouseMove={(e) => handleMouseMove(e, 'main-heading')}
          onMouseLeave={() => handleMouseLeave('main-heading')}
          style={tiltStyles['main-heading'] || {}}
        >
          Let's connect & make something Today !
        </h1>
        <Button
          id="realm-btn"
          title="Get Started Now"
          containerClass="mt-5"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-around w-full md:w-1/2 mt-16 relative">
        {/* Resources Section */}
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#FFFFF0] to-[#DAA520] bg-clip-text text-transparent space-y-10 mt-6"
            onMouseMove={(e) => handleMouseMove(e, 'links-heading-1')}
            onMouseLeave={() => handleMouseLeave('links-heading-1')}
            style={tiltStyles['links-heading-1'] || {}}
          >
            Resources
          </h2>
          <ul className="space-y-7">
            {['Home', 'About', 'Service', 'Blogs', 'Contact'].map((link, index) => (
              <li key={index} className="hover:text-[#50C878] transition duration-300">
                <a
                  href="#"
                  onMouseMove={(e) => handleMouseMove(e, `link-${index}`)}
                  onMouseLeave={() => handleMouseLeave(`link-${index}`)}
                  style={tiltStyles[`link-${index}`] || {}}
                  className="bg-gray-700 px-9 py-2 rounded transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2
            className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#FFFFF0] to-[#DAA520] bg-clip-text text-transparent"
            onMouseMove={(e) => handleMouseMove(e, 'links-heading-2')}
            onMouseLeave={() => handleMouseLeave('links-heading-2')}
            style={tiltStyles['links-heading-2'] || {}}
          >
            Company
          </h2>
          <ul className="space-y-7">
            {['Products', 'Reviews', 'FAQs', 'Support', 'Careers'].map((link, index) => (
              <li key={index} className="hover:text-[#50C878] transition duration-300">
                <a
                  href="#"
                  onMouseMove={(e) => handleMouseMove(e, `link-${index + 5}`)}
                  onMouseLeave={() => handleMouseLeave(`link-${index + 5}`)}
                  style={tiltStyles[`link-${index + 5}`] || {}}
                  className="bg-gray-700 px-9 py-2 rounded transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Space/Alien Icons (Scattered around the Footer) */}
      <div className="top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0">
        {/* Larger Icons */}
        <FaSpaceShuttle className="text-[#C28840] text-6xl absolute left-10 -mt-4 hover:text-[#DAA520]" />
        <FaRocket className="text-[#CD7F32] text-6xl absolute right-10 top-60 hover:text-[#DAA520]" />
        <GiUfo className="text-[#B76E79] text-5xl absolute top-72 left-1/3 hover:text-[#DAA520]" />
        <FaMoon className="text-[#FFFFF0] text-6xl absolute bottom-20 left-1/2 hover:text-[#DAA520]" />
        {/* <FaSaturn className="text-[#50C878] text-6xl absolute top-20 right-40 hover:text-[#DAA520]" /> */}
        <GiPlanetConquest className="text-[#7DF9FF] text-5xl absolute bottom-11 left-60  hover:text-[#DAA520]" />
        <FaGlobeAmericas className="text-[#A2DFF7] text-4xl absolute top-20 right-20 hover:text-[#DAA520]" />

        {/* Smaller Icons */}
        {/* <GiAlienHead className="text-[#50C878] text-3xl absolute top-10 right-1/3 hover:text-[#DAA520]" /> */}
        {/* <FontAwesomeIcon icon="fa-solid fa-earth-americas" /> */}
         {/* <GiComet className="text-[#50C878] text-3xl absolute top-60 left-1/4 hover:text-[#DAA520]" /> */}
        <GiUfo className="text-[#FF2400] text-3xl absolute top-20 right-1/3 hover:text-[#DAA520]" />
        <GiPlanetConquest className="text-[#A4D4A3] text-4xl absolute top-90 left-1/2 hover:text-[#DAA520]" />
        <FaSpaceShuttle className="text-[#9966CC] text-7xl absolute right-72  bottom-20 hover:text-[#DAA520]" />
      </div>
    </footer>
  );
};

export default Footer;
