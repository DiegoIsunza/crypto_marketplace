import React from 'react';

const Banner = ({ name, childStyles, parentStyles }) => (
  <div className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyles}`}>
    <p className={`font-bold text-5xl font-poppins leading-70 ${childStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:w-32 sm:h-32 rounded-full white-bg -top-0 -left-16 -z-5" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg -bottom-24 -right-14 -z-5" />
    <div className="absolute w-40 h-40 sm:w-50 sm:h-50 rounded-full white-bg -top-24 left-80 -z-10" />
  </div>
);

export default Banner;
