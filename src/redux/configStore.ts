import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './modules/searchSlice';

const store = configureStore({
  reducer: { loadSearch: searchSlice },
});

export default store;
