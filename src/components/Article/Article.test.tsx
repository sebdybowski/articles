import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Article from './Article';

describe('<Article />', () => {
	test('it should mount', () => {
		render(
			<Article
				date="11 Feb 2021"
				preamble="Preamble"
				title="Title"
				image="./img.jpg"
			/>
		);

		const article = screen.getByTestId('Article');

		expect(article).toBeInTheDocument();
	});
});
