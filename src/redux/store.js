import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productsSlice";
import { cartReducer } from "./cartSlice";
import { userReducer } from "./userSlice.jsx";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// combineReducers

const persistConfig = {
  key: "root",
 
  storage,
}

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
});
 