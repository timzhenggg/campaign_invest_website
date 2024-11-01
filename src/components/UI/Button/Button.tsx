import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({children, className, disabled, type = "button", onClick}) => {
  return (
    <button
      type={type}
      className={clsx('px-6 py-5 bg-primary-green rounded-[100px] text-white leading-[140%] font-extrabold', className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;