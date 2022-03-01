import React from "react"
import { useEffect } from 'react';

import "../static/css/footer.css";


function Footer(){

    useEffect(() => {
        var date = new Date();
        var year = date.getFullYear() + "  ";
        document.getElementById("date").innerHTML = year;
      });
    
    return(
        <footer className="footer">
            <p className="copyright">
                &copy; <em id="date"></em><a href="https://www.finarvel.com">Developed by Finarvel</a>
            </p>
        </footer>
    )
}

export default Footer