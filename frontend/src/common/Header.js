import React from 'react'
import { Link } from "react-router-dom";
import appLogo from "../assets/appLogo.png"
import "../styles/Header.css"

export const Header = () => {
    return (
        <React.Fragment>
            <div className="navBar">
                <img src={appLogo} alt ="appLogo"/>
                <h1 className="appTitle">Paz's Pizza</h1>
                <Link to="/menu"><div className="menuItem">menu</div></Link>
                <Link to="/locations"><div className="menuItem">locations</div></Link>
                <Link to="/about"><div className="menuItem">about</div></Link>
                <Link to="/login"><div className="menuItem">login</div></Link>
                {/* <Link to="/landing"><div className="menuItem">login</div></Link> */}
            </div>
            <hr style={{top: "160px", width: "971px"}}></hr>
        </React.Fragment>
    )
}