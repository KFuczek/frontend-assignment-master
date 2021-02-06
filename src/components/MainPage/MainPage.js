import React from 'react';

import { getArticleFromServer } from '../../dataHelpers/articleParser';
import { ArticeleType } from '../../constances/article';

const MainPage = () => {

      const getData = () => {
            getArticleFromServer(ArticeleType.FASHION);
            getArticleFromServer(ArticeleType.SPORTS);
      }

    return (
        <div>
        <button onClick = {getData} > test data </button>
        </div>
    );
}

export default MainPage;
