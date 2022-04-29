import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetProfileDto } from '../../../services/users/dto/get-profile.dto';
import { UsersService } from '../../../services/users/users.service';
import axios from 'axios';
import { UserModel } from '../../../models/user.model';

export const loadProfile = createAsyncThunk<UserModel, GetProfileDto, { rejectValue: string }>(
  'profile/load',
  async (getProfileDto, { rejectWithValue }) => {
    try {
      const response = await UsersService.getProfile(getProfileDto);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return rejectWithValue('Пользователь не найден');
      }
      return rejectWithValue('Произошла ошибка при загрузке');
    }
  }
);
