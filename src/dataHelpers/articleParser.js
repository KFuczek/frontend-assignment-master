import { ServerRoute } from '../constances/routes';
import { getDatafromHttpRequest } from '../api/api';

export const getArticleFromServer = (articeType) => {

    const request = createRequest(articeType);
    getDatafromHttpRequest(request);

}

const createRequest = (articeType) => {
    return new Request(ServerRoute[articeType], {
        method: 'GET',
      });
}