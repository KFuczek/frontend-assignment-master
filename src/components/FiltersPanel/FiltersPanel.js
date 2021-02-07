import React, {useState} from 'react';

const FiltersPanel = () => {
    const [state, setstate] = useState(initialState)

    const sss = ['sport', 'fashion'];
    const createChexboxes = () => {
        return sss.map(checkbox => {
            return (
                <div>
                    <input type="checkbox" id={checkbox} checked />
                    <label htmlFor={checkbox}> {checkbox} </label>
                </div>
            )
        });
    }

    const getCheckboxPanel = () => {
        return (
            <React.Fragment>
                <p>Choose your monster's features:</p>
                {createChexboxes()}
            </React.Fragment>
        );
    }

    return (
        <div>
            {getCheckboxPanel()}
        </div>
    );
}

export default FiltersPanel;
