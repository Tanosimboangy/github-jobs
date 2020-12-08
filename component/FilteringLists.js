import React, { useContext, useState } from 'react';
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
    const [locationState, setLocationState] = useState("");
    const { state, dispatch} = useContext(Context);
    const { data } = state;
    console.log(data);

    function filteringFullTimeJobs() {
        const fullTimeJobs = data.filter(item => item.type === "Full Time")
        dispatch ({type: 'FILTERING_FULL_TIME_JOBS', fultimefiltered: fullTimeJobs})
    }

    // const input = inputSearchName.value;
    // const inputSearch = input.toLowerCase();
    // const filterPersName = persons.filter(person => person.lastName.toLowerCase().includes(inputSearch) || person.firstName.toLowerCase().includes(inputSearch));

    function locationFiltering(e) {
        setLocationState(e.target.value);
        const newLocationState = locationState.toLowerCase();
        const newLocatedJob = data.filter(item => item.title.toLowerCase === newLocationState)
        dispatch({type: 'FILTERING_LOCATION_JOBS', locationfiltered: newLocatedJob})
    }

    return (
        <FilteringForm>
            <div>
                <label htmlFor="input">
                <input 
                    type="checkbox" 
                    onChange={filteringFullTimeJobs} 
                    id="input"/> Full time
                </label>
            </div>
            <InputLocation>
                <label htmlFor="location"> LOCATION</label>
                <input 
                    type="text" 
                    id="location"
                    placeholder="City, state, zip code or country" 
                    value={locationState} 
                    onChange={locationFiltering}
                />
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
