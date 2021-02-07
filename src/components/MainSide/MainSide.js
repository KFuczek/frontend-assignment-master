import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ArticlePanel from '../ArticlePanel/ArticlePanel'

const MainSide = ({sortOption, articles}) => {
    const [sortedArticles, setSortedArticles] = useState([]);
    useEffect(()=> {
       const allArticles = getArticles(articles);
       const sortedArticles = sortArticles(allArticles, sortOption);
       setSortedArticles(sortedArticles);
    }, [sortOption, articles]);

    const getArticles = (articles) => {
        return Object.values(articles).map(singleType => {
            return singleType.articles;
        }).flat();
    }

    const sortArticles = (articles, sortOption) => {
        return articles.sort((a, b)=>{
            if (sortOption === -1) {
                [a, b] = [b, a];
            }
            return a.date.getTime()-b.date.getTime()
        });
    }

    return (
        <ArticlePanel
            articles = {sortedArticles}
        />
    );
}

export default MainSide;

MainSide.propTypes = {
    sortOption: PropTypes.number,
    articles: PropTypes.shape({})
}
