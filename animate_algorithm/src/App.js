// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import DrawMaze from './components/DrawMaze';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import BackTracking from './components/BackTracking';
import SearchAnimation from './components/SearchingAlgorithm';
import LinePlot from './components/LinePlot';
// import { Nav } from 'react-bootstrap';
import { Route, Routes, useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const title = "Algomerse";

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

  const data = [20, 35, 10, 16, 36, 37, 40]; // Example data

  return (
    <>
      <Navbar className="navIndex" title="Algomerse" text1 = "Draw Maze" url1 = "/Draw-Maze" modec = {mode === 'Dark Mode'? 'Light Mode': 'Dark Mode'} switchfunc = {switchtheme} style = {navStyle} />
          <Routes>
              <Route path="/" element={<Home title={title} theme={homeThemeSVG}/>} />
              <Route path = '/About' element = {<About contStyle={navStyle}/>} />
              <Route path = '/Menu' element = {<Menu title={title} contStyle={navStyle}/>} />
              <Route path='/Algorithms/Searching' element = {<SearchAnimation id="Chart" data={data}/>}></Route>
              <Route path='/Algorithms/LineChart' element = {<LinePlot data={data}/>}></Route>
              <Route path = '/Algorithms/BackTracking/*' element={<BackTracking contStyle={navStyle} wallPositions={wallPositionsFromDrawMaze} dataSent={dataSent} sendDataToApp={receivePositions} />}></Route>
          </Routes>
          {location.pathname.startsWith('/Algorithms/BackTracking/') && <BackTracking contStyle={navStyle} wallPositions={wallPositionsFromDrawMaze} dataSent={dataSent} sendDataToApp={receivePositions} />}

      <Footer style = {navStyle}/>
    </>
  );
}

export default App;
