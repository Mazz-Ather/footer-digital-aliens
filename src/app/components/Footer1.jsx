'use client';
// take this as a first footer
import React, { useState } from 'react';

const ShopexOffers = () => {
  const [tiltStyles, setTiltStyles] = useState({});

  const offers = [
    {
      // id: 1,
      title: '"THE DIGITAL ALIENS"',
      // image: '/ofer1.png',
      // description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam fugit iure.',
    }
  ];

  const handleMouseMove = (e, id) => {
    const { clientX, clientY } = e;
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / (width / 2);
    const deltaY = (clientY - centerY) / (height / 2);

    const rotateX = deltaY * -5; // Reduced sensitivity for smoother effect
    const rotateY = deltaX * 25; // Reduced sensitivity for smoother effect

    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out', // Smooth transition
        willChange: 'transform',
      },
    }));
  };

  const handleMouseLeave = (id) => {
    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.3s ease-out', // Smooth transition back
        willChange: 'transform',
      },
    }));
  };

  return (
    <div className="flex items-center justify-center gap-6 shadow-2xl shadow-white">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="flex flex-col items-center justify-center  p-6 mx-auto shadow-xl shadow-gray-300 rounded-xl h-[300px] w-screen text-center bg-black"
          onMouseMove={(e) => handleMouseMove(e, offer.id)}
          onMouseLeave={() => handleMouseLeave(offer.id)}
          style={tiltStyles[offer.id] || {}}
        >
        <h3 className="text-9xl font-semibold text-[#a7a7a7] flex items-center justify-start w-full h-full pl-9">
        "THE DIGITAL ALIENS"
  </h3>

        </div>
      ))}
    </div>
  );
};

export default ShopexOffers;