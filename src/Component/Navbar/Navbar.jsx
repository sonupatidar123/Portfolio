import React, { useState ,useRef } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import underline from '../../assets/underline.png'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; 

const Navbar = () => {
    const [manu, Setmanu]=useState("Home");
    const Menuref=useRef();
    const openmenu=()=>{
        Menuref.current.style.right='0';
    }
    const closemenu=()=>{
        Menuref.current.style.right='-350px'
    }
    return (

        <div id="navbar" className='navbar'>
            <img src={logo} alt='' />
            <FontAwesomeIcon icon={faBars}  className="nav-mob-open" onClick={openmenu}/>
           
            <ul  ref={Menuref} className='nav-manu'>
                 {/* <FontAwesomeIcon icon={faBars} className="nav-mob-close"/> */}
                    <FontAwesomeIcon icon={faXmark} className="nav-mob-close" onClick={closemenu}/>


                <li> <AnchorLink className="anchor-link" offset={50} href="#Home"><p onClick={()=>Setmanu("Home")}>Home</p></AnchorLink> {manu === "Home" ? <img src={underline} alt="" /> : <></>}</li> 
                <li><AnchorLink className="anchor-link" offset={50} href="#About"><p  onClick={()=>Setmanu("About")}>About</p></AnchorLink>{manu === "About" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href="#Services"><p  onClick={()=>Setmanu("Services")}>Services</p> </AnchorLink>{manu === "Services" ? <img src={underline} alt="" /> : <></>}</li>
                <li> <AnchorLink className="anchor-link" offset={50} href="#Portfolio"><p  onClick={()=>Setmanu("Portfolio")}>Portfolio</p></AnchorLink>{manu === "Portfolio" ? <img src={underline} alt="" /> : <></>}</li>
                <li> <AnchorLink className="anchor-link" offset={50} href="#Contact"><p  onClick={()=>Setmanu("Contact")}>Contact</p></AnchorLink>{manu === "Contact" ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <div className="nav-connect">
               <AnchorLink className="anchor-link" offset={50} href="#Contact">Connect with me</AnchorLink>
            </div>

        </div>

    )
}
export default Navbar;