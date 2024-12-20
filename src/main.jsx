import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import { ToastContainer } from "react-toastify"; 

const persistor = persistStore (store);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ToastContainer position="top-center"  />
      <App />
    </PersistGate>
  </Provider>
);
