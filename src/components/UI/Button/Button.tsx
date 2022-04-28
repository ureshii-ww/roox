import React, { ButtonHTMLAttributes, FC } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  const baseClass = 'main-button';
  const classString = className ? `${className} ${baseClass}` : baseClass;
  
  return (
    <button {...props} className={classString}>
      {children}
    </button>
  );
};

export default Button;