import React from 'react';
import './styles/_index.scss';
import { BrowserRouter, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/" component={AboutMe} />
                <Route path="/work" component={Work} />
            </div>
        </BrowserRouter>
    );
}

export default App;
