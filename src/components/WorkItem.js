import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WorkItem = ({ src, description }) => {
    const imgDiv = <img src={src} alt="work item"/>;
    const [content, setContent] = useState(imgDiv);

    const handleMouseEnter = () => {
        const descriptionDiv = <div className="WorkItem__description">{description}</div>;
        setContent(descriptionDiv);
    };

    const handleMouseLeave = () => {
        setContent(imgDiv);
    };

    return (
        <div className="WorkItem" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {content}
        </div>
    );
};

WorkItem.propTypes = {

};

export default WorkItem;
