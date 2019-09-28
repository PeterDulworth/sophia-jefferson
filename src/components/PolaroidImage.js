import React from 'react';
import PropTypes from 'prop-types';

const PolaroidImage = ({ src }) => {
    return (
        <img src={src} alt="bike" className="Card" />
    );
};

PolaroidImage.propTypes = {
    src: PropTypes.string.isRequired,
};

export default PolaroidImage;
