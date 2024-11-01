import clsx from 'clsx';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import useCounter from '../../hooks/useCounter';

interface Props {
  title: string;
  children: React.ReactNode; // Accept children for flexibility
  value: number; // Target value for the counter
  titleClassName?: string;
}

const RevenueStatsCard: React.FC<Props> = ({ title, children, value, titleClassName }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const counter = useCounter(value, 2000, 60, isInView); // Start counter when in view

  return (
    <div 
      ref={ref}
      className='bg-white w-full h-full shadow-md rounded-3xl p-6 flex flex-col items-center gap-6'
    >
      <p className={clsx('text-primary-text text-xl text-center', titleClassName)}>{title}</p>
      <div className='flex items-center'>
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            child.type === 'span' &&
            typeof child.props.className === 'string' && 
            child.props.className.includes('counter')
          ) {
            return React.cloneElement(child as React.ReactElement<{ children: React.ReactNode }>, {
              children: `${counter}`, 
            });
          }
          return child; 
        })}
      </div>
    </div>
  );
};

export default RevenueStatsCard;
