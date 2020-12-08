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
            case 'FILTERING_FULL_TIME_JOBS': {
                return {
                    ...state,
                    data: [...state.data, action.fultimefiltered]
                }
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
    })

    function fetchingJobsData() {
        axios
          .get(CORS_KEY + API_URL)
          .then(res => {
            dispatch({ type: 'FETCHING_DATA', playload : res.data })
          })
      }
      useEffect(() => {
        fetchingJobsData()
      }, [])

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export  { Context, ContextProvider }


/*
import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

const GlobalContext = createContext()
const initialState = {
  description: "python",
  location: "new york",
  lat: "",
  long: "",
  full_time: true,
  jobs: [],
  loading: true,
  error : ""
}

export const ACTIONS = {
  LOADING_STATE: "loading state",
  SEARCH_JOB_BY_KEY_WORDS : "search_job_by_key_words"
}

const API_URL = "https://jobs.github.com/"
const  CORS_KEY = "https://cors-anywhere.herokuapp.com/"

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOADING_STATE : {
      return {
        ...state,
        jobs: action.payload,
        loading : false
      }
    }
    case ACTIONS.SEARCH_JOB_BY_KEY_WORDS : {
      return {
        ...state,
        description : action.foundJobsByKeyWords
      }
    }
    default: {
      return state
    }
  }
}


function JobsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  function getJobsData() {
    axios
      .get(CORS_KEY + API_URL + `positions.json?description=${state.description}&location=${state.location}`)
      .then(response => {
        dispatch({ type: ACTIONS.LOADING_STATE, payload : response.data })
      })
      .catch(error => {
        dispatch({type : "FETCH_ERROR" })
      })
  }

  useEffect(() => {
    getJobsData()
  }, [])

  useEffect(() => {
    getJobsData()
  }, [state.description])

  console.log(state);
  return (
    <GlobalContext.Provider value={{state, dispatch }}>
      { children }
    </GlobalContext.Provider>
  )
}

export { JobsContextProvider, GlobalContext }
*/