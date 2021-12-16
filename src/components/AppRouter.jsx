/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Form } from "./Form";
import { VariablesDescription } from "./VariablesDescription";
import { VariablesDescriptionByID } from "./VariablesDescriptionByID";

export const AppRouter = () => {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Form />} />
      <Route
        exact={true}
        path='/variables'
        element={<VariablesDescription />}
      />
      <Route
        exact={true}
        path='/variables'
        element={<VariablesDescription />}
      />
      <Route
        exact={true}
        path='/variables/:id'
        element={<VariablesDescriptionByID />}
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};
