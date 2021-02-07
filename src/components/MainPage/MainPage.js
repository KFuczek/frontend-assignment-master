import React, {useState, useEffect} from 'react';

import './MainPage.scss';
import { getArticleFromServer } from '../../dataHelpers/articleParser';
import { ArticeleType } from '../../constances/article';
import MainSide from '../MainSide/MainSide';
import LeftSide from '../LeftSide/LeftSide';
import TopSide from '../TopSide/TopSide';

const MainPage = () => {
    const [articles, setArticles] = useState(null);

    const getNewdata = (articleType) => {
       const newArticles = getArticleFromServer(articleType);
       setArticles({...articles, [ArticeleType]: newArticles});
    }

    const toogleAricles = (articleType, value) => {
        console.log(articleType, value);
    } 

    return (
        <div className = 'mainPage'>
            <div className = 'topSide'>
                <TopSide />
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
