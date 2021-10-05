import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useFormik } from "formik";
import "./Login.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  return (
    <Fragment>
      <div className="loginContainer">
        <div className="login-form">
          <h1 className="large text-primary">Sign In</h1>
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

            <input type="submit" className="login-btn" value="Login" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login