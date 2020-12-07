import React, { useState, useContext } from 'react'
import { Context } from './context';
import styled from 'styled-components';

const FormHeader = styled.header`
    padding-top: 50px;
    padding-bottom: 50px;
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

    function CheckFullTimeJob(e) {
        e.preventDefault();
        // const fullTimeJobs = data.filter(item => item.type === "Full Time")
        const fullTimeJobs = data.filter(item => item.location === "New Work")
        // dispatch({type:'FILTERING_FULL_TIME_JOBS', fultimefiltered})
        setInputValue("");
    }

    return (
        <FormHeader className="header">
            <FormFiltering onSubmit={CheckFullTimeJob}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)}
                    required 
                />
                <button type="submit">Search</button>
            </FormFiltering>
        </FormHeader>
    )
}

export default Header
