import React, { useEffect, useReducer } from 'react';
const GlobalContext = React.createContext();
import axios from "axios";

// These links are the links for the cors and the cors
const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
const API_URL = "https://jobs.github.com/positions.json"

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'FETCHING_DATA': {
                return {
                    ...state,
                    loading: false,
                    data: action.playload,
                }
            }
            case 'FILTERING_JOB': {
                return {
                    ...state,
                    data:  action.locationfiltered,
                }
            }
            case 'FILTERING_JOBS': {
                return {
                    ...state,
                    data:  action.filteredJobs,
                }
            }
            case 'FILTERING_FULL_TIME_JOBS': {
                return {
                    ...state,
                    data: action.fullTimeJobsFiltered,
                }
            }
            case 'FETCH_FAILED' : return {
              ...state, 
              error : "You can try again your fetch!",
            }
            default: {
                console.error('No actions defined', action.type);
                break;
            }
        }
        return state;
    }, {
      data: [ ],
      loading: true,
      description: '',
    })

    // Fetching the data with axios
    function fetchingJobsData() {
        axios
          .get(CORS_KEY + API_URL)
          .then(res => {
            dispatch({ type: 'FETCHING_DATA', playload : res.data } )    
          })
          .catch(error => {
            dispatch({type : "FETCH_FAILED" })
          })
      }

      useEffect(() => {
        fetchingJobsData()
      }, [])

    return(
        <GlobalContext.Provider 
            value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
export  { GlobalContext, ContextProvider }