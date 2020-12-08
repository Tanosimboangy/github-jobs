import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DisplayListsStyled = styled.div`
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 4px black;
    border-radius: 10px; 
    margin-bottom: 16px;
    width: 100%;
    div {
        img {
            max-width: 80px;
            border-radius: 8px;
        }
    }
`
const DisplayListsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;
`

function ShowingLists({data}) {

    return (
        <DisplayListsContainerStyled>
         {data.map(item => {
            return (
                <DisplayListsStyled key={item.id}>
                    <Link to={`/${item.id}`}>
                        <div>
                            <img src={item.company_logo} />
                            <ul>
                                <li></li>
                                <li>{item.title}</li>
                                <button className="fulltime_button">{item.type}</button>
                            </ul>
                        </div>
                        <ul>
                            <li>{item.location}</li>
                            <li>{item.created_at}</li>
                        </ul>
                    </Link>
                </DisplayListsStyled>
            )
        })}
        </DisplayListsContainerStyled>
    )
}

export default ShowingLists
