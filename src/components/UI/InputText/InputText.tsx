import React, { forwardRef, InputHTMLAttributes } from 'react';
import './input-text.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const baseClass = 'input-text';
  const classString = className ? `${className} ${baseClass}` : baseClass;

  return <input {...props} ref={ref} className={classString} />;
});
InputText.displayName = 'InputText';

export default InputText;
