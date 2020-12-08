import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Details from "./Details";
import MainLists from "./MainLists";
import { Context } from "./context";

function App() {
    // Accessing the state by using useContext
    const { state } = useContext(Context);
    // Grab the data from the state
    const { data } = state

    return (
        <>
            <h1>Github Jobs</h1>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <MainLists data={data} />
                </Route>
                <Route path="/:detail">
                    <Details />
                </Route>
            </Switch>
        </>
    )
}

export default App
