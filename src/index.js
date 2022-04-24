import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import App from "./containers/App";
import "./index.css";

let initialState = {
  inputs: {
    l_one: "",
    l_two: "",
    l_three: "",
    l_four: "",
    l_five: "",
  },
  searchArray: [],
  removeArray: [],
  wordList: {
    count: 0,
    result: [],
  },
};

const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
