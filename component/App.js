import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import JobDescriptions from "./JobDescriptions";
// import JobContext from "./JobContext";
import MainLists from "./MainLists";
import { GlobalContext } from "./GlobalContext";

function App() {
    // Accessing the state by using useContext
    const { state, dispatch} = useContext(GlobalContext);
    // Grab the data from the state
    const { data, loading } = state;

    return (
        <>
            <h1><b>Github</b> Jobs</h1>
            {/* <JobContext data={data} dispatch={dispatch}> */}
                <Switch>
                    <Route exact path="/">
                        <Header 
                            data={data} 
                            dispatch={dispatch}
                            />
                        <MainLists 
                            data={data} 
                            dispatch={dispatch}
                            loading={loading}
                        />
                    </Route>
                    <Route path="/:detail">
                        <JobDescriptions
                            data={data} 
                            dispatch={dispatch}
                        />
                    </Route>
                </Switch>
            {/* </JobContext> */}
        </>
    )
}

export default App
