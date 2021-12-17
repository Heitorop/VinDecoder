/** @format */

import { makeAutoObservable } from "mobx";

class VariablesStore {
  inputV = "";
  variables = [];
  varError = "";
  description = [];
  descError = "";

  constructor() {
    makeAutoObservable(this);
  }

  setValueOfInput(string) {
    this.inputV = string;
  }
  setVarError(error) {
    this.varError = error;
  }

  getAllVar(response) {
    this.variables = response.data.Results.filter(
      (element) => element.Value !== "" && element.Value !== null,
    );
  }
  getDescriptionOfVariables(response) {
    this.description = response.data.Results;
  }

  setDescError(error) {
    this.descError = error;
  }
}

export default new VariablesStore();
