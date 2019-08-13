import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image }) => {
    return (
        <div className="Card">
            <img src={image} alt="bike" />
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;