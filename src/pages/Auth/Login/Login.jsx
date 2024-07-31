import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/ounologo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../layout/Layout";
import { useFormik } from "formik";
import { loginFormSchema } from "../schemas/FormSchema";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [checked, setChecked] = useState(false);
  const rememberMe = () => {
    setChecked(!checked);
  };
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginFormSchema,
      onSubmit: async (values) => {
        try {
          await login(values);
          navigate("/");
        } catch (error) {
          console.error("Error:", error);
          toast.error("E-posta veya şifre yanlışş!");
        }
      },
    });

  return (
    <Layout>
      <ToastContainer />
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow  lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex flex-col justify-center items-center relative text-center mb-12">
            <p className="mt-3 text-xl text-center text-black">Giriş Yap</p>
            <div className="-mt-3">
              <svg
                width="172"
                height="29"
                viewBox="0 0 172 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                  stroke="#D60000"
                />
              </svg>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm mt-4 font-medium text-gray-900"
            >
              Eposta adresi*
            </label>
            <div className="relative flex items-center mt-1">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="bg-white border px-10 p-4 border-gray-300 text-gray-900 text-sm rounded-none focus:ring-red-500 focus:border-red-500 block w-full focus:outline-red-500"
                placeholder="john.doe@company.com"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.email && errors.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}
            <label
              htmlFor="email"
              className="block text-sm mt-4 font-medium text-gray-900"
            >
              Şifre*
            </label>
            <div className="relative flex items-center mt-1">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                className="block w-full px-10 p-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-red-500 focus:border-red-500 focus:outline-red-500"
                placeholder="•••••••••"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.password && errors.password ? (
              <div className="text-red-600">{errors.password}</div>
            ) : null}

            <div className="flex justify-between items-center my-5">
              <div className=" flex items-center space-x-2.5">
                <button
                  onClick={rememberMe}
                  type="button"
                  className="w-5 h-5 text-black flex justify-center items-center border border-light-gray"
                >
                  {checked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <span onClick={rememberMe} className="text-base text-black">
                  Beni Hatırla
                </span>
              </div>
              <Link to="/" className="text-base text-red-600">
                Şifremi unuttum
              </Link>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-none hover:bg-gray-700 focus:outline-none  uppercase"
              >
                GİRİŞ YAP
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
            <a
              href="/register"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              hesabınız yok mu? Üye ol
            </a>
            <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-1/2 my-auto px-20">
          <img src={image} alt="" />
        </div>
      </div>
    </Layout>
  );
}
