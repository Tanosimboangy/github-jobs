import React, { useContext } from 'react';
import { Context} from './context';
import { Link, useParams } from 'react-router-dom';

function Details() {
    const { detail } = useParams();
    const { state } = useContext(Context);
    const { data } = state;
    const specificItem = data.filter(item => item.id === detail);

    return (
        <div>
            <div>
                <Link to="/">
                    <h2>Go back to search</h2>
                </Link>
                <h3>How to Apply</h3>
                <div>Please email a copy of your resume and online portfolio to <a href="https://kasisto.com/">kasisto.com</a> & CC <a href="https://kasisto.com/">eric@kasisto.com</a></div>
            </div>
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
