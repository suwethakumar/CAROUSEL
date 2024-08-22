import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import dog1 from './assets/images/dog1.png';
import dog2 from './assets/images/dog2.png';
import dog3 from './assets/images/dog3.png';

const App = () => {
  const slides = [
    <img src={dog1} alt="Dog 1" />,
    <img src={dog2} alt="Dog 2" />,
    <img src={dog3} alt="Dog 3" />,
  ];

  return (
    <div className="App">
      <h1>React Carousel</h1>
      <Carousel slides={slides} autoPlay={true} autoPlayTime={5000} />
    </div>
  );
};

export default App;
