import React, { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from './Image';

describe('<Image />', () => {
	test('it should mount', () => {
		render(
			<Suspense fallback={<div data-testid="Image">Image is loading...</div>}>
				<Image alt="alt" url="./url" />
			</Suspense>
		);

		const image = screen.getByTestId('Image');

		expect(image).toBeInTheDocument();
	});
});
