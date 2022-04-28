import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersService } from '../../../services/users/users.service';

export const loadUsers = createAsyncThunk('users/load', async () => {
  try {
    const response = await UsersService.getUsers();
    return response.data;
  } catch (error) {
    throw error;
  }
});