import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DisplayListsStyled = styled.div`
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 4px black;
    border-radius: 10px; 
    margin-bottom: 16px;
    div {
        img {
            max-width: 80px;
            border-radius: 8px;
        }
    }
    /* ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        li {

        }
    } */
`

function ShowingLists({data}) {
    console.log(data);

    return (
        <>
         {data.map(item => {
            return (
                <DisplayListsStyled key={item.id}>
                    <Link to={`/${item.id}`}>
                        <div>
                            <img src={item.company_logo} />
                            <ul>
                                <li></li>
                                <li>{item.title}</li>
                                <li>{item.type}</li>
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
        </>
    )
}

export default ShowingLists
