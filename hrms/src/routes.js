import React from "react";

import { MdHome, MdTour, MdPerson, MdLock } from "react-icons/md";

import { ROLES } from "helper";

import SignIn from "views/auth/SignIn";
import SignUp from "views/auth/SignUp";
import ForgotPassword from "views/auth/ForgotPassword";

import Home from "views/pages/home";

import Dashboard from "views/admin/default";



const routes = [
  {
    name: "Home",
    layout: "/default",
    path: "",
    type: [],
    icon: <MdHome className="h-5 w-5" />,
    component: <Home />,
    hide: false,
  },
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    type: ["admin", "hotel", "agent"],
    icon: <MdHome className="h-5 w-5" />,
    component: <Dashboard />,
    hide: false,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    type: ROLES,
    icon: <MdLock className="h-5 w-5" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    type: ROLES,
    icon: <MdLock className="h-5 w-5" />,
    component: <SignUp />,
  },
  {
    name: "Forgot Password",
    layout: "/auth",
    path: "forgot-password",
    type: ROLES,
    icon: <MdLock className="h-5 w-5" />,
    component: <ForgotPassword />,
  },
];
export default routes;
