import React from "react"
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <nav>
            <ul data-visible="false" className="primary-navigation flex">
                <li className="active">
                <Link to="/">
                   <span>Home</span> 
                </Link>
                </li>
                <li >
                <Link to="/contact-us">
                    <span>Contact Us</span>
                </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar