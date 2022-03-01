import React from "react"
import NavBar from "./NavBar"
import NavButton from "./NavButton"
import logo from "../static/images/logo.png"
import "../static/css/index.css";


function Header(){
    return(
        <header className="primary-header flex">
            <div> 
                <img className="logo" src= {logo} alt="Logo"></img>
            </div>
        <NavButton/>
        <NavBar/>
        </header>
    )
}

export default Header