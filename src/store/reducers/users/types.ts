import { UserModel } from '../../../models/user.model';

export interface UsersState {
  data: null | UserModel[],
  isLoading: boolean;
  sortingTypes: UsersSortingTypes;
}

export enum UsersSortingTypes {
  Name = 'Name',
  City = 'City',
}