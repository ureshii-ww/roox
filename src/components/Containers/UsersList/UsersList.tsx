import React from 'react';
import { useUsersList } from './useUsersList';
import UserCard from '../../UI/UserCard/UserCard';

const UsersList = () => {
  const { usersList, isLoading } = useUsersList();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {usersList && usersList.length > 0 ? (
        <div>
          {usersList.map(user => (
            <UserCard
              key={user.id}
              name={user.name}
              address={user.address}
              company={user.company}
              id={user.id}
            />
          ))}
        </div>
      ) : (
        <div>No users</div>
      )}
    </div>
  );
};

export default UsersList;
