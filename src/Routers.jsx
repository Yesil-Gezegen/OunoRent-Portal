import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Howitworks from "./pages/Howitworks/Howitworks";
import Institutional from "./pages/Institutional/Institutional";
import About from "./pages/About/About";
import Campaigns from "./pages/Campaigns/Campaigns";
import { useAuth } from "./context/AuthContext";
import Profile from "./pages/Profile/Profile";

function Routers() {
  const { isLoggedIn } = useAuth();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: isLoggedIn ? <Navigate to="/" /> : <Register />,
    },
    { path: "/hakkimizda", element: <About /> },
    { path: "/nasilcalisir", element: <Howitworks /> },
    { path: "/kurumsal", element: <Institutional /> },
    { path: "/kampanyalar", element: <Campaigns /> },
    { path: "/profile", element: <Profile /> },
  ]);
  return <RouterProvider router={router} />;
}

export default Routers;
