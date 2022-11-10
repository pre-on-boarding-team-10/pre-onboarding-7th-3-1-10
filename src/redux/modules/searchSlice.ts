import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchState: [],
};

export const setSearch = () => {
  return function (dispatch: any) {
    dispatch(loadSearch);
  };
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    loadSearch: (state, action) => {
      state.searchState = action.payload;
    },
  },
});

export const { loadSearch } = searchSlice.actions;

export default searchSlice.reducer;
