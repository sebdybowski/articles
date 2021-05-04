import MONTHS from '../constants/months';

const parseMonth = (date = ''): string => {
	const [day, month, year] = date.split(' ');

	const parsedDay = day.replace('.', '');
	const parsedMonth = MONTHS[month];

	return `${parsedMonth}/${parsedDay}/${year}`;
};

export default parseMonth;
