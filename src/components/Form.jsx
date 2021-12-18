/** @format */

import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import RequestsBlock from "./RequestsBlock";
import ListOfVar from "./ListOfVar";
import req from "../store/LatestRequests.js";
import MyButton from "../UI/button/MyButton.jsx";
import MyInput from "../UI/input/MyInput";
import vari from "../store/VariablesStore.js";
import { fetchPosts } from "../API/fetchDescription";
import MyLoader from "../UI/loader/MyLoader";

const Form = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputVal, setInputVal] = useState("");

  const fillInput = (e) => {
    setInputVal(e.target.value);
  };

  useEffect(() => {
    req.clear();
  }, []);

  const onSubmit = (request) => {
    req.addRequest(request.vin);
    vari.setValueOfInput(inputVal);
    fetchPosts();
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label>
          VIN
          <MyInput
            type='text'
            {...register("vin", {
              required: true,
              maxLength: 17,
            })}
            value={inputVal}
            onChange={(e) => fillInput(e)}
          />
        </label>
        {errors?.vin?.type === "required" && <p>This field is required</p>}
        {errors?.vin?.type === "maxLength" && (
          <p>First name cannot exceed 17 characters</p>
        )}
        <div className='form-btns__wrapper'>
          <MyButton type='submit'>Send</MyButton>
        </div>
      </form>
      {vari.variLoading && <MyLoader />}
      <RequestsBlock setInputVal={setInputVal} />
      {vari.varError && <h2>Error</h2>}
      <ListOfVar posts={vari.variables} />
    </>
  );
});

export default Form;
