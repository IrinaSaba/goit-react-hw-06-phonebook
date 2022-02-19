import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';

const store = configureStore({
  reducer: {
    phonebook: contactsReducer,
  },
});

export default store;
