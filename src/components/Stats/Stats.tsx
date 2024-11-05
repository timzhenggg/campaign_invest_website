import React from 'react';
import { stats } from '../../assets/data/stats';
import StatsCard from '../StatsCard/StatsCard';

const Stats: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-2 md:flex md:justify-center gap-3'>
      {stats.map(({iconPath, value, textAfterValue, textBeforeValue, description}, index) => (
        <StatsCard key={index} iconPath={iconPath} value={value} textBeforeValue={textBeforeValue} textAfterValue={textAfterValue} description={description} />
      ))}
    </div>
  );
};

export default Stats;