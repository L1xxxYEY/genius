import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./API/authApi";
import { searchApi } from "./API/searchApi";
import { artistApi } from "./API/artistApi";
import { songApi } from "./API/songApi";
import favoritesReducer from "./slices/FavoritesSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [artistApi.reducerPath]: artistApi.reducer,
    [songApi.reducerPath]: songApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      searchApi.middleware,
      artistApi.middleware,
      songApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
