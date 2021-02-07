import React from 'react';

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
