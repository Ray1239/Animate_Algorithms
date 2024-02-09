// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Maze from './components/Maze';
import DrawMaze from './components/DrawMaze';
import About from './components/About';
import Home from './components/Home';

import { Nav } from 'react-bootstrap';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const MazeNavigation = () => (
  <Nav variant="tabs" defaultActiveKey="/Algorithms/Maze-Solving" className='navSize'>
    <Nav.Item>
      <Nav.Link as={Link} to="/Algorithms/Maze-Solving" eventKey="/Algorithms/Maze-Solving">
        Solve Maze
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/Algorithms/Draw-Maze" eventKey="/Algorithms/Draw-Maze">
        Create New Maze
      </Nav.Link>
    </Nav.Item>
  </Nav>
)

const Backtracking = ({ wallPositions, dataSent, contStyle}) => (
  <div className='mainCont' style={contStyle}>
    <div className="mazeSpace">
      <Maze wallPositions={wallPositions} dataSent={dataSent} />
    </div>
    <div className="codingSpace">
      <h1>This is code space</h1>
    </div>
  </div>
);

function App() {
  const [mode, setMode] = useState("Dark Mode");
  const [navStyle, setStyle] = useState({color : "white", backgroundColor : "black"}); /*for navbar*/
  const [bodyStyle, setBodyStyle] = useState({color : "black", backgroundColor : "white"}); /*for main body*/
  const [homeThemeSVG, setHomeThemeSVG] = useState(0);
  const [wallPositionsFromDrawMaze, setWallPositionsFromDrawMaze] = useState([]);
  const [dataSent, setDataSent] = useState(false);
  const location = useLocation();

  /*To switch theme when toggle button is clicked*/
  const switchtheme = () => {
    if (mode === "Dark Mode"){
        setMode("Light Mode");
        setStyle({
            color: "white",
            backgroundColor: "#00008B"
        });
        setBodyStyle({
            color : "white",
            backgroundColor : "black"
        });
        setHomeThemeSVG(1);
    }else{
        setMode("Dark Mode");
        setStyle({
            backgroundColor : "black",
            color : "white" 
        });
        setBodyStyle({
          color : "black",
          backgroundColor : "white"
        });
        setHomeThemeSVG(0);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = bodyStyle.backgroundColor;
    document.body.style.color = bodyStyle.color;
  }, [bodyStyle]);

  const receivePositions = (data) => {
    setWallPositionsFromDrawMaze(data);
    setDataSent(true);
  }

  return (
    <>
      <Navbar className="navIndex" title="Algomerse" text1 = "Draw Maze" url1 = "/Draw-Maze" modec = {mode === 'Dark Mode'? 'Light Mode': 'Dark Mode'} switchfunc = {switchtheme} style = {navStyle} />
        {location.pathname.startsWith('/Algorithms') && <MazeNavigation/>}

          <Routes>
              <Route path="/" element={<Home theme={homeThemeSVG}/>} />
              <Route path = '/About' element = {<About contStyle={navStyle}/>} />
              <Route path = '/Menu' element = {<About contStyle={navStyle}/>} />
              <Route path="/Algorithms/Maze-Solving" element={<Backtracking contStyle={navStyle} wallPositions={wallPositionsFromDrawMaze} dataSent={dataSent} />} />
              <Route path="/Algorithms/Draw-Maze" element={<DrawMaze contStyle={navStyle} sendDataToApp={receivePositions} />} />
          </Routes>

      <Footer style = {navStyle}/>
    </>
  );
}

export default App;
