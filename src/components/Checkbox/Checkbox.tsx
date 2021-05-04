import React from 'react';
import './Checkbox.scss';

type CheckboxType = {
  name: string;
  checked: boolean;
};

const Checkbox: React.FC<CheckboxType> = ({ name, checked }) => (
  <div className="Checkbox" data-testid="Checkbox">
    <label htmlFor={name}>
      <input type="checkbox" name={name} checked={checked} id={name} />
      {name}
    </label>
  </div>
);

export default Checkbox;
