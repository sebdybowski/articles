import React, { ChangeEventHandler } from 'react';
import './Checkbox.scss';

type CheckboxType = {
	name: string;
	checked: boolean;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: React.FC<CheckboxType> = ({ name, checked, onChange }) => (
	<div className="Checkbox" data-testid="Checkbox">
		<label htmlFor={name} className="Checkbox__label">
			<input
				type="checkbox"
				name={name}
				checked={checked}
				value={name}
				id={name}
				className="Checkbox__input"
				onChange={onChange}
			/>
			{name}
		</label>
	</div>
);

export default Checkbox;
