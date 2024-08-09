import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../../../layout/Layout";
import { useFormik } from "formik";
import { loginFormSchema } from "../schemas/FormSchema";
import { useAuth } from "../../../context/AuthContext";
import LogoIcon from "../../../components/svg/LogoIcon";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/Input";
import { AiOutlineMail } from "react-icons/ai";
import { PiLock } from "react-icons/pi";

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
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow lg:max-w-4xl">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex flex-col justify-center items-center relative text-center mb-12">
            <p className="mt-3 text-xl font-semibold text-center text-black">
              Giriş Yap
            </p>
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
                <span
                  onClick={rememberMe}
                  className="text-base font-medium text-black"
                >
                  Beni Hatırla
                </span>
              </div>
              <Link
                to="/forgotstepone"
                className="text-base font-medium text-slate-950 underline hover:text-red-600"
              >
                Şifremi unuttum
              </Link>
            </div>

            <div className="mt-6">
              <CustomButton type="submit" children={"gönder"} color="black" />
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
            <Link
              to="/register"
              className="text-xs font-medium text-gray-900 uppercase hover:underline"
            >
              hesabınız yok mu? Üye ol
            </Link>
            <span className="w-1/5 border-b border-gray-300 md:w-1/4" />
          </div>
        </div>
        <div className="hidden bg-cover lg:flex lg:items-center lg:justify-center lg:w-1/2">
          <LogoIcon width={250} height={200} />
        </div>
      </div>
    </Layout>
  );
}
