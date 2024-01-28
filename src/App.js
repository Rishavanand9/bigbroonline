// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Sites from './Sites'; 
import Ads from './Ads';
import About from './About';
import Contact from './Contact';
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";
import img9 from "./assets/9.png";
import img11 from "./assets/11.png";
import img16 from "./assets/16.png";
import img13 from "./assets/13.png";
import img14 from "./assets/14.png";
import img15 from "./assets/15.png";


const slides = [
  img5,
  img6,
  img7,
  img8,
  img9,
  img11,
];

const slides2 = [
  img16,
  img13,
  img14,
  img15,
]

function App() {
  return (
    <div className="App">
      <Header />
      <Ads slides={slides} />
      <About />
      <Sites />
      <Ads slides={slides2} />
      <Contact />
    </div>
  );
}

export default App;
