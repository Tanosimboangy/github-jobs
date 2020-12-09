import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import arrow_back from '../img/arrow_back.svg';
import time from '../img/time.svg';

const LinkToGoBack = styled.div`
    a {
        div {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 2.5%;
            padding-bottom: 20px;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            color: #1E86FF;
        }
    }
    h3 {
        font-family: "Poppins_bold";
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        text-transform: uppercase;
        color: #B9BDCF;
        padding-left: 2.5%;
        padding-bottom: 16px;
    }
    div {
        font-family: "Poppins_regular";
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: #334680;
        padding-left: 2.5%;
        padding-bottom: 36px;
        max-width: 240px;
        a {
            color: #1E86FF;
        }
    }
`
function JobDescriptions({data}) {
    const { detail } = useParams();
    const detailItem = data.filter(item => item.id === detail);

    return (
        <div className="details_container">
            <LinkToGoBack>
                <Link to="/">
                    <div><img src={arrow_back} alt="arrow_back"/> Go back to search</div>
                </Link>
                <h3>How to Apply</h3>
                <div>Please email a copy of your resume and online portfolio to <a href="https://kasisto.com/">kasisto.com</a> & CC <a href="https://kasisto.com/">eric@kasisto.com</a></div>
            </LinkToGoBack>
            {detailItem.map(item => {
                return (
                    <div className="descriptions" key={item.id}>
                        <div className="description_header">
                            <ul>
                                <li><h2>{item.title}</h2></li>
                                <li>{item.type}</li>
                            </ul>
                            <div><img src={time}/> {new Date(item.created_at).toLocaleDateString()} days ago.</div>
                        </div>
                        <div>
                            <ul>
                                <li><img src={item.company_logo} /></li>
                                <li>
                                    <h4>{item.company}</h4>
                                    <span>{item.location}</span>
                                </li>
                            </ul>
                        </div>
                        <ReactMarkdown
                            escapeHtml={true}
                            source={ContentMarkdown} 
                        />
                    </div>
                )})
            }
        </div>
    )
}

export default JobDescriptions;
