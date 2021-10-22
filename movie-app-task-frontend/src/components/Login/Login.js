import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useFormik } from "formik";
import "./Login.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { loginUser } from "../../auth/auth";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import User from "../User/User";

import axios from 'axios';
const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  const [id, setId] = useState();
  const [name, setName] = useState();
  var jwt = require("jsonwebtoken");



  const login = () => {

    axios.post("https://localhost:5001/api/auth/login", {
      username: username,
      password: password
    }).then(response => {

      alert("success")
      var decode1 = jwt.decode(response.data.data);
      setName(decode1.unique_name);
      setId(decode1.nameid);
      localStorage.setItem("user", response.data.data);

    }).catch(function (error) {
      console.log(error.toJSON());
      
    });


    if (name === "Admin")
      history.push('/admin');
    else {

      history.push({
        pathname: '/user'
      })
    }
  }


  return (
    <Fragment>
      <div className="loginContainer" >
        <div className="login-form">
          <h1 className="large text-primary">Sign In</h1>
          <form className="form" >
            <div className="form-group">
              <input
                type="username"
                placeholder="Username"
                name="username"

                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="4"
                value={password}
                onChange={e => setPassword(e.target.value)}

              />
            </div>

            <button type="submit" className="login-btn" value="Login" onClick={login} >Login</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login