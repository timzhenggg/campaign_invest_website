import React from 'react';

const PremiumFeatures: React.FC = () => {
  return (
    <div className='p-8 h-fit lg:h-full rounded-2xl bg-[#4A4A4A] flex flex-col-reverse sm:flex-row gap-6 md:gap-12'>
      <div className='flex flex-col gap-4 md:gap-6'>
        <h3 className='text-2xl md:text-3xl font-bold text-white'>Premium Features</h3>
        <p className='text-white text-base md:text-lg leading-[140%]'>Combining the agility of two wheels with the comfort and safety of four-wheel vehicles, the Eli ZERO offers a premium driving experience, making daily trips more convenient, efficient, and sustainable.</p>
      </div>

      <div className='sm:w-auto flex sm:flex-col sm:justify-between items-end gap-5'>
        <img src="/design-award.svg" alt="design award" draggable={false} className='w-1/4 sm:w-auto sm:h-full object-cover' />
        <img src="/top-100-award.svg" alt="top 100 award" draggable={false} className='w-1/4 sm:w-auto h-full object-cover'/>
      </div>
    </div>
  );
};

export default PremiumFeatures;