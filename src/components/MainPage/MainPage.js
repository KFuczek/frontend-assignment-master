import React from 'react';

import './MainPage.scss';
import { getArticleFromServer } from '../../dataHelpers/articleParser';
import { ArticeleType } from '../../constances/article';
import MainSide from '../MainSide/MainSide';
import LeftSide from '../LeftSide/LeftSide';
import TopSide from '../TopSide/TopSide';

const MainPage = () => {

      const getData = () => {
            getArticleFromServer(ArticeleType.FASHION);
            getArticleFromServer(ArticeleType.SPORTS);
      }

    return (
        <div className = 'mainPage'>
            <div className = 'topSide'>
                <TopSide />
            </div>
            <div className = 'leftSide'>
                <LeftSide />
            </div>
            <div className = 'mainSide'>
                <MainSide />
            </div>
        </div>
    );
}

export default MainPage;
