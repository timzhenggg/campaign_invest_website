import React from 'react';
import { Category } from '../../App';
import InvestIntro from '../InvestIntro/InvestIntro';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Stats from '../Stats/Stats';

interface Props {
  category: Category;
}

const BonusesSection: React.FC<Props> = ({category}) => {
  return (
    <div className='w-full bg-black py-14'>
      <MaxWidthContainer>
        <div className='w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-20'>
          <Stats />
          <InvestIntro category={category} />
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default BonusesSection;