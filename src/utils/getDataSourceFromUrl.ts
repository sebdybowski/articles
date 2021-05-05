const getDataSourceFromUrl = (url = ''): string | undefined =>
	url.split('/').slice(-1).pop();

export default getDataSourceFromUrl;
