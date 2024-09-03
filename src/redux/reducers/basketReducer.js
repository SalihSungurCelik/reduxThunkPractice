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
    case ActionTypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(action.payload) };
    case ActionTypes.UPDATE_ITEM:
      //dizideki id'sini bildiğimiz elemanın miktarını 1 arttır.
      // state.basket.map((item) => {
      //   if (item.id === action.payload) {
      //     return { ...item, amount: item + 1 };
      //   } else {
      //     return item;
      //   }
      // })
      //daha kısa çözüm
      const newBasket = state.basket.map((i) =>
        i.id === action.payload ? { ...i, amount: i.amount + 1 } : i
      );
      return { ...state, basket: newBasket };
    case ActionTypes.REMOVE_ITEM:
      // silincek elemanı diziden çıkar
      const updatedBasket = state.basket.filter((i) => i.id !== action.payload);

      //stor'u güncelle
      return { ...state, basket: updatedBasket };

    default:
      return state;
  }
};

export default basketReducer;
