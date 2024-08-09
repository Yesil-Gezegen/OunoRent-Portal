import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";

function ForgotStepTwo() {
  return (
    <Layout>
      <div className="w-full max-w-md px-6 py-8 md:px-8 mx-auto md:max-w-lg shadow">
        <div className="flex flex-col justify-center mb-6 gap-6">
          <p className="text-xl text-center text-black">E-postanı kontrol et</p>
          <p className="text-sm font-light">
            E-posta adresinize şifre kurtarma talimatları gönderdik.
          </p>
          <p className="text-sm font-light">
            E-postayı almadınız mı? Spam klasörünüzü kontrol edin veya mesajı
            <Link to="/forgotstepone">
              <span className="underline text-red-600">
                {" "}
                yeniden göndermeyi
              </span>{" "}
            </Link>{" "}
            deneyin.
          </p>
        </div>

        <Link to="/login" className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-gray-800 rounded-none hover:bg-gray-700 focus:outline-none uppercase"
          >
            GİRİŞ YAP'A GERİ DÖN
          </button>
        </Link>
      </div>
    </Layout>
  );
}

export default ForgotStepTwo;
