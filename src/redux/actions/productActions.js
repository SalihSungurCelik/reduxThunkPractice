import axios from "axios";
import { ActionTypes } from "../actionType";

// Senkron Aksiyon
// Tek görevi basit bir obje oluşturmak

export const setLoading = () => ({
  type: ActionTypes.SET_LOADING,
});

export const setError = (payload) => ({
  type: ActionTypes.SET_ERROR,
  payload,
});

export const setProducts = (payload) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload,
});

// Asenkron aksiyon
// API isteği atıp elde ettiği cevaba göre state'i bilgilendiren reducer'ı bilgilendiren kapsamlı bir aksiyon
// klasik redux'ta aksiyonlarımız asenkron olamaz.
// ama bu sorun redux-thunk middleware'i kullanarak çözülebilir.
// thunk sayesinde aksiyonlarımız api istekleri atabilir.

//redux Thunk
// asenkron aksiyon - Thunk Aksiyon
// Redux Thunk, redux kütüphanesini genişleten bir middleware
// redux normalde senkron işlemleri destekler.(asenkron doğrudan desteklenmez.)
// redux thunk sayesinde redux eylemlerinin(aksiyonlarının) asenkron olmasını sağlıyor. Bu özellikle beraber API isteklerini asenkron işlemleri aksiyon içerisinde gerçekleştirebiliriz.
// thunk bir fonksiyon içerisinde farklı bir fonksiyon çağırıldığı anlamına gelir.

export const getProducts = () => (dispatch) => {
  dispatch(setLoading(true));

  axios
    .get("http://localhost:3050/products")
    .then((res) => dispatch(setProducts(res.data)))
    .catch((err) => dispatch(setError(err)));
};

// ör. thunk function

function ornekFonksiyon() {
  return async function (dispatch) {
    // asenktron işlemler yapılır.
    const data = await axios.get("...");
    // store'a bildirme. > dispatch
    dispatch({ type: "SET_VERI" });
  };
}

// arrow func
const ornekFonk = () => async (dispatch) => {
  const data = await axios.get("...");
  dispatch({ type: "SET_VERI" });
};
