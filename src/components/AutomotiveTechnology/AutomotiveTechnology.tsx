import React from 'react';
import TechnologyCard from '../TechnologyCard/TechnologyCard';
import PremiumFeatures from '../PremiumFeatures/PremiumFeatures';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const AutomotiveTechnology: React.FC = () => {
  const technologyCards = Array(8).fill(null);

  return (
    <section className='flex flex-col gap-10'>
      <div className='flex flex-col items-center gap-1'>
        <SectionHeading className='font-bold'>Automotive Technology</SectionHeading>
        <p className='text-primary-text text-xl'>Eli ZERO is built on the most advanced micro-EV platform</p>
      </div>

      <div className="grid gap-4 grid-cols-4">
        <div className="col-span-3">
          <PremiumFeatures />
        </div>
        <div className="col-span-1">
          <TechnologyCard />
        </div>

        {technologyCards.map((_, index) => (
          <div key={index} className="col-span-1">
            <TechnologyCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomotiveTechnology;