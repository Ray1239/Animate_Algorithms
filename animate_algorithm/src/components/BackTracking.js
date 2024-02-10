import React from 'react';
import Maze from './Maze';
import { Nav } from 'react-bootstrap';
import { Route, Routes, Link, Navigate, useLocation } from 'react-router-dom';
import DrawMaze from './DrawMaze';

const MazeRunnerDiv = (props) => (
    <div className='mainCont' style={props.contStyle}>
        <div className="mazeSpace">
            <Maze wallPositions={props.wallPositions} dataSent={props.dataSent} />
        </div>
        <div className="codingSpace">
            <h1>This is code space</h1>
        </div>
    </div>
)

const MazeNavigation = () => {
    const location = useLocation();
    return (
        <Nav variant="tabs" defaultActiveKey="/Algorithms/BackTracking/Maze-Solving" className='navSize' activeKey={location.pathname}>
            <Nav.Item>
                <Nav.Link as={Link} to="/Algorithms/BackTracking/Maze-Solving" eventKey="/Algorithms/BackTracking/Maze-Solving">
                    Solve Maze
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="/Algorithms/BackTracking/Draw-Maze" eventKey="/Algorithms/BackTracking/Draw-Maze">
                    Create New Maze
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

const BackTracking = (props) => {
    const location = useLocation();
    return (
    <>
        <MazeNavigation/>
        {(location.pathname === "/Algorithms/BackTracking") && <Navigate to="/Algorithms/BackTracking/Maze-Solving" />}
        <Routes>
            <Route path="/Algorithms/BackTracking/Maze-Solving" element={<MazeRunnerDiv contStyle={props.contStyle} wallPositions={props.wallPositions} dataSent={props.dataSent} />} />
            <Route path="/Algorithms/BackTracking/Draw-Maze" element={<DrawMaze contStyle={props.contStyle} sendDataToApp={props.sendDataToApp} />} />
        </Routes>
    </>
    )
}

export default BackTracking;