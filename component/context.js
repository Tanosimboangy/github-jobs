import React, { useEffect, useState, useReducer } from 'react';
const Context = React.createContext();
import axios from "axios";

let API_KEY = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code";

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'FETCHING_DATA': {
                return {
                    ...state,
                    loading: false,
                    data: action.playload
                }
            }
            default: {
                console.error('No actions defined', action.type);
                break;
            }
        }
        return state;
    }, {
        data: [],
        loading: true,
    })

    function fetchingJobsData() {
        axios
          .get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=node')
          .then(res => {
              console.log(res);
            dispatch({ type: 'FETCHING_DATA', playload : res.data })
          })
      }
      useEffect(() => {
        fetchingJobsData()
      }, [])

    // company: "eHealth Innovation @ UHN"
    // company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaStTIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0ad6d016c16fe9c6b05611e88ec2ec925e888742/ehi-new-logo-orange.png"
    // company_url: "https://ehealthinnovation.org"
    // created_at: "Sat Dec 05 17:19:38 UTC 2020"
    // description: "<p>Our mission at eHealth Innovation is to change healthcare delivery for all by designing thoughtful digital technologies that are empathetic and ultimately empower people. We work tirelessly with whip-smart local and international minds from multidisciplinary areas like science, design, technology, and health fields to transform health systems around the globe.</p>↵<p>Embedded within Toronto General Hospital (University Health Network), we are a part of one of the largest medical research centres in North America and have unparalleled access to insights from those who use our healthcare system the most - patients and their clinicians. Due to this unique positioning and our vast skill set, our work is making an impact right now in areas the of diabetes, heart failure, asthma, chronic pain, juvenile arthritis, and prostate cancer.</p>↵<p>Being in a research environment, we are able to concentrate on this goal without being distracted by short term profit motives, or keeping investors happy. Every member of our tightly knit development team has full input in every stage of project architecture, design and implementation.</p>↵<p>We are thrilled to be working with Apple on the future of digital health and to continue to find uses for Apple Watch in the clinic and for our patients! We seek passionate software developers and engineers to help us realize this vision.</p>↵<p>We are building teams to address the full user experience and not just for Apple technology. However, for this role, knowledge of iOS and Swift development is required to drive the development of the digital therapeutics we build.</p>↵<p><strong>The ideal candidate would have</strong>:</p>↵<ul>↵<li>↵<p>A BSc/MSc in Computer Science, Software/Computer Engineering, or equivalent</p>↵</li>↵<li>↵<p>At least 3 years of work experience in iOS software programming.</p>↵</li>↵<li>↵<p>Strong fundamentals in computer science and software construction.</p>↵</li>↵<li>↵<p>Writing readable, idiomatic and maintainable Swift code</p>↵</li>↵<li>↵<p>Deep understanding of iOS application design patterns and API design.</p>↵</li>↵<li>↵<p>Experienced with a variety of iOS frameworks.</p>↵</li>↵<li>↵<p>Empathy and cares about quality and knows what it means to ship high quality code.</p>↵</li>↵<li>↵<p>Experience shipping iOS apps to the App Store.</p>↵</li>↵<li>↵<p>Experience with build or test automation.</p>↵</li>↵<li>↵<p>Deep curiosity about new technology, techniques and ideas.</p>↵</li>↵<li>↵<p>Knowledge of the health system and building healthcare applications is an asset, but is not mandatory.</p>↵</li>↵<li>↵<p>An interest in open source - projects contributed to or created</p>↵</li>↵<li>↵<p>An interest in UI/UX design. Previous experience working directly with UI/UX design is an asset.</p>↵</li>↵<li>↵<p>Experience with (or an interest in) various server stacks and languages (Rails, Spring, Django, Node, etc.)</p>↵</li>↵<li>↵<p>Drive and enthusiasm to engage with peers in team discussions and decision-making processes.</p>↵</li>↵<li>↵<p>Interest in collaborating with others of diverse technical ability.</p>↵</li>↵</ul>↵<p><strong>Relevant links</strong>:</p>↵<p><a href="https://www.ehealthinnovation.org">https://www.ehealthinnovation.org</a></p>↵<p><a href="https://www.iphoneincanada.ca/news/tim-cook-apple-proud-canadian-researchers/">https://www.iphoneincanada.ca/news/tim-cook-apple-proud-canadian-researchers/</a></p>↵<p><strong>Job Type</strong>: Full-time, Permanent</p>↵<p><strong>Salary</strong>: $75,000.00-$90,000.00 per year</p>↵<p><strong>COVID-19 considerations</strong>:↵Our software team has been working remotely since the March 2020 and will continue to do so. Laptops and other hardware will be shipped to your home before your first day of work. All onboarding and meetings are virtual.</p>↵"
    // how_to_apply: "<p>Email your resume to <a href="mailto:careers@ehealthinnovation.org">careers@ehealthinnovation.org</a></p>↵"
    // id: "ff9219e4-6cb7-4e22-9beb-d660ef2edfb5"
    // location: "Toronto, Canada (or remote within Canada)"
    // title: "iOS Developer"
    // type: "Full Time"
    // url: "https://jobs.github.com/positions/ff9219e4-6cb7-4e22-9beb-d660ef2edfb5"
    // __proto__:
    

    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export  { Context, ContextProvider }


