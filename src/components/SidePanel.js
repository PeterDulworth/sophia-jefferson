import React from 'react';
import PropTypes from 'prop-types';

const SidePanel = (props) => {
    return (
        <div className="SidePanel__wrapper">
            <div className="SidePanel">
                <div className="SidePanel__links">
                    <div className="SidePanel__link">experience</div>
                    <div className="SidePanel__link">education</div>
                    <div className="SidePanel__link">adventure</div>
                </div>
            </div>
        </div>
    );
};

SidePanel.propTypes = {
    
};

export default SidePanel;