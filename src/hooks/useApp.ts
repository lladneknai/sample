import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../global/App/appSlice";
import codeReducer from "../features/code/codeSlice";
import themeReducer from "../features/theme/themeSlice";

import { codeApiSlice } from "../features/code/codeApiSlice";

/**
 * In the example, this was two separate files. I combined them for legibility.
 * The first file was the configureStore() block, and the second file was just
 * the type declarations and exports below the configuration of the store.
 */
export const store = configureStore({
  reducer: {
    // Automatically calls combineReducers, so counterReducer represents state.count
    app: appReducer,
    code: codeReducer,
    theme: themeReducer,

    // API slices
    [codeApiSlice.reducerPath]: codeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(codeApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Two hook variables that have types already going
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
