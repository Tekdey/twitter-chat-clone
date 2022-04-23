import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute, tokenRoute } from "../../../utils/APIRoutes";

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

export default function Login() {
  const navigate = useNavigate();
  const [refreshToken, setRefreshToken] = useState(null);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      instance
        .post(loginRoute, {
          username: values.username,
          password: values.password,
        })
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

  return (
    <>
      <div className="login-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="login-header">
            <h1>Register</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Login</button>
          <span>
            already have an account ? <Link to="/register">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
