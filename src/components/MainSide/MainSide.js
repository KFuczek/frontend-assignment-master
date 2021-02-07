import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ArticlePanel from '../ArticlePanel/ArticlePanel'
import { getArticles, sortArticles } from './helpers'

const MainSide = ({sortOption, articles}) => {
    const [sortedArticles, setSortedArticles] = useState([]);
    useEffect(()=> {
       const allArticles = getArticles(articles);
       const sortedArticles = sortArticles(allArticles, sortOption);
       setSortedArticles(sortedArticles);
    }, [sortOption, articles]);

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
