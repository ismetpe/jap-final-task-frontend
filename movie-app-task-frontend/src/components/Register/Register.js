import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useFormik } from "formik";
import "./Register.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {

  return (
    <Fragment>
      <div className="RegisterContainer">
        <div className="Register-form">
          <h1 className="large text-primary">Sign Up</h1>
          <form className="form">
            <div className="form-group">
              <input
                type="username"
                placeholder="Username"
                name="username"
                
               
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                
              
              />
            </div>
            <div className="form-group">
              <input
                type="repeat password"
                placeholder="Repeat password"
                name="repeat password"
                minLength="6"
                
              
              />
            </div>
            <input type="submit" className="Register-btn" value="Register" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register