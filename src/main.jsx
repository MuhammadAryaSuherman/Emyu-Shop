import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/Store.jsx";
import { Provider } from "react-redux";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
