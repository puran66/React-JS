import axios from "axios";
import { BASE_URL, GET_DATA } from "../../Constant";

export const get_product = async () => {
  try {
    const response = await axios.get(BASE_URL + GET_DATA);
    console.log("Get Data Product from API", response);

    const data = response.data;
    const status = response.status;

    return {
      data,
      status,
    };
  } catch (error) {
    console.error("Error from API", error);
    throw error; // Rethrow the error for the calling code to handle
  }
};
