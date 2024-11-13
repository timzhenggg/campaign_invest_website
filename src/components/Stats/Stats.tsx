import React from 'react';
import { stats } from '../../assets/data/stats';
import StatsCard from '../StatsCard/StatsCard';

const Stats: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='w-full grid grid-cols-2 md:flex md:justify-center gap-3'>
        {stats.map(({iconPath, value, textAfterValue, textBeforeValue, description}, index) => (
          <StatsCard key={index} iconPath={iconPath} value={value} textBeforeValue={textBeforeValue} textAfterValue={textAfterValue} description={description} />
        ))}
      </div>

      <span className='text-white'><sup>*</sup>an investor processing fee of 2.5% applies, capped at $100.</span>
    </div>
  );
};

export default Stats;