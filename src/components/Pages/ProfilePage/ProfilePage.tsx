import React from 'react';
import { useProfilePage } from './useProfilePage';
import ProfileForm from '../../Containers/ProfileForm/ProfileForm';

const ProfilePage = () => {
  const { error, data, isLoading } = useProfilePage();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {error && <div>{error}</div>}
      {data && <ProfileForm user={data} />}
    </div>
  );
};

export default ProfilePage;