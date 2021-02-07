import React, {useState} from 'react';

import './SortPanel.scss';
import {Dictionary} from '../../constances/dictionary';

const SortPanel = ({sortOptions}) => {

    return ( 
        <div className='sortPanel'>
            <label className='sortLabel'>{Dictionary.SORT_BY_DATE}</label>
            <div className='sort'>
                <button className='up-arrow' onClick={() => {sortOptions(1)}} />
                <button className='down-arrow' onClick={() => {sortOptions(-1)}} />
            </div>
        </div>
    );
}

export default SortPanel;
