import React from 'react';
import { useProfilePage } from './useProfilePage';
import ProfileForm from '../../Containers/ProfileForm/ProfileForm';
import Loader from '../../UI/Loader/Loader';
import './profile-page.scss';

const ProfilePage = () => {
  const { error, data, isLoading } = useProfilePage();

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {error && <div className="profile-page__error">{error}</div>}
      {data && <ProfileForm user={data} />}
    </>
  );
};

export default ProfilePage;