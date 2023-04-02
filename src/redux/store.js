import { configureStore } from '@reduxjs/toolkit';
import languageSlice from './languageSlice/languageSlice';

const store = configureStore({
  reducer: {
    language: languageSlice
  }
})

export default store;
