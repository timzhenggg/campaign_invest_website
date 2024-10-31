import React from 'react';
import Badge from '../Badge/Badge';

interface Props {
  title: string;
  listOfStack: string[];
}

const TechStackCard: React.FC<Props> = ({ title, listOfStack }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)',
      }}
      className='sm:max-w-[475px] w-full px-4 md:px-6 py-3 md:py-4 rounded-xl flex flex-col items-center gap-1.5'
    >
      <h3 className='text-xl md:text-2xl font-bold text-primary-green mb-4'>{title}</h3>

      <ul className='w-full grid grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-2.5'>
        {listOfStack.map((stack, index) => (
          <li key={index}><Badge>{stack}</Badge></li>
        ))}
      </ul>
    </div>
  );
};

export default TechStackCard;
