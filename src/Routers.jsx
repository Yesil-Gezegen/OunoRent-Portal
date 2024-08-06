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
const Blog = lazy(() => import("./pages/Blog/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails/BlogDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const FaqPage = lazy(() => import("./pages/FAQ/FaqPage"));
const CartEmty = lazy(() => import("./pages/CartEmpty/CartEmty"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const NotFound404 = lazy(() => import("./pages/404Page/404Page"));
const ForgotStepOne = lazy(() =>
  import("./pages/ForgotPassword/ForgotStepOne")
);
const ForgotStepTwo = lazy(() =>
  import("./pages/ForgotPassword/ForgotStepTwo")
);
const ForgotStepThree = lazy(() =>
  import("./pages/ForgotPassword/ForgotStepThree")
);

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
    { path: "/about", element: <About /> },
    { path: "/nasilcalisir", element: <Howitworks /> },
    { path: "/kurumsal", element: <Institutional /> },
    { path: "/campaigns", element: <Campaigns /> },
    { path: "/profile", element: <Profile /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blogdetails", element: <BlogDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/faq", element: <FaqPage /> },
    { path: "/productdetails", element: <ProductDetails /> },
    { path: "/cartempty", element: <CartEmty /> },
    {
      path: "/forgotstepone",
      element: <ForgotStepOne />,
    },
    {
      path: "/forgotsteptwo",
      element: <ForgotStepTwo />,
    },
    {
      path: "/forgotstepthree",
      element: <ForgotStepThree />,
    },
    { path: "/404notfound", element: <NotFound404 /> },
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
