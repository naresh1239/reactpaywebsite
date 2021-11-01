import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

function Navbar() {
    const[show, setshow] = useState(false);
  return (
<>
<section className="main-navbar">
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <NavLink className="navbar-brand fs-3 fw-bold " to="/">Paythis</NavLink>
    <button className="navbar-toggler shadow-none border-0" onClick={()=> setshow(!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse text-center tras ${show ? "show" : ""}`} >
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">contact</NavLink>
        </li>
        <li className="nav-item ">
         <button className="btn  rounded-pill shadow-none  px-4 btn-c my-lg-0 my-3">Sign up</button>
        </li>
        <li className="nav-item ">
         <button className="btn  rounded-pill shadow-none  px-4 btn-d my-lg-0  ">Log in</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</section>
</>
  );
}
export default Navbar;
