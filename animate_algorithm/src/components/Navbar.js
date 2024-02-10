import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Navbar(props){
    const [activeLink, setActiveLink] = useState('Home');
    const [isMobile, setIsMobile] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleMenuToggle = () => {
        setMenuExpanded(!menuExpanded);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600); // Set isMobile state based on screen width
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check for mobile screen
        handleResize();

        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ ...props.style, zIndex: 1000}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={menuExpanded} aria-label="Toggle navigation" onClick={handleMenuToggle} >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to = '/'>{props.title}</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handleLinkClick('About')} to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activeLink === 'Menu' ? 'active' : ''}`} onClick={() => handleLinkClick('Menu')} to="/Menu">Menu</Link>
                        </li>
                        {/* {(location.pathname === '/Maze-Solving' || location.pathname === '/Draw-Maze') && (
                            <li className="nav-item">
                                <Link
                                className={`nav-link ${
                                    activeLink === 'Draw-Maze' ? 'active' : ''
                                }`}
                                onClick={() => handleLinkClick(`${props.text1}`)}
                                to={props.url1}
                                >
                                {props.text1}
                                </Link>
                            </li>
                        )} */}
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${activeLink === 'Draw-Maze' ? 'active' : ''}`} onClick={() => handleLinkClick(`${props.text1}`)} to={props.url1}>{props.text1}</Link>
                        </li> */}
                    </ul>
                </div>
                <div className="form-check form-switch">
                    {(!isMobile || menuExpanded) && (
                        <label className="form-check-label" htmlFor="flexSwitchCheckDisabled" style={{color: 'white'}}>{props.modec}</label>
                    )}
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