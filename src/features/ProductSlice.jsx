import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = `${import.meta.env.VITE_API_URL || "http://localhost:9000"}/products`;

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
console.log(productSlice);

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productSlice.actions;

// Thunk
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const response = await axios.get(BASE_API);
    dispatch(fetchProductsSuccess(response.data));
    console.log();
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export default productSlice.reducer;
