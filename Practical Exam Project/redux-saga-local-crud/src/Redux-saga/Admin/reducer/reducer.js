import { ADD_TO_CART_ERROR, ADD_TO_CART_PROGRESS, ADD_TO_CART_SUCCESS, DELETE_DATA_PROGRESS, DELETE_DATA_SUCCESS, PRODUCT_DATA_ERROR, PRODUCT_DATA_PROGRESS, PRODUCT_DATA_SUCCESS, UPADTE_DATA_ERROR, UPADTE_DATA_PROGRESS, UPADTE_DATA_SUCCESS } from "../action/action"

const intailState = {
  products: [],
  cart :[],
  isLoading: false,
  isError: null
}

export const productReducer = (state = intailState, action) => {
  console.log(action.id);
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

    // Update DATA //
    case UPADTE_DATA_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case UPADTE_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        products: [...state.products.filter((item)=> item.id === action.data.id),... action.data]
      }
    }

    case UPADTE_DATA_ERROR: {
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
        products: state.products.filter((val) => val.id !== action.data)
      }
    }

    case PRODUCT_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError :action.data
      }
    }
    // Delete Data //

    case ADD_TO_CART_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        cart: [...state.cart,...state.products.filter((item)=> item.id === action.id)]
      }
    }

    case ADD_TO_CART_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }
  }
}
