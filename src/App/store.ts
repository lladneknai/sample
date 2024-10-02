import { configureStore } from "@reduxjs/toolkit";
import { dogsApiSlice } from "../features/dogs/dogsApiSlice";
import { codeApiSlice } from "../features/code/codeApiSlice";

import counterReducer from "../features/counter/counterSlice";
import themeReducer from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    // Automatically calls combineReducers, so counterReducer represents state.count
    counter: counterReducer,
    theme: themeReducer,

    // API slices
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
    [codeApiSlice.reducerPath]: codeApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    //
    // Hopefully I am extending this right...
    // The example just had dogsApiSlice.middleware
    //
    return getDefaultMiddleware().concat(
      dogsApiSlice.middleware,
      codeApiSlice.middleware
    );
  },
});

export type AppDispatch = typeof store.dispatch;

// Infer as much as possible here, this type updates automatically when you add reducers
export type RootState = ReturnType<typeof store.getState>;
