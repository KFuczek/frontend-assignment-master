import { findBestMatch } from 'string-similarity';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const parseDate = (articels) => {
    const validData = Object.entries(articels).reduce((acc, [key, articles]) => {
        const articlesWithProperDate = getProperDate(articles)
        return {
            ...acc,
            [key]: articlesWithProperDate
        }
    }, {});

    return validData;
}

const getProperDate = (articles) => {
    const properDateArticles = articles.map(article => {
        const date = changeTypeToDate(article.date);
        return {
            ...article,
            date
        };
    });

    return properDateArticles;
}

export const changeTypeToDate = (date) => {
    const splitedDate = date.split(' ');
    const mostMatchedMontch = findMostMatchedMonth(splitedDate[1]);
    const parsedDate = new Date(`${splitedDate[0].slice(0, -1)} ${mostMatchedMontch} ${splitedDate[2]}`);
    return parsedDate;
}

export const findMostMatchedMonth = (typoMonth) => {
    const notCaseSensitiveMonths = months.map(month => month.toLowerCase())
    const similarity = findBestMatch(typoMonth, notCaseSensitiveMonths);
    const month = similarity.bestMatch.target;
    return month;
}

export const getMonth = (num) => {
    return months[num];
}
