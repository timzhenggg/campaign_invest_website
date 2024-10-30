import React from 'react';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Stats from '../Stats/Stats';
import InvestIntro from '../InvestIntro/InvestIntro';

const BonusesSection: React.FC = () => {
  return (
    <div className='bg-black py-14'>
      <MaxWidthContainer>
        <div className='flex flex-col items-center gap-20'>
          <Stats />
          <InvestIntro />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default BonusesSection;