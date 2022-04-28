import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { loadProfile } from '../../../store/reducers/profile/thunks';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { resetProfile } from '../../../store/reducers/profile';

export const useProfilePage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { error, isLoading, data } = useAppSelector(state => state.profile);

  useEffect(() => {
    if (id) {
      dispatch(loadProfile({ id }));
    }
  }, [id]);
  
  useEffect(() => {
    return () => {
      dispatch(resetProfile());
    }
  }, [dispatch])

  return {
    data,
    isLoading,
    error,
  };
};
