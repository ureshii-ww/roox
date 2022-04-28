import { UsersSortingTypes, UsersState } from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadUsers } from './thunks';

const initialState: UsersState = {
  data: null,
  isLoading: true,
  sortingTypes: UsersSortingTypes.Name,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSortingType: (state, { payload }: PayloadAction<UsersSortingTypes>) => {
      state.sortingTypes = payload;
    },
    resetUsersState: () => {
      return initialState;
    }
  },
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

export const { setSortingType, resetUsersState } = usersSlice.actions;
export default usersSlice.reducer;
