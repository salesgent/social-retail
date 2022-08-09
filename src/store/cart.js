import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: {},
  localCartData: {},
  loading:false,
};

export const CartPageSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
    setLocalCartData: (state, action) => {
      state.localCartData = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCartData,setLocalCartData } = CartPageSlice.actions;

export default CartPageSlice.reducer;
