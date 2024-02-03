// GET user DATA FROM API //

import axios from "axios";
import { ADD_NEW_PARTY, ADD_NEW_USER, BASE_URL, DELETE_USER, GET_PARTIES, GET_USER, UPDATE_USER } from "../../constant";

export async function get_data_api() {
  try {
    return await axios.get(BASE_URL + GET_USER).then((response) => {
      console.log(response, "from USER api");

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
// Delete user DATA FROM API //

export async function delete_user_api(action) {
  try {
    return await axios.delete(BASE_URL + DELETE_USER +action.payload.id).then((response) => {
      console.log(response, "from DELETE USER api");

      const data = action.payload.id;
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

// Update user DATA FROM API //

export async function update_user_api(action) {
  console.log(action.payload);
  try {
    return await axios.put(BASE_URL + UPDATE_USER +action.payload._id,action.payload).then((response) => {
      console.log(response, "from Update USER api");

      const data = action.payload;
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

// Add user DATA FROM API //

export async function add_user_api(action) {
  console.log(action.payload);
  try {
    return await axios.post(BASE_URL + ADD_NEW_USER , action.payload).then((response) => {
      console.log(response, "from Add USER api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from add api");
  }
}

// Add Party in data  API //

export async function add_party_api(action) {
  console.log(action.payload);
  try {
    return await axios.post(BASE_URL + ADD_NEW_PARTY , action.payload ).then((response) => {
      console.log(response, "from Add Party api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from add party api");
  }
}


// Get Party data  API //

export async function get_party_api(action) {
  console.log(action.payload);
  try {
    return await axios.get(BASE_URL + GET_PARTIES ).then((response) => {
      console.log(response, "from get Party api");

      const data = response.data;
      const status = response.status;
      return {
        data,
        status
      }
    })
  }
  catch (err) {
    console.log(err, "from get party api");
  }
}