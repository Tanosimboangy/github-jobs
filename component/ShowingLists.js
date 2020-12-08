import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import globe from '../img/globe.svg';
import time from '../img/time.svg';

const DisplayListsStyled = styled.div`
    padding: 16px;
    background-color: white;
    box-shadow: 0px 0px 4px black;
    border-radius: 10px; 
    margin-bottom: 16px;
    width: 100%;
    div {
        img {
            max-width: 20%;
            border-radius: 8px;
        }
    }
`
const DisplayListsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-left: 4%;
    margin-right: 4%;
`

function ShowingLists({data}) {

    // Here where I display and show the list of the data
    return (
        <DisplayListsContainerStyled>
         {data.map(item => {
            return (
                <DisplayListsStyled key={item.id}>
                    <Link to={`/${item.id}`}>
                        <div>
                            <img src={item.company_logo} />
                            <ul>
                                {/* <li>{item.}</li> */}
                                <li>{item.title}</li>
                                <li><button className="fulltime_button">{item.type}</button></li>
                            </ul>
                        </div>
                        <ul style={{display: "flex", flexDirection:'row', alignItems: 'center', marginLeft: 'auto'}}>
                            <li  style={{display: "flex", flexDirection:'row', alignItems: 'center', paddingRight:"20px"}}><img src={globe} alt="this is the location"/> {item.location}</li>
                            <li  style={{display: "flex", flexDirection:'row', alignItems: 'center'}}><img src={time} alt="this when it is realesed"/> {item.created_at}</li>
                        </ul>
                    </Link>
                </DisplayListsStyled>
            )
        })}
        </DisplayListsContainerStyled>
    )
}

export default ShowingLists
