import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slise';

export const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});
