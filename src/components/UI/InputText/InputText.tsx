import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mode?: 'red';
}

const InputText = forwardRef<HTMLInputElement, InputProps>(({ className, mode, ...props }, ref) => {
  const baseClass = 'input-text';
  const classString =
    className && mode
      ? `${className} ${baseClass} ${baseClass}--${mode}`
      : className
        ? `${className} ${baseClass}`
        : baseClass;
  
  return <input {...props} ref={ref} className={classString} />;
});
InputText.displayName = 'InputText';

export default InputText;
