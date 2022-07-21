import React,{useState} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    const [active,setActive] = useState("nav__menu");
    const [togglerIcon, setTogglerIcon] = useState("nav__toggler");
    
    const navToggler = () =>{
        active === 'nav__menu' 
        ? setActive('nav__menu nav__active') 
        : setActive('nav__menu');
        //TogglerIcon

        togglerIcon === "nav__toggler"
        ? setTogglerIcon("nav__toggler toggler" )
        :setTogglerIcon("nav__toggler")
    };


  return (
    <nav className="nav">
        <NavLink to="/" className="nav__brand">Kalana De Silva</NavLink>
        <ul className={active}>
            <li className='nav__item'><NavLink to="/" className='nav__link'>Home</NavLink></li>
            <li className='nav__item'><NavLink to="/Projects" className='nav__link'>Projects</NavLink></li>
            <li className='nav__item'><NavLink to="/Vlogs" className='nav__link'>Vlogs</NavLink></li>
            <li className='nav__item'><NavLink to="/Career" className='nav__link'>Career</NavLink></li>
            <li className='nav__item'><NavLink to="/Entertainment" className='nav__link'>Entertainment</NavLink></li>
        </ul>
        <div onClick={navToggler} className={togglerIcon}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>


        </div>
    </nav>
  )
}
