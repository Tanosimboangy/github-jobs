import React, { useEffect, useReducer } from 'react';
const Context = React.createContext();
import axios from "axios";

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
                    loading: true,
                }
            }
            case 'FILTERING_LOCATION_JOBS': {
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
      loading: false,
      description: '',
    })

    function fetchingJobsData() {
        axios
          .get(CORS_KEY + API_URL)
          .then(res => {
            dispatch({ type: 'FETCHING_DATA', playload : res.data })
          })
          .catch(error => {
            dispatch({type : "FETCH_FAILED" })
          })
      }

      useEffect(() => {
        fetchingJobsData()
      }, [])

      // const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"
      // const API_URLS = `https://jobs.github.com/positions.json?description=${state.description}full_time${state.full_time}location${state.location}`

      // function fetchingfulltimeJobs() {
      //   axios
      //     .get(CORS_KEY + API_URLS)
      //     .then(res => {
      //       dispatch({ type: 'GETTING_FULL_TIME_JOBS', gettingFullTimeJobs : res.data })
      //     })
      //     .catch(error => {
      //       dispatch({type : "FETCH_FAILED" })
      //     })
      // }

      // useEffect(() => {
      //   fetchingfulltimeJobs();
      // }, [])

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}
export  { Context, ContextProvider }