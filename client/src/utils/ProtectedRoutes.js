import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const user = { loggedIn: false };

  const local = JSON.parse(localStorage.getItem("token"));
  if (local) {
    let decodedToken = jwt_decode(local.token);
    let currentDate = new Date();

    // Check if jwt exp

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      user.loggedIn = false;
    } else {
      user.loggedIn = true;
    }
  } else {
    user.loggedIn = false;
  }

  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
