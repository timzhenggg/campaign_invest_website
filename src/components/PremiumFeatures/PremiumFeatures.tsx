import React from 'react';

const PremiumFeatures: React.FC = () => {
  return (
    <div className='p-8 h-full rounded-2xl bg-[#4A4A4A] flex gap-12'>
      <div className='flex flex-col justify-between gap-8'>
        <h3 className='text-3xl font-bold text-white'>Premium Features</h3>
        <p className='text-white text-lg leading-[140%]'>Combining the agility of two wheels with the comfort and safety of four-wheel vehicles, the Eli ZERO offers a premium driving experience, making daily trips more convenient, efficient, and sustainable.</p>
      </div>

      <div className='flex flex-col gap-5'>
        <img src="/design-award.png" alt="design award" draggable={false} />
        <img src="/top-100-award.png" alt="top 100 award" draggable={false} />
      </div>
    </div>
  );
};

export default PremiumFeatures;