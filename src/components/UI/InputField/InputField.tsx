import clsx from 'clsx';
import React from 'react';
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  name: Path<T>;
  requestErrorMessage?: string; // only for the last input in the form
}

const InputField = <T extends FieldValues>({
  register,
  errors,
  name,
  requestErrorMessage,
  placeholder,
  className,
  ...rest
}: Props<T>) => {
  return (
    <div className='flex flex-col items-center gap-1'>
      <input
        className={clsx('py-1 px-2 text-white/50 text-lg placeholder:text-inherit caret-white/50', className)}
        {...register(name)}
        placeholder={placeholder}
        {...rest}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message?.toString()}</p>
      )}
      {requestErrorMessage && (
        <p className="text-red-500 text-sm">{requestErrorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
