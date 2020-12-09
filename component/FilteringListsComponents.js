import React, { useState } from 'react';
import styled from 'styled-components';

const FilteringForm = styled.div`
    padding-left: 2.5%;
    padding-bottom: 25px;
    div {
        font-family: "Poppins_regular";
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #334680;
    }
    ul {
        font-family: "Poppins_regular";
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #334680;
        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            padding-bottom: 10px;
            input {
                margin: 0;
            }
            label {
                padding-left: 16px;
            }
        }

    }
`
const InputLocation = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    padding-top: 20px;
    label {
        padding-bottom: 10px;
    }
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

function FilteringListsComponents({data, dispatch, loading}) {
    const [locationState, setLocationState] = useState("");
    // const [newState, setNewState] = useState("");

    // Filtering the jobs according to the the type of them
    function filteringFullTimeJobs(e) {
        const fulltime = e.target.value;
        const fullTimeJobs = data.filter(item => item.type === fulltime);
        dispatch ({type: 'FILTERING_FULL_TIME_JOBS', fullTimeJobsFiltered: fullTimeJobs})
    }
    
    // Filtering the jobs by the written value form the user
    function locationFiltering(e) {
        setLocationState(e.target.value);
        const newLocationState = locationState.toLowerCase();
        const collectionOfJobs = data.filter(item => item.title.toLowerCase().includes(newLocationState) || item.company.toLowerCase().includes(newLocationState) || item.description.toLowerCase().includes(newLocationState) || item.location.toLowerCase().includes(newLocationState) );  
        dispatch({type: 'FILTERING_JOBS', filteredJobs: collectionOfJobs})
    }

    // Filtering the jobs by the value of one of the four buttons
    function countryFiltering(e) {
        const el = e.target.value
        const FilteredJobs = data.filter(item => item.title === el || item.company === el || item.location === el);  
        dispatch({type: 'FILTERED_JOBS', filteredJob: FilteredJobs})
    }

    return (

        <>
            <FilteringForm>
                <div>
                    <label htmlFor="input">
                    <input 
                        type="checkbox" 
                        value="Full Time"
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
                        <input 
                            type="checkbox"
                            onChange={countryFiltering}
                            value="london"
                            id="London"/> 
                        <label htmlFor="London">London</label>
                    </li>
                    <li>
                        <input 
                            type="checkbox"
                            onChange={countryFiltering}
                            value="amsterdam"
                            id="Amsterdam"/> 
                        <label htmlFor="Asterdam">Amsterdam</label>
                    </li>
                    <li>
                        <input 
                            type="checkbox"
                            onChange={countryFiltering}
                            value="new york"
                            id="New_York"/> 
                        <label htmlFor="New_York">New Work</label>
                    </li>
                    <li>
                        <input 
                            type="checkbox"
                            onChange={countryFiltering}
                            value="berlin"
                            id="Berlin"/> 
                        <label htmlFor="Berlin">Berlin</label>
                    </li>
                </ul>
            </FilteringForm>
            {loading && <h1>Loading...</h1>}
        </>
    )
}

export default FilteringListsComponents
