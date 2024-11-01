import React from 'react';
import { technologies } from '../../assets/data/technologies';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import PremiumFeatures from '../PremiumFeatures/PremiumFeatures';
import TechnologyCard from '../TechnologyCard/TechnologyCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';

const AutomotiveTechnology: React.FC = () => {
  return (
    <section id='market' className='py-14 w-full'>
      <MaxWidthContainer>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col items-center gap-1'>
            <SectionHeading className='font-bold text-center'>Best Micro-EV on the market</SectionHeading>
            <p className='text-primary-text text-lg md:text-xl text-center'>Eli ZERO is built to be the best micro-EV on the market, in the EU-L6e and US-LSV category</p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="sm:col-span-3">
              <PremiumFeatures />
            </div>
            <div className="sm:col-span-1">
              <TechnologyCard technology={technologies[0]} />
            </div>

            {technologies.filter((item) => item.title !== "Power-assisted brake").map((technology, index) => (
              <div key={index} className="col-span-1">
                <TechnologyCard technology={technology} />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default AutomotiveTechnology;