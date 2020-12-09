import React from 'react';
import FilteringListsComponents from './FilteringListsComponents';
import ShowingJobsLists from './ShowingJobsLists';

function MainLists({data, dispatch}) {
    return (
        <main className="main">
            <FilteringListsComponents data={data} dispatch={dispatch} />
            <ShowingJobsLists data={data}/>
        </main>
    )
}

export default MainLists
