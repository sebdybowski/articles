import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateSorter from './DateSorter';
import SORT_TYPES from '../../constants/sortTypes';

describe('<DateSorter />', () => {
	test('it should mount', () => {
		render(
			<DateSorter sortType={SORT_TYPES.DESCENDING} onClick={jest.fn()}>
				Sorter
			</DateSorter>
		);

		const dateSorter = screen.getByTestId('DateSorter');

		expect(dateSorter).toBeInTheDocument();
	});
});
