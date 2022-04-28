import { UserModel } from '../../../models/user.model';

export interface ProfileState {
  data: UserModel | null;
  isLoading: boolean;
  error: string | null;
}