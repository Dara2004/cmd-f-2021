import React, { useRef } from 'react'
import loginImg from "../assets/loginImg.png"
import { ButtonRed } from '../common/buttons/ButtonRed'
import { ButtonWhite } from '../common/buttons/ButtonWhite'
import "../styles/Login.css"

export const Login = () => {
    const accessKey1 = useRef();
    const accessKey2 = useRef();
    const accessKey3 = useRef();
    const accessKey4 = useRef();

    const phone1 = useRef();
    const phone2 = useRef();
    const phone3 = useRef();

    const onDoneClicked  = () => {
        const accessKey = accessKey1.current.value + accessKey2.current.value + accessKey3.current.value + accessKey4.current.value;
        localStorage.setItem("accessKey", accessKey);

        const safeContact = phone1.current.value + phone2.current.value + phone3.current.value;
        localStorage.setItem("safeContact", safeContact)
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
                    <input ref={accessKey1} type="text" name="first" maxLength="1"/>
                    <input ref={accessKey2} type="text" name="second" maxLength="1"/>
                    <input ref={accessKey3} type="text" name="third" maxLength="1"/>
                    <input ref={accessKey4} type="text" name="fourth" maxLength="1"/>
                </div>
                
                <h3 style={{marginTop: "10%"}}>safe contact number</h3>
                <div className="safeContact">
                    <input ref={phone1} type="text" name="phone1"/>-&nbsp;&nbsp;
                    <input ref={phone2} type="text" name="phone2"/>-&nbsp;&nbsp;
                    <input ref={phone3} type="text" name="phone3"/>
                </div>

                <ButtonRed value="Done" onClick={onDoneClicked}/>
            </div>
        </div>
    )
}