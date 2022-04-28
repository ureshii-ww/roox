import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { setSortingType } from '../../../store/reducers/users';
import { UsersSortingTypes } from '../../../store/reducers/users/types';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const currentSorting = useAppSelector(state => state.users.sortingTypes);
  
  const isSortedByCity = currentSorting === UsersSortingTypes.City;
  const isSortedByName = currentSorting === UsersSortingTypes.Name;

  const handleSortByName = () => {
    dispatch(setSortingType(UsersSortingTypes.Name));
  };
  
  const handleSortByCity = () => {
    dispatch(setSortingType(UsersSortingTypes.City));
  };
  
  return {
    isSortedByCity,
    isSortedByName,
    handleSortByCity,
    handleSortByName
  }
};