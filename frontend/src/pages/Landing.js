import React from 'react'
import errorImg from "../assets/errorImg.png"

export const Landing = () => {
    return (
        <div className="landing">
            <div className="homeLeft">
                <img src={errorImg} alt="errImg"/>
            </div>

            <div className="homeRight">
                <h1>Whoops</h1>
                <p>Looks like something went wrong on our end.</p>
            </div>
        </div>
    )
}