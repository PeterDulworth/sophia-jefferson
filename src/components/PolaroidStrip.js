import React from 'react';
import PolaroidImage from './PolaroidImage';
import SophiaImg from "../imgs/soph.JPG";
import SillyImg from "../imgs/silly.JPG";
import BikeImg from "../imgs/bike.JPG";
import HannahImg from "../imgs/hannah.JPG";

const PolaroidStrip = () => {
    return (
        <div className="PolaroidStrip">
            <PolaroidImage src={SophiaImg} />
            <PolaroidImage src={SillyImg} />
            <PolaroidImage src={BikeImg} />
            <PolaroidImage src={HannahImg} />
        </div>
    );
};

export default PolaroidStrip;
