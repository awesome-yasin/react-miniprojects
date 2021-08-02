import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'


const NavBar = () => {
    return (
      <div>
        <div className="topnav">
        <NavLink className = 'butt' to={"/signup"}>Counter using React Hook</NavLink>
        <NavLink to={"/about"}>API Fetching</NavLink>
        <NavLink to={"/infintescroll"}>Infinte-Scroll</NavLink>
        <NavLink to={"/currency"}>Currency Converter</NavLink>
        <NavLink to={"/covid"}>COVID-19 Tracker</NavLink>
        <NavLink to={"/weather"}>Weather Apps</NavLink>
        
        <NavLink to={"/chat"}>Chat Room</NavLink>
        <NavLink to={"/todo"}>Todo App</NavLink>
        <NavLink to={"/tracker"}>Expense Tracker</NavLink>
        <NavLink to={"/music"}>Music Player</NavLink>
        <NavLink to={"/crypto"}>Crypto Price Tracker</NavLink>
        <NavLink to={"/gallery"}>Infinite Gallery</NavLink>
        <NavLink to={"/calculator"}>Calculator</NavLink>
        <NavLink to={"/bday"}>Colour Generator</NavLink>
     
        </div>
      </div>
    );
  };

  export default NavBar;