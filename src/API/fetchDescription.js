/** @format */
import { runInAction } from "mobx";

import VariablesService from "./VariablesService";
import vari from "../store/VariablesStore";

export const fetchPosts = async () => {
  try {
    runInAction(() => {
      vari.variLoading = true;
    });
    const response = await VariablesService.getAllAboutByVIN(vari.inputV);
    vari.getAllVar(response);
  } catch (e) {
    vari.setVarError(e.message);
  } finally {
    runInAction(() => {
      vari.variLoading = false;
    });
  }
};

export const fetchDescription = async () => {
  try {
    runInAction(() => {
      vari.variLoading = true;
    });
    const response = await VariablesService.getDescription();
    vari.getDescriptionOfVariables(response);
  } catch (e) {
    vari.setDescError(e.message);
  } finally {
    runInAction(() => {
      vari.variLoading = false;
    });
  }
};
