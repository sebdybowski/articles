import React, { Dispatch, SetStateAction } from 'react';
import './CheckboxList.scss';
import Checkbox from '../Checkbox/Checkbox';

type CheckboxListProps = {
	legend: string;
	values: Array<string>;
	options: Array<string>;
	onChange: Dispatch<SetStateAction<string>>;
};

const CheckboxList: React.FC<CheckboxListProps> = ({
	legend,
	values,
	options,
	// onChange,
}) => (
	<div className="CheckboxList" data-testid="CheckboxList">
		<fieldset className="CheckboxList__fieldset">
			<legend className="CheckboxList__fieldset__legend">{legend}</legend>
			<hr />
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
