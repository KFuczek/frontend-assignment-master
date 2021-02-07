import React, {useState} from 'react';

import './Filterspanel.scss';
import {Dictionary} from '../../constances/dictionary';
import {initialState} from '../../constances/filtersPanel';

const FiltersPanel = ({toogleAricles}) => {
    const [checkBoxState, setCheckboxState] = useState(initialState)

    const checkBoxHandler = ({target}) => {
        const {checked, id} = target;
        toogleAricles(id, checked);
        setCheckboxState({
            ...checkBoxState,
            [id]: checked
        });
    }

    const createChexboxes = () => {
        return Object.keys(initialState).map((checkbox, index) => {
            return (
                <div className='checkBoxPanel' key={checkbox + index} >
                    <input type="checkbox" id={checkbox} onChange={checkBoxHandler} checked={checkBoxState[checkbox]} />
                    <label htmlFor={checkbox}> {Dictionary[checkbox]} </label>
                </div>
            )
        });
    }

    const getCheckboxPanel = () => {
        return (
            <>
                <p className='dataType'>{Dictionary.DATA_SOURCES}</p>
                {createChexboxes()}
            </>
        );
    }

    return (
        <div>
            {getCheckboxPanel()}
        </div>
    );
}

export default FiltersPanel;
