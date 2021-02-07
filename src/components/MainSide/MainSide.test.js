import { getArticles, sortArticles } from './helpers'


const mockArticles = {
    TEST: {
        articles: [{
            category: '123',
            date: new Date('1 january 2020'),
            id: 123,
            image: '',
            preamble: '123',
            title: '123'
        }]
    }
}

const mockObjectWidtdata = [
    {
        date: new Date('1 january 2020'),
    },
    {
        date: new Date('4 january 2020'),
    },
    {
        date: new Date('2 january 2020'),
    }
];

const sortedMockObjectWidtdata = [
    {
        date: new Date('1 january 2020'),
    },
    {
        date: new Date('2 january 2020'),
    },
    {
        date: new Date('4 january 2020'),
    },
];

test('getArticles', () => {
    const data = mockArticles;
    const expected = [{
        category: '123',
        date: new Date('1 january 2020'),
        id: 123,
        image: '',
        preamble: '123',
        title: '123'
    }];
    expect(getArticles(data)).toStrictEqual(expected);
});

test('sortArticles', () => {
    const data = '7. auguzt 2021';
    const expected = new Date('7 august 2021');
    expect(sortArticles(mockObjectWidtdata, 1)).toStrictEqual(sortedMockObjectWidtdata);
})