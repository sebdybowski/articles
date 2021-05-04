import React, { FC, useEffect, useState } from 'react';
import Day from 'dayjs';
import FilterControls from './layouts/FilterControls/FilterControls';
import Layout from './layouts/Layout/Layout';
import Articles from './layouts/Articles/Articles';
import CheckboxList from './components/CheckboxList/CheckboxList';
import DateSorter from './components/DateSorter/DateSorter';
import SORT_TYPES from './constants/sortTypes';
import DATA_TYPES from './constants/dataTypes';
import API_URLS from './constants/apiUrls';
import sortArticlesByDate from './utils/sortArticlesByDate';
import parseMonth from './utils/parseMonth';
import Article from './components/Article/Article';

const App: FC = () => {
	const [sortType, setSortType] = useState(SORT_TYPES.DESCENDING);
	const [dataTypes, setDataTypes] = useState([DATA_TYPES.FASHION]);
	const [fashionArticles, setFashionArticles] = useState([]);
	const [sportsArticles, setSportsArticles] = useState([]);

	useEffect(() => {
		(async function () {
			try {
				const fashionResponse = await fetch(API_URLS.FASHION);
				const sportsResponse = await fetch(API_URLS.SPORTS);

				if (dataTypes.includes(DATA_TYPES.FASHION)) {
					const { articles } = (await fashionResponse.json()) || [];

					if (articles.legth !== 0) {
						setFashionArticles(articles);
					}
				}

				if (dataTypes.includes(DATA_TYPES.SPORTS)) {
					const { articles } = (await sportsResponse.json()) || [];

					if (articles.length !== 0) {
						setSportsArticles(articles);
					}
				}
			} catch (error) {
				console.log(error);
			} finally {
				console.log('finally');
			}
		})();
	}, [dataTypes]);

	console.log(fashionArticles, sportsArticles);
	return (
		<main>
			<Layout>
				<FilterControls>
					<CheckboxList
						options={Object.values(DATA_TYPES)}
						values={[DATA_TYPES.FASHION]}
						legend="Data sources"
						onChange={setDataTypes}
					/>
				</FilterControls>
				<Articles>
					<DateSorter sortType={sortType} onClick={setSortType}>
						Sort by date
					</DateSorter>
					{[...fashionArticles, ...sportsArticles]
						.sort((a, b) => sortArticlesByDate(a, b, sortType))
						.filter(({ category }) => dataTypes.includes(category))
						.map(({ id, title, preamble, date, image }) => (
							<Article
								key={id}
								date={Day(parseMonth(date)).format('DD MMM YYYY')}
								title={title}
								preamble={preamble}
								image={image}
							/>
						))}
				</Articles>
			</Layout>
		</main>
	);
};

export default App;
