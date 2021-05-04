import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateSorter from './DateSorter';

describe('<DateSorter />', () => {
  test('it should mount', () => {
    render(<DateSorter />);
    
    const dateSorter = screen.getByTestId('DateSorter');

    expect(dateSorter).toBeInTheDocument();
  });
});