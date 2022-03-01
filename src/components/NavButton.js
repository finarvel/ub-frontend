import React from "react"

function NavButton(){

    function toggle(){
        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');
    
        const visible = primaryNav.getAttribute('data-visible');
        console.log(visible);
    
        if(visible === 'false'){
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        }
        else{
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    }

    return(
       <button onClick={toggle}
        className="mobile-nav-toggle" 
        aria-controls="primary-navigation" 
        aria-expanded="false">
           <span className="sr-only">
           </span>
       </button>
    )
}

export default NavButton