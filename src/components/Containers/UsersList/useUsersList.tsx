import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { loadUsers } from '../../../store/reducers/users/thunks';
import { resetUsersState } from '../../../store/reducers/users';
import { UsersSortingTypes } from '../../../store/reducers/users/types';

export const useUsersList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, sortingTypes } = useAppSelector(state => state.users);

  const usersList =
    data && sortingTypes === UsersSortingTypes.Name
      ? [...data].sort((curr, next) => curr.name.localeCompare(next.name))
      : data && sortingTypes === UsersSortingTypes.City
      ? [...data].sort((curr, next) => curr.address.city.localeCompare(next.address.city))
      : null;

  useEffect(() => {
    dispatch(loadUsers());

    return () => {
      dispatch(resetUsersState());
    };
  }, []);

  return {
    usersList,
    isLoading,
  };
};
