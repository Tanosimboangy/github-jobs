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
    input {
        border: none;
        background-color: white;
        padding: 16px;
        font-size: 16px;
        border-radius: 10px;
        color: black;
        max-width: 244px;
        outline: none;
        cursor: pointer;
    }
    input:focus, input:hover {
        border: 1px solid blue;
    }
`

function FilteringLists() {
    const [locationState, setLocationState] = useState("");
    const { state, dispatch} = useContext(Context);
    const { data } = state;
    console.log(data);

    // Filtering the jobs according to the the type of them
    function filteringFullTimeJobs() {
        const fullTimeJobs = data.filter(item => item.type === "Full Time")
        console.log(fullTimeJobs);
        dispatch ({type: 'FILTERING_FULL_TIME_JOBS', fultimefiltered: fullTimeJobs})
    }
    
    // Filtering the jobs by the written value form the user
    function locationFiltering(e) {
        setLocationState(e.target.value);
        const newLocationState = locationState.toLowerCase();
        const newLocatedJob = data.filter(item => item.title.toLowerCase().includes(newLocationState) || item.company.toLowerCase().includes(newLocationState) || item.location.toLowerCase().includes(newLocationState));  
        dispatch({type: 'FILTERING_LOCATION_JOBS', locationfiltered: newLocatedJob})
    }

    // Filtering the jobs by the value of one of the four buttons
    function filteringJobs(e) {
        const el = e.target.value
        console.log(el);
        console.log("I am her");
        const FilteredJobs = data.filter(item => item.title === el || item.company === el || item.location === el);  
        dispatch({type: 'FILTERING_JOBS', filteredJobs: FilteredJobs})
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
                        <input 
                            type="checkbox"
                            onChange={filteringJobs} 
                            value="london"
                            id="London"/> London
                    </label>
                </li>
                <li>
                    <label htmlFor="Asterdam">
                        <input 
                            type="checkbox"
                            onChange={filteringJobs} 
                            value="amsterdam"
                            id="Amsterdam"/> Amsterdam
                    </label>
                </li>
                <li>
                    <label htmlFor="New_York">
                        <input 
                            type="checkbox"
                            onChange={filteringJobs} 
                            value="new york"
                            id="New_York"/> New Work
                    </label>
                </li>
                <li>
                    <label htmlFor="Berlin">
                        <input 
                            type="checkbox"
                            onChange={locationFiltering} 
                            value="berlin"
                            id="Berlin"/> Berlin
                    </label>
                </li>
            </ul>
        </FilteringForm>
    )
}

export default FilteringLists
