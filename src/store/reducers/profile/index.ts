import { ProfileState } from './types';
import { createSlice } from '@reduxjs/toolkit';
import { loadProfile } from './thunks';

const initialState: ProfileState = {
  data: null,
  isLoading: true,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(loadProfile.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(loadProfile.rejected, (state, { payload }) => {
        state.error = payload!;
        state.data = null;
        state.isLoading = false;
      });
  },
});

export default profileSlice.reducer;