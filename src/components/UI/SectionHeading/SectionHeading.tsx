import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<Props> = ({children, className}) => {
  return (
    <h2 className={clsx('text-primary-text font-medium text-5xl', className)}>{children}</h2>
  );
};

export default SectionHeading;