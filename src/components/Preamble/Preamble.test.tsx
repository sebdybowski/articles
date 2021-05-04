import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Preamble from './Preamble';

describe('<Preamble />', () => {
  test('it should mount', () => {
    render(<Preamble />);
    
    const preamble = screen.getByTestId('Preamble');

    expect(preamble).toBeInTheDocument();
  });
});