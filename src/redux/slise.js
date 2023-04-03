import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const contactsSlise = createSlice({
  name: 'phonebook',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    deleteContact: {
      reducer: (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      },
    },
    filterOnContact: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
  },
});
export const { addContacts, deleteContact, filterOnContact } =
  contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;

export const getContacts = state => state.phonebook;
