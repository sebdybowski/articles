import React from 'react';
import './CheckboxList.scss';
import Checkbox from '../Checkbox/Checkbox';

type CheckboxListProps = {
  legend: string;
  values: Array<string>;
  options: Array<string>;
};

const CheckboxList: React.FC<CheckboxListProps> = ({
  legend,
  values,
  options,
}) => (
  <div className="CheckboxList" data-testid="CheckboxList">
    <fieldset>
      <legend>{legend}</legend>
      {options.map((option) => (
        <Checkbox
          checked={values.includes(option)}
          name={option}
          key={option}
        />
      ))}
    </fieldset>
  </div>
);

export default CheckboxList;
