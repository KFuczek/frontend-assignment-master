import React, {useState, useEffect} from 'react';

import './MainPage.scss';
import { getArticleFromServer } from '../../dataHelpers/articleParser';
import { ArticeleType } from '../../constances/article';
import MainSide from '../MainSide/MainSide';
import LeftSide from '../LeftSide/LeftSide';
import TopSide from '../TopSide/TopSide';

const MainPage = () => {
    const [articles, setArticles] = useState(null);
    const [sortOption, setSortOption] = useState(1)

    const getNewdata = (articleType) => {
       const newArticles = getArticleFromServer(articleType);
       setArticles({...articles, [ArticeleType]: newArticles});
    }

    const toogleAricles = (articleType, value) => {
        console.log(articleType, value);
    }

    const sortOptions = (sortOption) => {
        setSortOption(sortOption)
    }

    return (
        <div className = 'mainPage'>
            <div className = 'topSide'>
                <TopSide
                    sortOptions={sortOptions}
                />
            </div>
            <div className = 'leftSide'>
                <LeftSide
                    toogleAricles={toogleAricles}
                />
            </div>
            <div className = 'mainSide'>
                <MainSide />
            </div>
        </div>
    );
}

export default MainPage;
