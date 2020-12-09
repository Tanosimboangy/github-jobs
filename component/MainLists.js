import React from 'react';
import FilteringListsComponents from './FilteringListsComponents';
import ShowingJobsLists from './ShowingJobsLists';

function MainLists({data, dispatch, loading}) {
    return (
        <main className="main">
            <FilteringListsComponents 
                data={data} 
                dispatch={dispatch} 
                loading={loading}
            />
            <ShowingJobsLists data={data}/>
        </main>
    )
}

export default MainLists
