import * as yup from "yup";

const validateSchema = yup.object({
  email: yup
    .string()
    .email("Не корректный email")
    .required("Поле не может быть пустым"),
  password: yup.string().required("Поле не может быть пустым"),
});

export { validateSchema };
