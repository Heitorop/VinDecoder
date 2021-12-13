/** @format */

import React from "react";
import { Formik } from "formik";
import { observer } from "mobx-react-lite";
import req from "../store/LatestRequests.js";
import { validationSchema } from "../utils/validationSchema";

export const Form = observer(() => {
  return (
    <Formik
      initialValues={{
        vim: "",
      }}
      validateOnBlur
      onSubmit={(values) => req.addRequest(values.vim)}
      validationSchema={validationSchema}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <form className='form'>
          <p>
            <label htmlFor='vim'>VIM</label>
            <input
              className='input'
              type={"text"}
              name={"vim"}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.vim}
            />
          </p>
          {touched.vim && errors.vim && <p className='error'>{errors.vim}</p>}
          <button
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={"submit"}
            className='form__btn'>
            Send
          </button>
        </form>
      )}
    </Formik>
  );
});
