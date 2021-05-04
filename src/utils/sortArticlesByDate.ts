import Day from 'dayjs';
import parseMonth from './parseMonth';
import SORT_TYPES from '../constants/sortTypes';

type ArticleType = {
	date: string;
};

const sortArticlesByDate = (
	articleA: ArticleType,
	articleB: ArticleType,
	sortTypes: string
): number => {
	const dateAUnix = Day(parseMonth(articleA.date)).unix();
	const dateBUnix = Day(parseMonth(articleB.date)).unix();

	return sortTypes === SORT_TYPES.ASCENDING
		? dateAUnix - dateBUnix
		: dateBUnix - dateAUnix;
};

export default sortArticlesByDate;
