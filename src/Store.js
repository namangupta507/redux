import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({ reducer: rootReducer });

export default Store;
