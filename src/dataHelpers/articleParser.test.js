import {getArticleFromServer, parseArticleData} from './articleParser';

global.fetch = jest.fn(() =>
    {
        return {
            ok: true,
            json: () => Promise.resolve(mockArticleFromServer),
        }
    }
);

global.Request = () => {};

const mockArticleFromServer =  {
    articles: [{
            category: '',
            date: '3. mai 2019',
            id: 123,
            image: '',
            preamble: '123',
            title: ''
        }
    ]
}

const mockParsedArticle = {
    category: '',
    date: new Date('3 may 2019'),
    id: 123,
    image: '',
    preamble: '123',
    title: ''
}

beforeEach(() => {
  fetch.mockClear();
});

test('getArticleFromServer', async () => {
  const article = await getArticleFromServer('FASHION');
  expect(article.value.articles[0]).toEqual(mockParsedArticle);
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('parseArticleData', () => {
    const data = mockArticleFromServer;
    const expected = mockParsedArticle;
    expect(parseArticleData(data).articles[0]).toStrictEqual(expected);
  });