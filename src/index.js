import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import App from './components/app/app';
import ErrorIndicator from "./components/wrappers/error-indicator";

ReactDOM.render(
    <ErrorIndicator>
        <Router>
            <App/>
        </Router>
    </ErrorIndicator>
    , document.getElementById('root'));