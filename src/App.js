import React from 'react';
import './styles/_index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import ExperiencePage from './pages/ExperiencePage';
import InstagramImage from "./imgs/instagram.jpg";
import JPMImage from "./imgs/jpmorgan.png";

function App() {
    const experience = {
        insta: {
            src: InstagramImage,
            title: 'Instagram at Facebook, Inc., Menlo Park, CA – Software Engineer Intern',
            paragraphs: [
                'Implemented a regression detection workflow in Python to detect regressions caused by endpoints and functions in order to better track regressions in server resource usage at Instagram',
                'Redesigned + backfilled a MySQL DB table, constructed ReactJS components, and queried + generated metrics in Hack for a dashboard used by efficiency reps from each IG product group to better track resource usage during the usage budget period',

            ]

        },
        jpm: {
            src: JPMImage,
            title: 'J. P. Morgan Chase & Co., Houston, TX - Corporate Summer Analyst',
            paragraphs: [
                'Constructed the UI of a ReactJS web application used to verify, update, or create the user’s status, vote for certain groups, and conditionally view the status of other groups by parsing and displaying JSON objects from the database',
                'Gathered requirements from business users and implemented UI for ReactJS web application used to detect, search for, and rectify anomalies in historical data',
            ],
        }
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={AboutMe} />
                    <Route path={process.env.PUBLIC_URL + '/work'} component={Work} />
                    <Route path={process.env.PUBLIC_URL + '/instagram'} render={(props) => <ExperiencePage {...props} {...experience.insta} />} />
                    <Route path={process.env.PUBLIC_URL + '/jpmorgan'} render={(props) => <ExperiencePage {...props} {...experience.jpm} />} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const Error = () => {
    return "404 page not found";
};

export default App;
