import React from 'react';
import PropTypes from 'prop-types';

import './ArticlePanel.scss';
import { getMonth } from '../../dataHelpers/dateHelper';

const ArticlePanel = ({articles}) => {

    const getDateInFormat = (date) => {
        const month = getMonth(date?.getMonth()).substr(0, 3);
        return `${date.getDate()}. ${month} ${date.getFullYear()}`
    }
    const getArticle = () => {
        return articles.map(({image, id, title, date, preamble})=> {
            return (
                <div className='articlePanel' key={id}>
                    <img src={image} alt='image' className='img' />
                    <div className='articleBody'>
                        <h1>{title}</h1>
                        <span className='date'>{getDateInFormat(date)}</span>
                        <textarea readOnly defaultValue={preamble}/>
                    </div>
                </div>)
        });
    }
    return ( 
        <>
            {getArticle()}
        </>
    );
}

export default ArticlePanel;

ArticlePanel.propTypes = {
    articles: PropTypes.array
}
