import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './Authorization/authSlice';
import { contactsReduser } from './Contacts/contactsSlice';
import { filterReducer } from './Contacts/filterSlice';
import storage from 'redux-persist/lib/storage'; // це для локалстореджа
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReduser),
    filter: filterReducer,
    contacts: contactsReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
