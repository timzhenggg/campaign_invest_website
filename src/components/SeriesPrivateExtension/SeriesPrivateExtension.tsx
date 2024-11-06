import React from 'react';

const SeriesPrivateExtension: React.FC = () => {
  return (
    <div
      style={{ background: "url(/rectangles.svg) no-repeat", backgroundSize: "contain" }}
      className='pl-4 w-full h-20 xs:h-24 sm:w-96 flex items-center'
    >
      <span className='inline-block max-w-[180px] xs:max-w-[200px] pb-1.5 xxs:p-0 text-xs xxs:text-sm xs:text-xl text-white font-bold'>2024 Series Private Extension</span>
    </div>
  );
};

export default SeriesPrivateExtension;