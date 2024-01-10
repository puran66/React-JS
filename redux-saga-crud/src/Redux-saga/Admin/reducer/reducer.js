import { DELETE_DATA_PROGRESS, DELETE_DATA_SUCCESS, PRODUCT_DATA_ERROR, PRODUCT_DATA_PROGRESS, PRODUCT_DATA_SUCCESS } from "../action/action"

const intailState = {
  products: [],
  isLoading: false,
  isError: null
}

export const productReducer = (state = intailState, action) => {
  switch (action.type) {
    default: {
      return state
    }
    // Get DATA //
    case PRODUCT_DATA_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case PRODUCT_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        products: action.data
      }
    }

    case PRODUCT_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Delete Data //

    case DELETE_DATA_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case DELETE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        products: state.products.filter((val)=> val.id !== action.data)
      }
    }

    case PRODUCT_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }
  }
}
