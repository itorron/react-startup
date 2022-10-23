import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appDataSlice from './appData/appDataSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['appData'],
  blacklist: [],
};

const rootReducer = combineReducers({
  appData: appDataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  /* other middlewares */
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ['appData'],
      },
      serializableCheck: {
        ignoredPaths: ['appData'],
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

export const persistor = persistStore(store);
