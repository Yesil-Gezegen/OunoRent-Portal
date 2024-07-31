import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";

function ForgotStepThree() {
  return (
    <Layout>
      <div className="w-full max-w-md px-6 py-8 md:px-8 mx-auto md:max-w-lg shadow">
        <div className="flex flex-col justify-center items-center mb-6 gap-6">
          <p className="text-xl text-center text-black">Yeni Şifre</p>
          <p className="text-sm font-light">
            Yeni şifreniz daha önce kullandığınızdan farklı olmalı ve en az 6
            karakterden oluşmalıdır.
          </p>
        </div>
        <form>
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
            />
          </div>
          {/* {touched.password && errors.password ? (
            <div className="text-red-600">{errors.password}</div>
          ) : null} */}
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
            />
          </div>
          {/* {touched.passwordConfirm && errors.passwordConfirm ? (
            <div className="text-red-600">{errors.passwordConfirm}</div>
          ) : null} */}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-none hover:bg-gray-700 focus:outline-none  uppercase"
            >
              GÖNDER
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
          <Link
            to="/login"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            GİRİŞ yap'a geri dön
          </Link>
          <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
        </div>
      </div>
    </Layout>
  );
}

export default ForgotStepThree;
