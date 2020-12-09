import React, { useState } from 'react'
import styled from 'styled-components';
import globe from '../img/globe.svg';

const FormHeader = styled.header`
    padding-top: 40px;
    padding-bottom: 40px;
`
const FormFiltering = styled.form`
    margin-right: 15%;
    margin-left: 15%;
    max-width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 12px;
    padding: 2px;
    img {
        padding-left: 2%;
    }
    input {
        width: 100%;
        background: none;
        border: none; 
        padding: 16px;
        outline: none;
        cursor: pointer;
        font-size: 18px;
    }
`

function Header({data, dispatch}) {
    const [searchInput, setSearchInput] = useState('');

    // Filtering the jobs by the title, name of the company and 
    function FilteringJobs(e) {
        e.preventDefault();
        const collectionOfJobs = data.filter(item => item.title.toLowerCase().includes(searchInput) || item.company.toLowerCase().includes(searchInput) || item.description.toLowerCase().includes(searchInput) || item.location.toLowerCase().includes(searchInput) );  
        dispatch({type:'FILTERING_JOB', locationfiltered: collectionOfJobs})
        setSearchInput("");
    }

    return (
        <>
            <FormHeader className="header">
                <FormFiltering onSubmit={FilteringJobs}>
                    <img src={globe} alt="this is a globe"/>
                    <input
                        type="text" 
                        placeholder="Title, companies, expertise or benefits"
                        value={searchInput} 
                        onChange={e => setSearchInput(e.target.value)}
                        required 
                    />
                    <button className="header_submit" type="submit">Search</button>
                </FormFiltering>
            </FormHeader>
        </>
    )
}

export default Header
