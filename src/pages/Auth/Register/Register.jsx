import React from "react";
import Layout from "../../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registerFormSchema } from "../schemas/FormSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../../../services/services";
import LogoIcon from "../../../components/svg/LogoIcon";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/Input";
import { AiOutlineMail } from "react-icons/ai";
import { PiLock } from "react-icons/pi";

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
            <p className="mt-3 text-xl font-semibold text-center text-black">
              Hesap Oluştur
            </p>
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
            <div className="relative flex items-center mt-1">
              <CustomInput
                label={"e-posta adresi*"}
                name={"email"}
                type={"email"}
                labelClasses="text-sm mt-4 font-medium text-gray-900"
                placeholder={"adres@eposta.com"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                children={
                  touched.email && errors.email ? (
                    <div className="text-xs text-red-600">{errors.email}</div>
                  ) : null
                }
                icon={<AiOutlineMail className="h-6 w-5 mx-3 text-gray-500 " />}
              />
            </div>
            <div className="relative flex items-center mt-4">
              <CustomInput
                label={"şifre*"}
                name={"password"}
                type={"password"}
                labelClasses="text-sm mt-4 font-medium text-gray-900"
                placeholder={"•••••••••"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                children={
                  touched.password && errors.password ? (
                    <div className="text-xs text-red-600">
                      {errors.password}
                    </div>
                  ) : null
                }
                icon={<PiLock className="h-6 w-5 mx-3 text-gray-500" />}
              />
            </div>
            <div className="relative flex items-center mt-4">
              <CustomInput
                label={"şifre tekrarı*"}
                name={"passwordConfirm"}
                type={"password"}
                labelClasses="text-sm mt-4 font-medium text-gray-900"
                placeholder={"•••••••••"}
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                children={
                  touched.passwordConfirm && errors.passwordConfirm ? (
                    <div className="text-xs text-red-600">
                      {errors.passwordConfirm}
                    </div>
                  ) : null
                }
                icon={<PiLock className="h-6 w-5 mx-3 text-gray-500" />}
              />
            </div>

            <div className="mt-6">
              <CustomButton type="submit" children={"gönder"} color="black" />
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/6 border-b border-gray-300 lg:w-1/5" />
            <a
              href="/login"
              className="text-xs font-medium text-gray-900 uppercase hover:underline"
            >
              hesabınız var mı? GİRİŞ YAPIN
            </a>
            <span className="w-1/6 border-b border-gray-300 lg:w-1/5" />
          </div>
        </div>
        <div className="hidden bg-cover lg:flex lg:items-center lg:justify-center lg:w-1/2">
          <LogoIcon width={250} height={200} />
        </div>
      </div>
    </Layout>
  );
}

export default Register;
