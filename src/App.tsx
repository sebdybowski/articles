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
import Title from './components/Title/Title';
import getDataSourceFromUrl from './utils/getDataSourceFromUrl';

const App: FC = () => {
	const [sortType, setSortType] = useState(SORT_TYPES.DESCENDING);
	const [dataTypes, setDataTypes] = useState([
		DATA_TYPES.FASHION,
		DATA_TYPES.SPORTS,
	]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | undefined>(undefined);
	const [articles, setArticles] = useState<Array<any>>([]);

	useEffect(() => {
		const endpoints = [];

		if (dataTypes.includes(DATA_TYPES.FASHION))
			endpoints.push(fetch(API_URLS.FASHION));
		if (dataTypes.includes(DATA_TYPES.SPORTS))
			endpoints.push(fetch(API_URLS.SPORTS));

		Promise.all(endpoints)
			.then(async (responses) => {
				if (responses.length === 1) {
					const { status, url } = responses[0];
					const { articles: newArticles = [] } = await responses[0].json();
					const dataSource = getDataSourceFromUrl(url);

					if (status !== 200) {
						setError(dataSource);
						throw new Error(`${status}: ${dataSource}`);
					} else if (newArticles && newArticles.length !== 0) {
						setArticles(newArticles);
					}
				} else if (responses.length === 2) {
					const [fashion, sports] = responses;
					const { status: fashionStatus, url: fashionUrl } = fashion;
					const { status: sportsStatus, url: sportsUrl } = sports;

					const { articles: articlesFashion = [] } = await fashion.json();
					const { articles: articlesSports = [] } = await sports.json();

					const allArticles: Array<any> = [
						...articlesFashion,
						...articlesSports,
					];

					if (fashionStatus !== 200 || sportsStatus !== 200) {
						const dataSources = [];
						if (fashionStatus !== 200) {
							dataSources.push(getDataSourceFromUrl(fashionUrl));
						}
						if (sportsStatus !== 200) {
							dataSources.push(getDataSourceFromUrl(sportsUrl));
						}
						setError(`${dataSources.concat()}`);
						console.error(`${status}: ${dataSources.concat()}`);
					}
					if (allArticles && allArticles.length !== 0) {
						setArticles(allArticles);
					}
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, [dataTypes, setArticles, setLoading]);

	console.log('state', { articles });

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
					{loading && <Title level={1}>Loading...</Title>}
					{error && (
						<div>
							<p>
								Oops! This is unexpected system failure. Some part of articles
								about:
							</p>
							<strong>{error}</strong>
							<p>
								was not loaded. To fix that issue, please try to refresh the
								page. If this is not helpful, please contact our technical
								support. Apologies for any inconvenience.
							</p>
						</div>
					)}
					{articles
						.sort((a, b) => sortArticlesByDate(a, b, sortType))
						.filter(({ category }) =>
							dataTypes.includes(
								// category
								category === 'sport' ? DATA_TYPES.SPORTS : category
							)
						)
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
