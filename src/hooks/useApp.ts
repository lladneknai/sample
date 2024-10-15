import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import codeReducer from "../features/code/codeSlice";
import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";

import { codeApiSlice } from "../features/code/codeApiSlice";
import { dogsApiSlice } from "../features/dogs/dogsApiSlice";

/**
 * In the example, this was two separate files. I combined them for legibility.
 * The first file was the configureStore() block, and the second file was just
 * the type declarations and exports below the configuration of the store.
 */
export const store = configureStore({
  reducer: {
    // Automatically calls combineReducers, so counterReducer represents state.count
    code: codeReducer,
    counter: counterReducer,
    theme: themeReducer,

    // API slices
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
    [codeApiSlice.reducerPath]: codeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      dogsApiSlice.middleware,
      codeApiSlice.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Two hook variables that have types already going
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
