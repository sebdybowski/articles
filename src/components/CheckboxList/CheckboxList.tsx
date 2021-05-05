import React, { FC, ChangeEventHandler } from 'react';
import './CheckboxList.scss';
import Checkbox from '../Checkbox/Checkbox';

type CheckboxListProps = {
	legend: string;
	values: Array<string>;
	options: Array<string>;
	onSelection: ChangeEventHandler<HTMLInputElement>;
};

const CheckboxList: FC<CheckboxListProps> = ({
	legend,
	values,
	options,
	onSelection,
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
					onChange={onSelection}
				/>
			))}
		</fieldset>
	</div>
);

export default CheckboxList;
