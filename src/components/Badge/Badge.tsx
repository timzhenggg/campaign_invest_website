import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({children}) => {
  return (
    <div className='p-1 w-full h-full flex items-center justify-center rounded-xl border sm:border-[0.5px] border-solid border-white text-white text-center leading-[130%]'>
      {children}
    </div>
  );
};

export default Badge;