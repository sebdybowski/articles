import React, { Dispatch, SetStateAction } from 'react';
import './Checkbox.scss';

type CheckboxType = {
	name: string;
	checked: boolean;
	// onChange: Dispatch<SetStateAction<string>>;
};

const Checkbox: React.FC<CheckboxType> = ({ name, checked }) => (
	<div className="Checkbox" data-testid="Checkbox">
		<label htmlFor={name} className="Checkbox__label">
			<input
				type="checkbox"
				name={name}
				checked={checked}
				id={name}
				className="Checkbox__input"
			/>
			{name}
		</label>
	</div>
);

export default Checkbox;
