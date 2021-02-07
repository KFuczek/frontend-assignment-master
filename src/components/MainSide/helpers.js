export const getArticles = (articles) => {
    return Object.values(articles).map(singleType => {
        return singleType.articles;
    }).flat();
}

export const sortArticles = (articles, sortOption) => {
    return articles.sort((a, b)=>{
        if (sortOption === -1) {
            [a, b] = [b, a];
        }
        return a.date.getTime()-b.date.getTime()
    });
}