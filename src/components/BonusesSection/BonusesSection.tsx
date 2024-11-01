import React from 'react';
import { Category } from '../../App';
import InvestIntro from '../InvestIntro/InvestIntro';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import Stats from '../Stats/Stats';
import Button from '../UI/Button/Button';

interface Props {
  category: Category;
}

const BonusesSection: React.FC<Props> = ({category}) => {
  return (
    <div id='bonuses' className='w-full bg-black py-14'>
      <MaxWidthContainer>
        <div>
          <div className='w-full flex flex-col items-center gap-12 md:gap-16 lg:gap-20'>
            <Stats />
            <InvestIntro category={category} />
          </div>

          <div className='mt-4 flex flex-col items-center gap-4'>
            <p className='text-white text-lg text-center leading-[130%]'>Join the last window to invest at 2024 stock price</p>
            <Button className='my-4 px-14 text-3xl uppercase font-extrabold'>Invest now </Button>
            <span className='text-[#A4A4A4] text-lg leading-[120%] text-center'>*By regulation, bonus amount will NOT be calculated on your investment page, it will be applied AFTER your investment is completed, and reflected in the number of shares issued and average cost per share, these info will be found in your Transfer Agent account. Email <a href="mailto:ir@eli.world" className="underline">ir@eli.world</a> for questions.</span>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default BonusesSection;