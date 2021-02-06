import { ServerRoute } from '../constances/routes';
import { getDatafromHttpRequest } from '../api/api';
import { parseDate } from './dateHelper';

export const getArticleFromServer = async (articeType) => {

    const request = createRequest(articeType);
    const articles = await getDatafromHttpRequest(request);
    const parsedArticles = parseArticleData(articles);
    return parsedArticles;
}

const createRequest = (articeType) => {
    return new Request(ServerRoute[articeType], {
        method: 'GET',
      });
}

const parseArticleData = (articles) => {
    const convertToObject = data => data ?? {};
    const existedArticles = convertToObject(articles);
    const parsedData = parseDate(existedArticles);
    return parsedData;
}