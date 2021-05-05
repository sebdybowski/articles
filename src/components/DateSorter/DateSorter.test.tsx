import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
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
		const button = within(dateSorter).getByTestId('button');
		fireEvent(button, new MouseEvent('click', { bubbles: true }));

		expect(dateSorter).toBeInTheDocument();
	});

	test('it should mount with sort ascending', () => {
		render(
			<DateSorter sortType={SORT_TYPES.ASCENDING} onClick={jest.fn()}>
				Sorter
			</DateSorter>
		);

		const dateSorter = screen.getByTestId('DateSorter');
		const button = within(dateSorter).getByTestId('button');
		fireEvent(button, new MouseEvent('click', { bubbles: true }));

		expect(dateSorter).toBeInTheDocument();
	});
});
