import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute, tokenRoute } from "../../utils/APIRoutes";
import Input from "../../components/Input/Input"


const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const toastOptions = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const instance = axios.create({
  baseURL: tokenRoute,
});

export default function Auth() {
  const navigate = useNavigate();

  const [refreshToken, setRefreshToken] = useState(null);
  const [loginForm, setLoginForm] = useState(true)
  const [values, setValues] = useState(INITIAL_STATE);
  const loginData = {
    username: values.username,
    password: values.password
  }
  const signUpData = {
    username: values.username,
    email: values.email,
    password: values.password
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {

      instance
        .post(loginRoute, loginForm ? loginData : signUpData)
        .then((response) => {
          console.log("auth");
          setRefreshToken(response.data.refreshToken);
          instance.defaults.headers.common[
            "authorization"
          ] = `Bearer ${response.data.token}`;
          loadUserInfos();
        })
        .catch((error) => {
          console.log(error.response.status);
        });
    }
  };

  function loadUserInfos() {
    instance
      .get("/access")
      .then((response) => {
        console.log(response.data);
        if (response) {
          // Todo add cookie
        }
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  }

  useEffect(() => {
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const initial = error.config;
        if (
          error.config.url !== "/refresh" &&
          error.response.status === 401 &&
          initial._retry !== true
        ) {
          initial._retry = true;
          if (refreshToken && refreshToken !== "") {
            instance.defaults.headers.common[
              "authorization"
            ] = `Bearer ${refreshToken}`;
            console.log("refresh token");
            await instance
              .post("/refresh")
              .then((response) => {
                instance.defaults.headers.common[
                  "authorization"
                ] = `Bearer ${response.data.refreshToken}`;
                initial.headers[
                  "authorization"
                ] = `Bearer ${response.data.refreshToken}`;
              })
              .catch((error) => {
                console.log(error.response.status);
                setRefreshToken(null);
              });
            return instance(initial);
          }
        }
      }
    );
  }, [refreshToken]);

  const handleValidation = () => {
    const { password, username } = values;
    if (password.length < 5) {
      toast.error("username and password requiered", toastOptions);
      return false;
    } else if (username.length < 5) {
      toast.error("username requiered", toastOptions);
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setLoginForm(_ => !_)
    setValues(INITIAL_STATE)
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="login-header">
            <h1>{loginForm ? 'Login' : 'Sign up' }</h1>
          </div>
          <Input handleChange={handleChange} type={'text'}  placeholder={"Username"} name={"username"} min={"3"} />
          {!loginForm && ( <Input handleChange={handleChange} type={'email'}  placeholder={"Email"} name={"email"} /> )}
          <Input handleChange={handleChange} type={'password'}  placeholder={"Password"} name={"password"} />
          {!loginForm && ( <Input handleChange={handleChange} type={'password'}  placeholder={"Confirm password"} name={"confirmPassword"} /> )}
          
          <button type="submit">{loginForm ? 'Login' : 'Sign up'}</button>
          <span>
            {loginForm ? "You don't have an account ?" : "Already have an account ?" }
                <span onClick={handleClick}>
                  {loginForm ? 'Sign up' : 'Login'}
                </span>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
