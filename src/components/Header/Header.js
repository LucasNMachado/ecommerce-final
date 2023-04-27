import React from 'react';
import img from "./ps.png";
import "./Header.css";
import { Link } from "react-router-dom"
 

const Header = () => {
  return (
    <div className="HeaderY">
      <Link to="/Home">
        <img src={img} alt="imagen" width="300" />
        </Link>
    </div>
  )
}

export default Header