import React from "react";
import "./Navbar.css"
import  Nexuslogo from "./img/Nexus logo.png"
import "../CartWitget/CartWitget"
import CartWitget from "../CartWitget/CartWitget";
import { Link } from "react-router-dom";


const Navbar = () => {
    return <div className="NavBar" >
         <Link to="/" >  <img className="logo" src={Nexuslogo} alt="logo" ></img> </Link> 
         <ul className="Ulnav" >
         <Link to="/" >  <li className="linav" >CELULARES</li>  </Link> 
            <li className="linav">CONTACTO</li>
            <li className="linav">NOSOTROS</li>
          <Link  to="/cart" >  <CartWitget/>  </Link>      
        </ul>
        <div className="categorias">
            <ul className="Ul2" >
            <Link to= "/categoria/iphone" > <li>IPHONE</li> </Link>
            <Link to="/categoria/samsung"><li>SAMSUNG</li></Link>
            <Link to="/categoria/motorolla"><li>MOTOROLLA</li></Link>
            <Link to="/categoria/realme"><li>REALME</li></Link>
            <Link to="/categoria/lg"><li>LG</li></Link>
            <Link to="/categoria/xiaomi"><li>XIAOMI</li></Link>
            </ul>
        </div>
         </div>
}

export default Navbar;