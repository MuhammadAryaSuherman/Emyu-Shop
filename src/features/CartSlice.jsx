import { createSlice } from "@reduxjs/toolkit";

// Initial state, fetching from localStorage if present
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // Update quantity immutably
        state.cart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add product
        state.cart.push({ ...product, quantity: 1 });
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const productId = action.payload.id;
      state.cart = state.cart.filter((item) => item.id !== productId);

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload; // Destructure the payload
      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    },
    setCart(state, action) {
      state.cart = action.payload;

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, updateCartQuantity, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
