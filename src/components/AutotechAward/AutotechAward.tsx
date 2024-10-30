import React from 'react';

const AutotechAward: React.FC = () => {
  return (
    <div
      className='p-4 max-w-[220px] flex items-start justify-center gap-4 border-[0.5px] border-solid border-white rounded-xl'
      style={{
        background: "linear-gradient(90deg, rgba(217, 217, 217, 0.2) 0%, rgba(115, 115, 115, 0.2) 100%)",
      }}
    >
      <img
        src="/autotech-award.svg"
        alt="autotech award"
        draggable={false}
      />
      <div className='flex flex-col items-start text-white text-center'>
        <span className='text-xs'>2024 Autotech </span>
        <div className='max-w-24 text-left font-semibold text-white'>
          Startup of The Year
        </div>
      </div>
    </div>
  );
};

export default AutotechAward;
