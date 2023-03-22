import React from 'react';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer__copy'>
        <a target='_blank' rel='noopener noreferrer' href='http://sophiajefferson.com/resume/sophiajefferson.pdf'>
          Resume
        </a>
      </div>
      <div className='Footer__contact'>
        Please send pictures of your{' '}
        <span role='img' aria-label='dog'>
          🐕
        </span>{' '}
        to sgj1@rice.edu.
      </div>
      <div className='Footer__social'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sophia-j-b9097a129/'>
          LinkedIn
        </a>
        <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/isticatedsoph/'>
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
