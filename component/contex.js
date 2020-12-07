import React, { useEffect, useState } from 'react';
const Context = React.createContext();

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, dispatch) => {
        switch(applicationCache.type) {
            case 'FETCHING_DATA': {

            }
            default: {
                console.error('No actions defined', action.type);
                break;
            }
        }
        return state;
    }, {
        data: []
    }
    )



    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export  { Context, ContextProvider }
