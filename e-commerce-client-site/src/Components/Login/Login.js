import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Container from "@material-ui/core/Container";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.Config";



firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    password: "",
    confirmPassword: "Password Doesn't match",
    photo: "",
    email: "",
    success: false,
    error: "",
  });

  const [error, setError] = useState({
    fnameError: "",
    lnameError: "",
    passError: "",
    conPassError: "",
    emailError: "",
    filedValid: false,
  });

  const [matchPassword, setMatchPassword] = useState({
    firstPassword: "",
  });

  const [passwordValue, setPasswordValue] = useState(false);
  const clickPassword = () => {
    setPasswordValue(!passwordValue);
  };

  const [confirmValue, setConfirmValue] = useState(false);
  const clickConfirm = () => {
    setConfirmValue(!confirmValue);
  };

  const handleChange = (e) => {
    if (e.target.name === "fname") {
      let fnameValue = e.target.value;
      if (fnameValue.length < 2) {
        const fnameErr = { ...error };
        fnameErr.fnameError = "First name can't be one latter";
        fnameErr.filedValid = false;
        setError(fnameErr);
      } else {
        const fnameErr = { ...error };
        fnameErr.fnameError = "";
        fnameErr.filedValid = true;
        setError(fnameErr);
      }
    }

    if (e.target.name === "lname") {
      let lnameValue = e.target.value;
      if (lnameValue.length < 2) {
        const lnameErr = { ...error };
        lnameErr.lnameError = "First name can't be one latter";
        lnameErr.filedValid = false;
        setError(lnameErr);
      } else {
        const lnameErr = { ...error };
        lnameErr.lnameError = "";
        lnameErr.filedValid = true;
        setError(lnameErr);
      }
    }
    if (e.target.name === "email") {
      const emailVal = e.target.value;
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regEmail.test(emailVal.toLowerCase()) === false) {
        const EmailErr = { ...error };
        EmailErr.emailError = "Invalid Email";
        EmailErr.filedValid = false;
        setError(EmailErr);
      } else {
        const EmailErr = { ...error };
        EmailErr.emailError = "";
        EmailErr.filedValid = true;
        setError(EmailErr);
      }
    }

    if (e.target.name === "password") {
      const passVal = e.target.value;
      const regPass = /\d{1}/;

      if (passVal.length < 6) {
        const passErr = { ...error };
        passErr.passError = "Password must be 6 characters";
        passErr.filedValid = false;
        setError(passErr);
      } else if (regPass.test(passVal) === false) {
        const passErr = { ...error };
        passErr.passError = "Password must contain 1 number";
        passErr.filedValid = false;
        setError(passErr);
        const matchPass = { ...matchPassword };
        matchPass.firstPassword = passVal;
        setMatchPassword(matchPass);
      } else {
        const passErr = { ...error };
        passErr.passError = "";
        passErr.filedValid = true;
        setError(passErr);
      }
    }
    if (e.target.name === "confirm") {
      const passVal = e.target.value;
      const regPass = /\d{1}/;

      if (passVal.length < 6) {
        const passErr = { ...error };
        passErr.conPassError = "Password must be 6 characters";
        passErr.conPassError = false;
        setError(passErr);
      } else if (regPass.test(passVal) === false) {
        const passErr = { ...error };
        passErr.conPassError = "Password must contain 1 number";
        passErr.filedValid = false;
        setError(passErr);
      } else if (matchPassword !== "" && passVal !== matchPassword) {
        const passErr = { ...error };
        passErr.conPassError = "Confirm password doesn't match";
        passErr.filedValid = false;
        setError(passErr);
      } else {
        const passErr = { ...error };
        passErr.conPassError = "";
        passErr.filedValid = true;
        setError(passErr);
      }
    }
  };

  // Google Pass
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      // var token = result.credential.accessToken;
const { displayName , email  } = result.user;
      const userInfo = {...user};
      user.name = displayName;
      user.email= email
      setUser(userInfo)
      // ...
    }).catch(function(error) {
      
    });
   
  };

  return (
    <div className="login">
      <Container>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={10} sm={7} md={5}>
            <form autoComplete="off">
              <h1>{newUser ? "Register" : "Login"} </h1>
              {newUser && (
                <TextField
                  required
                  name="fname"
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onChange={handleChange}
                />
              )}
              <p className="error">{error.fnameError}</p>

              {newUser && (
                <TextField
                  required
                  name="lname"
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onChange={handleChange}
                />
              )}
              <p className="error">{error.lnameError}</p>

              <TextField
                type="email"
                name="email"
                required
                label="Email"
                fullWidth
                variant="outlined"
                color="secondary"
                onChange={handleChange}
              />
              <p className="error">{error.emailError}</p>

              <FormControl variant="outlined" fullWidth>
                <InputLabel color="secondary"> Password</InputLabel>
                <OutlinedInput
                  required
                  labelWidth={70}
                  color="secondary"
                  name="password"
                  onChange={handleChange}
                  type={passwordValue ? "password" : "text"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={clickPassword}>
                        {passwordValue ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                ></OutlinedInput>
              </FormControl>
              <p className="error">{error.passError}</p>

              {newUser && (
                <FormControl variant="outlined" fullWidth>
                  <InputLabel color="secondary">Confirm Password</InputLabel>
                  <OutlinedInput
                    required
                    labelWidth={140}
                    color="secondary"
                    name="confirm"
                    type={confirmValue ? "password" : "text"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" onClick={clickConfirm}>
                          {confirmValue ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  ></OutlinedInput>
                </FormControl>
              )}
              <p className="error">{error.conPassError}</p>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                fullWidth
              >
                {newUser ? "Register" : "Login"}
              </Button>
              {newUser && (
                <div>
                  Already have account?{" "}
                  <span
                    className="login_btn"
                    onClick={() => setNewUser(!newUser)}
                  >
                    {" "}
                    Login
                  </span>
                </div>
              )}

              {!newUser && (
                <div>
                  Don't have Account?{" "}
                  <span
                    className="login_btn"
                    onClick={() => setNewUser(!newUser)}
                  >
                    Sign In
                  </span>
                </div>
              )}
            </form>
            <Grid>
              <div
                className=" social d-flex algin-items-center border my-2 justify-content-around rounded-pill  py-2 px-5"
                onClick={handleGoogleSignIn}
              >
                <img
                  style={{ height: "30px" }}
                  src="https://iili.io/2xnMx9.png"
                  alt=""
                />
                <p className="mb-0 bolded">Continue With Google</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
