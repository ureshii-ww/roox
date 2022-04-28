import api from '../../api';
import { UserModel } from '../../models/user.model';

export const UsersService = {
  getUsers: () => {
    return api.get<UserModel[]>('/users');
  }
}