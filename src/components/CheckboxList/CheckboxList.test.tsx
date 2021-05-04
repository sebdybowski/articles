import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CheckboxList from './CheckboxList';

describe('<CheckboxList />', () => {
	test('it should mount', () => {
		render(
			<CheckboxList
				legend="CheckList1"
				options={['1', '2']}
				values={['1']}
				onChange={jest.fn()}
			/>
		);

		const checkboxList = screen.getByTestId('CheckboxList');

		expect(checkboxList).toBeInTheDocument();
	});
});
