import React from 'react';
import FilteringLists from './FilteringLists';
import ShowingLists from './ShowingLists';

function MainLists({data}) {
    return (
        <main className="main">
            <FilteringLists />
            <ShowingLists data={data}/>
        </main>
    )
}

export default MainLists
