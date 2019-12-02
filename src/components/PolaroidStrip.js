import React from 'react';
import PolaroidImage from './PolaroidImage';
import SophiaImg from '../imgs/soph.JPG';
import SillyImg from '../imgs/silly.JPG';
import BikeImg from '../imgs/bike.JPG';
import HannahImg from '../imgs/hannah.JPG';

const PolaroidStrip = () => {
  return (
    <div className='PolaroidStrip'>
      <PolaroidImage src={SophiaImg} description='Rice University Computer Science student, class of 2020.' />
      <PolaroidImage src={SillyImg} description='My dog, Silly!' />
      <PolaroidImage
        src={BikeImg}
        description='2-Year Duncan Residential College Beer Bike Captain, 2nd Place Beer Bike 2019.'
      />
      <PolaroidImage src={HannahImg} description='My other dog, Hannah!' />
    </div>
  );
};

export default PolaroidStrip;
