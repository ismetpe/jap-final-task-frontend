import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useFormik } from "formik";
import "./Register.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useHistory } from "react-router-dom";



const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [repeatpassword, setRepeatpassword] = useState();
  const [redirect, setRedirect] = useState();
  const history = useHistory();
  const register = () => {
  
    if (password != repeatpassword) {
      alert("Passwords did not match!");

    } else {

      axios.post("https://localhost:5001/api/auth/register", {
        username: username,
        password: password
      }).then(response => {
        
        if (response.data.message == "Registered successfully!") {
          alert("Registered successfully!")
          setRedirect(true);
          console.log(redirect)
        }

        else if (response.data.message == "User already exists.") {
          alert("User already exists.")
          setRedirect(false);
          console.log(redirect)
        }

      }).catch(function (error) {
        console.log(error.toJSON());
      });

      if (redirect == true) {
      
        history.push('/login');
      }
    }
  }

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

                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"

                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Repeat password"
                name="repeat password"
                minLength="6"
                value={repeatpassword}
                onChange={e => setRepeatpassword(e.target.value)}

              />
            </div>
            <button type="submit" className="Register-btn" value="Register" onClick={register} >Register</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register