/** @format */

import React, { useState } from "react";
import VariablesService from "../API/VariablesService";
import { useFetching } from "../hooks/useFetching.js";
import { RequestsBlock } from "./RequestsBlock";
import { ListOfVar } from "./ListOfVar";
import { observer } from "mobx-react-lite";
import req from "../store/LatestRequests.js";
import MyButton from "../UI/button/MyButton.jsx";
import { useForm } from "react-hook-form";
import { MyInput } from "../UI/input/MyInput";

export const Form = observer(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputVal, setInputVal] = useState("");
  const [getRequest, setGetRequest] = useState(false);
  const [posts, setPosts] = useState([]);

  const fillInput = (e) => {
    setInputVal(e.target.value);
  };
  const [fetchVariables, varError] = useFetching(async (inputVal) => {
    const response = await VariablesService.getAllAboutByVIN(inputVal);
    setPosts(
      response.data.Results.filter(
        (element) => element.Value !== "" && element.Value !== null,
      ),
    );
  });

  const onSubmit = (request) => {
    req.addRequest(request.vin);
    fetchVariables(inputVal);
    setGetRequest(true);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label>VIN</label>
        <MyInput
          type='text'
          {...register("vin", {
            required: true,
            maxLength: 17,
          })}
          value={inputVal}
          onChange={(e) => fillInput(e)}
        />
        {errors?.vin?.type === "required" && <p>This field is required</p>}
        {errors?.vin?.type === "maxLength" && (
          <p>First name cannot exceed 17 characters</p>
        )}
        <div className='form-btns__wrapper'>
          <MyButton type='submit'>Send</MyButton>
          <MyButton onClick={(e) => req.clear(e)}>Clear history</MyButton>
        </div>
      </form>
      <RequestsBlock setInputVal={setInputVal} />
      {varError && <h2>Error</h2>}
      {getRequest && <ListOfVar posts={posts} />}
    </>
  );
});
