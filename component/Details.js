import React, { useContext } from 'react';
import { Context} from './context';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import arrow_back from '../img/arrow_back.svg';

const LinkToGoBack = styled.div`
    /* font-family: Poppins; */
    a {
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 12px;
            padding-bottom: 36px;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            color: #1E86FF;
        }
    }
    h3 {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #B9BDCF;
        padding-left: 12px;
        padding-bottom: 16px;
    }
    div {
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #334680;
        padding-left: 12px;
        padding-bottom: 36px;
        a {
            color: #1E86FF;
        }
    }
`

function Details() {
    const { detail } = useParams();
    const { state } = useContext(Context);
    const { data } = state;
    const specificItem = data.filter(item => item.id === detail);

    return (
        <div>
            <LinkToGoBack>
                <Link to="/">
                    <div><img src={arrow_back} alt="arrow_back"/> Go back to search</div>
                </Link>
                <h3>How to Apply</h3>
                <div>Please email a copy of your resume and online portfolio to <a href="https://kasisto.com/">kasisto.com</a> & CC <a href="https://kasisto.com/">eric@kasisto.com</a></div>
            </LinkToGoBack>
            <div>
                <div>
                    <h2>{specificItem.title}</h2>
                    <button>{specificItem.type}</button>
                    <p>{specificItem.created_at}</p>
                </div>
                <div>
                    <ul>
                        <li>
                            {specificItem.company_logo}
                        </li>
                        <li>
                            <h4>{specificItem.location}</h4>
                            {/* <h4>{specificItem.}</h4> */}
                        </li>
                    </ul>
                </div>
                <div>
                    <p>{specificItem.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Details
