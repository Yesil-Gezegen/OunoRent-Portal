import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    name: Yup.string()
    .required('Ad Soyad alanı gereklidir.')
    .min(2, 'Ad Soyad en az 2 karakter olmalıdır.'),
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girin.')
    .required('E-posta adresi gereklidir.'),
  body: Yup.string()
    .required('Mesaj alanı gereklidir.')
    .min(10, 'Mesaj en az 10 karakter olmalıdır.'),
  subjectCategory: Yup.string()
    .required('Kategori gereklidir.'),
  subject: Yup.string()
    .required('Konu gereklidir.'),
});