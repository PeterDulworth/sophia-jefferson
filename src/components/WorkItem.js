import React from 'react';
import PropTypes from 'prop-types';

const WorkItem = ({ src }) => {
    return (
        <div className="WorkItem">
            <img src={src} alt="work item"/>
        </div>
    );
};

WorkItem.propTypes = {

};

export default WorkItem;
