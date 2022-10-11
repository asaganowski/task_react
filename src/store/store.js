import { configureStore } from "@reduxjs/toolkit";
import { getInfo } from "../services/getInfo";

export default configureStore({
  reducer: {
    [getInfo.reducerPath]: getInfo.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getInfo.middleware)
    
});