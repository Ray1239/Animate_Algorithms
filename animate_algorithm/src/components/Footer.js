import React from "react";
import './Footer.css';

const Footer = (props) => {
    return(
        <div className="footer" style={props.style}>
            <p>© This content is subject to copyright.</p>
        </div>
    )
};

export default Footer;