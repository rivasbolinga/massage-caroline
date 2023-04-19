import { configureStore } from '@reduxjs/toolkit';
import massageReducer from './massages/massageSlice';

const store = configureStore({
  reducer: { massageReducer },
});

export default store;
