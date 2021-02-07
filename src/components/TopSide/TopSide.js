import React from 'react';
import PropTypes from 'prop-types';

import SortPanel from '../SortPanel/SortPanel'

const TopSide = ({sortOptions}) => {

    return (
        <SortPanel
            sortOptions={sortOptions}
         />
    );
}

export default TopSide;

TopSide.propTypes = {
    sortOptions: PropTypes.func
}
