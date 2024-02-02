// import logo from './logo.svg';
import './App.css';
// import Maze from './components/Maze';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Game from './components/Game';
import DrawMaze from './components/DrawMaze';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const meshRef = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (meshRef.current.rotation.x += delta));
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <planeBufferGeometry attach="geometry" args={[25, 15]} />
//       <meshPhongMaterial attach="material" color={hovered? "green": "pink"} />
//     </mesh>
//   )
// }

const Home = ({wallPositions, dataSent}) => (
  <>
    <div className="mazeSpace">
      <Game wallPositions={wallPositions} dataSent={dataSent} />
    </div>
    <div className="codingSpace">
      <h1>This is code space</h1>
    </div>
  </>
);

const About = () => (
  <>
    <div className="about">
      <h1>This is about page</h1>
    </div>
  </>
)

function App() {
  const [mode, setMode] = useState("Dark Mode");
  const [navStyle, setStyle] = useState({color : "white", backgroundColor : "black"}); /*for navbar*/
  const [bodyStyle, setBodyStyle] = useState({color : "black", backgroundColor : "white"}); /*for main body*/
  const [wallPositionsFromDrawMaze, setWallPositionsFromDrawMaze] = useState([]);
  const [dataSent, setDataSent] = useState(false);

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
    <Router >
      <Navbar title="Maze Solving Game" text1 = "About" modec = {mode === 'Dark Mode'? 'Light Mode': 'Dark Mode'} switchfunc = {switchtheme} style = {navStyle} />
      <div className="mainCont" style={navStyle}>
        <Routes>
            <Route path="/" element={<Home wallPositions={wallPositionsFromDrawMaze} dataSent={dataSent}/>} />
            <Route path = '/About' element = {<About/>} />
            <Route path='/Draw-Maze' element={<DrawMaze sendDataToApp={receivePositions}/>} />
        </Routes>
      </div>
      <Footer style = {navStyle}/>
    </Router>
  );
}

export default App;
