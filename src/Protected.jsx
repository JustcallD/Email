// import { Outlet, Navigate } from "react-router-dom";
// import PropTypes from "prop-types";

// export const AuthenticatedRoute = ({ isAuthenticated, redirectPath }) => {
//   if (!isAuthenticated) {
//     return <Navigate to={redirectPath || "/login"} replace />;
//   }
//   return <Outlet />;
// };

// export const IsNotAuthenticatedRoute = ({ isAuthenticated, redirectPath }) => {
//   if (isAuthenticated) {
//     return <Navigate to={redirectPath || "/"} replace />;
//   }
//   return <Outlet />;
// };

// AuthenticatedRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   redirectPath: PropTypes.string, // Optional redirect path
// };

// IsNotAuthenticatedRoute.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired,
//   redirectPath: PropTypes.string, // Optional redirect path
// };

// import React from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// export const AuthenticatedRoute = ({ isAuthenticated, redirectPath }) => {
//   const Navigate = useNavigate();
//   if (!isAuthenticated) {
//     return <Navigate to={redirectPath || "/login"} />;
//   }
//   return <Outlet />;
// };

// export const IsNotAuthenticatedRoute = ({ isAuthenticated, redirectPath }) => {
//   const Navigate = useNavigate();
//   if (isAuthenticated) {
//     return <Navigate to={redirectPath || "/"} />;
//   }
//   return <Outlet />;
// };

// AuthenticatedRoute.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   redirectPath: PropTypes.string, // Optional redirect path
// };

// IsNotAuthenticatedRoute.propTypes = {
//   isAuthenticated: PropTypes.bool,
//   redirectPath: PropTypes.string, // Optional redirect path
// };

import { Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import Cookies from "js-cookie";

export const AuthenticatedRoute = ({ isAuthenticated, redirectPath }) => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate(redirectPath || "/login");
    return null;
  }

  return <Outlet />;
};

export const IsNotAuthenticatedRoute = ({ isAuthenticated, redirectPath }) => {
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate(redirectPath || "/");
    return null;
  }

  return <Outlet />;
};

AuthenticatedRoute.propTypes = {
  isAuthenticated: PropTypes.string,
  redirectPath: PropTypes.string,
};

IsNotAuthenticatedRoute.propTypes = {
  isAuthenticated: PropTypes.string,
  redirectPath: PropTypes.string,
};
