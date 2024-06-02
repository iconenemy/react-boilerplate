import {
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import utilsSlice from "./services/utils/utils.slice";

const rootReducer = combineReducers({
  utils: utilsSlice,
});

const cryptoKey = import.meta.env.VITE_CRYPTO_KEY;

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: cryptoKey,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
