/** @format */

import VariablesService from "./VariablesService";
import vari from "../store/VariablesStore";

export const fetchPosts = async () => {
  try {
    const response = await VariablesService.getAllAboutByVIN(vari.inputV);
    vari.getAllVar(response);
  } catch (e) {
    vari.setVarError(e.message);
  }
};

export const fetchDescription = async () => {
  try {
    const response = await VariablesService.getDescription();
    vari.getDescriptionOfVariables(response);
  } catch (e) {
    vari.setDescError(e.message);
  }
};
