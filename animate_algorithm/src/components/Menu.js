import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';
// import './Menu.css';

export default function Menu({title, contStyle}) {
    const navigate = useNavigate();
    const redirect = (name) => {
        navigate(`/Algorithms/${name}`);
    }
    const titleStyle = {
        textAlign: "center"
    }
    return (
    <div className="mainCont" style={contStyle}>
        <h1 id='menuTitle' style={titleStyle}>{title}</h1>
        <ListGroup>
            <ListGroup.Item action onClick={() => redirect("Searching")} variant="primary">Searching Algorithm</ListGroup.Item>
            <ListGroup.Item action onClick={() => redirect("Sorting")} variant="primary">Sorting Algorithm</ListGroup.Item>
            <ListGroup.Item action onClick={() => redirect("Greedy")} variant="primary">Greedy Algorithm</ListGroup.Item>
            <ListGroup.Item action onClick={() => redirect("BackTracking")} variant="primary">Back-Tracking Algorithm</ListGroup.Item>
        </ListGroup>
    </div>
    )
}
