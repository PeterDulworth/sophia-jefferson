import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__copy">
                &copy; 2019 Peter Dulworth
            </div>
            <div className="Footer__contact">
                Please send pictures of your 🐕 to sgj1@rice.edu.
            </div>
                <div className="Footer__social">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sophia-j-b9097a129/">LinkedIn</a>
                    <a target="_blank" rel="noopener noreferrer" href="http://sophiajefferson.com/resume">Resume</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/isticatedsoph/">Instagram</a>
                </div>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;
