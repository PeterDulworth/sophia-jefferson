import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PolaroidImage = ({ src, description }) => {
  const imgDiv = <img src={src} alt='bike' className='PolaroidImage' />;
  const [content, setContent] = useState(imgDiv);

  const handleMouseEnter = () => setContent(<div className='PolaroidImage__description'>{description}</div>);
  const handleMouseLeave = () => setContent(imgDiv);

  return (
    <div className='PolaroidImage__container' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {content}
    </div>
  );
};

PolaroidImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PolaroidImage;
