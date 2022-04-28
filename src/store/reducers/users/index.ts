import { UsersState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { loadUsers } from './thunks';

const initialState: UsersState = {
  data: null,
  isLoading: true,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadUsers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.isLoading = false;
      })
      .addCase(loadUsers.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
