import React, { Fragment } from "react";
import logo from "../../img/logo.png";

import "./Header.css";
import { connect } from "react-redux";
import propTypes from "prop-types";


function Header() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };


  const guestLinks = (
    <div className="topnav" id="myTopnav">
      <a href="register">Register</a>
      <a href="login">Login</a>
      <a href="/" className="active">
        Home
      </a>

      <a href="#!" className="icon" onClick={myFunction}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </a>
      <img className="logo" src={logo} alt="logo img"></img>
      <h2>VIKING MOVIE APP</h2>
    </div>
  );

  return (
    <nav>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Fragment>{guestLinks}</Fragment>
    </nav>
  );
}
export default Header

