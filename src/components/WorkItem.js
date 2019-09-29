import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const WorkItem = ({ src, href, company, date, position }) => {
    const imgDiv = <img src={src} alt="work item"/>;
    const [redirect, setRedirect] = useState(null);
    const [content, setContent] = useState(imgDiv);

    const handleMouseEnter = () => {
        const descriptionDiv = (<div className="WorkItem__description">
            <div className="WorkItem__company">{company}</div>
            <div className="WorkItem__position">{position} - <span className="WorkItem__date">{date}</span></div>
        </div>);
        setContent(descriptionDiv);
    };

    const handleMouseLeave = () => {
        setContent(imgDiv);
    };

    const handleClick = () => {
        setRedirect(<Redirect to={process.env.PUBLIC_URL + href} />);
    };

    return (
        <div className="WorkItem" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {content}
            {redirect}
        </div>
    );
};

WorkItem.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default WorkItem;
