import React, { forwardRef, TextareaHTMLAttributes } from 'react';

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const InputTextarea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, ...props }, ref) => {
    const baseClass = 'input-textarea';
    const classString = className ? `${className} ${baseClass}` : baseClass;

    return <textarea {...props} ref={ref} className={classString} />;
  }
);
InputTextarea.displayName = 'InputTextarea';

export default InputTextarea;
