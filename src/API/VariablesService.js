/** @format */

import axios from "axios";

export default class VariablesService {
  static async getAllAboutByVIN(vin) {
    const response = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`,
    );
    return response;
  }

  static async getDescription() {
    const response = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`,
    );
    return response;
  }
}
