import React from 'react';
import './styles/_index.scss';
import Nav from './components/Nav';
import SidePanel from './components/SidePanel';
import Card from './components/Card';
import BikeImg from './imgs/bike.JPG';
import SillyImg from './imgs/silly.JPG';
import HannahImg from './imgs/hannah.JPG';
import SophImg from './imgs/soph.JPG';

function App() {
  return (
    <div className="App">
      <SidePanel />
      <div className="App__content">
        <Nav />
        <Card image={BikeImg} />
        <Card image={SillyImg} />
        <Card image={HannahImg} />
        <Card image={SophImg} />
      </div>
    </div>
  );
}

export default App;
