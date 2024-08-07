import React from "react";
import Layout from "../../layout/Layout";
import PageTitle from "../../components/Helpers/PageTitle";
import { useData } from "../../context/ApiContext";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "./schemas/ValidationSchema";

function Contact() {
  const { formDataPost } = useData();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        body: "",
        subjectCategory: "",
        subject: "",
        formDate: new Date().toISOString(),
      },
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        try {
          await formDataPost({ ...values, formDate: new Date().toISOString() });
          toast.success("gönderildi");
          setTimeout(() => {
            action.resetForm();
          }, 1000);
        } catch (error) {
          console.error("Error:", error);
          toast.error("Gönderilemedi!");
        }
      },
    });
  return (
    <Layout childrenClasses="py-0">
      <ToastContainer />
      <div className="hidden md:block">
        <PageTitle
          title="Bize Ulaşın"
          breadcrumb={[
            { name: "Anasayfa", path: "/" },
            { name: "İletişim", path: "/contact" },
          ]}
        />
      </div>
      <section className="text-gray-600 body-font relative">
        <form
          onSubmit={handleSubmit}
          className="container px-5 md:px-0 py-24 mx-auto flex sm:flex-nowrap flex-wrap"
        >
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-red-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Geri Bildirim
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Bildirmek istediğiniz konuyu bize ulaştırın.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name ? (
                <div className="text-xs text-red-600">{errors.name}</div>
              ) : null}
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <div className="text-xs text-red-600">{errors.email}</div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subjectCategory"
                className="leading-7 text-sm text-gray-600"
              >
                Kategori
              </label>
              <input
                type="text"
                id="subjectCategory"
                name="subjectCategory"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={values.subjectCategory}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.subjectCategory && errors.subjectCategory ? (
                <div className="text-xs text-red-600">
                  {errors.subjectCategory}
                </div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="subject"
                className="leading-7 text-sm text-gray-600"
              >
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.subject && errors.subject ? (
                <div className="text-xs text-red-600">{errors.subject}</div>
              ) : null}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Mesaj
              </label>
              <textarea
                id="body"
                name="body"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                value={values.body}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.body && errors.body ? (
                <div className="text-xs text-red-600">{errors.body}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="text-white bg-colorred border-0 py-2 px-6 focus:outline-none hover:bg-qblack duration-300 rounded text-lg"
            >
              Gönder
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;
