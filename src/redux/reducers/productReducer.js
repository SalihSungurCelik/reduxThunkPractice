import { ActionTypes } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.SET_ERROR:
      return { ...state, isLoading: false, isError: action.payload.message };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
