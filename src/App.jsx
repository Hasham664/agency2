import React from 'react';
import Navbar from './components/Navbar';
import 'keen-slider/keen-slider.min.css';
import Sliders from './components/Sliders';
import OurService from './components/OurService';
import Bussnes from './components/Bussnes';
import BackImgs from './components/BackImgs';
import { AboutMe } from './components/AboutMe';
import { PicsTabs } from './components/PicsTabs';
import News from './components/News';
import Client from './components/Client';
import Last from './components/Last';

const App = () => {
  return (
    <>
      <Navbar />
      <Sliders />
      <OurService />
      <Bussnes />
      <BackImgs />
      <AboutMe />
      <PicsTabs />
      <News />
      <Client />
      <Last />
    </>
  );
};

export default App;
