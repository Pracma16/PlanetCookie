import React from 'react';  
import Home from './Home';
import Header from './components/Header';
import Slide from './components/Slide';
import { slides } from './utils/images';
import './App.scss';

const App = () => {
  
  return (
    <div className="App">
      <main>
        <Header />
        <Home />
        <Slide slides={slides} />
      </main>
    </div>
  );
};

export default App;

