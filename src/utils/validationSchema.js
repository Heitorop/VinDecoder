/** @format */

import * as yup from "yup";

export const validationSchema = yup.object().shape({
  vim: yup
    .string()
    .typeError("Should be string")
    .required("necessarily")
    .max(17),
});
