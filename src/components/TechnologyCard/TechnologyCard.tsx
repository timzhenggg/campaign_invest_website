import React from 'react';
import { ITechnology } from '../../assets/data/technologies';

interface Props {
  technology: ITechnology;
}

const TechnologyCard: React.FC<Props> = ({ technology }) => {
  const { imageSrc, imageAlt, title } = technology;

  return (
    <div className='relative w-full min-h-[240px] h-full rounded-2xl overflow-hidden hover:-translate-y-2.5 transition-all duration-300'>
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src={imageSrc}
        alt={imageAlt}
        draggable={false}
      />

      <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_17%,rgba(0,0,0,0)_29.5%),linear-gradient(180deg,rgba(0,0,0,0.8)_11.21%,rgba(0,0,0,0.08)_48.73%)]' />

      <div className='absolute left-0 right-0 bottom-4 flex items-center justify-center'>
        <span className='px-2 text-white text-center text-lg'>{title}</span>
      </div>
    </div>
  );
};

export default TechnologyCard;
