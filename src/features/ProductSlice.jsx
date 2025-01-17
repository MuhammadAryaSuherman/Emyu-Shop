import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Ubah ini untuk menggunakan NodePort URL saat di local development
const BASE_API = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/products`
  : "http://127.0.0.1:9000/products";
// Tambahkan logging untuk debug
console.log('API URL:', BASE_API);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

// Thunk dengan error handling yang lebih detail
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    console.log('Fetching from:', BASE_API);
    const response = await axios.get(BASE_API);
    console.log('Response:', response.data);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
    dispatch(fetchProductsFailure(
      error.response?.data?.message || error.message
    ));
  }
};

export default productSlice.reducer;