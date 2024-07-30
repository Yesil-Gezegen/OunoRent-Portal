import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta girin.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Geçersiz e-posta adresi."
    )
    .required("E-posta adresi gerekli."),

  password: Yup.string().required("Şifre gerekli."),
});

export const registerFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta girin.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Geçersiz e-posta adresi."
    )
    .required("E-posta adresi gerekli."),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır.")
    .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
    .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
    .matches(/[0-9]/, "En az bir rakam içermelidir.")
    .required("Şifre gerekli."),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor.")
    .required("Şifre tekrarı gerekli."),
});
