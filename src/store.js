import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/todo/api/apiSlice";
import filters from "./features/todo/filters/filters";

export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [apiSlice.reducerPath]: apiSlice.reducer,
      filterReducer:filters
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  })
  