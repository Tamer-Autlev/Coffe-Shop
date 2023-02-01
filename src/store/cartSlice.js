import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { cart: [], totalAmount: 0, totalQuantity: 0 };

const counterSlice = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.totalAmount += action.payload.price;
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      state.totalQuantity++;
      console.log(state.totalQuantity);
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      const filterCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      if (state.cart[itemIndex].quantity === 1) {
        return {
          totalAmount: Math.abs(
            state.totalAmount - state.cart[itemIndex].price
          ),
          totalQuantity: state.totalQuantity - 1,
          cart: filterCart,
        };
      }
      if (state.totalQuantity === 1) {
        return {
          totalAmount: 0,
        };
      } else {
        state.totalAmount -= state.cart[itemIndex].price;
        state.cart[itemIndex].quantity -= 1;
      }
      if (state.totalQuantity > 1 || state.cart.length > 1) {
        state.totalQuantity--;
      } else {
        state.totalQuantity = 0;
      }
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });
export const { addToCart } = counterSlice.actions;
export const { removeFromCart } = counterSlice.actions;
export default store;
