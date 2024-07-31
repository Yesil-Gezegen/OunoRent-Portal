import React from "react";
import Layout from "../../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerFormSchema } from "../schemas/FormSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../../../services/services";
import LogoIcon from "../../../components/svg/LogoIcon";

function Register() {
  const navigate = useNavigate();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema: registerFormSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await postData("/auth/register", values);
          console.log("response", response);
          toast.success("Kayıt Başarılı");
          setTimeout(() => {
            action.resetForm();
            navigate("/login");
          }, 1000);
        } catch (error) {
          console.error("Error:", error);
          toast.error("Kayıt Başarısız!");
        }
      },
    });

  return (
    <Layout>
      <ToastContainer />
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow  lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex flex-col justify-center items-center relative text-center mb-12">
            <p className="mt-3 text-xl text-center text-black">Hesap Oluştur</p>
            <div className="-mt-4">
              <svg
                width="354"
                height="30"
                viewBox="0 0 354 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                  strokeWidth="1"
                  strokeLinecap="round"
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
                required
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
                required
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
            <label
              htmlFor="email"
              className="block text-sm mt-4 font-medium text-gray-900"
            >
              Tekrar Şifre*
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
                required
                className="block w-full px-10 p-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-none focus:ring-red-500 focus:border-red-500 focus:outline-red-500"
                placeholder="•••••••••"
                id="passwordConfirm"
                name="passwordConfirm"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.passwordConfirm && errors.passwordConfirm ? (
              <div className="text-red-600">{errors.passwordConfirm}</div>
            ) : null}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-none hover:bg-gray-700 focus:outline-none  uppercase"
              >
                Üye Ol
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
            <a
              href="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              hesabınız var mı? GİRİŞ YAPIN
            </a>
            <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-1/2 my-auto px-20">
          <LogoIcon width={250} height={200} />
        </div>
      </div>
    </Layout>
  );
}

export default Register;
