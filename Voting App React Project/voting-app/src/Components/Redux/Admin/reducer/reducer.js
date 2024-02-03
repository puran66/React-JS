import { ADD_PARTY_ERROR, ADD_PARTY_PROGRESS, ADD_PARTY_SUCCESS, ADD_USER_ERROR, ADD_USER_PROGRESS, ADD_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_PROGRESS, DELETE_USER_SUCCESS, GET_PARTY_PROGRESS, GET_USER_ERROR, GET_USER_PROGRESS, GET_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_PROGRESS, UPDATE_USER_SUCCESS } from "../action/action"


const intailState = {
  users: [],
  parties:[],
  isLoading: false,
  isError: null
}

export const userReducer = (state = intailState, action) => {
  console.log(action.data, "FROM REDUCER");
  switch (action.type) {
    default: {
      return state
    }
    // Get DATA //
    case GET_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: action.data
      }
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Update DATA //
    case UPDATE_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: [...state.users.filter((item) => item.id === action.data._id), ...action.data]
      }
    }

    case UPDATE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // // Delete Data //

    case DELETE_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: state.users.filter((item, ind) => ind !== action.index)
      }
    }

    case DELETE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }
    // ADD user Data //

    case ADD_USER_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        users: [...state.users,action.data]
      }
    }

    case ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // ADD Party Data //

    case ADD_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case ADD_PARTY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        parties: [...state.parties,action.data]
      }
    }

    case ADD_PARTY_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }

    // Get Party DATA //
    case GET_PARTY_PROGRESS: {
      return {
        ...state,
        isLoading: true,
        isError: null
      }
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: null,
        parties: action.data
      }
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: action.data
      }
    }
  }
}