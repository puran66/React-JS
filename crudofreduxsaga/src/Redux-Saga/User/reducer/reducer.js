import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from "../action/action";

const initialState = {
  product : [],
  isLoading: false,
  isError: null
};

export const productReducer = (state = initialState, action) => {
  console.log(action, "from reducer");

  switch (action.type) {
    case GET_PRODUCT_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        product: action.data,
        isLoading: false,
        isError: null
      };
    }

    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
}