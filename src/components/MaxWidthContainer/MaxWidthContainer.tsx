import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MaxWidthContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1260px]'>{children}</div>
    </div>
  );
};

export default MaxWidthContainer;