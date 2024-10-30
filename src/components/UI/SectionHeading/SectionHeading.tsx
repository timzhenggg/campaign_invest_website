import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const SectionHeading: React.FC<Props> = ({children, className, color = "text-primary-text"}) => {
  return (
    <h2 className={clsx('text-5xl', color, className)}>{children}</h2>
  );
};

export default SectionHeading;