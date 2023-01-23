import React from "react";
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from "./containers/App";
import "./index.css";

import wordListReducer from './slicers/wordListSlicer'
import inputsReducer from './slicers/inputsSlicer'
import removeArrayReducer from './slicers/removeArraySlicer'
import searchArrayReducer from './slicers/searchArraySlicer'
import removedWordsReducer from "./slicers/removedWordsSlicer";

const store = configureStore({
  reducer: {
    wordList: wordListReducer.reducer,
    inputs: inputsReducer.reducer,
    removeArray: removeArrayReducer.reducer,
    searchArray: searchArrayReducer.reducer,
    removedWords: removedWordsReducer.reducer
  }
})

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
