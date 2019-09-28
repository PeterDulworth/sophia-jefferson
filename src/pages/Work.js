import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import WorkItem from "../components/WorkItem";
import InstagramImage from "../imgs/instagram.jpg";
import JPMImage from "../imgs/jpmorgan2.png";

const Work = () => {
    return (
        <div className="Work">
            <Nav links={[ { label: 'About Me', href: '/' }, { label: 'Work', href: '/work'} ]} active="/work" />
            <div className="Work__headlines">
                <div className="Work__headline Work__headline_1">Invested</div>
                <div className="Work__headline Work__headline_2">Hard Worker</div>
                <div className="Work__headline Work__headline_3">Contributor</div>
            </div>
            <div className="Work__content">
                <WorkItem src={InstagramImage} company="Instagram 📸" date="Summer 2019" position="SWE Intern" />
                <WorkItem src={JPMImage} company="J.P. Morgan 💳" date="Summer 2018" position="Corporate Summer Analyst" />
            </div>
        </div>
    );
};

Work.propTypes = {

};

export default Work;
