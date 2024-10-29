import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({children, className, disabled}) => {
  return (
    <button
      className={clsx('px-6 py-5 text-white leading-[140%] font-extrabold bg-primary-green', className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;