import React from 'react'
import loginImg from "../assets/loginImg.png"
import { ButtonRed } from '../common/buttons/ButtonRed'
import { ButtonWhite } from '../common/buttons/ButtonWhite'
import "../styles/Login.css"

export const Login = () => {

    const onDoneClicked  = () => {
        console.log("hello")
    } 
    return (
        <div className="home">
            <div className="homeLeft">
                <ButtonWhite value="< back" onClick={onDoneClicked}/>
                <img src={loginImg} alt="loginImg"/>
            </div>

            <div className="loginRight">
                <h1>LOGIN</h1>
                <h3>access key</h3>
                <div className="accessKey">
                    <input type="text" name="first" maxLength="1"/>
                    <input type="text" name="second" maxLength="1"/>
                    <input type="text" name="third" maxLength="1"/>
                    <input type="text" name="fourth" maxLength="1"/>
                </div>
                
                <h3 style={{marginTop: "10%"}}>safe contact number</h3>
                <div className="safeContact">
                    <input type="text" name="phone1"/>-
                    <input type="text" name="phone2"/>-
                    <input type="text" name="phone3"/>-
                </div>

                <ButtonRed value="Done" onClick={onDoneClicked}/>
            </div>
        </div>
    )
}