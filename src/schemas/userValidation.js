import * as yup from "yup";

export const userSignupSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Should be an email").required("Required"),
  password: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});

export const userLoginSchema = yup.object().shape({
  email: yup.string().email("Should be an email").required("Required"),
});
