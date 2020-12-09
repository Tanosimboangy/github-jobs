import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import JobDescriptions from "./JobDescriptions";
import MainLists from "./MainLists";
import { GlobalContext } from "./GlobalContext";

function App() {
    // Accessing the state by using useContext
    const { state, dispatch } = useContext(GlobalContext);
    // Grab the data from the state
    const { data } = state

    return (
        <>
            <h1>Github Jobs</h1>
            <Switch>
                <Route exact path="/">
                    <Header 
                        data={data} 
                        dispatch={dispatch}
                    />
                    <MainLists 
                        data={data} 
                        dispatch={dispatch}
                    />
                </Route>
                <Route path="/:detail">
                    <JobDescriptions
                        data={data} 
                        dispatch={dispatch}
                    />
                </Route>
            </Switch>
        </>
    )
}

export default App
