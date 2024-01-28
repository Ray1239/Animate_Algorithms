// import './Navbar.css';
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = (props) => {
//     const { title } = props;
//     return(
//         <div className="outerNav">
//             <div className='navbar'>
//                 <div>
//                     <h2 className='navItem'>{title}</h2>
//                 </div>
//                 <ul>
//                     <li>
//                         <Link className='navItem' id='drawMaze' to={"/draw-maze"}>Draw Maze</Link>
//                     </li>
//                     <li>
//                         <Link className='navItem' id='about' to={`/about`}>About Us</Link>
//                     </li>
//                     <li>
//                         <Link className='navItem' id='contact' to={"/contact"}>Contact Us</Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar;
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navbar(props){
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style = {props.style}>
            <div className="container-fluid">
            <Link className="navbar-brand" to = '/'>{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">{props.text1}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Create Maze">Create Maze</Link>
                    </li>
                </ul>
            </div>
            <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="flexSwitchCheckDisabled" style={{color: 'white'}}>{props.modec}</label>
                <input className="form-check-input" type="checkbox" onChange={props.switchfunc} id="flexSwitchCheckDisabled"/>
            </div>
            </div>
            <Outlet/>
        </nav>
    )
}

Navbar.prototype = {title : PropTypes.string.isRequired, 
                    text1 : PropTypes.string.isRequired}

Navbar.defaultProps = {
                    title : 'Set title here',
                    text1 : 'About'
}