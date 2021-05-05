import React, { FC, Suspense } from 'react';
import './Article.scss';
import Title from '../Title/Title';
import Image from '../Image/Image';

type ArticleProps = {
	title: string;
	date: string;
	preamble: string;
	image?: string;
};

const Article: FC<ArticleProps> = ({ title, date, preamble, image }) => {
	return (
		<div className="Article" data-testid="Article">
			{!image || image.length === 0 ? (
				<div>{`Image for article: ${title}`} is missing.</div>
			) : (
				<Suspense
					fallback={<div className="Article__image__preloader">Loading...</div>}
				>
					<Image
						url={image}
						alt={`Image for article: ${title}`}
						className="Article__image"
					/>
				</Suspense>
			)}
			<div className="Article__meta">
				<Title level={1}>{title}</Title>
				<div className="Article__meta__date">{date}</div>
				<p className="Article__meta__preamble">{preamble}</p>
			</div>
		</div>
	);
};

export default Article;
