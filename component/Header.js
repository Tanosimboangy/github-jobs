import React, { useState, useContext } from 'react'
import { Context } from './context';
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

function Header() {
    const { state, dispatch} = useContext(Context);
    const { data } = state;
    const [inputValue, setInputValue] = useState('');

    function FilteringJobs(e) {
        e.preventDefault();
        const jobs = data.filter(item => item.title.toLowerCase().includes(newLocationState) || item.company.toLowerCase().includes(newLocationState) || item.location.toLowerCase().includes(newLocationState));  
        dispatch({type:'FILTERING_JOBS', filteredJobs: newLocatedJob})
        setInputValue("");
    }

    return (
        <FormHeader className="header">
            <FormFiltering onSubmit={FilteringJobs}>
                <img src={globe} alt="this is a globe"/>
                <input
                    type="text" 
                    placeholder="Title, companies, expertise or benefits"
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)}
                    required 
                />
                <button className="header_submit" type="submit">Search</button>
            </FormFiltering>
        </FormHeader>
    )
}

export default Header
