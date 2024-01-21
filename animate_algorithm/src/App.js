// import logo from './logo.svg';
import './App.css';
// import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar title="Maze Solving Game" />
      <div className="mainCont">
        <div className="mazeSpace">
          <h1>This is maze space</h1>
        </div>
        <div className="codingSpace">
          <h1>This is code space</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
