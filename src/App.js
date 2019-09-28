import React from 'react';
import './styles/_index.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe} />
                    <Route path={process.env.PUBLIC_URL + '/work'} component={Work} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const Error = () => {
    return "no match";
};

export default App;
