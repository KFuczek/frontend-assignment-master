import React, {useState, useEffect} from 'react';

import './MainPage.scss';
import { getArticleFromServer } from '../../dataHelpers/articleParser';
import { defoultArticle } from '../../constances/article';
import { initialState } from '../../constances/filtersPanel'
import MainSide from '../MainSide/MainSide';
import LeftSide from '../LeftSide/LeftSide';
import TopSide from '../TopSide/TopSide';

const MainPage = () => {
    const [articles, setArticles] = useState({});
    const [sortOption, setSortOption] = useState(-1)

    useEffect(() => {
        let promises = [];
        Object.entries(initialState).forEach(([key, value]) => {
            if(value) {
                promises.push(getArticleFromServer(key))
            }
        });

        Promise.all(promises).then((values) => {
            let newArticles = values.reduce((acc, {type, value}) => {
                if(isEmpty(value)) {
                    return acc;
                }
                return {
                    ...acc,
                    [type]: value
                };
            }, {});
            if (isEmpty(newArticles)) {
                newArticles = defoultArticle;
            }
            setArticles({...articles, ...newArticles});
        });

    }, [])

    const isEmpty = (objectToCheck) => Object.entries(objectToCheck).length === 0;

    const toogleAricles = async (articleType, checked) => {
        if (checked) {
            const {type, value} = await getArticleFromServer(articleType);
            !isEmpty(value) && setArticles({...articles, [type]: value});
        } else {
            const articlesFromState = {...articles};
             delete articlesFromState[articleType];
             setArticles(articlesFromState);
        }
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
                <MainSide
                    sortOption={sortOption}
                    articles={articles}
                />
            </div>
        </div>
    );
}

export default MainPage;
