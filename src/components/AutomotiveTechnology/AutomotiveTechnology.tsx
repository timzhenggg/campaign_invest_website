import React from 'react';
import TechnologyCard from '../TechnologyCard/TechnologyCard';
import PremiumFeatures from '../PremiumFeatures/PremiumFeatures';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

const AutomotiveTechnology: React.FC = () => {
  const technologyCards = Array(8).fill(null);

  return (
    <section className='w-full'>
      <MaxWidthContainer>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-1'>
            <SectionHeading className='font-bold'>Best Micro-EV on the market</SectionHeading>
            <p className='text-primary-text text-xl'>Eli ZERO is built to be the best micro-EV on the market, in the EU-L6e and US-LSV category</p>
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
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default AutomotiveTechnology;