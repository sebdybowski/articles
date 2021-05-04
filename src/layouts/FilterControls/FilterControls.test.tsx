import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterControls from './FilterControls';

describe('<FilterControls />', () => {
  test('it should mount', () => {
    render(<FilterControls />);
    
    const filterControls = screen.getByTestId('FilterControls');

    expect(filterControls).toBeInTheDocument();
  });
});