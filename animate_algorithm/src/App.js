// import logo from './logo.svg';
import './App.css';
// import Maze from './components/Maze';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Game from './components/Game';
// import React, { useRef, useState } from 'react';
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

function App() {
  return (
    <div>
      <Navbar title="Maze Solving Game" />
      <div className="mainCont">
        <div className="mazeSpace">
          <Game/>
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
