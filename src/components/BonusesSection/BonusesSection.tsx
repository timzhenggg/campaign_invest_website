import React from 'react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Stats from '../Stats/Stats';
import InvestIntro from '../InvestIntro/InvestIntro';

const BonusesSection: React.FC = () => {
  return (
    <div className='w-full bg-black py-14'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-20'>
          <Stats />
          <InvestIntro />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default BonusesSection;