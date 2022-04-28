import React, { FC } from 'react';

interface InputBlockProps {
  label: string;
  name: string;
  className?: string;
}

const InputBlock: FC<InputBlockProps> = ({ label, name, className, children }) => {
  const baseClass = 'input-block';
  const classString = className ? `${baseClass} ${className}` : baseClass;

  return (
    <fieldset className={classString}>
      <label className="input-block__label" htmlFor={name}>
        {label}
      </label>
      <div className="input-block__input-wrapper">
        <div className="input-block__input">{children}</div>
      </div>
    </fieldset>
  );
};
export default InputBlock;
