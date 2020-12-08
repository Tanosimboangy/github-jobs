import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './context';

const FilteringForm = styled.div`
    padding-left: 12px;
    padding-bottom: 25px;
`
const InputLocation = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    padding-top: 20px;
`

function FilteringLists() {
    const { state, dispatch} = useContext(Context);
    const { data } = state;

    return (
        <FilteringForm>
            <div>
                <label htmlFor="input">
                <input type="checkbox" id="input"/> Full time
                </label>
            </div>
            <InputLocation>
                <label htmlFor="location"> LOCATION</label>
                <input type="text" placeholder="City, state, zip code or country" id="location"/>
            </InputLocation>
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
