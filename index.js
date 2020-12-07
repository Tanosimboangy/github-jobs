import React from 'react';
import ReactDOM from "react-dom";
import App from "./component/App";
// import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './component/context'


ReactDOM.render(
    <ContextProvider>
			<App />
	</ContextProvider>
    , document.getElementById("root"))

