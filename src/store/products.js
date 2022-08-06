import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsId: null,
 
};

export const ProductSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProductsId: (state, action) => {
      state.productsId = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const { setProductsId } = ProductSlice.actions;

export default ProductSlice.reducer;
