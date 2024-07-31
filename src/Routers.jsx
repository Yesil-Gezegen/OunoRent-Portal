import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LogoIcon from "./components/svg/LogoIcon";
const Login = lazy(() => import("./pages/Auth/Login/Login"));
const Register = lazy(() => import("./pages/Auth/Register/Register"));
const Home = lazy(() => import("./pages/Home/Home"));
const Howitworks = lazy(() => import("./pages/Howitworks/Howitworks"));
const Institutional = lazy(() => import("./pages/Institutional/Institutional"));
const About = lazy(() => import("./pages/About/About"));
const Campaigns = lazy(() => import("./pages/Campaigns/Campaigns"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

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
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen w-screen">
          <div className="animate-bounce">
            <LogoIcon />
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Routers;
