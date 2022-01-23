import React from 'react';
import InputFieldProps from './props';

export const InputField: React.FC<InputFieldProps> = (props) => {
  const {id, children, className, label, ...inputProps} = props;
  return (
    <div className="relative text-base mb-4">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <input id={id} className="border rounded p-2 w-full" {...inputProps}>
        {children}
      </input>
    </div>
  );
};

export default InputField;
