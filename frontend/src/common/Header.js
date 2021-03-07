import React from 'react'
import appLogo from "../assets/appLogo.png"
import "../styles/Header.css"

export const Header = () => {
    return (
        <React.Fragment>
        <div className="navBar">
            <img src={appLogo} alt ="appLogo"/>
            <h1 className="appTitle">Paz's Pizza</h1>
            <div className="menuItem">menu</div>
            <div className="menuItem">locations</div>
            <div className="menuItem">about</div>
            <div className="menuItem">login</div>
        </div>
        <hr style={{top: "160px", width: "971px"}}></hr>
        </React.Fragment>
    )
}