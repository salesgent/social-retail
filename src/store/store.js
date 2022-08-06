import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// import thunk from "redux-thunk";
////////////////////////////////////////////////////////////////////////////
import HomePageslice from "./home";
import ProductSlice from "./products";
import CartPageSlice from "./cart";

const persistConfig = {
  key: "myReduxKey",
  storage,
};

const cartReducer = persistReducer(persistConfig, CartPageSlice);

export const store = configureStore({
  reducer: {
    Home: HomePageslice,
    products: ProductSlice,
    cart: cartReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
  },
});

export const persistor = persistStore(store);
