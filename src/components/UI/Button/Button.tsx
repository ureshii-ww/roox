import React, { ButtonHTMLAttributes, FC } from 'react';
import './main-button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

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