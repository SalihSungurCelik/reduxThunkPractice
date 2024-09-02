import { ActionTypes } from "../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: action.payload };
    case ActionTypes.SET_BASKET:
      return {
        ...state,
        isLoading: false,
        isError: false,
        basket: action.payload,
      };
    default:
      return state;
  }
};

export default basketReducer;
