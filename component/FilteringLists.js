import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './context';

const FilteringForm = styled.div`
    padding: 10px;
    margin-bottom: 26px;
`

function FilteringLists() {
    const { state, dispatch} = useContext(Context);
    const { data } = state;

    return (
        <FilteringForm>
            <div>
                <label htmlFor="input">
                <input type="text" id="input"/> Full time
                </label>
            </div>
            <div>
                <label htmlFor="location"> LOCATION
                <input type="checkbox" placeholder="City, state, zip code or country" id="location"/>
                </label>
            </div>
            <ul>
                <li>
                    <label htmlFor="London">
                        <input type="checkbox" id="London"/> London
                    </label>
                </li>
                <li>
                    <label htmlFor="Asterdam">
                        <input type="checkbox" id="Asterdam"/> Asterdam
                    </label>
                </li>
                <li>
                    <label htmlFor="New_York">
                        <input type="checkbox" id="New_York"/> New Work
                    </label>
                </li>
                <li>
                    <label htmlFor="Berlin">
                        <input type="checkbox" id="Berlin"/> Berlin
                    </label>
                </li>
            </ul>
        </FilteringForm>
    )
}

export default FilteringLists
