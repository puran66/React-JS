// GET DATA FROM API //

import axios from "axios";
import { BASE_URL, DELET_DATA, GET_DATA } from "../../Constant";

export async function get_data_api() {
  try {
    return await axios.get(BASE_URL + GET_DATA).then((response) => {
      console.log(response, "from api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from api");
  }
}

// Delete Data api //

export async function delete_data_api(action) {

  return (
    await axios.delete(BASE_URL + DELET_DATA + action.payload.id)
      .then((res) => {
        console.log(res);


        console.log(res, "from delete api");
        console.log(action.payload.id, "from delete api");

        const data = action.payload.id;
        const status = res.status;
        console.log(data, status, "from delete api");

        return {
          data,
          status
        }
      })
  )
}
