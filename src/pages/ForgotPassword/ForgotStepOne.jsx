import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

function ForgotStepOne() {
  return (
    <Layout>
      <div className="w-full max-w-md px-6 py-8 md:px-8 mx-auto md:max-w-lg shadow">
        <div className="flex flex-col justify-center items-center mb-6 gap-6">
          <p className="text-xl text-center text-black">
            Şifrenizi mi unuttunuz?
          </p>
          <p className="text-sm font-light">
            E-postanızı girin, size şifrenizi sıfırlamanız için bir bağlantı
            göndereceğiz.
          </p>
        </div>
        <form>
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
            />
          </div>
          {/* {touched.email && errors.email ? (
            <div className="text-red-600">{errors.email}</div>
          ) : null} */}

          <div className="mt-6">
            <CustomButton type="submit" children={"gönder"} color="black" />
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

export default ForgotStepOne;
