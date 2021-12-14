import { userListTypes } from "./actionTypes/userListTypes";

export default function postReducer(
  state = { error: null, data: [], loading: false },
  action
) {
  switch (action.type) {
    case userListTypes.LOADING_DATA: {
      return { error: null, data: state.data, loading: true };
    }
    case userListTypes.SUCCESSFULL_DATA: {
      console.log(state);
      return {
        error: null,
        data: [...state.data, ...action.payload],
        loading: false,
      };
    }
    case userListTypes.ERROR_DATA: {
      return { error: action.payload, data: [], loading: false };
    }
    default: {
      throw new Error(`Unsupported action type`);
    }
  }
}
