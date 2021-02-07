import React from 'react';
import PropTypes from 'prop-types';

import FiltersPanel from '../FiltersPanel/FiltersPanel';

const LeftSide = ({toogleAricles}) => {

    return (
        <div>
            <FiltersPanel
                toogleAricles={toogleAricles}
            />
        </div>
    );
}

export default LeftSide;

LeftSide.propTypes = {
    toogleAricles: PropTypes.func
}
