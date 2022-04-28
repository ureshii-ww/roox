import api from '../../api';
import { UserModel } from '../../models/user.model';
import { GetProfileDto } from './dto/get-profile.dto';

const prefix = '/users';

export const UsersService = {
  getUsers: () => {
    return api.get<UserModel[]>(prefix);
  },
  getProfile: ({ id }: GetProfileDto) => {
    return api.get<UserModel>(`${prefix}/${id}`);
  },
};