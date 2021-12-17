/** @format */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./Form";
import VariablesDescription from "./VariablesDescription";
import VariablesDescriptionByID from "./VariablesDescriptionByID";

const AppRouter = function () {
  return (
    <Routes>
      <Route exact path='/' element={<Form />} />
      <Route exact path='/variables' element={<VariablesDescription />} />
      <Route
        exact
        path='/variables/:id'
        element={<VariablesDescriptionByID />}
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
