import React, { FC, Suspense } from 'react';
import './Article.scss';
import Title from '../Title/Title';
import Image from '../Image/Image';

type ArticleProps = {
	title: string;
	date: string;
	preamble: string;
	image: string;
};

const Article: FC<ArticleProps> = ({ title, date, preamble, image }) => {
	return (
		<div className="Article" data-testid="Article">
			<Suspense
				fallback={<div className="Article__image__preloader">Loading...</div>}
			>
				<Image
					url={image}
					alt={`Image for article: ${title}`}
					className="Article__image"
				/>
			</Suspense>
			<Title level={1}>{title}</Title>
			<span>{date}</span>
			<p>{preamble}</p>
		</div>
	);
};

export default Article;
