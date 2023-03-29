import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
// import './Photo-Home-Page.jpg';


const Navbar = () =>{
    return (
        <div className="list-content">
            
            <li>
                <Link to= "/" className="color-list">Home</Link>
            </li>
            <li >
                <Link to= "/AboutUs" className="color-list1">About us</Link>
            </li>
            <li >
                <Link to= "/Login" className="color-list2">Log in</Link>
            </li>
           
            
            
        </div>
        
    )
    

}

export default Navbar;