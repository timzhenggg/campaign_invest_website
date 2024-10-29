import React from 'react';

const TechnologyCard: React.FC = () => {
  return (
    <div className='relative max-w-[300px] min-w-[300px] w-full max-h-[240px] min-h-[240px] h-full rounded-2xl overflow-hidden'>
      <img className='absolute inset-0 w-full h-full object-cover' src="/vegan-leather-seats.png" alt="vegan leather seats" draggable={false} />

      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)17%,rgba(0,0,0,0)29.5%),linear-gradient(180deg,rgba(0,0,0,0.08)48.73%,rgba(0,0,0,0.8)86.26%)]' />

      <div className='absolute left-0 right-0 bottom-4 flex items-center justify-center'>
        <span className='px-2 text-white text-center text-lg'>Vegan Leather Seats</span>
      </div>
    </div>
  );
};

export default TechnologyCard;