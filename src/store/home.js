import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NavData: null,
  alertData: {
    type: "success",
    content: "success",
  },
};

export const HomePageslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setNavData: (state, action) => {
      state.NavData = action.payload;
    },
    setAlertData: (state, action) => {
      state.alertData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNavData, setAlertData } = HomePageslice.actions;

export default HomePageslice.reducer;
