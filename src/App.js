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
        <div className="App__cards">
          <Card image={SophImg} />  
          <Card image={SillyImg} />
          <Card image={BikeImg} />
          <Card image={HannahImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
